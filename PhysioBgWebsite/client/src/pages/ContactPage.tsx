import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt - Physiotherapie Barthel & Griem</title>
        <meta name="description" content="Kontaktieren Sie unsere Physiotherapie-Praxis in Berlin-Zehlendorf. Telefon, Adresse und Anfahrtsweg finden Sie hier übersichtlich zusammengestellt." />
      </Helmet>
      
      <div className="pt-20 pb-8 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-title">Kontakt</p>
            <h1 className="section-heading">HIER FINDEN SIE UNS</h1>
            <p className="text-gray-600 font-light mb-4">
              Wir freuen uns auf Ihren Besuch in unserer Praxis im Teschener Weg 6 in Berlin-Zehlendorf.
              Sie erreichen uns telefonisch unter 030/ 84 72 19 00.
            </p>
          </motion.div>
        </div>
      </div>

      <ContactSection />
    </>
  );
}