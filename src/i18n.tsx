import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'

export type Lang = 'th' | 'en' | 'zh'
export type TStr = Record<Lang, string>

export const LANGS: { code: Lang; short: string; label: string }[] = [
  { code: 'th', short: 'ไทย', label: 'ไทย' },
  { code: 'en', short: 'ENG', label: 'English' },
  { code: 'zh', short: '中文', label: '中文' },
]

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (s?: TStr) => string }
const LangContext = createContext<Ctx>({ lang: 'th', setLang: () => {}, tr: (s) => s?.th ?? '' })

export function useLang() {
  return useContext(LangContext)
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? (localStorage.getItem('lang') as Lang | null) : null
    return saved && ['th', 'en', 'zh'].includes(saved) ? saved : 'th'
  })
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])
  const tr = (s?: TStr) => (s ? s[lang] : '')
  return <LangContext.Provider value={{ lang, setLang, tr }}>{children}</LangContext.Provider>
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  )
}

// ปุ่มเปลี่ยนภาษา (globe + ตัวย่อ) ใน top bar
export function LangSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANGS.find((l) => l.code === lang)!

  // ปิด popover เมื่อคลิกนอกพื้นที่ / กด Esc / เลื่อนหน้า (ปุ่มยังอยู่เสมอ)
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onScroll = () => setOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [open])

  return (
    <div className="lang" ref={ref}>
      <button className="lang__btn" onClick={() => setOpen((o) => !o)} aria-label="เปลี่ยนภาษา" aria-expanded={open}>
        <GlobeIcon />
        <span>{current.short}</span>
      </button>
      {open && (
        <div className="lang__menu">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className={`lang__opt ${l.code === lang ? 'is-active' : ''}`}
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── สตริงส่วนโครง (chrome) ทั้งเว็บ ──
export const ui = {
  nav: {
    about: { th: 'เกี่ยวกับร้าน', en: 'About', zh: '關於我們' },
    menu: { th: 'เมนู', en: 'Menu', zh: '菜單' },
    contact: { th: 'ติดต่อ', en: 'Contact', zh: '聯絡' },
    order: { th: 'สั่งเลย', en: 'Order', zh: '立即點餐' },
  },
  hero: {
    branch: { th: 'สาขารัชดาภิเษก', en: 'Ratchadaphisek Branch', zh: '拉差達披色分店' },
    tagline: {
      th: 'หมูแดงฮ่องกงสูตรลับ หมัก 48 ชั่วโมง',
      en: 'Secret-recipe Hong Kong char siu, marinated 48 hours',
      zh: '秘製港式叉燒 · 醃製48小時',
    },
    description: {
      th: 'หมูแดงคัดพิเศษ หมักสูตรลับสไตล์ฮ่องกงนาน 48 ชั่วโมง เคลือบซอสหอมเข้ม เนื้อฉ่ำละมุน หอมกรุ่นทุกคำ',
      en: 'Premium char siu marinated 48 hours in a secret Hong Kong recipe, glazed in a rich savory sauce — juicy, tender and aromatic in every bite.',
      zh: '精選叉燒以秘製港式配方醃製48小時，裹上濃香醬汁，每一口都鮮嫩多汁、香氣四溢。',
    },
    scroll: { th: 'ดูเมนูทั้งหมด', en: 'View full menu', zh: '查看完整菜單' },
  },
  order: {
    now: { th: 'สั่งเลย →', en: 'Order now →', zh: '立即點餐 →' },
    soon: { th: 'เปิดเร็วๆ นี้', en: 'Coming soon', zh: '即將開放' },
  },
  about: {
    eyebrow: { th: 'เกี่ยวกับร้าน', en: 'About Us', zh: '關於我們' },
    title: { th: 'เทพหมูแดงฮ่องกงตัวจริง', en: 'The Real Hong Kong Char Siu Master', zh: '真正的港式叉燒之神' },
  },
  menu: {
    eyebrow: { th: 'เมนูของเรา', en: 'Our Menu', zh: '我們的菜單' },
    title: { th: 'เมนูทั้งหมด', en: 'Full Menu', zh: '全部菜單' },
    sub: {
      th: 'คัดสรรทุกจาน · สั่งได้ผ่าน Grab และ LINE MAN',
      en: 'Every dish crafted with care · Order via Grab & LINE MAN',
      zh: '每道菜用心製作 · 可透過 Grab 與 LINE MAN 點餐',
    },
    signatureEyebrow: { th: 'ไฮไลต์', en: 'Highlight', zh: '精選推薦' },
    signatureTitle: { th: "เชฟยง's Signature", en: "Chef Yong's Signature", zh: '永哥招牌' },
  },
  cta: {
    eyebrow: { th: 'สั่งเลย', en: 'Order Now', zh: '立即點餐' },
    title: { th: 'หิวแล้วใช่มั้ย?', en: 'Hungry yet?', zh: '餓了嗎？' },
    lead: {
      th: 'เลือกช่องทางที่สะดวก ส่งตรงถึงหน้าบ้านคุณ',
      en: 'Choose your preferred delivery — straight to your door',
      zh: '選擇方便的外送渠道，直送到府',
    },
    cateringPrefix: { th: 'รับจัดงาน / ออกร้าน โทร', en: 'Catering & events, call', zh: '承接宴會 / 擺攤，電話' },
  },
  footer: {
    contactHead: { th: 'ติดต่อร้าน', en: 'Contact', zh: '聯絡我們' },
    hours: { th: 'เวลาเปิด', en: 'Hours', zh: '營業時間' },
    phoneCatering: { th: 'โทร / รับจัดงาน', en: 'Tel / Catering', zh: '電話 / 宴會' },
    followHead: { th: 'ติดตามเรา', en: 'Follow Us', zh: '追蹤我們' },
    soon: { th: 'เร็วๆ นี้', en: 'Coming soon', zh: '即將公布' },
    rights: { th: 'สงวนลิขสิทธิ์', en: 'All rights reserved', zh: '版權所有' },
  },
} as const
