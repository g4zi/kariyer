import { Link } from 'wouter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-book-reader text-2xl text-primary"></i>
              <h3 className="text-xl font-bold">Rehber Öğretmen Kemal</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Öğrencilerimizin akademik, sosyal ve duygusal gelişimlerini desteklemek için yanlarındayız. 
              Geleceğe güvenle adım atmanız için ihtiyacınız olan rehberliği birlikte keşfedelim.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</a>
                </Link>
              </li>
              <li>
                <Link href="/hakkimda">
                  <a className="text-gray-400 hover:text-white transition-colors">Hakkımda</a>
                </Link>
              </li>
              <li>
                <Link href="/ogrenciler">
                  <a className="text-gray-400 hover:text-white transition-colors">Öğrenciler İçin</a>
                </Link>
              </li>
              <li>
                <Link href="/veliler">
                  <a className="text-gray-400 hover:text-white transition-colors">Veliler İçin</a>
                </Link>
              </li>
              <li>
                <Link href="/testler">
                  <a className="text-gray-400 hover:text-white transition-colors">Testler & Envanterler</a>
                </Link>
              </li>
              <li>
                <Link href="/randevu">
                  <a className="text-gray-400 hover:text-white transition-colors">Randevu Al</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <span className="text-gray-400">Atatürk Anadolu Lisesi, Cumhuriyet Mahallesi, İstanbul</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-primary"></i>
                <span className="text-gray-400">+90 (212) 123 4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-primary"></i>
                <span className="text-gray-400">kemal.rehberlik@okul.edu.tr</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-primary"></i>
                <span className="text-gray-400">Pazartesi - Cuma: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} Rehber Öğretmen Kemal. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
