import PracticeSection from "@/components/PracticeSection";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function PracticePage() {
  return (
    <>
      <Helmet>
        <title>Unsere Praxis - Physiotherapie Barthel & Griem</title>
        <meta name="description" content="Entdecken Sie unsere moderne Physiotherapie-Praxis in Berlin-Zehlendorf. Helle Räume, barrierefrei und mit guter Verkehrsanbindung." />
      </Helmet>

      <div className="pt-20 pb-8 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-title">Unsere Räume</p>
            <h1 className="section-heading">DIE PRAXIS</h1>
            <p className="text-gray-600 font-light mb-4">
              Unsere Praxis befindet sich im grünen Berlin-Zehlendorf. 
              Helle, freundliche Räume in angenehmer Atmosphäre erwarten Sie.
            </p>
          </motion.div>
        </div>
      </div>

      <PracticeSection />
    </>
  );
}