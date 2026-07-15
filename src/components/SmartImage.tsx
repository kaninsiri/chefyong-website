import { useState } from 'react'

// แสดงรูปจริงถ้ามีไฟล์ ถ้าโหลดไม่ได้จะขึ้น placeholder พร้อมตราร้าน
export default function SmartImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`smart-img smart-img--placeholder ${className ?? ''}`} aria-label={alt}>
        <span className="smart-img__seal">永</span>
        <span className="smart-img__hint">รอรูปภาพ</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`smart-img ${className ?? ''}`}
      onError={() => setFailed(true)}
    />
  )
}
