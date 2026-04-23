import hero from '../../assets/hero.png'

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      overflow: 'hidden', background: 'var(--navy-dark)',
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* BG overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(7,26,48,0.4) 0%, rgba(7,26,48,0.2) 30%, rgba(7,26,48,0.75) 65%, rgba(7,26,48,0.98) 100%)',
      }} />
 
      {/* Subtle texture pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.04,
        backgroundImage: `repeating-linear-gradient(45deg, var(--cream) 0, var(--cream) 1px, transparent 0, transparent 50%)`,
        backgroundSize: '20px 20px',
      }} />
 
      {/* CONTENT */}
      <div className="hero-content" style={{
        position: 'relative', zIndex: 10,
        padding: '0 80px 80px',
        maxWidth: 760,
      }}>
        {/* Eyebrow */}
        <div className="anim-1" style={{
          fontSize: '0.68rem', fontWeight: 500, textTransform: 'uppercase',
          letterSpacing: '3px', color: 'var(--cream-dark)', marginBottom: 24,
        }}>
          Próspero · Taberna Peruana
        </div>
 
        {/* H1 */}
        <h1 className="anim-2" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3.2rem, 6vw, 6rem)',
          fontWeight: 900, lineHeight: 1.0,
          color: 'var(--cream)', marginBottom: 20,
        }}>
          Cocina norteña<br />
          <em style={{ fontStyle: 'italic', color: 'rgba(240,234,214,0.55)' }}>de verdad.</em>
        </h1>
 
        {/* Description */}
        <p className="anim-3" style={{
          fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8,
          maxWidth: 480, marginBottom: 44,
        }}>
          Desayunos tradicionales, cuchara brava y la cantina más sabrosa de Chiclayo.
          Pide delivery, reserva tu mesa o recoge — todo desde aquí, sin llamadas.
        </p>
 
        {/* CTA Buttons */}
        <div className="hero-cta anim-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#pedido" className="btn-cream">Pedir ahora</a>
          <a href="#carta" className="btn-ghost">Ver carta completa</a>
        </div>
 
        {/* Stats */}
        <div className="hero-stats anim-5" style={{
          display: 'flex', gap: 0, marginTop: 64,
          paddingTop: 28, borderTop: '1px solid var(--border)',
        }}>
          {[
            { val: '9+ años', key: 'Experiencia' },
            { val: '500+ clientes', key: 'Satisfechos' },
            { val: '30+ platos', key: 'Tradicionales' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1,
              paddingLeft: i > 0 ? 32 : 0,
              borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
              marginLeft: i > 0 ? 32 : 0,
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.7rem', fontWeight: 700, color: 'var(--cream)' }}>
                {s.val}
              </div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', marginTop: 4 }}>
                {s.key}
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* Scroll indicator */}
      <div className="anim-6" style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'var(--muted)',
      }}>
        <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
        <div className="scroll-line" />
      </div>
 
      <style>{`
        @media (max-width: 768px) {
          section:first-of-type {
            padding-top: 70px !important;
          }
          .hero-content {
            padding: 0 20px 64px !important;
            max-width: 100% !important;
          }
          .hero-content h1 {
            font-size: clamp(2.2rem, 10vw, 3.2rem) !important;
          }
          .hero-content p {
            font-size: 0.92rem !important;
            max-width: 100% !important;
          }
          .hero-cta {
            flex-direction: column !important;
          }
          .hero-cta a {
            text-align: center !important;
          }
          .hero-stats {
            flex-direction: column !important;
            gap: 16px !important;
            margin-top: 40px !important;
          }
          .hero-stats > div {
            border-left: none !important;
            margin-left: 0 !important;
            padding-left: 0 !important;
            border-bottom: 1px solid var(--border) !important;
            padding-bottom: 12px !important;
            text-align: center;
          }
          .hero-stats > div:last-child {
            border-bottom: none !important;
          }
          .hero-stats > div > div:first-child {
            font-size: 1.4rem !important;
          }
          .anim-6 {
            display: none !important;
          }
        }
        @media (max-width: 412px) {
          section:first-of-type {
            padding-top: 60px !important;
          }
          .hero-content {
            padding: 0 16px 48px !important;
          }
          .hero-content h1 {
            font-size: clamp(1.8rem, 12vw, 2.5rem) !important;
          }
          .hero-content p {
            font-size: 0.85rem !important;
          }
          .hero-stats > div > div:first-child {
            font-size: 1.2rem !important;
          }
          .hero-stats > div > div:last-child {
            font-size: 0.55rem !important;
          }
        }
      `}</style>
    </section>
  )
}