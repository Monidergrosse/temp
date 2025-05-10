import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="kontakt" className="page-section bg-white">
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
              <p className="section-title">Kontakt</p>
              <h2 className="section-heading">HIER FINDEN SIE UNS</h2>
            </motion.div>
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row max-w-5xl mx-auto">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-full">
              <h3 className="font-heading font-light text-gray-800 text-xl mb-8">PHYSIOTHERAPIE BARTHEL & GRIEM</h3>
              
              <div className="mb-8">
                <p className="font-light text-gray-800 mb-4">Katharina Barthel & Cornelia Griem</p>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div className="text-gray-600 font-light">
                    <p>Teschener Weg 6</p>
                    <p>14163 Berlin-Zehlendorf</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <p className="text-gray-600 font-light"><span className="text-gray-800">Telefon:</span> 030/ 84 72 19 00</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <p className="text-gray-600 font-light"><span className="text-gray-800">Fax:</span> 030 84 72 03 80</p>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-3" />
                  <p className="text-gray-600 font-light"><span className="text-gray-800">Web:</span> www.physiotherapie-bg.de</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <p className="text-gray-600 font-light">
                    <span className="text-gray-800">Mail:</span>{" "}
                    <a href="mailto:info@physiotherapie-bg.de" className="text-primary hover:underline">
                      info@physiotherapie-bg.de
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div className="text-gray-600 font-light">
                    <p><span className="text-gray-800">Öffnungszeiten:</span> Montag bis Freitag</p>
                    <p>8:00 - 19:00 Uhr</p>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-gray-800 mb-3">Verkehrsanbindung:</p>
                <ul className="text-gray-600 font-light space-y-2 ml-8">
                  <li>Barrierefreier Zugang</li>
                  <li>Gute Parkmöglichkeiten</li>
                  <li>Busverbindungen: 118 und X10</li>
                  <li>U-Bahn: Station Krumme Lanke</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="overflow-hidden h-full min-h-[24rem]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.6881922682776!2d13.241254999999998!3d52.446799199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a859899ca36c99%3A0x3d3d7d56ff867d6d!2sTeschener%20Weg%206%2C%2014163%20Berlin!5e0!3m2!1sde!2sde!4v1660666294196!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "24rem" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort der Physiotherapie Praxis"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
