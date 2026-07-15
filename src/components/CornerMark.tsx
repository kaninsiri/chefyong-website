// มุมลายจีน — สองสี่เหลี่ยมคล้องกัน + เส้นยาวสองด้าน (ตาม ref ที่ลูกค้าส่ง)
// ใช้ currentColor — วางมุมด้วย class --tl/--tr/--br/--bl (หมุนด้วย CSS)
type Pos = 'tl' | 'tr' | 'br' | 'bl'

export default function CornerMark({ pos }: { pos: Pos }) {
  return (
    <span className={`corner-mark corner-mark--${pos}`} aria-hidden>
      <svg viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="7" strokeLinejoin="miter" strokeLinecap="butt">
          {/* เส้นยาวขอบบน → เข้ามุมสี่เหลี่ยมใบนอก */}
          <path d="M210 42 H96" />
          {/* เส้นยาวขอบซ้าย → ต่อจากสี่เหลี่ยมใบนอกลงล่าง */}
          <path d="M42 96 V210" />
          {/* สี่เหลี่ยมใบนอก */}
          <rect x="42" y="42" width="54" height="54" />
          {/* สี่เหลี่ยมใบในคล้องกัน */}
          <rect x="70" y="70" width="54" height="54" />
        </g>
      </svg>
    </span>
  )
}
