import ServicesSection from "@/components/ServicesSection";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Unsere Leistungen - Physiotherapie Barthel & Griem</title>
        <meta name="description" content="Entdecken Sie unser umfangreiches Angebot an Physiotherapie-Leistungen in Berlin-Zehlendorf: Manuelle Therapie, Lymphdrainage, Osteopathie und mehr." />
      </Helmet>

      <div className="pt-20 pb-8 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-title">Behandlungen</p>
            <h1 className="section-heading">UNSERE LEISTUNGEN</h1>
            <p className="text-gray-600 font-light mb-4">
              Wir bieten ein umfassendes Spektrum an physiotherapeutischen Behandlungen,
              individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </motion.div>
        </div>
      </div>

      <ServicesSection />
    </>
  );
}