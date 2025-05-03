import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '@/components/SectionHeader';
import BackToTop from '@/components/BackToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TestForm from '@/components/TestForm';
import { hollandTest, parentingStyleTest } from '@/data/tests';
import { Card, CardContent } from '@/components/ui/card';

const Tests = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Testler & Envanterler | Rehber Öğretmen Kemal</title>
        <meta name="description" content="Kariyer seçimi, kişilik ve ebeveyn tutumları konularında bilimsel testler ve envanterler." />
      </Helmet>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Testler & Envanterler" 
            subtitle="Kendinizi daha iyi tanımanıza ve potansiyelinizi keşfetmenize yardımcı olacak testler." 
          />
          
          <AnimateOnScroll>
            <TestForm {...hollandTest} />
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                  <h3 className="text-xl font-semibold">MBTI Kişilik Testi</h3>
                </div>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user-circle text-primary text-2xl"></i>
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    Dışa/içe dönüklük, sezgisel/duygusal, düşünen/hisseden ve algılayan/yargılayan özelliklerinizi ölçen kapsamlı kişilik testi.
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Süre: 25 dk</span>
                    <span>Soru Sayısı: 60</span>
                  </div>
                  <a href="#coming-soon" className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition w-full block text-center">
                    Yakında
                  </a>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                  <h3 className="text-xl font-semibold">İlgi Envanteri</h3>
                </div>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chart-bar text-primary text-2xl"></i>
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    Hangi alanlara ilgi duyduğunuzu keşfetmenize yardımcı olan, kapsamlı bir ilgi analizi testi.
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Süre: 15 dk</span>
                    <span>Soru Sayısı: 40</span>
                  </div>
                  <a href="#coming-soon" className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition w-full block text-center">
                    Yakında
                  </a>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                  <h3 className="text-xl font-semibold">Ebeveyn Tutumları Testi</h3>
                </div>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-primary text-2xl"></i>
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    Çocuğunuzla ilişkilerinizde benimsediğiniz ebeveynlik stilini belirlemenize yardımcı olan test.
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Süre: 10 dk</span>
                    <span>Soru Sayısı: 30</span>
                  </div>
                  <a href="#parentingTest" className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition w-full block text-center">
                    Testi Başlat
                  </a>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="parentingTest" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Ebeveyn Tutumları Testi" 
            subtitle="Çocuk yetiştirme yaklaşımınızı değerlendirin" 
          />
          
          <AnimateOnScroll>
            <TestForm {...parentingStyleTest} />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Testler Hakkında Bilgi" 
            subtitle="Uygulanan testlerin bilimsel temelleri" 
          />
          
          <AnimateOnScroll>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Neden Psikolojik Testler Önemlidir?</h3>
              <p className="text-gray-600 mb-6">
                Psikolojik testler, bireylerin kişilik özellikleri, ilgileri, yetenekleri ve davranış eğilimleri hakkında 
                nesnel bilgiler sunar. Bu testler, kişinin kendini tanıması, güçlü ve geliştirilmesi gereken yönlerini 
                fark etmesi ve daha bilinçli kararlar alabilmesi için değerli araçlardır.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-search mr-2 text-primary"></i>
                    Kendini Keşfetme
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Psikolojik testler, kişinin kendi özellikleri hakkında daha derin bir farkındalık kazanmasına yardımcı olur.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-chart-pie mr-2 text-primary"></i>
                    Nesnel Değerlendirme
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Öznel değerlendirmelerin aksine, standartlaştırılmış testler daha nesnel sonuçlar sağlar.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-lightbulb mr-2 text-primary"></i>
                    Kariyer Planlaması
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Meslek seçimi ve kariyer planlamasında kişilik ve ilgi alanlarına uygun yönlendirme sağlar.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-compass mr-2 text-primary"></i>
                    Gelişim Alanlarını Belirleme
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Güçlü yönleri ve geliştirilmesi gereken alanları belirleyerek kişisel gelişim planı oluşturmaya yardımcı olur.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 italic">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  <strong>Not:</strong> Bu testler tanı amaçlı değil, bilgilendirme ve rehberlik amaçlıdır. Profesyonel destek almanız gereken durumlar için uzman görüşüne başvurmanız önerilir.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Test Sonuçlarını Nasıl Değerlendirmeliyiz?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-primary mr-3 mt-1 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Kesin Yargılardan Kaçının</h4>
                    <p className="text-gray-600">
                      Test sonuçları kesin ve değişmez yargılar değil, belli bir andaki eğilimlerinizi gösteren verilerdir. 
                      İnsanlar zaman içinde değişebilir ve gelişebilir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-primary mr-3 mt-1 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Bütüncül Değerlendirin</h4>
                    <p className="text-gray-600">
                      Tek bir test sonucu yerine, farklı testlerden elde edilen sonuçları bir bütün olarak değerlendirmek 
                      daha kapsamlı bir bakış açısı sağlar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-primary mr-3 mt-1 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Uzman Desteği Alın</h4>
                    <p className="text-gray-600">
                      Test sonuçlarını bir rehber öğretmen veya danışmanla birlikte değerlendirmek, sonuçları daha iyi 
                      anlamanıza ve bunları hayatınıza nasıl entegre edeceğinize dair rehberlik almanıza yardımcı olur.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-primary mr-3 mt-1 flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Aksiyon Planı Oluşturun</h4>
                    <p className="text-gray-600">
                      Test sonuçlarından elde ettiğiniz bilgilerle, kişisel veya kariyer gelişiminiz için somut adımlar 
                      içeren bir aksiyon planı oluşturun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Daha Detaylı Değerlendirme İçin</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Test sonuçlarınızı profesyonel bir rehber eşliğinde değerlendirmek ve kariyer planlamanız için 
                daha kapsamlı bir yol haritası çıkarmak ister misiniz?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/randevu" className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition inline-flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i> Danışmanlık Randevusu Al
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <BackToTop />
    </>
  );
};

export default Tests;
