import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { generatePDF } from '@/lib/pdf-generator';
import { processTestResults } from '@/lib/test-processor';

interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  type: string;
}

interface TestProps {
  title: string;
  description: string;
  duration: string;
  questionCount: number;
  infoText: string;
  personalityTypes?: {
    [key: string]: {
      name: string;
      description: string;
    }
  };
  questions: TestQuestion[];
}

const TestForm = ({ title, description, duration, questionCount, infoText, personalityTypes, questions }: TestProps) => {
  const [activeTab, setActiveTab] = useState('info');
  const [answers, setAnswers] = useState<{[key: string]: string}>({});
  const [results, setResults] = useState<{
    primaryType?: string;
    secondaryType?: string;
    tertiaryType?: string;
    scores?: {[key: string]: number};
    recommendedCareers?: string[];
  }>({});
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: ''
  });

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest('POST', '/api/test-results', data);
    },
    onSuccess: () => {
      toast({
        title: "Sonuçlar kaydedildi",
        description: "Test sonuçlarınız başarıyla kaydedildi.",
      });
    },
    onError: (error) => {
      toast({
        title: "Hata oluştu",
        description: error.message || "Sonuçlar kaydedilirken bir hata oluştu.",
        variant: "destructive",
      });
    }
  });

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const calculateResults = () => {
    const processedResults = processTestResults(answers, personalityTypes);
    setResults(processedResults);
    setActiveTab('results');
    
    // Save results to the server
    if (userInfo.name && userInfo.email) {
      saveMutation.mutate({
        testType: title.toLowerCase().replace(/\s+/g, '_'),
        results: processedResults,
        name: userInfo.name,
        email: userInfo.email
      });
    }
  };

  const downloadResults = () => {
    generatePDF({
      title,
      userName: userInfo.name,
      results,
      personalityTypes
    });
  };

  const isTestComplete = Object.keys(answers).length >= questions.length;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 bg-primary text-white p-8">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="mb-6">{description}</p>
          
          {personalityTypes && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Kişilik Tipleri:</h4>
              <ul className="space-y-2">
                {Object.entries(personalityTypes).map(([key, type]) => (
                  <li key={key} className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>{type.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <p className="text-sm italic">Süre: {duration}</p>
        </div>
        
        <div className="w-full lg:w-2/3 p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="info">Test Bilgisi</TabsTrigger>
              <TabsTrigger value="test">Testi Başlat</TabsTrigger>
              <TabsTrigger value="results" disabled={!results.primaryType}>Sonuçlar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">{title} Hakkında</h4>
              <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: infoText }} />
              
              <Button 
                className="mt-6"
                onClick={() => setActiveTab('test')}
              >
                Testi Başlat
              </Button>
            </TabsContent>
            
            <TabsContent value="test">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">{title}</h4>
              <p className="text-gray-600 mb-6">Lütfen aşağıdaki ifadelere ne kadar katıldığınızı belirtin. Her soru için bir seçeneği işaretleyin.</p>
              
              <div className="space-y-6">
                {questions.map((question) => (
                  <div key={question.id} className="p-4 border border-gray-200 rounded-lg">
                    <p className="font-medium text-gray-800 mb-3">{question.question}</p>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center">
                          <input 
                            type="radio" 
                            name={question.id} 
                            id={`${question.id}_${optionIndex}`} 
                            value={String(5 - optionIndex)} 
                            className="mr-2"
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            checked={answers[question.id] === String(5 - optionIndex)}
                          />
                          <label htmlFor={`${question.id}_${optionIndex}`} className="text-gray-700">{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">İsim (Opsiyonel)</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={userInfo.name}
                      onChange={handleInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="İsminizi giriniz"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-posta (Opsiyonel)</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={userInfo.email}
                      onChange={handleInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="E-posta adresinizi giriniz"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <Button
                    onClick={calculateResults}
                    disabled={!isTestComplete}
                  >
                    Testi Tamamla
                  </Button>
                  
                  {!isTestComplete && (
                    <p className="text-sm text-amber-600 mt-2">
                      Lütfen tüm soruları yanıtlayın.
                    </p>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="results">
              {results.primaryType && personalityTypes && (
                <>
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-chart-pie text-primary text-3xl"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Test Sonuçlarınız</h4>
                    <p className="text-gray-600">
                      {title} Kişilik Tipiniz: 
                      <span className="font-semibold ml-1">
                        {results.primaryType}
                        {results.secondaryType && results.tertiaryType && 
                          `${results.secondaryType}${results.tertiaryType}`}
                      </span>
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">
                        Birincil Tip: {personalityTypes[results.primaryType].name}
                      </h5>
                      <p className="text-gray-600 mb-3">{personalityTypes[results.primaryType].description}</p>
                      
                      {results.recommendedCareers && results.recommendedCareers.length > 0 && (
                        <>
                          <h6 className="font-semibold text-gray-800 mb-2">Önerilen Meslekler:</h6>
                          <ul className="grid grid-cols-2 gap-2">
                            {results.recommendedCareers.map((career, index) => (
                              <li key={index} className="text-gray-700 flex items-center">
                                <i className="fas fa-chevron-right text-primary mr-2 text-sm"></i>
                                {career}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    
                    {results.secondaryType && results.tertiaryType && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">
                            İkincil Tip: {personalityTypes[results.secondaryType].name}
                          </h5>
                          <p className="text-gray-600 text-sm mb-2">
                            {personalityTypes[results.secondaryType].description}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">
                            Üçüncül Tip: {personalityTypes[results.tertiaryType].name}
                          </h5>
                          <p className="text-gray-600 text-sm mb-2">
                            {personalityTypes[results.tertiaryType].description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button onClick={downloadResults} className="flex items-center">
                      <i className="fas fa-file-pdf mr-2"></i> Sonuçları İndir
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-blue-50">
                      <a href="/randevu" className="flex items-center">
                        <i className="fas fa-calendar-alt mr-2"></i> Danışmanlık Randevusu
                      </a>
                    </Button>
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TestForm;
