import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-dark py-12 border-t border-navy-mid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Próspero Logo"
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-cream">Próspero.</h3>
                <p className="text-xs text-muted uppercase tracking-widest">Taberna Peruana</p>
              </div>
            </div>
            <p className="text-cream-light text-sm">
              Tradición peruana en cada plato. Sabores auténticos del norte en un ambiente elegante y acogedor.
            </p>
          </div>

          <div>
            <h4 className="text-cream font-semibold uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('carta')}
                  className="text-cream-light hover:text-cream transition-colors text-sm"
                >
                  Nuestra Carta
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pedidos')}
                  className="text-cream-light hover:text-cream transition-colors text-sm"
                >
                  Pedidos Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reservas')}
                  className="text-cream-light hover:text-cream transition-colors text-sm"
                >
                  Reservas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ubicacion')}
                  className="text-cream-light hover:text-cream transition-colors text-sm"
                >
                  Ubicación
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-semibold uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2 text-cream-light text-sm">
              <li>Av. Balta 636, Chiclayo</li>
              <li>906 875 085</li>
              <li>
                <a
                  href="https://wa.me/51906875085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-mid pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Próspero. Taberna Peruana. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-cream-light hover:text-cream transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-cream-light hover:text-cream transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
