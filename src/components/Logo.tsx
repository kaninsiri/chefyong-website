import { useState } from 'react'
import { site } from '../data/site'
import { useLang } from '../i18n'

// โลโก้วงกลม — ใช้ไฟล์จริงถ้ามี (public/images/logo/logo.jpg)
// ถ้ายังไม่มี จะ fallback เป็นตราวงกลม SVG ที่ทำเลียนแบบไว้ก่อน
export default function Logo({ size = 44 }: { size?: number }) {
  const [failed, setFailed] = useState(false)
  const { tr } = useLang()
  const name = tr(site.fullName)

  if (!failed) {
    return (
      <img
        src={site.logo}
        alt={name}
        width={size}
        height={size}
        className="logo-img"
        onError={() => setFailed(true)}
      />
    )
  }

  // Fallback SVG seal
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="logo-img" aria-label={name}>
      <circle cx="50" cy="50" r="48" fill="#fff" />
      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--c-red)" strokeWidth="4" />
      <text x="50" y="30" textAnchor="middle" fontSize="12" fill="var(--c-red)" fontFamily="serif">永</text>
      <text x="50" y="60" textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--c-red)">เชฟยง</text>
    </svg>
  )
}
