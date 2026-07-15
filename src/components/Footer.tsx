import { site } from '../data/site'
import { useLang, ui } from '../i18n'
import Logo from './Logo'
import { InstagramIcon, FacebookIcon, TiktokIcon, LineIcon } from '../icons/BrandIcons'

export default function Footer() {
  const { tr } = useLang()
  const { social, contact } = site

  const socials = [
    { key: 'ig', url: social.instagram, label: social.instagramHandle, Icon: InstagramIcon },
    { key: 'fb', url: social.facebook, label: 'Facebook', Icon: FacebookIcon },
    { key: 'tt', url: social.tiktok, label: social.tiktokHandle, Icon: TiktokIcon },
    { key: 'line', url: social.line, label: 'LINE', Icon: LineIcon },
  ].filter((l) => l.url)

  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <span className="brand-badge brand-badge--lg">
            <Logo size={56} />
          </span>
          <div>
            <div className="footer__name">{tr(site.fullName)}</div>
            <div className="footer__branch">{tr(ui.hero.branch)}</div>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__head">{tr(ui.footer.contactHead)}</h4>
          <ul className="footer__list">
            <li>
              <span className="footer__k">{tr(ui.footer.hours)}</span>
              <span className="footer__v">{contact.hours}</span>
            </li>
            <li>
              <span className="footer__k">{tr(ui.footer.phoneCatering)}</span>
              <a className="footer__tel" href={`tel:${contact.phone.replace(/[-\s]/g, '')}`}>{contact.phone}</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__head">{tr(ui.footer.followHead)}</h4>
          <div className="footer__socials">
            {socials.map(({ key, url, label, Icon }) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="footer__social">
                <span className="footer__social-icon"><Icon size={18} /></span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© 2026 {tr(site.fullName)} · {tr(ui.footer.rights)}</p>
      </div>
    </footer>
  )
}
