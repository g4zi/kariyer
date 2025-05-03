import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '@/components/SectionHeader';
import BackToTop from '@/components/BackToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AppointmentForm from '@/components/AppointmentForm';
import AppointmentCalendar from '@/components/AppointmentCalendar';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Randevu Al | Rehber Öğretmen Kemal</title>
        <meta name="description" content="Rehber öğretmen ile görüşme randevusu almak için form ve uygun zaman dilimlerini görüntüleyin." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Randevu Al" 
            subtitle="Öğrenci veya veli görüşmesi için randevu almak isterseniz aşağıdaki formu doldurabilirsiniz." 
          />
          
          <AnimateOnScroll>
            <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
              <AppointmentForm />
              
              <div className="lg:w-1/2 bg-gray-50 p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Randevu Takvimi</h3>
                <div className="mb-6">
                  <AppointmentCalendar />
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">Bugün</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-4 h-4 bg-blue-200 rounded-full mr-2"></div>
                    <span className="text-gray-700">Veli Toplantı Günleri</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-4 h-4 bg-green-200 rounded-full mr-2"></div>
                    <span className="text-gray-700">Müsait Saatler</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-4 h-4 bg-red-200 rounded-full mr-2"></div>
                    <span className="text-gray-700">Dolu Saatler</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Randevu Politikası</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-info-circle text-primary mt-1 mr-2"></i>
                      <span>Randevular en geç 24 saat öncesinde iptal edilebilir.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-info-circle text-primary mt-1 mr-2"></i>
                      <span>Randevu saatine lütfen 5 dakika öncesinden hazır olunuz.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-info-circle text-primary mt-1 mr-2"></i>
                      <span>Öğrenci görüşmeleri 30 dakika, veli görüşmeleri 45 dakika sürmektedir.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-info-circle text-primary mt-1 mr-2"></i>
                      <span>Acil durumlarda doğrudan rehberlik servisini arayabilirsiniz.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Randevu Detayları" 
            subtitle="Birebir görüşme sürecinin işleyişi" 
          />
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-clock text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Görüşme Süresi</h3>
                <p className="text-gray-600 mb-4">
                  Öğrenci görüşmeleri 30 dakika, veli görüşmeleri 45 dakika sürmektedir. Randevu saatinden 5 dakika önce gelmeniz önerilir.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <i className="fas fa-user-graduate text-primary mr-2"></i>
                    <span className="text-gray-700">Öğrenci Görüşmesi: 30 dakika</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-users text-primary mr-2"></i>
                    <span className="text-gray-700">Veli Görüşmesi: 45 dakika</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Görüşme Yeri</h3>
                <p className="text-gray-600 mb-4">
                  Görüşmeler okul binası içerisindeki rehberlik servisinde gerçekleştirilmektedir. Okula girişte güvenlik görevlisine randevunuzu belirtiniz.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <i className="fas fa-building text-primary mr-2"></i>
                    <span className="text-gray-700">Atatürk Anadolu Lisesi Rehberlik Servisi</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-door-open text-primary mr-2"></i>
                    <span className="text-gray-700">Ana binada, giriş kat, 105 numaralı oda</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-clipboard-list text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Görüşme İçeriği</h3>
                <p className="text-gray-600 mb-4">
                  Görüşmelerde konuşulan konular gizlilik ilkesi çerçevesinde saklanır. Görüşme öncesinde konuşmak istediğiniz konuları not almanız faydalı olacaktır.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <i className="fas fa-lock text-primary mr-2"></i>
                    <span className="text-gray-700">Gizlilik ilkesi esastır</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="fas fa-file-alt text-primary mr-2"></i>
                    <span className="text-gray-700">Görüşme notları profesyonel olarak saklanır</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Sık Sorulan Sorular" 
            subtitle="Randevu alma süreciyle ilgili merak edilenler" 
          />
          
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Randevu almak ücretli midir?</h3>
                  <p className="text-gray-600">
                    Hayır, okul rehberlik servisimizde sunulan tüm danışmanlık hizmetleri ücretsizdir. Randevu alabilmek için öğrencimiz veya velimiz olmanız yeterlidir.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Randevumu iptal etmem gerekirse ne yapmalıyım?</h3>
                  <p className="text-gray-600">
                    Randevunuzu iptal etmeniz gerekiyorsa, en geç 24 saat öncesinden rehberlik servisimizi telefonla arayarak bilgi vermenizi rica ederiz. 
                    Bu sayede sizin yerinize başka bir öğrenci veya veli ile görüşme yapma fırsatı bulabiliriz.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Acil bir durumda nasıl görüşme sağlayabilirim?</h3>
                  <p className="text-gray-600">
                    Acil durumlarda, rehberlik servisimizi doğrudan ziyaret edebilir veya okul santralinden rehberlik servisine ulaşabilirsiniz. 
                    Acil durumlarda mümkün olan en kısa sürede görüşme sağlamaya çalışacağız.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Görüşmede konuşulanlar gizli kalacak mı?</h3>
                  <p className="text-gray-600">
                    Evet, rehberlik servisimizde yapılan tüm görüşmeler gizlilik ilkesi çerçevesinde yürütülür. Ancak, öğrencinin veya başkasının 
                    zarar görme riski olduğu durumlarda gerekli mercilere bilgi verilmesi yasal bir zorunluluktur.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Randevu için en uygun zamanlar nelerdir?</h3>
                  <p className="text-gray-600">
                    Rehberlik servisimiz hafta içi 09:00-16:00 saatleri arasında hizmet vermektedir. Öğrenciler için genellikle öğle arası 
                    ve okul çıkışı saatleri, veliler için ise öğleden sonra saatleri daha uygundur.
                  </p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hemen Randevu Alın</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Öğrencilerinizin veya çocuğunuzun gelişimi için profesyonel rehberlik desteği almak üzere 
                randevu oluşturabilirsiniz. Sorularınız için iletişim sayfamızı ziyaret edebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#top" className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition inline-flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i> Forma Dön
                </a>
                <a href="/iletisim" className="bg-white border border-primary text-primary hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition inline-flex items-center">
                  <i className="fas fa-envelope mr-2"></i> İletişime Geç
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

export default Appointment;
