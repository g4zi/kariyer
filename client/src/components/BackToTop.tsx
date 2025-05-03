import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      variant="default"
      size="icon"
      className={`fixed bottom-6 right-6 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={scrollToTop}
      aria-label="Yukarı çık"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};

export default BackToTop;
