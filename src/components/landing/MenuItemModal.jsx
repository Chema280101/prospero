import { useEffect } from 'react'
import { WhatsAppIcon } from '../icons/SocialIcons'

export default function MenuItemModal({ item, isOpen, onClose }) {
  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !item) return null

  const hasImage = item.img && item.img !== '/platos/'

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>

        <div className={`modal-image-container ${hasImage ? 'has-image' : 'no-image'}`}>
          {hasImage ? (
            <img 
              src={item.img} 
              alt={item.name}
              className="modal-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.classList.remove('has-image')
                e.target.parentElement.classList.add('no-image')
                e.target.parentElement.innerHTML = '<span class="modal-placeholder">🍽️</span>'
              }}
            />
          ) : (
            <span className="modal-placeholder">🍽️</span>
          )}
        </div>

        <div className="modal-content">
          <div className="modal-price-badge">{item.price || item.vaso}</div>
          <h3 className="modal-title">{item.name.replace('✳ ', '')}</h3>
          <p className="modal-desc">{item.desc}</p>
          <a
            href={`https://wa.me/51906875085?text=${encodeURIComponent(`Hola Próspero! 👋\n\nQuiero pedir:\n${item.name}\n${item.price || ''}\n\nPor favor confirmar disponibilidad.`)}`}
            target="_blank"
            rel="noreferrer"
            className="modal-whatsapp-btn"
          >
            <WhatsAppIcon /> Pedir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
