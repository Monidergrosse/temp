import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen max-h-[800px] min-h-[500px] flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1466853817435-05b43fe45b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" 
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-0"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading font-light text-primary text-4xl md:text-5xl lg:text-6xl mb-6 tracking-wider">
            PHYSIOTHERAPIE<br/>BARTHEL & GRIEM
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 font-light">
            Ein freundliches und zugewandtes Team unterstützt Sie auf dem Weg zu Gesundheit und körperlicher Mobilität.
          </p>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-light py-3 px-6 text-sm uppercase tracking-wider"
              variant="default"
            >
              <a href="#kontakt">Termin vereinbaren →</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
