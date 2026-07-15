import { useRef, useState } from 'react'
import { signature } from '../data/menu'
import { useLang } from '../i18n'
import SmartImage from './SmartImage'

// คารูเซล "เชฟยง's Signature" — ควบคุมด้วย idx (ปุ่มลูกศร / จุด / ปัดนิ้ว)
export default function Signature() {
  const { tr } = useLang()
  const [idx, setIdx] = useState(0)
  const last = signature.length - 1
  const go = (i: number) => setIdx(Math.max(0, Math.min(last, i)))

  // ปัดนิ้ว (mobile)
  const startX = useRef<number | null>(null)
  const onDown = (e: React.PointerEvent) => (startX.current = e.clientX)
  const onUp = (e: React.PointerEvent) => {
    if (startX.current == null) return
    const dx = e.clientX - startX.current
    if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1))
    startX.current = null
  }

  return (
    <div className="sig" id="signature">
      <div className="sig__carousel">
          <button className="sig__arrow sig__arrow--prev" onClick={() => go(idx - 1)} disabled={idx === 0} aria-label="ก่อนหน้า">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className="sig__viewport" onPointerDown={onDown} onPointerUp={onUp}>
            <div className="sig__track" style={{ transform: `translateX(-${idx * 100}%)` }}>
              {signature.map((s) => (
                <article className="sig__slide" key={tr(s.name)}>
                  <SmartImage src={s.image} alt={tr(s.name)} className="sig__img" />
                  <div className="sig__scrim" aria-hidden />
                  <div className="sig__info">
                    <span className="sig__badge">Signature</span>
                    <h3 className="sig__name">{tr(s.name)}</h3>
                    <p className="sig__desc">{tr(s.desc)}</p>
                    <div className="sig__price">
                      <span className="sig__now">฿{s.price}</span>
                      <span className="sig__old">฿{s.oldPrice}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button className="sig__arrow sig__arrow--next" onClick={() => go(idx + 1)} disabled={idx === last} aria-label="ถัดไป">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>

        <div className="sig__dots">
          {signature.map((_, i) => (
            <button key={i} className={`sig__dot ${i === idx ? 'is-active' : ''}`} onClick={() => go(i)} aria-label={`สไลด์ ${i + 1}`} />
          ))}
        </div>
    </div>
  )
}
