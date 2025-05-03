import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  className = '',
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  const baseClasses = "transition-all duration-700";
  const visibilityClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${visibilityClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
