import { motion } from "framer-motion";

export default function WelcomeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="page-section bg-white">
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <p className="section-title">Über uns</p>
              <h2 className="section-heading">HERZLICH WILLKOMMEN</h2>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 mb-6 font-light"
              variants={itemVariants}
            >
              Auf unserer Webseite möchten wir ihnen die Möglichkeit geben uns kennenzulernen und sich einen ersten Eindruck über unsere Leistungen, das Team und unsere Räumlichkeiten zu machen.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-12 font-light"
              variants={itemVariants}
            >
              Wir würden uns freuen, Sie in unserer Praxis begrüßen zu dürfen und stehen Ihnen gerne für Ihre Fragen persönlich oder telefonisch zur Verfügung.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={containerVariants}
          >
            <motion.div 
              className="border-t-2 border-primary/20 pt-6"
              variants={itemVariants}
            >
              <h3 className="font-heading font-light text-gray-800 text-xl mb-4">Individueller Therapieplan</h3>
              <p className="text-gray-600 font-light">Zu Beginn einer Behandlung erstellen wir einen ausführlichen Befund und entwickeln einen individuell auf Sie abgestimmten Therapieplan.</p>
            </motion.div>
            
            <motion.div 
              className="border-t-2 border-primary/20 pt-6"
              variants={itemVariants}
            >
              <h3 className="font-heading font-light text-gray-800 text-xl mb-4">Spezialisierung</h3>
              <p className="text-gray-600 font-light">Wir sind besonders auf chirurgisch-orthopädische, sowie neurologische Krankheitsbilder spezialisiert.</p>
            </motion.div>
            
            <motion.div 
              className="border-t-2 border-primary/20 pt-6"
              variants={itemVariants}
            >
              <h3 className="font-heading font-light text-gray-800 text-xl mb-4">Unser Ziel</h3>
              <p className="text-gray-600 font-light">Es ist unser Ziel ihre Leistungsfähigkeit zu erhalten und zu verbessern. Durch therapeutische Übungen werden dabei ihre Selbstheilungskräfte aktiviert.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
