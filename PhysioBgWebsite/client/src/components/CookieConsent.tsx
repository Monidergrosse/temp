import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface CookieConsentProps {
  onAccept: () => void;
}

export default function CookieConsent({ onAccept }: CookieConsentProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-6 shadow-sm border-t border-gray-100">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 font-light text-sm mb-6 md:mb-0 md:mr-8 max-w-3xl">
          Wir benutzen Cookies um uns ständig zu verbessern. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.{" "}
          <a href="#" className="text-primary hover:underline font-normal">
            Mehr Informationen zu Cookies erhalten Sie in unserer Datenschutzerklärung
          </a>
        </p>
        <div className="flex space-x-4">
          <Button 
            onClick={onAccept} 
            className="bg-primary hover:bg-primary/90 text-white font-light py-3 px-6 text-sm uppercase tracking-wider"
          >
            Akzeptieren
          </Button>
          <a 
            href="https://de.wikipedia.org/wiki/Cookie" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-1 border border-gray-200 px-6 py-3 rounded-md text-sm text-gray-600 transition-colors hover:bg-gray-50 uppercase tracking-wider font-light"
          >
            <Info className="h-4 w-4 mr-1" />
            Info
          </a>
        </div>
      </div>
    </div>
  );
}
