import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '@/components/SectionHeader';
import BackToTop from '@/components/BackToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Parents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Veliler İçin | Rehber Öğretmen Kemal</title>
        <meta name="description" content="Veliler için ergen psikolojisi, aile içi iletişim, sınav dönemi ve ebeveyn tutumları hakkında bilgilendirici içerikler." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Veliler İçin" 
            subtitle="Çocuğunuzun gelişimini desteklemek için ihtiyacınız olan tüm bilgiler." 
          />
          
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ergenlik Döneminde İletişim</h3>
                <p className="text-gray-600 mb-4">
                  Ergenlik dönemi, hem gençler hem de ebeveynler için zorlayıcı bir süreçtir. 
                  Bu dönemde sağlıklı iletişim kurabilmek için dikkat edilmesi gereken hususlar:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Yargılamadan dinlemeyi öğrenin</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Empati kurun ve duygularını anlamaya çalışın</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Özel alan ve mahremiyete saygı gösterin</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Açık ve dürüst iletişim kurun</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Kendi ergenlik döneminizi hatırlayın</span>
                  </li>
                </ul>
                <a href="#" className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition inline-flex items-center">
                  <i className="fas fa-book mr-2"></i> Detaylı Rehberi İndir
                </a>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ebeveyn çocuk iletişimi" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-brain text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Sınav Döneminde Aile Tutumları</h3>
                <p className="text-gray-600 mb-4">
                  Çocuğunuzun sınav sürecinde doğru destek olabilmek için izlemeniz gereken yollar.
                </p>
                <Link href="#sinavdonemi">
                  <a className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                    Devamını Oku
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-comments text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">İletişim Becerileri Geliştirme</h3>
                <p className="text-gray-600 mb-4">
                  Ergenlik dönemindeki çocuğunuzla etkili iletişim kurmanın yolları ve pratik öneriler.
                </p>
                <Link href="#iletisim">
                  <a className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                    Devamını Oku
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-home text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Ebeveyn Tutumları</h3>
                <p className="text-gray-600 mb-4">
                  Çocuk yetiştirmede farklı ebeveyn tutumları ve bunların çocuğun gelişimine etkileri.
                </p>
                <Link href="/testler">
                  <a className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                    Ebeveyn Tutumu Testini Yap
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="bg-blue-50 rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Veli Toplantı Duyuruları</h3>
                  <p className="text-gray-600 mb-6">
                    Dönem içerisinde gerçekleştirilecek veli toplantılarının tarihleri aşağıda yer almaktadır. 
                    Katılımınız için şimdiden teşekkür ederiz.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full text-primary mr-3">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">9. Sınıflar Veli Toplantısı</h4>
                        <p className="text-gray-600">15 Ekim 2025, Saat: 14:00</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full text-primary mr-3">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">10. Sınıflar Veli Toplantısı</h4>
                        <p className="text-gray-600">17 Ekim 2025, Saat: 14:00</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full text-primary mr-3">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">11-12. Sınıflar Veli Toplantısı</h4>
                        <p className="text-gray-600">19 Ekim 2025, Saat: 14:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Ebeveyn Tutumları Testi</h4>
                    <p className="text-gray-600 mb-4">
                      Çocuğunuzla ilişkinizde hangi ebeveyn tutumunu sergilediğinizi öğrenmek ister misiniz?
                    </p>
                    <Link href="/testler">
                      <Button className="w-full">
                        Testi Başlat
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="sinavdonemi" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Sınav Döneminde Aile Desteği" 
            subtitle="Doğru yaklaşımla çocuğunuzun başarısına katkıda bulunun" 
          />
          
          <AnimateOnScroll>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Sınav hazırlığı" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Sınav Stresi ve Aile Yaklaşımı</h3>
                  <p className="text-gray-600 mb-4">
                    Çocuğunuzun sınav döneminde yaşadığı stres ve kaygı, doğru yaklaşımlarla yönetilebilir. 
                    Bu süreçte ailenin rolü ve sunacağı destek oldukça önemlidir. İşte sınav döneminde 
                    ebeveynlerin dikkat etmesi gereken konular:
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full text-primary mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Gerçekçi Beklentiler Oluşturun</h4>
                        <p className="text-gray-600">
                          Çocuğunuzun kapasitesine uygun beklentiler belirleyin. Aşırı beklentiler kaygıyı artırırken, 
                          düşük beklentiler motivasyon eksikliğine neden olabilir.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full text-primary mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Uygun Çalışma Ortamı Sağlayın</h4>
                        <p className="text-gray-600">
                          Sessiz, düzenli ve dikkat dağıtıcı unsurlardan arındırılmış bir çalışma ortamı oluşturun. 
                          Evdeki gürültü faktörlerini minimize etmeye çalışın.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full text-primary mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Duygusal Destek Sunun</h4>
                        <p className="text-gray-600">
                          Sınav sonuçları ne olursa olsun, çocuğunuzu koşulsuz sevdiğinizi ve desteklediğinizi hissettirin. 
                          Başarısızlık durumunda bile yanında olduğunuzu bilmesi önemlidir.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="flex items-center">
                    Tam Rehberi İndir <i className="fas fa-download ml-2"></i>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
                  <i className="fas fa-exclamation-triangle text-amber-500 mr-2"></i>
                  Yapılmaması Gerekenler
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full text-red-500 mr-3 mt-1">
                      <i className="fas fa-times text-sm"></i>
                    </div>
                    <span className="text-gray-700">Kardeşlerle veya başka öğrencilerle kıyaslamak</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full text-red-500 mr-3 mt-1">
                      <i className="fas fa-times text-sm"></i>
                    </div>
                    <span className="text-gray-700">Sürekli sınav ve notlar hakkında konuşmak</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full text-red-500 mr-3 mt-1">
                      <i className="fas fa-times text-sm"></i>
                    </div>
                    <span className="text-gray-700">Aşırı baskı ve kontrol uygulamak</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full text-red-500 mr-3 mt-1">
                      <i className="fas fa-times text-sm"></i>
                    </div>
                    <span className="text-gray-700">Başarısızlık durumunda ceza vermek veya suçlamak</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full text-red-500 mr-3 mt-1">
                      <i className="fas fa-times text-sm"></i>
                    </div>
                    <span className="text-gray-700">Kendi kaygınızı çocuğa yansıtmak</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Yapılması Gerekenler
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full text-green-500 mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Dengeli beslenme ve düzenli uyku için destek olmak</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full text-green-500 mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Hobi ve sosyal aktiviteler için zaman tanımak</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full text-green-500 mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Başarılarını takdir etmek ve motive etmek</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full text-green-500 mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Düzenli çalışma planı oluşturmasına yardımcı olmak</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full text-green-500 mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="text-gray-700">Gerektiğinde profesyonel destek almak</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="iletisim" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Etkili İletişim Becerileri" 
            subtitle="Ergenlik döneminde sağlıklı iletişim kurmanın yolları" 
          />
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Aktif Dinleme</h3>
                <p className="text-gray-600 mb-4">
                  Aktif dinleme, çocuğunuzla etkili iletişim kurmanın temelidir. Yargılamadan, kesintiye uğratmadan 
                  ve tam dikkatinizi vererek dinlemeyi içerir.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Göz teması kurun:</span> Çocuğunuzla konuşurken diğer işlerinizi bırakın ve göz teması kurun.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Yansıtıcı dinleme yapın:</span> "Anladığım kadarıyla..." veya "Yani şunu mu demek istiyorsun..." gibi ifadelerle anladığınızı doğrulayın.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Sabırlı olun:</span> Çocuğunuz düşüncelerini ifade ederken acele ettirmeyin veya sözünü kesmeyin.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Ben Dili Kullanımı</h3>
                <p className="text-gray-600 mb-4">
                  "Ben dili", çocuğunuzu suçlamadan veya yargılamadan duygularınızı ve endişelerinizi ifade etmenin etkili bir yoludur.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full text-red-500 mr-3 mt-1">
                      <i className="fas fa-times text-sm"></i>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Sen dili (Kaçının):</span> "Sen her zaman odanı dağınık bırakıyorsun."
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full text-green-500 mr-3 mt-1">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Ben dili (Kullanın):</span> "Odanın dağınık olduğunu gördüğümde endişeleniyorum çünkü eşyalarının kaybolabileceğinden korkuyorum."
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full text-primary mr-3 mt-1">
                      <i className="fas fa-lightbulb text-sm"></i>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold">Formül:</span> "Ben [duygu] hissediyorum, çünkü [gözlem], ve [istek/çözüm]."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="bg-blue-50 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <img 
                  src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Aile iletişimi" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Veli Danışmanlık Hizmeti</h3>
                <p className="text-gray-600 mb-4">
                  Çocuğunuzla iletişim kurmada zorluk yaşıyorsanız, ergenlik dönemi sorunlarıyla baş etmekte güçlük çekiyorsanız veya 
                  eğitim süreciyle ilgili sorularınız varsa, bireysel veli danışmanlığı hizmetimizden yararlanabilirsiniz.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-700">Birebir görüşme imkanı</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-700">Özel durumlara yönelik stratejiler</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-700">Düzenli takip ve destek</span>
                  </div>
                </div>
                <Link href="/randevu">
                  <Button className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i> Danışmanlık Randevusu Al
                  </Button>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Veli Toplantılarımıza Katılın</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Düzenli veli toplantılarımızda, çocuğunuzun akademik ve sosyal gelişimini değerlendirme 
                fırsatı bulabilir, okul rehberlik servisi ile işbirliği yapabilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/iletisim">
                  <Button className="flex items-center">
                    <i className="fas fa-calendar-check mr-2"></i> Toplantı Takvimi
                  </Button>
                </Link>
                <Link href="/testler">
                  <Button variant="outline" className="flex items-center">
                    <i className="fas fa-clipboard-check mr-2"></i> Ebeveyn Testini Yap
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

export default Parents;
