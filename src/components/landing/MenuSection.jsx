import { useState } from 'react'
import MenuItemModal from './MenuItemModal'
import {
  desayunos, sanguches, complementos,
  parapicar, cucharaBrava,
  cafeteria, jugos, refrescantes, gaseosas, cantina,
} from '../../data/menuData'
 
function MenuRow({ name, price, bold, desc, img, vaso, jarra, onClick }) {
  const displayPrice = price || vaso || ''
  
  return (
    <div 
      className="menu-item"
      onClick={onClick}
      style={{ 
        cursor: desc ? 'pointer' : 'default',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => desc && (e.currentTarget.style.background = 'rgba(13,43,78,0.03)')}
      onMouseLeave={e => desc && (e.currentTarget.style.background = 'transparent')}
    >
      <span className="menu-item-name" style={{ fontWeight: bold ? 600 : 400 }}>
        {desc && <span style={{ color: 'var(--navy-mid)', marginRight: 6 }}>👁</span>}
        {name}
      </span>
      <span className="menu-item-price">{displayPrice}</span>
    </div>
  )
}
 
function MenuGroup({ title, items, onItemClick }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div className="menu-group-title">{title}</div>
      {items.map((item, i) => (
        <MenuRow key={i} {...item} onClick={() => onItemClick && item.desc && onItemClick(item)} />
      ))}
    </div>
  )
}
 
function TabDesayunos({ onItemClick }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 80px' }}>
      <div>
        <MenuGroup title="Desayunos" items={desayunos} onItemClick={onItemClick} />
        <MenuGroup title="Complementos" items={complementos} onItemClick={onItemClick} />
      </div>
      <div>
        <MenuGroup title="Sánguches" items={sanguches} onItemClick={onItemClick} />
        {/* Postre */}
        <div className="menu-group-title">Postre del día</div>
        <div style={{
          background: 'var(--navy)', padding: '28px 24px', borderRadius: 2,
          textAlign: 'center',
        }}>
          <p style={{ color: 'var(--cream)', fontSize: '0.85rem', lineHeight: 2 }}>
            Crema Volteada de La Casa · Pecado de Chocolate · Tentación de Lúcuma
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--cream)', marginTop: 8 }}>
            S/ 15
          </p>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '16px 0' }} />
          <p style={{ color: 'var(--cream)', fontSize: '0.85rem' }}>La Manzana del Deseo</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--cream)', marginTop: 4 }}>
            S/ 18
          </p>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  )
}

