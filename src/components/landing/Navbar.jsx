import { useState, useEffect } from 'react';
import { ScrolledDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Próspero Logo"
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <h1 className="font-serif text-2xl font-bold text-cream">Próspero.</h1>
              <p className="text-xs text-muted uppercase tracking-widest">Taberna Peruana</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('carta')}
              className="text-cream hover:text-cream-light transition-colors uppercase text-sm tracking-wider"
            >
              Carta
            </button>
            <button
              onClick={() => scrollToSection('pedidos')}
              className="text-cream hover:text-cream-light transition-colors uppercase text-sm tracking-wider"
            >
              Pedidos
            </button>
            <button
              onClick={() => scrollToSection('reservas')}
              className="text-cream hover:text-cream-light transition-colors uppercase text-sm tracking-wider"
            >
              Reservas
            </button>
            <button
              onClick={() => scrollToSection('ubicacion')}
              className="text-cream hover:text-cream-light transition-colors uppercase text-sm tracking-wider"
            >
              Ubicación
            </button>
          </div>

          <a
            href="https://wa.me/51906875085"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-sm uppercase text-xs tracking-wider transition-all hover:transform hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
