// ============================================================
// ข้อมูลร้าน + ลิงก์ + เนื้อหาเล่าเรื่อง (3 ภาษา)
// ============================================================
import type { TStr } from '../i18n'

export const site = {
  name: { th: 'เชฟยง', en: 'Chef Yong', zh: '永哥' } as TStr,
  fullName: {
    th: 'เชฟยง เทพหมูแดงฮ่องกง',
    en: 'Chef Yong · Hong Kong Char Siu',
    zh: '永哥 · 港式叉燒',
  } as TStr,

  // รูปหลัก
  logo: '/images/logo/logo.jpg',
  aboutImage: '/images/about/opt/a.jpg',

  // ลิงก์สั่งอาหาร
  order: {
    grab: 'https://r.grab.com/g/6-20260716_040713_4A36AAB0F04248A3864B9346C5C3A27C_MEXMPS-3-C8ADTLJBSA4YGJ',
    lineman: 'https://lin.ee/uLK8Sxk?openExternalBrowser=1',
  },

  // โซเชียล ('#' = ชั่วคราว รอลิงก์จริง)
  social: {
    instagram: 'https://instagram.com/chefyongcharsiu',
    instagramHandle: '@chefyongcharsiu',
    facebook: '#', // temp
    tiktok: '#', // temp
    line: '',
  },

  contact: {
    phone: '083-197-7778', // เบอร์เดียว ใช้ทั้งติดต่อร้านและรับจัดงาน
    hours: '11:30 – 20:00',
    mapUrl: '',
    catering: '083-197-7778',
  },
} as const

// ── เกี่ยวกับร้าน: 4 พาเนล (3 ภาษา) ──
export type StoryPanel = { eyebrow: TStr; title: TStr; body: TStr }

export const story: StoryPanel[] = [
  {
    eyebrow: { th: 'จุดเริ่มต้น', en: 'The Beginning', zh: '起源' },
    title: { th: 'เรื่องเล่าจากเตาย่างฮ่องกง', en: 'A Story from the Hong Kong Grill', zh: '源自港式燒味爐的故事' },
    body: {
      th: 'เชฟยงเริ่มต้นจากความหลงใหลในหมูแดงฮ่องกงต้นตำรับ เดินทางไปเรียนรู้เคล็ดลับถึงย่านเก่าแก่ของฮ่องกง ก่อนกลับมาตีโจทย์รสชาติให้ถูกปากคนไทย ทุกจานคือการตกผลึกจากการลองผิดลองถูกนับร้อยครั้ง',
      en: 'Chef Yong began with a passion for authentic Hong Kong char siu, travelling to the old districts of Hong Kong to learn its secrets before adapting the flavor for Thai palates. Every dish is the result of hundreds of trials.',
      zh: '永哥源於對正宗港式叉燒的熱愛，遠赴香港老街區習得秘訣，再調校出適合泰國人口味的風味。每一道菜都是上百次試驗的結晶。',
    },
  },
  {
    eyebrow: { th: 'สูตรลับ', en: 'The Secret', zh: '秘方' },
    title: { th: 'หมัก 48 ชั่วโมง ไม่มีทางลัด', en: '48 Hours, No Shortcuts', zh: '醃製48小時，絕不走捷徑' },
    body: {
      th: 'เนื้อหมูทุกชิ้นผ่านการหมักด้วยเครื่องเทศสูตรลับนานเต็ม 48 ชั่วโมง ให้รสซึมลึกถึงใจกลางเนื้อ จากนั้นย่างด้วยไฟที่ควบคุมอย่างพิถีพิถัน เคลือบซอสทีละชั้นจนได้ผิวเงาสวยและเนื้อฉ่ำละมุน',
      en: 'Every cut is marinated a full 48 hours in a secret spice blend so the flavor reaches the core, then grilled over carefully controlled heat and glazed layer by layer for a glossy finish and tender, juicy meat.',
      zh: '每塊肉都以秘製香料醃足48小時，讓味道滲透核心，再以精準控火燒製，一層層裹上醬汁，成就油亮外皮與鮮嫩肉質。',
    },
  },
  {
    eyebrow: { th: 'วัตถุดิบ', en: 'Ingredients', zh: '食材' },
    title: { th: 'คัดทุกชิ้น เลือกทุกส่วน', en: 'Selected Cut by Cut', zh: '每塊精選' },
    body: {
      th: 'เราคัดหมูสันคอและสามชั้นเกรดพรีเมียมที่มีสัดส่วนเนื้อและมันสมดุล ผักกวางตุ้งฮ่องเต้สดใหม่ทุกวัน และน้ำมันพริกสูตรฮ่องกงที่รวมเครื่องเทศกว่า 9 ชนิด เพิ่มมิติให้ทุกคำ',
      en: 'We select premium pork neck and belly with a balanced meat-to-fat ratio, fresh baby bok choy daily, and a Hong Kong chili oil of over 9 spices to add depth to every bite.',
      zh: '我們精選肥瘦均衡的頂級頸肉與五花，每日新鮮的小白菜，以及融合逾9種香料的港式辣椒油，為每一口增添層次。',
    },
  },
  {
    eyebrow: { th: 'ประสบการณ์', en: 'Experience', zh: '體驗' },
    title: { th: 'ความอร่อยที่ส่งตรงถึงคุณ', en: 'Deliciousness Delivered', zh: '美味直送到你手中' },
    body: {
      th: 'ไม่ว่าจะทานที่ร้านหรือสั่งกลับบ้าน เราตั้งใจให้ทุกจานคงคุณภาพเดียวกัน สั่งง่ายผ่าน Grab และ LINE MAN ส่งตรงถึงหน้าบ้าน อร่อยได้ทุกเมื่อที่คุณต้องการ',
      en: 'Whether you dine in or order home, we keep every dish to the same standard. Order easily via Grab and LINE MAN, delivered to your door whenever you crave it.',
      zh: '無論堂食或外帶，我們都堅持同樣品質。透過 Grab 與 LINE MAN 輕鬆下單，隨時直送到府，想吃就吃。',
    },
  },
]
