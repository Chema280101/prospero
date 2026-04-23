import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.jpeg'
import { WhatsAppIcon } from '../icons/SocialIcons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navItems = [
    { href: '#carta', label: 'Carta' },
    { href: '#pedido', label: 'Pedidos' },
    { href: '#reservas', label: 'Reservas' },
    { href: '#ubicacion', label: 'Ubicación' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* LOGO */}
        <a href="#" className="nav-logo">
          <img
            src={logo}
            alt="Próspero logo"
            className="nav-logo-img"
          />
          <div className="nav-logo-text">
            <span className="nav-logo-name">Próspero.</span>
            <span className="nav-logo-sub">Taberna Peruana</span>
          </div>
        </a>

        {/* NAV LINKS — desktop */}
        <ul className="nav-links-desktop">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* WHATSAPP BUTTON — desktop */}
        <a
          href="https://wa.me/51906875085"
          target="_blank"
          rel="noreferrer"
          className="nav-whatsapp-btn"
        >
          <WhatsAppIcon /> WhatsApp
        </a>

        {/* HAMBURGER BUTTON — mobile */}
        <button 
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`nav-mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button 
          className="nav-mobile-close"
          onClick={closeMenu}
          aria-label="Cerrar menú"
        >
          <X size={32} />
        </button>

        {navItems.map((item) => (
          <a 
            key={item.href}
            href={item.href} 
            className="nav-mobile-link"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}

        <a
          href="https://wa.me/51906875085"
          target="_blank"
          rel="noreferrer"
          className="nav-whatsapp-btn"
          style={{ marginTop: 'auto', justifyContent: 'center' }}
        >
          <WhatsAppIcon /> WhatsApp
        </a>
      </div>
    </>
  )
}