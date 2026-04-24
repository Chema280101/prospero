import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Music, Users, Heart } from 'lucide-react'

const images = [
  '/experience/ambiente-1.png',
  '/experience/ambiente-2.jpg',
  '/experience/ambiente-3.jpg',
]

const features = [
  { icon: Music, title: 'Música Ambiental', desc: 'Playlist curada con música peruana y latinoamericana' },
  { icon: Users, title: 'Ambiente Familiar', desc: 'Espacio perfecto para compartir con familia y amigos' },
  { icon: Heart, title: 'Atención Personal', desc: 'Servicio cálido como en casa' },
]

export default function ExperienceSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % images.length)
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + images.length) % images.length)

  return (
    <section className="experience-section">
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div className="experience-header">
          <div className="sec-label-light" style={{ justifyContent: 'center', marginBottom: 20 }}>
            La experiencia
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            fontWeight: 900,
            color: 'var(--cream)',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Ven por la comida, <em style={{ fontStyle: 'italic', color: 'var(--muted)' }}>quédate por la experiencia</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
            Más que un restaurante, un lugar donde la tradición norteña cobra vida en cada detalle.
          </p>
        </div>

        {/* Slider */}
        <div className="experience-slider">
          <div className="slider-container">
            {images.map((img, i) => (
              <div 
                key={i}
                className={`slide ${i === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Ambiente Próspero ${i + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div style="background: var(--navy-dark); height: 100%; display: flex; align-items: center; justify-content: center; color: var(--cream); font-size: 4rem;">🏛️</div>'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button className="slider-nav prev" onClick={prevSlide} aria-label="Anterior">
            <ChevronLeft size={32} />
          </button>
          <button className="slider-nav next" onClick={nextSlide} aria-label="Siguiente">
            <ChevronRight size={32} />
          </button>

          {/* Dots */}
          <div className="slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="experience-features">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 100px 60px;
          background: var(--navy-dark);
          position: relative;
          overflow: hidden;
        }
        .experience-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .experience-slider {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 16/9;
          margin-bottom: 60px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .slide.active { opacity: 1; }
        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(240,234,214,0.2);
          color: var(--cream);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 10;
        }
        .slider-nav:hover {
          background: rgba(240,234,214,0.4);
        }
        .slider-nav.prev { left: 20px; }
        .slider-nav.next { right: 20px; }

        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(240,234,214,0.4);
          cursor: pointer;
          transition: all 0.3s;
        }
        .dot.active {
          background: var(--cream);
          width: 30px;
          border-radius: 5px;
        }

        .experience-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .feature-card {
          text-align: center;
          padding: 32px;
          background: rgba(240,234,214,0.05);
          border-radius: 8px;
          border: 1px solid rgba(240,234,214,0.1);
          transition: all 0.3s;
        }
        .feature-card:hover {
          background: rgba(240,234,214,0.1);
          transform: translateY(-4px);
        }
        .feature-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          background: rgba(240,234,214,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cream);
        }
        .feature-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--cream);
          margin-bottom: 12px;
        }
        .feature-desc {
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .experience-features {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .experience-section { padding: 60px 20px; max-width: 100vw; }
          .experience-header { padding: 0 10px; }
          .experience-slider {
            aspect-ratio: 4/3;
            margin-bottom: 40px;
          }
          .slider-nav {
            width: 40px;
            height: 40px;
          }
          .slider-nav.prev { left: 12px; }
          .slider-nav.next { right: 12px; }
          .feature-card { padding: 24px; }
        }
        @media (max-width: 412px) {
          .experience-section { padding: 48px 16px; }
          .experience-header { padding: 0; }
          .experience-slider {
            aspect-ratio: 3/2;
            margin-bottom: 32px;
          }
          .slider-nav {
            width: 36px;
            height: 36px;
          }
          .slider-nav.prev { left: 8px; }
          .slider-nav.next { right: 8px; }
          .feature-card { padding: 20px; }
          .feature-icon {
            width: 56px;
            height: 56px;
          }
          .feature-title {
            font-size: 1.1rem;
          }
          .feature-desc {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}
