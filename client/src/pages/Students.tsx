import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '@/components/SectionHeader';
import BackToTop from '@/components/BackToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import CareerCard from '@/components/CareerCard';
import { careers } from '@/data/careers';

const Students = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Öğrenciler İçin | Rehber Öğretmen Kemal</title>
        <meta name="description" content="Öğrenciler için kariyer planlaması, meslek tanıtımları, sınav hazırlığı ve kişisel gelişim kaynakları." />
      </Helmet>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Öğrenciler İçin" 
            subtitle="Akademik ve kişisel gelişiminiz için ihtiyacınız olan tüm kaynaklar burada." 
          />
          
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="flex flex-wrap -mx-4">
                {careers.slice(0, 3).map((career, index) => (
                  <CareerCard key={index} {...career} />
                ))}
              </div>
              <div className="text-center mt-4">
                <Link href="#more-careers">
                  <a className="text-primary font-medium hover:text-blue-700 transition-colors inline-flex items-center">
                    Daha Fazla Meslek Göster
                    <i className="fas fa-chevron-right ml-2"></i>
                  </a>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="bg-white rounded-lg shadow-md p-6 mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sınav Hazırlık Rehberleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                    <i className="fas fa-file-pdf text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">LGS Hazırlık Rehberi</h4>
                    <p className="text-gray-600 text-sm mb-3">Liseye Geçiş Sınavı'na hazırlık sürecinde dikkat edilmesi gerekenler ve çalışma planı.</p>
                    <a href="#" className="text-primary hover:text-blue-700 text-sm font-medium inline-flex items-center">
                      PDF İndir <i className="fas fa-download ml-1"></i>
                    </a>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                    <i className="fas fa-file-pdf text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">YKS Hazırlık Rehberi</h4>
                    <p className="text-gray-600 text-sm mb-3">Yükseköğretim Kurumları Sınavı'na hazırlık stratejileri ve verimli çalışma teknikleri.</p>
                    <a href="#" className="text-primary hover:text-blue-700 text-sm font-medium inline-flex items-center">
                      PDF İndir <i className="fas fa-download ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-semibold">Sınav Stresiyle Başa Çıkma</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Sınav döneminde yaşadığınız stresi yönetmek için faydalı teknikler:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700">Düzenli nefes egzersizleri yapın</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700">Planlı çalışma ve molalar verin</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700">Düzenli fiziksel aktivite yapın</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700">Olumlu düşünme tekniklerini uygulayın</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700">Yeterli uyku ve beslenmeye dikkat edin</span>
                    </li>
                  </ul>
                  <Link href="/testler">
                    <a className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                      Detaylı Bilgi
                      <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="text-xl font-semibold">Kariyer Planlama Rehberi</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Geleceğinizi planlarken izlemeniz gereken adımlar:</p>
                  <ol className="space-y-2 mb-4 list-decimal list-inside">
                    <li className="text-gray-700">Kişisel ilgi ve yeteneklerinizi keşfedin</li>
                    <li className="text-gray-700">Meslekler hakkında detaylı araştırma yapın</li>
                    <li className="text-gray-700">Gelecekteki iş fırsatlarını değerlendirin</li>
                    <li className="text-gray-700">Üniversite ve bölüm seçimlerinizi planlayın</li>
                    <li className="text-gray-700">Kişisel gelişim hedeflerinizi belirleyin</li>
                  </ol>
                  <Link href="/testler">
                    <a className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                      Kariyer Planı Oluştur
                      <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="more-careers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Diğer Meslek Alanları" 
            subtitle="Kariyer seçeneklerini keşfetmeye devam edin" 
          />

          <AnimateOnScroll>
            <div className="flex flex-wrap -mx-4">
              {careers.slice(3).map((career, index) => (
                <CareerCard key={index + 3} {...career} />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Öğrenci Seminerleri" 
            subtitle="Kişisel ve akademik gelişiminize destek olacak seminerler" 
          />

          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Etkili Çalışma Teknikleri" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-100 text-primary text-xs font-semibold px-2 py-1 rounded mb-3 inline-block">20 Ekim 2025</span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Etkili Çalışma Teknikleri</h3>
                  <p className="text-gray-600 mb-4">
                    Verimli ders çalışma stratejileri, zaman yönetimi ve odaklanma tekniklerini öğreneceğiniz interaktif seminer.
                  </p>
                  <Button variant="outline" className="w-full">Kayıt Ol</Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Stres Yönetimi" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-100 text-primary text-xs font-semibold px-2 py-1 rounded mb-3 inline-block">5 Kasım 2025</span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Stres Yönetimi</h3>
                  <p className="text-gray-600 mb-4">
                    Sınav dönemlerinde kaygıyı azaltma ve stresle baş etme yöntemlerini öğreneceğiniz seminer.
                  </p>
                  <Button variant="outline" className="w-full">Kayıt Ol</Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Üniversite Tercihleri" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-100 text-primary text-xs font-semibold px-2 py-1 rounded mb-3 inline-block">15 Aralık 2025</span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Üniversite Tercihleri</h3>
                  <p className="text-gray-600 mb-4">
                    Doğru üniversite ve bölüm seçimi için dikkat edilmesi gereken faktörlerin anlatılacağı bilgilendirme semineri.
                  </p>
                  <Button variant="outline" className="w-full">Kayıt Ol</Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Rehberlik Hizmetlerinden Yararlanın</h2>
                <p className="text-gray-600 mb-4">
                  Kariyer planlaması, kişisel gelişim veya akademik başarı konularında destek almak için 
                  bireysel görüşme randevusu oluşturabilirsiniz.
                </p>
                <Link href="/randevu">
                  <Button className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i> Randevu Al
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Rehberlik Görüşmesi"
                  className="rounded-lg shadow-md" 
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <BackToTop />
    </>
  );
};

export default Students;
