import TeamSection from "@/components/TeamSection";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Unser Team - Physiotherapie Barthel & Griem</title>
        <meta name="description" content="Lernen Sie unser erfahrenes Team von Physiotherapeuten in Berlin-Zehlendorf kennen. Wir bieten eine ganzheitliche Behandlung mit jahrelanger Erfahrung." />
      </Helmet>

      <div className="pt-20 pb-8 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-title">Über uns</p>
            <h1 className="section-heading">UNSER TEAM</h1>
            <p className="text-gray-600 font-light mb-4">
              Wir sind ausgebildete und engagierte Therapeuten mit einem ganzheitlichen Ansatz.
              Unser Ziel ist es, dass Sie sich bei uns wohlfühlen und optimal betreut werden.
            </p>
          </motion.div>
        </div>
      </div>
      
      <TeamSection />
    </>
  );
}