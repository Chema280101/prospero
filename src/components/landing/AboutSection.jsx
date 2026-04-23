export default function AboutSection() {
  return (
    <section className="reveal about-section">
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div className="about-header">
          <div className="sec-label-dark" style={{ justifyContent: 'center', marginBottom: 20 }}>
            Nuestra historia
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            fontWeight: 900,
            color: 'var(--navy)',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Desde <em style={{ fontStyle: 'italic', color: 'var(--navy-mid)' }}>2015</em> sirviendo a Chiclayo
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(13,43,78,0.6)', maxWidth: 700, margin: '0 auto' }}>
            Próspero nació de la pasión por la comida norteña auténtica. Desde nuestro pequeño local familiar hasta convertirnos en el referente de la cocina tradicional chiclayana.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Image */}
          <div className="about-image">
            <img 
              src="/about/restaurant.jpg" 
              alt="Interior de Próspero Taberna Peruana"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div style="background: var(--navy); height: 100%; display: flex; align-items: center; justify-content: center; color: var(--cream); font-size: 3rem;">🏛️</div>'
              }}
            />
            <div className="about-image-badge">
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--cream)' }}>9+</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--cream)', textTransform: 'uppercase', letterSpacing: '1px' }}>Años</span>
            </div>
          </div>

          {/* Text */}
          <div className="about-content">
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.6rem',
              fontWeight: 700,
              color: 'var(--navy)',
              marginBottom: 20,
            }}>
              Tradición con sazón de casa
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(13,43,78,0.75)', lineHeight: 1.8, marginBottom: 20 }}>
              Todo comenzó con la receta de la abuela: chicharrón de chancho crocante, cabrito tierno, y esa cuchara brava que todos piden. Lo que empezó como un sueño familiar se convirtió en el lugar favorito de los chiclayanos.
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(13,43,78,0.75)', lineHeight: 1.8, marginBottom: 24 }}>
              No usamos atajos. Cada plato se prepara con las mismas técnicas de siempre, con ingredientes frescos del mercado y el amor que nos enseñaron.
            </p>

            {/* Stats */}
            <div className="about-stats">
              <div>
                <div className="about-stat-number">500+</div>
                <div className="about-stat-label">Clientes felices</div>
              </div>
              <div>
                <div className="about-stat-number">30+</div>
                <div className="about-stat-label">Platos tradicionales</div>
              </div>
              <div>
                <div className="about-stat-number">4.9</div>
                <div className="about-stat-label">Rating Google</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chef Section */}
        <div className="chef-section">
          <div className="chef-image">
            <img 
              src="/about/chef.jpg" 
              alt="Chef de Próspero"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div style="background: var(--navy); height: 100%; display: flex; align-items: center; justify-content: center; color: var(--cream); font-size: 3rem;">👨‍🍳</div>'
              }}
            />
          </div>
          <div className="chef-content">
            <div className="sec-label-dark">El equipo</div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.8rem',
              fontWeight: 900,
              color: 'var(--navy)',
              marginBottom: 16,
            }}>
              Quién está detrás
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(13,43,78,0.75)', lineHeight: 1.8, marginBottom: 24 }}>
              Somos una familia apasionada por preservar la cocina norteña. Cada día llegamos al mercado temprano para seleccionar los mejores ingredientes, y cada plato lleva nuestra firma: sazón de casa.
            </p>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: 'var(--navy)', color: 'var(--cream)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                👨‍🍳
              </div>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                }}>
                  Chef Principal
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--navy-mid)' }}>
                  15 años de experiencia en cocina norteña
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
