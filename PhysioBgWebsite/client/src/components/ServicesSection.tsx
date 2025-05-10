import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Link } from "wouter";
import LightboxGallery from "./LightboxGallery";

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string | JSX.Element;
  image: string;
}

export default function ServicesSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const services: Service[] = [
    {
      id: "manuelle-therapie",
      title: "MANUELLE THERAPIE",
      shortDescription: "Im Mittelpunkt der Manuellen Therapie steht die Untersuchung und Behandlung von Funktionsstörungen des Bewegungsapparates. Ziel ist es, Schmerzen zu lindern und das Zusammenspiel von Gelenken, Muskeln und Nerven zu verbessern.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "triggerpunkt-therapie",
      title: "TRIGGERPUNKT THERAPIE",
      shortDescription: "Viele Schmerzen entstehen in der Muskulatur. Eine häufige Ursache hierfür sind sogenannte Triggerpunkte und Veränderungen der Faszien.",
      fullDescription: "Durch wiederholte, falsche Belastungen oder traumatische Ereignisse, kommt es zu Verspannungen und Schmerzen in der Muskulatur, der auf Druck oft auch in andere Körperregionen übertragen wird. Die Summe der Symptome wird als myofasziales Schmerzsyndrom bezeichnet. Durch eine gezielte Therapie lassen sich die Beschwerden in der Regel sehr gut behandeln.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "bobath",
      title: "BOBATH",
      shortDescription: "Diese Therapie ist ein Behandlungskonzept für Menschen mit motorischen Beeinträchtigungen aufgrund neurologischer Erkrankungen, wie z.B. Schlaganfall, multipler Sklerose oder Parkinson.",
      fullDescription: "Mit Hilfe speziellen Übungen wird die Eigenaktivität des Patienten gefördert, um die Sicherheit und Selbständigkeit im Alltag zu verbessern.",
      image: "https://pixabay.com/get/g650b2c2c10fc521454d489ad4b4ca71c9fd66af48f504691a09c54e3dedbc62de896513bcbef264e2f208517f9aec7d9433f53b8c716da06b3105e5389c33fc9_1280.jpg"
    },
    {
      id: "lymphdrainage",
      title: "MANUELLE LYMPHDRAINAGE",
      shortDescription: "Ist eine sanfte Form der Massage, bei der durch bestimmte Grifftechniken die Aktivität des Lymphflusses angeregt und Schwellungen abgebaut werden.",
      fullDescription: "Sie ist ein wichtiger Teil der \"Komplexen Physikalischen Entstauungstherapie\", genannt KPE.",
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "osteopathie",
      title: "OSTEOPATHISCHE TECHNIKEN",
      shortDescription: "In der Osteopathie werden verschiedene Strukturen wie Knochen, Muskeln, Sehnen, Bänder, Organe und Gewebe als Grundbestandteile unseres Körpers betrachtet.",
      fullDescription: (
        <>
          <p>Alle haben verschiedene Aufgaben, wirken und arbeiten jedoch miteinander und beeinflussen sich gegenseitig. Positive und negative Einflüsse wirken auf die Strukturen und damit auf den Körper. Durch die Osteopathie werden diese negativ beeinträchtigten Strukturen behandelt und Funktionsstörungen neutralisiert.</p>
          <p className="mt-2">Zusätzlich wird die Selbstheilung des Körpers unterstützt bzw. angeregt.</p>
          <p className="mt-2">Man unterscheidet in:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Parietaler Osteopathie (Muskeln, Gelenke, Knochen, Faszien)</li>
            <li>Visceraler Osteopathie (Innere Organe mit ihrem strukturellen Bezug)</li>
            <li>Craniosacral Osteopathie (näher beschrieben unter Cranio-Sacrale Therapie)</li>
          </ul>
        </>
      ),
      image: "https://pixabay.com/get/gb4208c2ce2e21ab3202cfe112c81500db2041958db7cc0d7e53fdb7bbf2855d7395fc94c23fd03ef36cf402d17d55ec53739fa6087f9d20e00a279af33be505b_1280.jpg"
    },
    {
      id: "cranio-sacral",
      title: "CRANIO SACRALE THERAPIE",
      shortDescription: "Diese Therapie hat sich aus der Osteopathie entwickelt.",
      fullDescription: (
        <>
          <p>Es gibt in der Gehirn- und Rückenmarksflüssigkeit, dem Liquor, eine gewisse rhythmische Pulsation, die auf die benachbarten Strukturen wie Knochen und Gewebe übertragen wird.</p>
          <p className="mt-2">Der Therapeut fühlt manuell Gewebespannungen und behandelt durch entsprechend geringe Druck- und Zugkräfte, um die negativen Veränderungen zu beeinflussen.</p>
          <p className="mt-2">Die Therapie ist eine ganzheitliche Heilmethode, wobei nicht Symptome behandelt werden, sondern versucht wird die Ursache einer Erkrankung zu beheben und die natürlichen Bewegungsspielräume von Gewebe und Organen wiederherzustellen.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "elektrotherapie",
      title: "ELEKTRO THERAPIE / ULTRASCHALL",
      shortDescription: "Die Elektrotherapie wird unter anderem eingesetzt um die Muskulatur zu lockern, die Durchblutung zu fördern, Schmerzen zu reduzieren und die Heilung zu verbessern. Ebenfalls eingesetzt wir die Elektrotherapie zur Stimulation bei Lähmungen.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "kiefergelenk",
      title: "KIEFERGELENKSBEHANDLUNG (CMD)",
      shortDescription: "Bei der Craniomandibuläre Dysfunktion handelt es sich um eine Fehlfunktion des Kiefers, einschließlich der beteiligten Muskeln und Knochen.",
      fullDescription: "Typische Beschwerden sind oft Schmerzen und Beeinträchtigungen im Kieferbereich, sowie Gesichts- und Kopfschmerzen. Häufig kommt es auch zu verspannter Schulter/Nackenmuskulatur, sowie Ohrgeräuschen. (Tinnitus) Durch gezielte Mobilisations-und Entspannungstechniken lässt sich die CMD effektiv behandeln.",
      image: "https://pixabay.com/get/gae1c2364104f5ba3a46bac66a181c39542575a35e4118fa242debdfda4c0e5701fc7a749453e96d954a12553e9337a52a6d9d9b411810c693b4382c655753545_1280.jpg"
    },
    {
      id: "fango",
      title: "FANGO",
      shortDescription: "\"Fango\" ist italienisch und bedeutet im Deutschen \"heilsamer Schlamm\". Er ist vulkanischen Ursprungs.",
      fullDescription: "Fango, in Form von Moorpackungen, wird auf verspannte und schmerzhafte Bereiche des Körpers appliziert. Dadurch kommt es zu einer besseren Durchblutung und Lockerung der Muskulatur und des Gewebes.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "klassische-massage",
      title: "KLASSISCHE MASSAGE",
      shortDescription: "Die klassische Massage dient dazu, verspannte und schmerzhafte Muskulatur zu lockern und die Durchblutung anzuregen. Durch ihre ganzheitliche Wirkung führt sie maßgeblich zur Entspannung von Körper und Geist.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "sportverletzungen",
      title: "BEHANDLUNG NACH SPORTVERLETZUNGEN",
      shortDescription: "Hierbei handelt es sich um Verletzungen, die sich Freizeit-und Leistungssportler bei der Ausübung ihrer sportlichen Tätigkeit zuziehen. Durch unser individuelles Therapiekonzept helfen wir Ihnen, schnell wieder fit zu werden.",
      image: "https://images.unsplash.com/photo-1595247601608-1c824fe54f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  return (
    <section id="leistungen" className="page-section bg-accent">
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
              <p className="section-title">Behandlungen</p>
              <h2 className="section-heading">UNSERE LEISTUNGEN</h2>
            </motion.div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card bg-white overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="h-48 overflow-hidden relative group">
                <Link href={`/leistungen#${service.id}`} className="block relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 py-2 px-4 rounded-md text-sm text-primary font-medium">
                      Mehr zu {service.title}
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
              <div className="p-6">
                <Link href={`/leistungen#${service.id}`}>
                  <h3 className="font-heading font-light text-gray-800 text-lg mb-3 hover:text-primary transition-colors">{service.title}</h3>
                </Link>
                <p className="text-gray-600 font-light mb-4">{service.shortDescription}</p>
                
                {service.fullDescription && (
                  <>
                    <button 
                      className="text-primary text-sm tracking-wider uppercase hover:text-primary/80 flex items-center"
                      onClick={() => toggleItem(service.id)}
                    >
                      {expandedItems.includes(service.id) ? (
                        <>
                          Weniger anzeigen 
                          <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Mehr erfahren
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                    <div 
                      className={`mt-4 pt-4 border-t border-gray-100 ${expandedItems.includes(service.id) ? 'block' : 'hidden'}`}
                    >
                      {typeof service.fullDescription === 'string' ? (
                        <p className="text-gray-600 font-light">{service.fullDescription}</p>
                      ) : (
                        service.fullDescription
                      )}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Lightbox für Servicebilder */}
      {lightboxOpen && (
        <LightboxGallery 
          images={services.map(service => ({
            id: service.id,
            src: service.image.replace('w=600&h=400', 'w=1200&h=800'),
            alt: service.title
          }))} 
          onClose={() => setLightboxOpen(false)}
          startIndex={selectedImageIndex}
        />
      )}
    </section>
  );
}
