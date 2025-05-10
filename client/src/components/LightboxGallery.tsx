import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface LightboxGalleryProps {
  images: GalleryImage[];
  onClose: () => void;
  startIndex?: number;
}

export default function LightboxGallery({ images, onClose, startIndex = 0 }: LightboxGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  
  // Tastatur-Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const currentImage = images[currentIndex];

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Schließen-Button */}
      <button 
        className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors z-10"
        onClick={onClose}
        aria-label="Schließen"
      >
        <X size={24} />
      </button>
      
      {/* Navigations-Buttons */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
        aria-label="Nächstes Bild"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Bild */}
      <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative max-w-full max-h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute left-0 right-0 bottom-0 bg-black/50 text-white p-2 text-center">
              {currentImage.alt} ({currentIndex + 1}/{images.length})
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}