import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

interface NYTPresentationContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  totalSlides: number;
  goToSlide: (slide: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

const NYTPresentationContext = createContext<NYTPresentationContextType | undefined>(undefined);

const CORRECT_PASSWORD = 'nytimes';
const TOTAL_SLIDES = 11;

export const NYTPresentationProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('nyt_authenticated') === 'true';
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  const authenticate = useCallback((password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('nyt_authenticated', 'true');
      return true;
    }
    return false;
  }, []);

  const goToSlide = useCallback((slide: number) => {
    if (slide >= 0 && slide < TOTAL_SLIDES) {
      setCurrentSlide(slide);
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    if (!isAuthenticated) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated, nextSlide, prevSlide]);

  return (
    <NYTPresentationContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        currentSlide,
        setCurrentSlide,
        totalSlides: TOTAL_SLIDES,
        goToSlide,
        nextSlide,
        prevSlide,
      }}
    >
      {children}
    </NYTPresentationContext.Provider>
  );
};

export const useNYTPresentation = () => {
  const context = useContext(NYTPresentationContext);
  if (context === undefined) {
    throw new Error('useNYTPresentation must be used within a NYTPresentationProvider');
  }
  return context;
};
