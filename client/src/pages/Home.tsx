import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import BackToTop from '@/components/BackToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ana Sayfa | Rehber Öğretmen Kemal</title>
        <meta name="description" content="Rehber Öğretmen Kemal'in kişisel web sitesi. Öğrenciler ve veliler için rehberlik hizmetleri, testler ve kaynaklar." />
      </Helmet>

      <HeroSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Rehberlik Hizmetlerimiz</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                15 yıllık mesleki deneyimim ile öğrencilerimizin ve velilerimizin yanındayım. 
                Size yardımcı olabileceğim hizmetler aşağıda yer almaktadır.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute transform rotate-45 bg-primary text-white text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                    Öğrenciler
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-user-graduate text-primary text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Kariyer Danışmanlığı</h3>
                  <p className="text-gray-600 mb-4">
                    Öğrencilerin ilgi ve yeteneklerine göre doğru meslek seçimi yapmasına yardımcı olacak rehberlik hizmetleri sunuyorum.
                  </p>
                  <Link href="/ogrenciler">
                    <Button variant="outline" className="w-full">Detaylı Bilgi</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute transform rotate-45 bg-primary text-white text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                    Veliler
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-users text-primary text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Veli Danışmanlığı</h3>
                  <p className="text-gray-600 mb-4">
                    Ergenlik dönemi, iletişim becerileri ve çocuk gelişimi konularında velilere yönelik rehberlik hizmetleri.
                  </p>
                  <Link href="/veliler">
                    <Button variant="outline" className="w-full">Detaylı Bilgi</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute transform rotate-45 bg-primary text-white text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                    Testler
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-clipboard-check text-primary text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Kişilik ve Yetenek Testleri</h3>
                  <p className="text-gray-600 mb-4">
                    Öğrencilerin kendilerini daha iyi tanımalarına yardımcı olacak bilimsel testler ve değerlendirmeler.
                  </p>
                  <Link href="/testler">
                    <Button variant="outline" className="w-full">Detaylı Bilgi</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Neden Rehberlik Hizmeti Almalısınız?</h2>
                <p className="text-gray-600 mb-6">
                  Profesyonel rehberlik hizmetleri, öğrencilerin akademik başarısını artırırken, sosyal ve duygusal gelişimlerine de katkıda bulunur. 
                  Doğru yönlendirme ile:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Kendilerini daha iyi tanıma fırsatı bulurlar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Doğru meslek seçimi için bilinçli kararlar alırlar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Stres ve kaygı yönetimi becerilerini geliştirirler</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Velileriyle daha sağlıklı iletişim kurarlar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Akademik motivasyonlarını artırırlar</span>
                  </li>
                </ul>
                <Link href="/randevu">
                  <Button className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i> Hemen Randevu Al
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Rehberlik görüşmesi" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Öne Çıkan Hizmetler</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-primary text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Bireysel Görüşmeler</h3>
                <p className="text-gray-600 text-sm">
                  Öğrencilerin kişisel, sosyal ve akademik gelişimlerini desteklemek için birebir görüşmeler.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chalkboard-teacher text-primary text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Grup Çalışmaları</h3>
                <p className="text-gray-600 text-sm">
                  Sosyal beceri, iletişim ve akran ilişkilerini geliştirmek için grup etkinlikleri.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-road text-primary text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Kariyer Planlama</h3>
                <p className="text-gray-600 text-sm">
                  Öğrencilerin gelecek hedeflerini belirlemelerine ve kariyer yollarını çizmelerine yardımcı olma.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-brain text-primary text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Psikolojik Danışmanlık</h3>
                <p className="text-gray-600 text-sm">
                  Duygusal zorluklar, stres ve kaygı yönetimi konularında profesyonel destek.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="text-center mt-10">
            <Link href="/hakkimda">
              <Button variant="outline" className="border-primary text-primary hover:bg-blue-50">
                Tüm Hizmetleri Keşfet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar-check text-primary text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Hemen Randevu Alın</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Öğrencilerimiz ve velilerimiz için kişisel gelişim, kariyer danışmanlığı ve eğitim rehberliği konularında 
                profesyonel destek sunuyorum. Randevu alarak ilk adımı atabilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/randevu">
                  <Button size="lg" className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i> Randevu Al
                  </Button>
                </Link>
                <Link href="/iletisim">
                  <Button variant="outline" size="lg" className="flex items-center">
                    <i className="fas fa-phone-alt mr-2"></i> İletişime Geç
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

export default Home;
