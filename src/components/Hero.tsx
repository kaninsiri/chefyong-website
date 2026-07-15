import { site } from '../data/site'
import { useLang, ui } from '../i18n'
import Logo from './Logo'
import OrderButtons from './OrderButtons'
import CornerMark from './CornerMark'

export default function Hero() {
  const { tr } = useLang()
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__logo">
          <Logo size={112} />
        </div>

        {/* กรอบลายจีนล้อมชื่อร้าน */}
        <div className="hero__frame">
          <CornerMark pos="tl" />
          <CornerMark pos="tr" />
          <CornerMark pos="br" />
          <CornerMark pos="bl" />
          <span className="eyebrow hero__eyebrow">{tr(ui.hero.branch)}</span>
          <h1 className="hero__title">{tr(site.fullName)}</h1>
          <p className="hero__tagline">{tr(ui.hero.tagline)}</p>
        </div>

        <p className="hero__desc">{tr(ui.hero.description)}</p>
        <OrderButtons />
        <a href="#menu" className="hero__scroll">{tr(ui.hero.scroll)}</a>
      </div>
    </section>
  )
}
