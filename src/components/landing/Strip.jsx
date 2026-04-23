const items = [
  { icon: '🛵', title: 'Delivery a domicilio', sub: 'Chiclayo · Yape / Plin / Efectivo' },
  { icon: '🪑', title: 'Reserva de mesa', sub: 'Confirmación inmediata por WhatsApp' },
  { icon: '🛍️', title: 'Recojo en local', sub: 'Av. Balta 637 · Listo en 20 min' },
  { icon: '📱', title: 'Pago fácil', sub: 'Yape / Plin / Efectivo' },
]
 
export default function Strip() {
  return (
    <div style={{
      background: 'var(--navy)',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            padding: '36px 32px', display: 'flex', alignItems: 'center', gap: 16,
            borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            transition: 'background 0.25s', cursor: 'default',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(240,234,214,0.05)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{item.icon}</span>
          <div>
            <div style={{ color: 'var(--cream)', fontSize: '0.88rem', fontWeight: 500 }}>{item.title}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: 3 }}>{item.sub}</div>
          </div>
        </div>
      ))}
 
      <style>{`
        @media (max-width: 768px) {
          div[style*="background: var(--navy)"] {
            padding: 20px !important;
          }
          div[style*="repeat(4, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
          div[style*="padding: 36px 32px"] {
            padding: 20px 16px !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          div[style*="padding: 36px 32px"]:nth-child(2) {
            border-bottom: 1px solid var(--border) !important;
          }
          div[style*="padding: 36px 32px"]:nth-child(3),
          div[style*="padding: 36px 32px"]:nth-child(4) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </div>
  )
}