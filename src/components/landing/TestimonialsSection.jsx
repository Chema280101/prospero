// Configura tu Google Business Profile ID aquí
const GOOGLE_PLACE_ID = 'YOUR_GOOGLE_PLACE_ID'

const testimonials = [
  {
    name: 'Carlos R.',
    dish: 'Cuchara Brava',
    text: 'La mejor cuchara brava de Chiclayo. El sabor auténtico norteño que no se encuentra en otro lado.',
    rating: 5,
    avatar: '/avatars/carlos.jpg',
  },
  {
    name: 'María G.',
    dish: 'Chicharrón de Chancho',
    text: 'Increíble. El chicharrón está crocante por fuera y suave por dentro. Vengo cada domingo con mi familia.',
    rating: 5,
    avatar: '/avatars/maria.jpg',
  },
  {
    name: 'Jorge L.',
    dish: 'Frito Chiclayano',
    text: 'El cabrito es tierno y bien sazonado. Me recuerda a los domingos de mi infancia en Lambayeque.',
    rating: 5,
    avatar: '/avatars/jorge.jpg',
  },
  {
    name: 'Ana P.',
    dish: 'Cau Cau',
    text: 'Receta de la abuela, se nota el amor en cada cucharada. El mondongo está perfecto.',
    rating: 5,
    avatar: '/avatars/ana.jpg',
  },
  {
    name: 'Pedro M.',
    dish: 'Patita con Maní',
    text: 'La salsa de maní es espectacular. Crema, sustancioso y con el sazón justo.',
    rating: 5,
    avatar: '/avatars/pedro.jpg',
  },
  {
    name: 'Lucía S.',
    dish: 'Sangrecita',
    text: 'Plato tradicional que casi no se encuentra. Aquí lo preparan como debe ser.',
    rating: 5,
    avatar: '/avatars/lucia.jpg',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="reveal testimonials-section">
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div className="testimonials-header">
          <div className="sec-label-dark" style={{ justifyContent: 'center', marginBottom: 20 }}>
            Lo que dicen nuestros clientes
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            fontWeight: 900,
            color: 'var(--navy)',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Testimonios <em style={{ fontStyle: 'italic', color: 'var(--navy-mid)' }}>reales</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(13,43,78,0.6)', maxWidth: 600, margin: '0 auto' }}>
            Más de 500 clientes satisfechos nos respaldan. Ven y descubre por qué somos el favorito de Chiclayo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              {/* Avatar */}
              <div className="testimonial-avatar">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<span style="font-size: 2.5rem; color: var(--navy);">${t.name.charAt(0)}</span>`
                  }}
                />
              </div>

              {/* Content */}
              <div className="testimonial-content">
                {/* Rating */}
                <div className="testimonial-rating">
                  {'★'.repeat(t.rating)}
                </div>

                {/* Text */}
                <p className="testimonial-text">
                  "{t.text}"
                </p>

                {/* Name & Dish */}
                <div>
                  <div className="testimonial-name">
                    {t.name}
                  </div>
                  <div className="testimonial-dish">
                    Probó: {t.dish}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Embed */}
        <div className="google-reviews-section">
          <div className="google-reviews-header">
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--navy)',
              marginBottom: 12,
            }}>
              Calificación en Google
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(13,43,78,0.6)' }}>
              Lee más reseñas en nuestro perfil de Google Business
            </p>
          </div>
          
          <a
            href={`https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`}
            target="_blank"
            rel="noreferrer"
            className="btn-cream"
            style={{ marginTop: 20 }}
          >
            ★★★★★ Escribir una reseña
          </a>
        </div>
      </div>
    </section>
  )
}
