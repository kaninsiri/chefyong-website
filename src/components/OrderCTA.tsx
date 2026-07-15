import { site } from '../data/site'
import { useLang, ui } from '../i18n'
import OrderButtons from './OrderButtons'

export default function OrderCTA() {
  const { tr } = useLang()
  const { contact } = site

  return (
    <section className="section order-cta" id="order">
      <div className="hero__pattern" aria-hidden />
      <div className="container order-cta__inner">
        <span className="eyebrow order-cta__eyebrow">{tr(ui.cta.eyebrow)}</span>
        <h2>{tr(ui.cta.title)}</h2>
        <p className="order-cta__lead">{tr(ui.cta.lead)}</p>
        <OrderButtons />
        <p className="order-cta__catering">
          {tr(ui.cta.cateringPrefix)}{' '}
          <a href={`tel:${contact.catering.replace(/-/g, '')}`}>{contact.catering}</a>
        </p>
      </div>
    </section>
  )
}
