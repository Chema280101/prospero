const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D2B4E] border-t border-[rgba(240,234,214,0.12)] py-[72px] px-[60px] pb-9">
      <div className="ft-top grid grid-cols-[1.8fr_1fr_1fr] gap-[60px] mb-14 max-w-[1400px] mx-auto">
        {/* Brand */}
        <div className="ft-brand">
          <div className="ft-brand-name font-serif text-[2.2rem] font-black text-[#F0EAD6]">Próspero.</div>
          <div className="ft-brand-sub text-[0.58rem] uppercase tracking-[3.5px] text-[rgba(240,234,214,0.5)] mt-1">Taberna Peruana</div>
          <p className="ft-brand-desc text-[rgba(240,234,214,0.5)] text-[0.83rem] leading-[1.75] mt-4 max-w-[270px]">
            Tradición peruana en cada plato. Sabores auténticos del norte en un ambiente elegante y acogedor.
          </p>
        </div>

        {/* Services */}
        <div className="ft-services">
          <h4 className="ft-col-title text-[0.62rem] uppercase tracking-[2.5px] text-[rgba(240,234,214,0.5)] mb-[18px]">Servicios</h4>
          <ul className="ft-links list-none flex flex-col gap-[10px]">
            <li>
              <button
                onClick={() => scrollToSection('carta')}
                className="text-[rgba(240,234,214,0.45)] text-[0.85rem] no-underline transition-colors hover:text-[#F0EAD6]"
              >
                Nuestra Carta
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('pedido')}
                className="text-[rgba(240,234,214,0.45)] text-[0.85rem] no-underline transition-colors hover:text-[#F0EAD6]"
              >
                Pedidos Online
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('reservas')}
                className="text-[rgba(240,234,214,0.45)] text-[0.85rem] no-underline transition-colors hover:text-[#F0EAD6]"
              >
                Reservas
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('ubicacion')}
                className="text-[rgba(240,234,214,0.45)] text-[0.85rem] no-underline transition-colors hover:text-[#F0EAD6]"
              >
                Ubicación
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="ft-contact">
          <h4 className="ft-col-title text-[0.62rem] uppercase tracking-[2.5px] text-[rgba(240,234,214,0.5)] mb-[18px]">Contacto</h4>
          <ul className="ft-links list-none flex flex-col gap-[10px] text-[rgba(240,234,214,0.45)] text-[0.85rem]">
            <li>Av. Balta 636, Chiclayo</li>
            <li>906 875 085</li>
            <li>
              <a
                href="https://wa.me/51906875085"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(240,234,214,0.45)] no-underline transition-colors hover:text-[#F0EAD6]"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="ft-bottom flex justify-between items-center pt-6 border-t border-[rgba(240,234,214,0.12)] max-w-[1400px] mx-auto">
        <p className="ft-txt text-[0.7rem] text-[rgba(240,234,214,0.2)]">
          © {new Date().getFullYear()} Próspero. Taberna Peruana. Todos los derechos reservados.
        </p>
        <div className="flex gap-4 text-[rgba(240,234,214,0.45)] text-[0.85rem]">
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
