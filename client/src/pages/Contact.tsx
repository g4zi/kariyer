import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '@/components/SectionHeader';
import BackToTop from '@/components/BackToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>İletişim | Rehber Öğretmen Kemal</title>
        <meta name="description" content="Rehber öğretmen ile iletişime geçebileceğiniz adres, telefon ve e-posta bilgileri. İletişim formu ile mesaj gönderin." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="İletişim" 
            subtitle="Sorularınız ve görüşleriniz için bizimle iletişime geçebilirsiniz." 
          />
          
          <AnimateOnScroll>
            <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
              <ContactForm />
              
              <div className="lg:w-1/2 bg-gray-50 p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">İletişim Bilgileri</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Adres</h4>
                      <p className="text-gray-600">
                        Atatürk Anadolu Lisesi, Rehberlik Servisi<br />
                        Cumhuriyet Mahallesi, Okul Caddesi No:123<br />
                        İstanbul, Türkiye
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-phone-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Telefon</h4>
                      <p className="text-gray-600">+90 (212) 123 4567</p>
                      <p className="text-gray-600">+90 (212) 123 4568 (Santral)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">E-posta</h4>
                      <p className="text-gray-600">kemal.rehberlik@okul.edu.tr</p>
                      <p className="text-gray-600">rehberlik@atatürkanadolulisesi.k12.tr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-clock text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Çalışma Saatleri</h4>
                      <p className="text-gray-600">Pazartesi - Cuma: 08:00 - 17:00</p>
                      <p className="text-gray-600">Hafta Sonu: Kapalı</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Bizi Takip Edin</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                
                <div>
                  <a href="https://wa.me/905551234567" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition inline-flex items-center">
                    <i className="fab fa-whatsapp mr-2 text-lg"></i> WhatsApp ile İletişim
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="mt-12 rounded-lg overflow-hidden shadow-md h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24066.485240751476!2d28.932603087232673!3d41.01324997856576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd776ba773%3A0xe77865a0c2d8be27!2zQmV5b8SfbHUsIMSwc3RhbmJ1bA!5e0!3m2!1str!2str!4v1698075138279!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Okul Konumu"
              ></iframe>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Sık Sorulan Sorular" 
            subtitle="İletişim ve başvuru süreçleri hakkında merak edilenler" 
          />
          
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Görüşmeleriniz Bireysel mi?</h3>
                  <p className="text-gray-600 mb-2">
                    Evet, tüm öğrenci ve veli görüşmelerimiz bireysel olarak yapılmaktadır. Görüşme içerikleri gizlilik ilkesi çerçevesinde saklanır.
                  </p>
                  <p className="text-gray-600">
                    İhtiyaç duyulması halinde, öğrenci ve velinin birlikte katılacağı aile görüşmeleri de düzenlenebilmektedir.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Randevu Almadan Görüşebilir miyiz?</h3>
                  <p className="text-gray-600 mb-2">
                    Acil durumlar dışında, verimli bir görüşme sağlayabilmek için randevu almanızı öneriyoruz. 
                  </p>
                  <p className="text-gray-600">
                    Acil durumlarda rehberlik servisine doğrudan başvurabilir veya telefon ile iletişime geçebilirsiniz.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Mesai Saatleri Dışında İletişim</h3>
                  <p className="text-gray-600 mb-2">
                    Mesai saatleri dışında iletişim için e-posta kullanabilirsiniz. E-postalar genellikle ertesi iş günü içerisinde yanıtlanmaktadır.
                  </p>
                  <p className="text-gray-600">
                    Acil durumlar için okul idaresinin acil durum numarası kullanılabilir.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Grup Çalışmaları ve Seminerler</h3>
                  <p className="text-gray-600 mb-2">
                    Düzenli olarak öğrenci grupları ve veliler için çeşitli konularda seminerler ve atölyeler düzenlenmektedir.
                  </p>
                  <p className="text-gray-600">
                    Bu etkinliklerden haberdar olmak için iletişim bilgilerinizi paylaşabilir veya duyuru sayfamızı düzenli olarak takip edebilirsiniz.
                  </p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Bize Ulaşın</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Öğrencilerimiz ve velilerimiz için her zaman buradayız. 
                Sorularınız, görüşleriniz veya herhangi bir konuda destek almak için iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+902121234567" className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition inline-flex items-center">
                  <i className="fas fa-phone-alt mr-2"></i> Hemen Arayın
                </a>
                <a href="mailto:kemal.rehberlik@okul.edu.tr" className="bg-white border border-primary text-primary hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition inline-flex items-center">
                  <i className="fas fa-envelope mr-2"></i> E-posta Gönderin
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

export default Contact;
