import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '@/components/SectionHeader';
import BackToTop from '@/components/BackToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { mainLinks, additionalLinks } from '@/data/links';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

const UsefulLinks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Faydalı Linkler | Rehber Öğretmen Kemal</title>
        <meta name="description" content="Eğitim ve rehberlik konularında faydalı kaynaklar, resmi kurumlar ve bilgilendirici içerikler." />
      </Helmet>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Faydalı Linkler" 
            subtitle="Eğitim ve rehberlik ile ilgili güncel bilgilere ulaşabileceğiniz kaynaklar." 
          />
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainLinks.map((link, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <i className={`${link.icon} text-primary text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{link.title}</h3>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      Siteyi Ziyaret Et
                      <i className="fas fa-external-link-alt ml-2"></i>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="mt-12 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Diğer Faydalı Kaynaklar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-full text-primary mr-3">
                      <i className={link.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{link.title}</h4>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Eğitim Kaynakları" 
            subtitle="Öğrencilerin akademik gelişimine katkı sağlayacak kaynak önerileri" 
          />
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <i className="fas fa-graduation-cap text-primary mr-2"></i>
                    Üniversite Tercih Kaynakları
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">YÖK Atlas</h4>
                        <p className="text-gray-600 text-sm">
                          Üniversite ve bölümler hakkında detaylı istatistikler, kontenjanlar, taban puanlar ve yerleşme bilgileri.
                        </p>
                        <a href="https://yokatlas.yok.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          yokatlas.yok.gov.tr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">ÖSYM</h4>
                        <p className="text-gray-600 text-sm">
                          Sınav tarihleri, kılavuzlar, geçmiş sınavlar ve sınav sonuçları.
                        </p>
                        <a href="https://www.osym.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          www.osym.gov.tr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Üniversite Tanıtım Günleri</h4>
                        <p className="text-gray-600 text-sm">
                          Üniversitelerin tanıtım etkinlikleri ve kampüs ziyaretleri hakkında bilgiler.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <i className="fas fa-book text-primary mr-2"></i>
                    Akademik Kaynaklar
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">EBA (Eğitim Bilişim Ağı)</h4>
                        <p className="text-gray-600 text-sm">
                          MEB'in dijital eğitim platformu, ders içerikleri, videolar ve etkileşimli çalışmalar.
                        </p>
                        <a href="https://www.eba.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          www.eba.gov.tr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Khan Academy Türkçe</h4>
                        <p className="text-gray-600 text-sm">
                          Matematik, fen, programlama ve daha birçok konuda ücretsiz eğitim videoları.
                        </p>
                        <a href="https://tr.khanacademy.org/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          tr.khanacademy.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">TÜBİTAK Bilim Genç</h4>
                        <p className="text-gray-600 text-sm">
                          Gençlere yönelik bilim, teknoloji ve yenilik içerikleri.
                        </p>
                        <a href="https://bilimgenc.tubitak.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          bilimgenc.tubitak.gov.tr
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <i className="fas fa-brain text-primary mr-2"></i>
                    Gelişim ve Psikoloji Kaynakları
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Türk PDR Derneği</h4>
                        <p className="text-gray-600 text-sm">
                          Psikolojik danışma ve rehberlik alanında kaynaklar, makaleler ve etkinlikler.
                        </p>
                        <a href="https://www.pdr.org.tr/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          www.pdr.org.tr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Pozitif Psikoloji</h4>
                        <p className="text-gray-600 text-sm">
                          Psikolojik dayanıklılık, mindfulness ve iyi oluş üzerine içerikler.
                        </p>
                        <a href="https://www.pozitifpsikoloji.org/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          www.pozitifpsikoloji.org
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <i className="fas fa-briefcase text-primary mr-2"></i>
                    Kariyer ve İş Dünyası
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">İŞKUR</h4>
                        <p className="text-gray-600 text-sm">
                          Kariyer planlaması, meslek seçimi ve iş arama süreçlerine dair kaynaklar.
                        </p>
                        <a href="https://www.iskur.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          www.iskur.gov.tr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Meslek Bilgi Sistemi</h4>
                        <p className="text-gray-600 text-sm">
                          Meslekler hakkında detaylı bilgiler, gereken nitelikler ve çalışma alanları.
                        </p>
                        <a href="https://meslek.iro.saglik.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                          meslek.iro.saglik.gov.tr
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Rehberlik Hizmetleri</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Kariyer danışmanlığı, psikolojik destek veya eğitim planlaması konularında profesyonel yardıma ihtiyaç duyuyorsanız, 
                randevu alarak görüşme talebinde bulunabilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/randevu">
                  <a className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition inline-flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i> Randevu Al
                  </a>
                </Link>
                <Link href="/iletisim">
                  <a className="bg-white border border-primary text-primary hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition inline-flex items-center">
                    <i className="fas fa-envelope mr-2"></i> İletişime Geç
                  </a>
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

export default UsefulLinks;
