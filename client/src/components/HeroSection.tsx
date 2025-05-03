import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { quotes } from '@/data/quotes';

const HeroSection = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Pick a random quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {quote && (
              <div className="p-4 mb-6 rounded-md animate-slide-in bg-blue-50 border-l-4 border-primary">
                <p className="text-lg italic text-gray-600">{quote}</p>
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Rehberlik ve Psikolojik Danışma Hizmetleri</h2>
            <p className="text-lg text-gray-600 mb-6">
              Öğrencilerimizin akademik, sosyal ve duygusal gelişimlerini desteklemek için yanlarındayım. 
              Geleceğe güvenle adım atmanız için ihtiyacınız olan rehberliği birlikte keşfedelim.
            </p>
            <div className="flex space-x-4">
              <Link href="/randevu">
                <Button className="flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i> Randevu Al
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button variant="outline" className="border-primary text-primary hover:bg-blue-50 flex items-center">
                  <i className="fas fa-envelope mr-2"></i> İletişime Geç
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Rehberlik ofisi" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
