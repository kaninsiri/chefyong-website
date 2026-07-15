import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { useLang, ui, LangSwitcher } from '../i18n'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [onDark, setOnDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { tr } = useLang()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const about = document.getElementById('about')
      if (about) {
        const r = about.getBoundingClientRect()
        setOnDark(r.top <= 74 && r.bottom > 74)
      }
      setMenuOpen(false) // ปิดเมนูมือถือเมื่อเลื่อน
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${onDark ? 'navbar--dark' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-badge">
            <Logo size={40} />
          </span>
          <span className="navbar__name">{tr(site.fullName)}</span>
        </a>

        <nav className="navbar__nav">
          <div className="navbar__links">
            <a href="#about" onClick={() => setMenuOpen(false)}>{tr(ui.nav.about)}</a>
            <a href="#menu" onClick={() => setMenuOpen(false)}>{tr(ui.nav.menu)}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{tr(ui.nav.contact)}</a>
            <LangSwitcher />
          </div>
          <a href="#order" className="navbar__cta" onClick={() => setMenuOpen(false)}>{tr(ui.nav.order)}</a>
          <button
            className="navbar__burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="เมนู"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
