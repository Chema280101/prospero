import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { WhatsAppIcon } from '../icons/SocialIcons'

export default function OrderSection() {
  const [form, setForm] = useState({ nombre: '', telefono: '', tipo: 'delivery', direccion: '', pedido: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.nombre || !form.pedido) return alert('Por favor completa nombre y pedido.')
    setLoading(true)
    try {
      await supabase.from('pedidos').insert([{ ...form, estado: 'nuevo' }])
      // Open WhatsApp with pre-filled message
      const msg = encodeURIComponent(
        `Hola Próspero! 👋\n\nNombre: ${form.nombre}\nTipo: ${form.tipo === 'delivery' ? '🛵 Delivery' : '🛍️ Recojo'}\n${form.direccion ? `Dirección: ${form.direccion}\n` : ''}Pedido: ${form.pedido}`
      )
      window.open(`https://wa.me/51906875085?text=${msg}`, '_blank')
      setSent(true)
      setForm({ nombre: '', telefono: '', tipo: 'delivery', direccion: '', pedido: '' })
    } catch (e) {
      alert('Error al enviar. Por favor escríbenos directo por WhatsApp.')
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%', background: 'rgba(240,234,214,0.06)',
    border: '1px solid rgba(240,234,214,0.13)', color: 'var(--cream)',
    padding: '13px 16px', borderRadius: 2,
    fontSize: '0.9rem', fontFamily: "'DM Sans', sans-serif",
    outline: 'none', marginBottom: 16,
  }

  return (
    <section id="pedido" style={{ background: 'var(--navy)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

      {/* LEFT */}
      <div className="reveal-left" style={{ padding: '90px 60px 90px 80px' }}>
        <div className="sec-label-light">Sin llamadas · Respuesta inmediata</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', fontWeight: 900, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 44 }}>
          ¿Cómo quieres<br /><em style={{ fontStyle: 'italic', opacity: 0.55 }}>tu pedido?</em>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { icon: '🛵', title: 'Delivery a domicilio', sub: 'Chiclayo · Yape / Plin / Efectivo al entregar', href: 'https://wa.me/51906875085?text=Hola!%20Quiero%20pedir%20delivery%20🛵' },
            { icon: '🛍️', title: 'Recojo en local', sub: 'Av. Balta 636 · Listo en 20 minutos', href: 'https://wa.me/51906875085?text=Hola!%20Quiero%20pedir%20para%20recoger%20🛍️' },
            { icon: '🪑', title: 'Reservar mesa', sub: 'Elige fecha, hora y número de personas', href: '#reservas' },
          ].map((opt, i) => (
            <a
              key={i} href={opt.href}
              target={opt.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 18,
                background: 'rgba(240,234,214,0.05)', border: '1px solid var(--border)',
                padding: '20px 24px', borderRadius: 2, cursor: 'pointer', textDecoration: 'none',
                transition: 'all 0.22s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(240,234,214,0.1)'; e.currentTarget.style.borderColor = 'rgba(240,234,214,0.28)'; e.currentTarget.style.transform = 'translateX(4px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(240,234,214,0.05)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)' }}
            >
              <span style={{ fontSize: '1.5rem' }}>{opt.icon}</span>
              <div>
                <div style={{ color: 'var(--cream)', fontWeight: 500, fontSize: '0.92rem' }}>{opt.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.73rem', marginTop: 2 }}>{opt.sub}</div>
              </div>
              <span style={{ marginLeft: 'auto', color: 'var(--muted)' }}>→</span>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — FORM */}
      <div className="reveal-right" style={{
        padding: '80px 60px', background: 'rgba(240,234,214,0.03)',
        borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: 'var(--cream)', marginBottom: 28 }}>
          Formulario de Pedido
        </h3>

        {sent && (
          <div style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', color: '#4ade80', padding: '12px 16px', borderRadius: 2, marginBottom: 20, fontSize: '0.85rem' }}>
            ✅ Pedido enviado. Te redirigimos a WhatsApp para confirmar.
          </div>
        )}

        <label style={{ display: 'block', fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '1.8px', color: 'var(--muted)', marginBottom: 7 }}>Tu nombre</label>
        <input style={inputStyle} placeholder="Ej. María García" value={form.nombre} onChange={e => set('nombre', e.target.value)} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '1.8px', color: 'var(--muted)', marginBottom: 7 }}>Teléfono</label>
            <input style={inputStyle} type="tel" placeholder="9XX XXX XXX" value={form.telefono} onChange={e => set('telefono', e.target.value)} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '1.8px', color: 'var(--muted)', marginBottom: 7 }}>Tipo</label>
            <select
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
              value={form.tipo}
              onChange={e => set('tipo', e.target.value)}
            >
              <option value="delivery">🛵 Delivery</option>
              <option value="recojo">🛍️ Recojo en local</option>
            </select>
          </div>
        </div>

        {form.tipo === 'delivery' && (
          <>
            <label style={{ display: 'block', fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '1.8px', color: 'var(--muted)', marginBottom: 7 }}>Dirección</label>
            <input style={inputStyle} placeholder="Calle / Av., número, referencia" value={form.direccion} onChange={e => set('direccion', e.target.value)} />
          </>
        )}

        <label style={{ display: 'block', fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '1.8px', color: 'var(--muted)', marginBottom: 7 }}>Tu pedido</label>
        <input style={inputStyle} placeholder="Ej. 1 Cabrito norteño + 1 Chicha morada jarra" value={form.pedido} onChange={e => set('pedido', e.target.value)} />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: '100%', background: 'var(--cream)', color: 'var(--navy-dark)',
            padding: '15px', border: 'none', borderRadius: 2,
            fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px',
            cursor: loading ? 'not-allowed' : 'pointer', marginTop: 6,
            transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif",
            opacity: loading ? 0.7 : 1,
          }}
          onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'translateY(-1px)' }}}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          {loading ? 'Enviando...' : <>Enviar pedido por WhatsApp <WhatsAppIcon /></>}
        </button>
      </div>

      <style>{`
        @media(max-width:768px){
          section#pedido { grid-template-columns: 1fr !important; }
          section#pedido > div:first-child { padding: 60px 20px !important; }
          section#pedido > div:last-child  { padding: 40px 20px !important; }
          section#pedido > div:last-child { border-left: none !important; border-top: 1px solid var(--border) !important; }
        }
      `}</style>
    </section>
  )
}