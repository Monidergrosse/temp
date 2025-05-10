import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search } from "lucide-react";
import LightboxGallery, { GalleryImage } from "./LightboxGallery";

export default function PracticeSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const galleryImages: GalleryImage[] = [
    {
      id: "img1",
      src: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Behandlungsraum"
    },
    {
      id: "img2",
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Therapiebereich"
    },
    {
      id: "img3",
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Wartebereich"
    },
    {
      id: "img4",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Massageliege"
    },
    {
      id: "img5",
      src: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Trainingsgeräte"
    },
    {
      id: "img6",
      src: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Entspannungsbereich"
    }
  ];

  return (
    <section id="praxis" className="page-section bg-accent">
      <div className="container">
        {/* Title ist nur auf der Hauptseite sichtbar, auf der Detailseite wird der Titel über die PageSection eingefügt */}
        {window.location.pathname === '/' && (
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-title">Unsere Räume</p>
              <h2 className="section-heading">DIE PRAXIS</h2>
            </motion.div>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h3 className="font-heading font-light text-gray-800 text-xl mb-6">Unsere Praxis liegt im wunderschönen und grünen Berlin-Zehlendorf.</h3>
              <p className="text-gray-600 font-light mb-4">Sie befindet sich im Erdgeschoss und ist barrierefrei zugänglich.</p>
              <p className="text-gray-600 font-light mb-4">Helle und sonnige Räume mit moderner Ausstattung laden zum Wohlfühlen ein.</p>
              <p className="text-gray-600 font-light">Wir verfügen über sehr gute Anbindung an den öffentlichen Nahverkehr - U-Bahnhof Krumme Lanke, Bus 118 + X11 - sowie ausreichend Parkmöglichkeiten in unmittelbarer Nähe.</p>
            </div>
            <div className="md:w-1/2">
              <div className="relative group">
                <Link href="/praxis" className="block relative cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Empfangsbereich der Praxis" 
                    className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 py-3 px-6 rounded-md text-sm text-primary font-medium">
                      Zur Praxisseite
                    </div>
                  </div>
                </Link>
                
                <button 
                  onClick={() => {
                    // Füge das Hauptbild als erstes Bild in der Galerie hinzu
                    setSelectedImageIndex(0);
                    setLightboxOpen(true);
                  }}
                  className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Bild vergrößern"
                >
                  <Search size={18} className="text-primary" />
                </button>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={image.id}
                className="overflow-hidden aspect-[4/3]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <div className="relative group cursor-pointer w-full h-full" onClick={(e) => {
                  e.preventDefault();
                  setSelectedImageIndex(index);
                  setLightboxOpen(true);
                }}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 py-2 px-4 rounded-md text-sm text-primary font-medium flex items-center gap-2">
                      <Search size={16} />
                      Vergrößern
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox für Bildergalerie */}
      {lightboxOpen && (
        <LightboxGallery 
          images={[
            {
              id: "main-img",
              src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
              alt: "Empfangsbereich der Praxis"
            },
            ...galleryImages
          ]} 
          onClose={() => setLightboxOpen(false)}
          startIndex={selectedImageIndex}
        />
      )}
    </section>
  );
}
