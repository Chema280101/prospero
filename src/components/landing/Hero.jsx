import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-mid to-navy-dark opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <p
            className={`text-cream-muted text-sm uppercase tracking-[0.3em] fade-up ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Taberna Peruana · Av. Balta 636, Chiclayo
          </p>
          
          <h1
            className={`font-serif text-6xl md:text-8xl font-bold text-cream leading-tight fade-up ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            Cocina norteña
            <br />
            <span className="italic">de verdad.</span>
          </h1>
          
          <p
            className={`text-cream-light text-lg md:text-xl max-w-2xl mx-auto fade-up ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            Tradición peruana en cada plato. Sabores auténticos del norte en un ambiente elegante y acogedor.
          </p>
          
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center fade-up ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.7s' }}
          >
            <button
              onClick={() => scrollToSection('pedidos')}
              className="bg-cream text-navy-dark px-8 py-4 rounded-sm uppercase text-sm tracking-wider font-semibold transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Pedir ahora
            </button>
            <button
              onClick={() => scrollToSection('carta')}
              className="border-2 border-cream text-cream px-8 py-4 rounded-sm uppercase text-sm tracking-wider font-semibold transition-all hover:bg-cream hover:text-navy-dark hover:transform hover:-translate-y-0.5"
            >
              Ver carta
            </button>
          </div>
        </div>

        <div
          className={`mt-16 flex justify-center items-center gap-8 text-cream-muted text-sm fade-up ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '0.9s' }}
        >
          <span>Balta 636</span>
          <span>·</span>
          <span>906 875 085</span>
          <span>·</span>
          <span>4.9★</span>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('strip')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream scroll-indicator"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
