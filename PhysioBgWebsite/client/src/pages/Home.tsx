import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ImageSlider from "@/components/ImageSlider";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const serviceCards = [
    {
      title: "Manuelle Therapie",
      description: "Gezielte Behandlung von Funktionsstörungen des Bewegungsapparates",
      link: "/leistungen#manuelle-therapie"
    },
    {
      title: "Osteopathie",
      description: "Ganzheitlicher Ansatz zur Behandlung von Funktionsstörungen im Körper",
      link: "/leistungen#osteopathie"
    },
    {
      title: "Lymphdrainage",
      description: "Sanfte Massage zur Aktivierung des Lymphflusses und Abbau von Schwellungen",
      link: "/leistungen#lymphdrainage"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Physiotherapie Barthel & Griem - Berlin Zehlendorf</title>
        <meta name="description" content="Herzlich willkommen in unserer Praxis für Physiotherapie in Berlin-Zehlendorf. Wir bieten ein umfangreiches Angebot an physiotherapeutischen Behandlungen." />
      </Helmet>

      <div id="home">
        <HeroSection />
        <WelcomeSection />
        
        {/* Bilder-Slider mit Verlinkungen zu Unterseiten */}
        <section className="py-6 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <ImageSlider />
          </div>
        </section>
        
        {/* Kompakte Leistungen-Übersicht */}
        <section className="page-section bg-accent">
          <div className="container">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="section-title">Behandlungen</p>
                <h2 className="section-heading">UNSERE LEISTUNGEN</h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="font-heading font-light text-gray-800 text-xl mb-4">{service.title}</h3>
                  <p className="text-gray-600 font-light mb-6">{service.description}</p>
                  <Link href={service.link} className="text-primary text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-light py-3 px-6 text-sm uppercase tracking-wider"
              >
                <Link href="/leistungen">
                  Alle Leistungen ansehen
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call-to-Action Bereich */}
        <section className="page-section bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Praxisraum" 
                  className="w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="section-title">Besuchen Sie uns</p>
                <h2 className="text-3xl font-heading font-light text-gray-800 mb-6">VEREINBAREN SIE EINEN TERMIN</h2>
                <p className="text-gray-600 font-light mb-8">
                  Wir freuen uns, Sie in unserer Praxis begrüßen zu dürfen. Unsere erfahrenen Therapeuten stehen Ihnen 
                  mit individuellen Behandlungskonzepten zur Seite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white font-light py-3 px-6 text-sm uppercase tracking-wider"
                  >
                    <Link href="/kontakt">
                      Kontakt aufnehmen
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 font-light py-3 px-6 text-sm uppercase tracking-wider"
                  >
                    <Link href="/praxis">
                      Praxis entdecken
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
