import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search } from "lucide-react";
import LightboxGallery from "./LightboxGallery";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  image: string;
}

export default function TeamSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const teamMembers: TeamMember[] = [
    {
      id: "liane",
      name: "Liane Biesenack",
      role: "Physiotherapeutin",
      specialization: "Spezialisierung auf manuelle Therapie",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
    },
    {
      id: "cornelia",
      name: "Cornelia Griem",
      role: "Physiotherapeutin",
      specialization: "Spezialisierung auf Lymphdrainage",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
    },
    {
      id: "katharina",
      name: "Katharina Barthel",
      role: "Physiotherapeutin",
      specialization: "Spezialisierung auf Osteopathie",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
    }
  ];

  return (
    <section id="team" className="page-section bg-white">
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
              <p className="section-title">Unser Team</p>
              <h2 className="section-heading">DAS TEAM</h2>
            </motion.div>
          </div>
        )}
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600 font-light">Wir sind sehr gut ausgebildete und engagierte Therapeuten, denen ein ganzheitlicher Ansatz im Umgang mit unseren Patienten wichtig ist. Sie sollen sich bei uns wohlfühlen.</p>
          <p className="text-gray-600 font-light mt-4">Das gesamte Team verfügt über jahrelange Berufserfahrung - durch regelmäßige Weiterbildungen halten wir unsere Kenntnisse und Fertigkeiten auf dem neuesten Stand.</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="aspect-square overflow-hidden mb-6 relative group">
                <Link href="/team" className="block relative cursor-pointer">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 py-2 px-4 rounded-md text-sm text-primary font-medium">
                      Team kennenlernen
                    </div>
                  </div>
                </Link>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(index);
                    setLightboxOpen(true);
                  }}
                  className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Bild vergrößern"
                >
                  <Search size={18} className="text-primary" />
                </button>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-light text-gray-800 text-xl mb-2">{member.name}</h3>
                <p className="text-primary uppercase text-sm tracking-wider mb-2">{member.role}</p>
                <p className="text-gray-600 font-light">{member.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="max-w-2xl mx-auto border-t border-primary/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-heading font-light text-gray-800 text-xl mb-4 text-center">Stellenangebot</h3>
          <p className="text-gray-600 font-light text-center">Zur Unterstützung unseres Teams suchen wir ab Juni 2022 eine freundliche und engagierte Physiotherapeutin für 10 bis 20 Stunden/Woche.</p>
          <p className="text-gray-600 font-light text-center mt-2">Gern auch Berufsanfänger und Wiedereinsteiger!</p>
          <div className="text-center mt-6">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-light py-3 px-6 text-sm uppercase tracking-wider"
              variant="default"
            >
              <a href="#kontakt">Jetzt bewerben</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox für Teambilder */}
      {lightboxOpen && (
        <LightboxGallery 
          images={teamMembers.map(member => ({
            id: member.id,
            src: member.image.replace('w=600&h=700', 'w=1200&h=1200'),
            alt: `${member.name} - ${member.role}`
          }))} 
          onClose={() => setLightboxOpen(false)}
          startIndex={selectedImageIndex}
        />
      )}
    </section>
  );
}
