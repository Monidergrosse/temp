import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/leistungen", label: "Leistungen" },
    { path: "/team", label: "Team" },
    { path: "/praxis", label: "Praxis" },
    { path: "/kontakt", label: "Kontakt" }
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-primary font-heading font-light text-xl md:text-2xl tracking-wider">
              PHYSIOTHERAPIE<span className="hidden md:inline"> BARTHEL & GRIEM</span>
            </h1>
          </Link>
          
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu öffnen"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`font-heading font-light ${isActive(item.path) ? 'text-primary' : 'text-gray-700'} hover:text-primary transition-colors uppercase text-sm tracking-wider`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 pt-4 border-t border-gray-100 ${isOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 pb-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-heading font-light ${isActive(item.path) ? 'text-primary' : 'text-gray-700'} hover:text-primary transition-colors uppercase text-sm tracking-wider`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
