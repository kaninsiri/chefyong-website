import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { useLang, ui, LangSwitcher } from '../i18n'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [onDark, setOnDark] = useState(false)
  const { tr } = useLang()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // โปร่งใส + ตัวอักษรขาว เมื่อ navbar อยู่เหนือส่วน About (พื้นภาพเข้ม)
      const about = document.getElementById('about')
      if (about) {
        const r = about.getBoundingClientRect()
        setOnDark(r.top <= 74 && r.bottom > 74)
      }
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
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${onDark ? 'navbar--dark' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="brand-badge">
            <Logo size={40} />
          </span>
          <span className="navbar__name">{tr(site.fullName)}</span>
        </a>
        <nav className="navbar__nav">
          <a href="#about">{tr(ui.nav.about)}</a>
          <a href="#menu">{tr(ui.nav.menu)}</a>
          <a href="#contact">{tr(ui.nav.contact)}</a>
          <LangSwitcher />
          <a href="#order" className="navbar__cta">{tr(ui.nav.order)}</a>
        </nav>
      </div>
    </header>
  )
}