function TabCarta({ onItemClick }) {
  return (
    <div>
      {/* Espesado badge */}
      <a
        href="https://wa.me/51906875085?text=Hola%20Pr%C3%B3spero!%F0%9F%91%8B%0A%0AQuiero%20pedir%20el%20plato%20especial%20de%20la%20semana:%0ASu%20Lunes%20de%20Espesado%20-%20S/%2036%0A%0APor%20favor%20confirmar%20disponibilidad."
        target="_blank"
        rel="noreferrer"
        style={{
          background: 'var(--navy)', padding: '22px 32px', borderRadius: 2,
          marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div>
          <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)' }}>
            Plato especial de la semana
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 900, color: 'var(--cream)' }}>
            Su Lunes de Espesado
          </div>
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 900, color: 'var(--cream)' }}>
          S/ 36
        </div>
      </a>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 80px' }}>
        <MenuGroup title="Para Picar" items={parapicar} onItemClick={onItemClick} />
        <MenuGroup title="Cuchara Brava" items={cucharaBrava} onItemClick={onItemClick} />
      </div>
      <style>{`
        @media(max-width:768px){
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  )
}

function TabBebidas({ onItemClick }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 60px' }}>
      {/* Col 1 */}
      <div>
        <MenuGroup title="La Cafetería" items={cafeteria} onItemClick={onItemClick} />
        <p style={{ fontSize: '0.7rem', color: 'rgba(13,43,78,0.4)', fontStyle: 'italic', marginBottom: 28 }}>
          manzanilla · menta · jamaica y canela · naranja, canela y durazno · cedrón, hierba buena y hierba luisa
        </p>
        <MenuGroup title="Jugos" items={jugos} onItemClick={onItemClick} />
      </div>
      {/* Col 2 */}
      <div>
        <div className="menu-group-title">Refrescantes</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0 20px', marginBottom: 6 }}>
          <span />
          {['Vaso', 'Jarra'].map(h => (
            <span key={h} style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(13,43,78,0.35)' }}>{h}</span>
          ))}
        </div>
        {refrescantes.map((r, i) => (
          <div 
            key={i} 
            onClick={() => onItemClick && r.desc && onItemClick(r)}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr auto auto', 
              gap: '0 20px', 
              alignItems: 'baseline', 
              padding: '8px 0', 
              borderBottom: '1px solid rgba(13,43,78,0.08)',
              cursor: r.desc ? 'pointer' : 'default',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => r.desc && (e.currentTarget.style.background = 'rgba(13,43,78,0.03)')}
            onMouseLeave={e => r.desc && (e.currentTarget.style.background = 'transparent')}
          >
            <span style={{ fontSize: '0.85rem', color: 'var(--navy)' }}>
              {r.desc && <span style={{ color: 'var(--navy-mid)', marginRight: 6 }}>👁</span>}
              {r.name}
            </span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)' }}>{r.vaso}</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)' }}>{r.jarra}</span>
          </div>
        ))}
        <div style={{ marginTop: 32 }}>
          <MenuGroup title="Gaseosas" items={gaseosas} onItemClick={onItemClick} />
        </div>
      </div>
      {/* Col 3 */}
      <div>
        <MenuGroup title="La Cantina" items={cantina} onItemClick={onItemClick} />
      </div>
      <style>{`
        @media(max-width:768px){
          div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  )
}
 
const TABS = [
  { id: 'des',   label: 'Desayunos' },
  { id: 'carta', label: 'Carta Brava' },
  { id: 'beb',   label: 'Bebidas' },
]
 
export default function MenuSection() {
  const [active, setActive] = useState('des')
  const [selectedItem, setSelectedItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }
 
  return (
    <section id="carta" style={{ padding: '100px 80px', background: 'var(--cream-light)' }}>
      {/* Header */}
      <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52 }}>
        <div>
          <div className="sec-label-dark">Lo que servimos</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.1 }}>
            Nuestra <em style={{ fontStyle: 'italic', color: 'var(--navy-mid)' }}>carta</em>
          </h2>
        </div>
 
        {/* Tabs */}
        <div style={{ display: 'flex', background: 'rgba(13,43,78,0.07)', padding: 4, borderRadius: 3, gap: 3 }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: '9px 22px', borderRadius: 2, border: 'none',
                background: active === tab.id ? 'var(--navy)' : 'none',
                color: active === tab.id ? 'var(--cream)' : 'rgba(13,43,78,0.4)',
                fontSize: '0.73rem', fontWeight: 600, textTransform: 'uppercase',
                letterSpacing: '1.2px', cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
 
      {/* Panel */}
      <div className="reveal">
        {active === 'des'   && <TabDesayunos onItemClick={handleItemClick} />}
        {active === 'carta' && <TabCarta onItemClick={handleItemClick} />}
        {active === 'beb'   && <TabBebidas onItemClick={handleItemClick} />}
      </div>

      {/* Modal */}
      <MenuItemModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
 
      <style>{`
        @media(max-width:768px){
          section#carta { padding: 60px 20px !important; }
          div[style*="justifyContent: space-between"] { 
            flex-direction: column !important; 
            gap: 20px !important; 
            align-items: flex-start !important;
          }
          div[style*="background: rgba(13,43,78,0.07)"] {
            width: 100% !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            gap: 4px !important;
          }
          div[style*="background: rgba(13,43,78,0.07)"] button {
            flex: 0 0 auto !important;
            white-space: nowrap !important;
            padding: 9px 16px !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}