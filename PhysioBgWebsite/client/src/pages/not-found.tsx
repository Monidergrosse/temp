import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="text-center max-w-md mx-4 px-8 py-12">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-3xl font-heading font-light text-gray-800 mb-4">404 - Seite nicht gefunden</h1>
        
        <p className="text-gray-600 font-light mb-8">
          Die angeforderte Seite konnte leider nicht gefunden werden.
        </p>
        
        <Button 
          asChild
          className="bg-primary hover:bg-primary/90 text-white font-light py-3 px-6 text-sm uppercase tracking-wider"
        >
          <a href="/">Zurück zur Startseite</a>
        </Button>
      </div>
    </div>
  );
}
