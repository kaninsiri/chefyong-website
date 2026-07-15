import { useEffect } from 'react'

// โมดัลดูรูป — กดพื้นหลังหรือปุ่มปิดเพื่อปิด, กด Esc ได้
export default function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string | null
  alt: string
  onClose: () => void
}) {
  useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [src, onClose])

  if (!src) return null

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true">
      <button className="modal__close" onClick={onClose} aria-label="ปิด">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <img className="modal__img" src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
