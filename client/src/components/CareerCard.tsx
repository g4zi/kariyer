import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export interface CareerCardProps {
  title: string;
  icon: string;
  description: string;
  educationYears: string;
  jobFields: string;
  jobRate: string;
  details: {
    description: string;
    skills: string[];
    courses: string[];
    universities: string[];
    salary: string;
    future: string;
  };
}

const CareerCard = ({ 
  title, 
  icon, 
  description, 
  educationYears, 
  jobFields, 
  jobRate,
  details
}: CareerCardProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <i className={`${icon} text-primary text-xl`}></i>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm">
              <i className="fas fa-graduation-cap text-primary mr-2"></i>
              <span>Eğitim Süresi: {educationYears}</span>
            </div>
            <div className="flex items-center text-sm">
              <i className="fas fa-briefcase text-primary mr-2"></i>
              <span>İş Alanları: {jobFields}</span>
            </div>
            <div className="flex items-center text-sm">
              <i className="fas fa-chart-line text-primary mr-2"></i>
              <span>İş Bulma Oranı: {jobRate}</span>
            </div>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full" size="sm">Detaylı Bilgi</Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center">
                  <i className={`${icon} text-primary mr-2`}></i> {title}
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {details.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Gerekli Beceriler</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {details.skills.map((skill, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Öne Çıkan Dersler</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {details.courses.map((course, index) => (
                      <div key={index} className="flex items-center">
                        <i className="fas fa-book text-primary mr-2"></i>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Önerilen Üniversiteler</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {details.universities.map((university, index) => (
                      <div key={index} className="flex items-center">
                        <i className="fas fa-university text-primary mr-2"></i>
                        <span>{university}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Ortalama Maaş</h4>
                    <p className="flex items-center">
                      <i className="fas fa-money-bill-wave text-primary mr-2"></i>
                      <span>{details.salary}</span>
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Gelecek Projeksiyonu</h4>
                    <p className="flex items-center">
                      <i className="fas fa-chart-line text-primary mr-2"></i>
                      <span>{details.future}</span>
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerCard;
