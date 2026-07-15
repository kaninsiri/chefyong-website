# เชฟยง เทพหมูแดงฮ่องกง — เว็บไซต์ร้าน

เว็บโปรโมทร้าน หมูแดงฮ่องกง สาขารัชดาภิเษก · React + Vite + TypeScript

## รันโปรเจกต์

```bash
npm install
npm run dev      # เปิด http://localhost:5174
npm run build    # build ขึ้น production (โฟลเดอร์ dist/)
```

## แก้ข้อมูลได้ที่ไหน

| อยากแก้ | ไฟล์ |
|---|---|
| ชื่อร้าน / ลิงก์ Grab, LINE MAN / เบอร์ / ที่อยู่ / เวลาเปิด / โซเชียล | `src/data/site.ts` |
| รายการเมนู + ราคา | `src/data/menu.ts` |
| สี / ฟอนต์ / theme ทั้งเว็บ | `src/styles/theme.css` (แก้ค่า CSS variables ด้านบน) |
| โลโก้ / favicon | `public/logo.svg` |

## TODO (รอข้อมูลจากร้าน)
- [ ] ใส่ลิงก์ Grab Food + LINE MAN จริง (`site.ts` → `order`)
- [ ] เบอร์โทร / ที่อยู่ / เวลาเปิด / ลิงก์ Google Maps (`site.ts` → `contact`)
- [ ] โลโก้จริง + ปรับ theme สีตาม CI ร้าน (`theme.css`)
- [ ] เพิ่มลิงก์ Facebook / TikTok / LINE เมื่อมี (`site.ts` → `social`)
- [ ] รูปอาหารจริง (ตอนนี้ยังไม่มีรูปในเมนู)
