import { Fragment, useState } from 'react'
import { menu } from '../data/menu'
import { useLang, ui } from '../i18n'
import SmartImage from './SmartImage'
import ImageModal from './ImageModal'
import Signature from './Signature'
import IngredientIcon, { ingredientLabel } from '../icons/IngredientIcons'

export default function Menu() {
  const { tr } = useLang()
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{tr(ui.menu.eyebrow)}</span>
          <h2>{tr(ui.menu.signatureTitle)}</h2>
          <p className="section-head__sub">{tr(ui.menu.sub)}</p>
        </div>

        <Signature />

        <h3 className="menu__all-head">{tr(ui.menu.title)}</h3>

        {menu.map((cat) => (
          <div key={cat.id} className="menu__cat">
            <div className="menu__cat-head">
              <h3>{tr(cat.title)}</h3>
              {cat.subtitle && <p>{tr(cat.subtitle)}</p>}
            </div>

            <div className="menu__grid">
              {cat.items.map((item) => {
                const name = tr(item.name)
                return (
                  <article key={name} className="dish">
                    <button
                      type="button"
                      className="dish__media"
                      onClick={() => setModal({ src: item.image, alt: name })}
                      aria-label={name}
                    >
                      <SmartImage src={item.image} alt={name} className="dish__img" />
                    </button>
                    <div className="dish__body">
                      <h4 className="dish__name">{name}</h4>
                      <p className="dish__desc">{item.desc ? tr(item.desc) : ''}</p>

                      <div className="dish__ingredients" aria-label="ส่วนประกอบ">
                        {item.ingredients.map((ing, i) => (
                          <Fragment key={ing}>
                            {i > 0 && <span className="plus" aria-hidden>+</span>}
                            <span className="chip">
                              <IngredientIcon name={ing} />
                              <span>{tr(ingredientLabel[ing])}</span>
                            </span>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <span className="dish__price">฿{item.price}</span>
                  </article>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <ImageModal src={modal?.src ?? null} alt={modal?.alt ?? ''} onClose={() => setModal(null)} />
    </section>
  )
}
