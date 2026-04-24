// Configura tu Google Business Profile ID aquí
const GOOGLE_PLACE_ID = 'YOUR_GOOGLE_PLACE_ID'

const testimonials = [
  {
    name: 'Gabriel Valverde Tuanama',
    dish: 'Tortitas de choclo',
    text: 'Las tortitas de choclo fueron espectaculares (10/10), no he probado algo tan bueno como eso, el arroz con chancho muy sabroso (8/10) y el asado de tira con puré fue muy bueno (9/10). Creo que Próspero es un lugar visitable sí o sí de paso en Chiclayo.',
    rating: 5,
    avatar: '/avatars/gabriel.jpg',
  },
  {
    name: 'CRL CAB FROILÁN MESÍA MARINO',
    dish: 'Comida típica',
    text: 'Excelente comida típica de nuestro querido Chiclayo....de verdad que recuperaron la verdadera sazón de la abuela.',
    rating: 5,
    avatar: '/avatars/froilan.jpg',
  },
  {
    name: 'Elvira Nathaly Lupú Arias',
    dish: 'Comida general',
    text: 'Muy rica la comida, los precios son accesibles y la atención es muy buena, son muy amables. Hay estacionamiento en la parte posterior, por si vienen con carro.',
    rating: 5,
    avatar: '/avatars/elvira.jpg',
  },
  {
    name: 'Sergio Venero',
    dish: 'Calentado norteño',
    text: 'Excelente lugar, primer día en Chiclayo y sin duda la mejor opción para empezar. Recomiendo el calentado norteño, exquisito.',
    rating: 5,
    avatar: '/avatars/sergio.jpg',
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

                {/* Name */}
                <div className="testimonial-name">
                  {t.name}
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
