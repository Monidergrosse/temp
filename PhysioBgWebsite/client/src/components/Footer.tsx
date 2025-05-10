export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-light">&copy; {new Date().getFullYear()} Physiotherapie Barthel & Griem</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm uppercase tracking-wider">Impressum</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm uppercase tracking-wider">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
