import { WhatsAppIcon } from '../icons/SocialIcons'

// ── ICONOS SVG de redes sociales ──
function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}

// ── Links de redes — CAMBIA LAS URLs POR LAS REALES DE PRÓSPERO ──
const socialLinks = [
  {
    href:  'https://facebook.com/PAGINA_DE_PROSPERO',  // 👈 cambia esto
    icon:  <FacebookIcon />,
    label: 'Facebook',
  },
  {
    href:  'https://instagram.com/USUARIO_DE_PROSPERO', // 👈 cambia esto
    icon:  <InstagramIcon />,
    label: 'Instagram',
  },
  {
    href:  'https://wa.me/51906875085',
    icon:  <WhatsAppIcon />,
    label: '906 875 085',
  },
  {
    href:  'https://tiktok.com/@USUARIO_DE_PROSPERO',   // 👈 cambia esto (o elimina si no tienen)
    icon:  <TikTokIcon />,
    label: 'TikTok',
  },
]

// ── Link style reutilizable ──
const linkStyle = {
  display: 'inline-flex', alignItems: 'center', gap: 10,
  color: 'rgba(240,234,214,0.45)', fontSize: '0.85rem',
  textDecoration: 'none', transition: 'color 0.2s',
}

export function Location() {
  return (
    <section id="ubicacion" style={{
      background: 'var(--navy-dark)', padding: '100px 80px',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
    }}>
      {/* MAP */}
      <div className="reveal-left" style={{ borderRadius: 2, overflow: 'hidden', minHeight: 360 }}>
        <iframe
          title="Próspero ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.0!2d-79.8401!3d-6.7714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef3a3823a9a7%3A0x17a5a4f6c8b6b4b0!2sAv.%20Balta%20637%2C%20Chiclayo!5e0!3m2!1ses!2spe!4v1"
          width="100%" height="360"
          style={{ border: 'none', filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* INFO */}
      <div className="reveal-right">
        <div className="sec-label-light">Cómo llegar</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: '2.8rem',
          fontWeight: 900, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 36,
        }}>
          Encuéntranos<br />
          <em style={{ fontStyle: 'italic', opacity: 0.55 }}>en Chiclayo</em>
        </h2>

        {[
          { icon: '📍', label: 'Dirección',            val: 'Av. Balta 637, Chiclayo, Lambayeque' },
          { icon: '📱', label: 'WhatsApp / Teléfono',  val: '906 875 085' },
          { icon: '🕐', label: 'Horario de atención',  val: 'Todos los días desde las 7:00 AM' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 24 }}>
            <div style={{
              width: 44, height: 44, background: 'rgba(240,234,214,0.08)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--muted)', marginBottom: 3 }}>
                {item.label}
              </div>
              <div style={{ color: 'var(--cream)', fontSize: '0.92rem' }}>{item.val}</div>
            </div>
          </div>
        ))}

        <a
          href="https://wa.me/51906875085"
          target="_blank" rel="noreferrer"
          className="btn-wa"
          style={{ marginTop: 8 }}
        >
          <WhatsAppIcon /> Escribirnos por WhatsApp
        </a>
      </div>

      <style>{`
        @media(max-width:768px){
          section#ubicacion { grid-template-columns: 1fr !important; padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid var(--border)', padding: '72px 80px 36px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr', gap: 60, marginBottom: 56 }}>

        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 900, color: 'var(--cream)' }}>
            Próspero.
          </div>
          <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '3.5px', color: 'var(--muted)', marginTop: 4 }}>
            Taberna Peruana
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.83rem', lineHeight: 1.75, marginTop: 16, maxWidth: 270 }}>
            Cocina norteña con alma en el corazón de Chiclayo. Desayunos, cuchara brava y la mejor cantina de la ciudad.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '2.5px', color: 'var(--muted)', marginBottom: 18 }}>
            Servicios
          </div>
          <ul style={{ listStyle: 'none' }}>
            {[
              ['#pedido',  'Delivery'],
              ['#reservas','Reservas'],
              ['#pedido',  'Recojo en local'],
              ['#carta',   'Ver carta'],
            ].map(([href, label]) => (
              <li key={label} style={{ marginBottom: 10 }}>
                <a
                  href={href}
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,234,214,0.45)'}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto + Redes */}
        <div>
          <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '2.5px', color: 'var(--muted)', marginBottom: 18 }}>
            Contacto
          </div>
          <ul style={{ listStyle: 'none' }}>
            {/* Dirección */}
            <li style={{ marginBottom: 10 }}>
              <a href="#ubicacion" style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,234,214,0.45)'}
              >
                📍 Av. Balta 637, Chiclayo
              </a>
            </li>

            {/* Redes sociales con iconos SVG reales */}
            {socialLinks.map(s => (
              <li key={s.label} style={{ marginBottom: 10 }}>
                <a
                  href={s.href}
                  target="_blank" rel="noreferrer"
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,234,214,0.45)'}
                >
                  {s.icon}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 24, borderTop: '1px solid var(--border)',
      }}>
        <span style={{ fontSize: '0.7rem', color: 'rgba(240,234,214,0.2)' }}>
          © 2025 Próspero Taberna Peruana · Av. Balta 637, Chiclayo, Perú
        </span>
        <span style={{ fontSize: '0.7rem', color: 'rgba(240,234,214,0.2)' }}>
          Desarrollado con ❤️ en Chiclayo
        </span>
      </div>

      <style>{`
        @media(max-width:768px){
          footer { padding: 60px 20px 32px !important; }
          footer > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          footer > div:last-child { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}