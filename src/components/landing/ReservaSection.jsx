import { useState } from 'react'
import { supabase } from '../../lib/supabase'

const HORARIOS = [
  { label: '11:00 AM', full: false },
  { label: '12:00 PM', full: false },
  { label: '1:00 PM',  full: false },
  { label: '2:00 PM',  full: false },
  { label: '7:00 PM',  full: true  },
  { label: '8:00 PM',  full: false },
  { label: '9:00 PM',  full: false },
  { label: '9:30 PM',  full: false },
]

export default function ReservaSection() {
  const [hora, setHora] = useState('12:00 PM')
  const [form, setForm] = useState({ nombre: '', telefono: '', personas: '', fecha: '' })
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.nombre || !form.fecha || !hora) return alert('Por favor completa todos los campos.')
    setLoading(true)
    try {
      await supabase.from('reservas').insert([{ ...form, hora, estado: 'pendiente' }])
      const msg = encodeURIComponent(
        `Hola Próspero! Quiero reservar una mesa 🪑\n\nNombre: ${form.nombre}\nPersonas: ${form.personas}\nFecha: ${form.fecha}\nHora: ${hora}\nTeléfono: ${form.telefono}`
      )
      window.open(`https://wa.me/51906875085?text=${msg}`, '_blank')
      setForm({ nombre: '', telefono: '', personas: '', fecha: '' })
    } catch (e) {
      alert('Error. Por favor escríbenos directo por WhatsApp.')
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', background: 'white',
    border: '1px solid rgba(13,43,78,0.15)', color: 'var(--navy)',
    padding: '13px 16px', borderRadius: 2,
    fontSize: '0.9rem', fontFamily: "'DM Sans', sans-serif", outline: 'none',
  }

  const labelStyle = {
    display: 'block', fontSize: '0.63rem', textTransform: 'uppercase',
    letterSpacing: '1.8px', color: 'rgba(13,43,78,0.45)', marginBottom: 7,
  }

  return (
    <section id="reservas" className="reserva-grid">

      {/* LEFT — visual card (hidden on mobile via CSS) */}
      <div className="reveal-left reserva-left-card" style={{
        background: 'var(--navy)', borderRadius: 2, padding: '60px 48px',
        display: 'flex', flexDirection: 'column', gap: 28, minHeight: 460,
        justifyContent: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', border: '1px solid var(--border)' }} />
        <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', border: '1px solid rgba(240,234,214,0.08)' }} />
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 900, color: 'var(--cream)', lineHeight: 1.15 }}>
          Tu mesa te<br /><em style={{ fontStyle: 'italic', opacity: 0.55 }}>está esperando</em>
        </h2>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
        {[
          { icon: '⚡', title: 'Confirmación en minutos', sub: 'Te respondemos por WhatsApp al instante, sin esperas.' },
          { icon: '🪑', title: 'Mesa garantizada',        sub: 'Sin sorpresas al llegar. Tu espacio reservado.' },
          { icon: '📍', title: 'Av. Balta 636, Chiclayo', sub: 'En el corazón de la ciudad.' },
        ].map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <span style={{ fontSize: '1.4rem' }}>{f.icon}</span>
            <div>
              <div style={{ color: 'var(--cream)', fontWeight: 500, fontSize: '0.88rem' }}>{f.title}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.73rem', marginTop: 3, lineHeight: 1.5 }}>{f.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT — form */}
      <div className="reveal-right">
        <div className="sec-label-dark">Garantiza tu lugar</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.1, marginBottom: 14 }}>
          Reserva tu<br /><em style={{ fontStyle: 'italic', color: 'var(--navy-mid)' }}>mesa online</em>
        </h2>
        <p style={{ color: 'rgba(13,43,78,0.5)', lineHeight: 1.75, marginBottom: 28, fontSize: '0.9rem' }}>
          Elige el día, la hora y cuántos son. Sin llamadas, sin esperas.
        </p>

        {/* Form fields — responsive grid */}
        <div className="reserva-form-grid">
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>Tu nombre</label>
            <input style={inputStyle} placeholder="Nombre completo" value={form.nombre} onChange={e => set('nombre', e.target.value)} />
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>Personas</label>
            <input style={inputStyle} type="number" placeholder="2" min="1" max="20" value={form.personas} onChange={e => set('personas', e.target.value)} />
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>Fecha</label>
            <input style={inputStyle} type="date" value={form.fecha} onChange={e => set('fecha', e.target.value)} />
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>Teléfono</label>
            <input style={inputStyle} type="tel" placeholder="9XX XXX XXX" value={form.telefono} onChange={e => set('telefono', e.target.value)} />
          </div>
        </div>

        <p style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '1.8px', color: 'rgba(13,43,78,0.4)', marginBottom: 10 }}>
          Selecciona un horario
        </p>

        {/* Time grid */}
        <div className="reserva-time-grid">
          {HORARIOS.map((h) => (
            <button
              key={h.label}
              disabled={h.full}
              onClick={() => !h.full && setHora(h.label)}
              style={{
                padding: '10px 4px', textAlign: 'center', borderRadius: 2,
                fontSize: '0.72rem', fontWeight: 500,
                cursor: h.full ? 'not-allowed' : 'pointer',
                border: '1px solid',
                borderColor: hora === h.label && !h.full ? 'var(--navy)' : 'rgba(13,43,78,0.15)',
                background: hora === h.label && !h.full ? 'var(--navy)' : 'white',
                color: hora === h.label && !h.full ? 'var(--cream)' : h.full ? 'rgba(13,43,78,0.3)' : 'var(--navy)',
                textDecoration: h.full ? 'line-through' : 'none',
                transition: 'all 0.18s', fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {h.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-cream"
          style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Enviando...' : 'Confirmar reserva por WhatsApp 🪑'}
        </button>
      </div>

    </section>
  )
}