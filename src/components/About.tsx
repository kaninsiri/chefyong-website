import { useEffect, useRef, useState } from 'react'
import { story } from '../data/site'
import { useLang, ui } from '../i18n'

// รูปพื้นหลังแต่ละ step (ตามที่ลูกค้ากำหนด)
const STEP_IMAGES = [
  '/images/about/opt/11.jpg',
  '/images/about/opt/12.jpg',
  '/images/about/opt/13.jpg',
  '/images/about/opt/14.jpg',
]

// About สไตล์ Apple: section สูง, ภาพเต็มจอ pin ไว้, เลื่อนแล้วเปลี่ยน step + ข้อความ fade ขึ้น
export default function About() {
  const { tr } = useLang()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0) // 0..1 ต่อเนื่อง (ให้ node ไหลบนราง)
  const steps = story.length

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1))
        const p = total > 0 ? scrolled / total : 0
        setProgress(p)
        const step = Math.min(steps - 1, Math.max(0, Math.floor(p * steps)))
        setActive((prev) => (prev === step ? prev : step))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [steps])

  return (
    <section className="about" id="about" ref={wrapRef} style={{ height: `${steps * 100}vh` }}>
      <div className="about__stage">
        {STEP_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className={`about__bg ${i === active ? 'is-active' : ''}`}
          />
        ))}
        <div className="about__scrim" aria-hidden />

        <span className="about__eyebrow">{tr(ui.about.eyebrow)}</span>

        <div className="about__content" key={active}>
          <span className="about__count">
            {String(active + 1).padStart(2, '0')}
            <i>/ {String(steps).padStart(2, '0')}</i>
          </span>
          <span className="about__kicker">{tr(story[active].eyebrow)}</span>
          <h2 className="about__title">{tr(story[active].title)}</h2>
          <p className="about__body">{tr(story[active].body)}</p>
        </div>

        {/* node วิ่งบนราง — แสดงว่ากำลังไหล */}
        <div className="about__rail" aria-hidden>
          <span className="about__rail-fill" style={{ height: `${progress * 100}%` }} />
          {story.map((_, i) => (
            <span key={i} className={`about__tick ${i <= active ? 'is-done' : ''}`} style={{ top: `${(i / (steps - 1)) * 100}%` }} />
          ))}
          <span className="about__rail-node" style={{ top: `${progress * 100}%` }} />
        </div>
      </div>
    </section>
  )
}
