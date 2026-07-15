import { site } from '../data/site'
import { useLang, ui } from '../i18n'
import { GrabLogo, LineManLogo } from '../icons/BrandLogos'

// การ์ดสั่งอาหารแนวนอน (โลโก้ซ้าย / ข้อความขวา) เรียง 2 คอลัมน์ 1 แถว
export default function OrderButtons() {
  const { tr } = useLang()
  const channels = [
    { key: 'grab', label: 'Grab Food', url: site.order.grab, Logo: GrabLogo },
    { key: 'lineman', label: 'LINE MAN', url: site.order.lineman, Logo: LineManLogo },
  ]

  return (
    <div className="order-cards">
      {channels.map(({ key, label, url, Logo }) => {
        const inner = (
          <>
            <span className="order-card__logo">
              <Logo />
            </span>
            <span className="order-card__text">
              <strong>{label}</strong>
              <span className="order-card__cta">{url ? tr(ui.order.now) : tr(ui.order.soon)}</span>
            </span>
          </>
        )
        return url ? (
          <a key={key} className="order-card" href={url} target="_blank" rel="noopener noreferrer">
            {inner}
          </a>
        ) : (
          <span key={key} className="order-card order-card--soon">
            {inner}
          </span>
        )
      })}
    </div>
  )
}
