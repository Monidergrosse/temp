import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface SliderImage {
  url: string;
  alt: string;
  title: string;
  link: string;
}

export default function ImageSlider() {
  const images: SliderImage[] = [
    {
      url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=750&q=80",
      alt: "Praxisraum",
      title: "Unsere Praxis",
      link: "/praxis"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=750&q=80",
      alt: "Physiotherapeutische Behandlung",
      title: "Unsere Leistungen",
      link: "/leistungen"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=750&q=80",
      alt: "Team",
      title: "Unser Team",
      link: "/team"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-100">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center"
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
          animate="visible"
          exit="exit"
        >
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${currentImage.url})` }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <div className="max-w-lg">
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-gray-800 mb-4">
                    {currentImage.title}
                  </h3>
                  <p className="mb-6 text-gray-700">
                    Entdecken Sie mehr über {currentImage.title.toLowerCase()}
                  </p>
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white font-light py-3 px-6 text-sm uppercase tracking-wider"
                  >
                    <Link href={currentImage.link}>
                      Mehr erfahren
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 focus:outline-none z-10"
        onClick={prevSlide}
        aria-label="Vorheriges Bild"
      >
        <ArrowLeft className="w-5 h-5 text-gray-800" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 focus:outline-none z-10"
        onClick={nextSlide}
        aria-label="Nächstes Bild"
      >
        <ArrowRight className="w-5 h-5 text-gray-800" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-white/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Gehe zu Bild ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}