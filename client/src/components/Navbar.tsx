import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useIsMobile as useMobile } from '@/hooks/use-mobile';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
  const [location] = useLocation();
  const active = location === href;

  return (
    <Link href={href}>
      <a className={`font-medium transition ${active ? 'text-primary' : 'text-gray-700 hover:text-primary'} ${className}`}>
        {children}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const isMobile = useMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''} animate-fade-in`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-book-reader text-3xl text-primary"></i>
            <div>
              <h1 className="text-xl md:text-2xl font-bold font-sans text-neutral-dark">Rehber Öğretmen Kemal</h1>
              <p className="text-sm text-gray-600">Psikolojik Danışman & Kariyer Uzmanı</p>
            </div>
          </div>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLink href="/" className="py-2">Ana Sayfa</NavLink>
                  <NavLink href="/hakkimda" className="py-2">Hakkımda</NavLink>
                  <NavLink href="/ogrenciler" className="py-2">Öğrenciler İçin</NavLink>
                  <NavLink href="/veliler" className="py-2">Veliler İçin</NavLink>
                  <NavLink href="/testler" className="py-2">Testler</NavLink>
                  <NavLink href="/randevu" className="py-2">Randevu Al</NavLink>
                  <NavLink href="/linkler" className="py-2">Faydalı Linkler</NavLink>
                  <NavLink href="/iletisim" className="py-2">İletişim</NavLink>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="hidden md:flex space-x-6">
              <NavLink href="/">Ana Sayfa</NavLink>
              <NavLink href="/hakkimda">Hakkımda</NavLink>
              <NavLink href="/ogrenciler">Öğrenciler İçin</NavLink>
              <NavLink href="/veliler">Veliler İçin</NavLink>
              <NavLink href="/testler">Testler</NavLink>
              <NavLink href="/randevu">Randevu Al</NavLink>
              <NavLink href="/linkler">Faydalı Linkler</NavLink>
              <NavLink href="/iletisim">İletişim</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
