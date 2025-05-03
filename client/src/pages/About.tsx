import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '@/components/SectionHeader';
import BackToTop from '@/components/BackToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hakkımda | Rehber Öğretmen Kemal</title>
        <meta name="description" content="Rehber Öğretmen Kemal'in özgeçmişi, eğitim bilgileri ve mesleki deneyimleri hakkında bilgi." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Hakkımda" subtitle="Öğrencilerimize ve velilerimize en iyi rehberlik hizmetini sunmak için sürekli kendimi geliştiriyorum." />
          
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Rehber Öğretmen Kemal" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Kemal Yılmaz</h3>
                <p className="text-gray-600 mb-4">
                  15 yıllık mesleki deneyimim ile öğrencilerimizin akademik ve sosyal gelişimlerine katkıda bulunmak için çalışıyorum. 
                  İstanbul Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünden mezun olduktan sonra, çeşitli eğitim kurumlarında görev aldım.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full text-primary mr-3">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Eğitim</h4>
                      <p className="text-gray-600">İstanbul Üniversitesi<br/>Psikolojik Danışmanlık ve Rehberlik</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full text-primary mr-3">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sertifikalar</h4>
                      <p className="text-gray-600">Kariyer Danışmanlığı<br/>Aile Danışmanlığı</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full text-primary mr-3">
                      <i className="fas fa-award"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Uzmanlık</h4>
                      <p className="text-gray-600">Ergen Psikolojisi<br/>Sınav Kaygısı Yönetimi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full text-primary mr-3">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Deneyim</h4>
                      <p className="text-gray-600">15 Yıl Mesleki Tecrübe<br/>Kariyer Danışmanlığı</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-start space-x-3">
                  <Link href="/iletisim">
                    <Button>
                      İletişime Geç
                    </Button>
                  </Link>
                  <a href="#" download="Rehber_Ogretmen_Kemal_CV.pdf">
                    <Button variant="outline">
                      CV İndir
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Mesleki Deneyim" subtitle="Çeşitli eğitim kurumlarında edindiğim tecrübeler" />
          
          <AnimateOnScroll>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">Atatürk Anadolu Lisesi</h3>
                    <p className="text-gray-600">Rehber Öğretmen / Psikolojik Danışman</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2018 - Günümüze</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Lise düzeyindeki öğrencilere akademik, sosyal ve duygusal alanlarda rehberlik hizmetleri sunuyorum. 
                  Özellikle üniversite sınavına hazırlanan öğrencilere kariyer planlaması ve stres yönetimi konularında destek olmaktayım.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">Marmara Koleji</h3>
                    <p className="text-gray-600">Rehberlik Servisi Koordinatörü</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2012 - 2018</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Okul rehberlik servisinin koordinasyonunu üstlendim ve tüm sınıf seviyelerinde rehberlik programları geliştirdim. 
                  Veli seminerleri düzenleyerek okul-aile işbirliğini güçlendirmeye çalıştım. 
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">İstanbul Rehberlik ve Araştırma Merkezi</h3>
                    <p className="text-gray-600">Psikolojik Danışman</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2009 - 2012</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Bölgedeki okullara rehberlik hizmetleri konusunda danışmanlık yaptım. 
                  Özel eğitim gerektiren öğrencilerin tanılanması sürecinde aktif rol aldım.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Eğitim ve Sertifikalar" subtitle="Kendimi sürekli geliştirmeye devam ediyorum" />
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2004 - 2008</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Lisans Eğitimi</h3>
                <p className="text-gray-600 font-medium">İstanbul Üniversitesi</p>
                <p className="text-gray-700">Psikolojik Danışmanlık ve Rehberlik</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2009 - 2011</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Yüksek Lisans</h3>
                <p className="text-gray-600 font-medium">Marmara Üniversitesi</p>
                <p className="text-gray-700">Eğitim Bilimleri - Rehberlik ve Psikolojik Danışmanlık</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2016</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Aile Danışmanlığı Sertifikası</h3>
                <p className="text-gray-600 font-medium">Türk PDR Derneği</p>
                <p className="text-gray-700">450 Saat Eğitim ve Süpervizyon</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2018</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Kariyer Danışmanlığı Sertifikası</h3>
                <p className="text-gray-600 font-medium">İŞKUR & MEB Ortak Programı</p>
                <p className="text-gray-700">Mesleki Rehberlik ve Kariyer Danışmanlığı</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2020</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Travma Sonrası Müdahale</h3>
                <p className="text-gray-600 font-medium">EMDR Derneği</p>
                <p className="text-gray-700">Travma ve Kriz Danışmanlığı Eğitimi</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">2022</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Bilişsel Davranışçı Terapi</h3>
                <p className="text-gray-600 font-medium">Türkiye Bilişsel Davranışçı Terapiler Derneği</p>
                <p className="text-gray-700">Temel Düzey BDT Eğitimi</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benimle İletişime Geçin</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Öğrencilerinizin veya çocuğunuzun eğitim yolculuğunda profesyonel rehberlik desteği almak için 
                randevu oluşturabilir veya sorularınız için iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/randevu">
                  <Button size="lg" className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i> Randevu Al
                  </Button>
                </Link>
                <Link href="/iletisim">
                  <Button variant="outline" size="lg" className="flex items-center">
                    <i className="fas fa-envelope mr-2"></i> İletişime Geç
                  </Button>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <BackToTop />
    </>
  );
};

export default About;
