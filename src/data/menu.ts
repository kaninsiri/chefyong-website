// ============================================================
// เมนูร้าน — 3 ภาษา (th/en/zh)
// price = ราคาปัจจุบัน, image = /images/menu/..., ingredients = ไอคอนส่วนประกอบ
// ============================================================

import type { Ingredient } from '../icons/IngredientIcons'
import type { TStr } from '../i18n'

export type MenuItem = {
  name: TStr
  desc?: TStr
  price: number
  image: string
  ingredients: Ingredient[]
}

export type MenuCategory = {
  id: string
  title: TStr
  subtitle?: TStr
  items: MenuItem[]
}

export type SignatureItem = { name: TStr; desc: TStr; price: number; oldPrice: number; image: string }

// เมนูไฮไลต์ "เชฟยง's Signature" (พร้อมไข่ดาว) — carousel, ใช้รูป 2.jpg ทั้งหมด
export const signature: SignatureItem[] = [
  {
    name: { th: 'ข้าวหมูแดงสันคอ Signature พร้อมไข่ดาว', en: "Signature Char Siu Rice (Neck) + Fried Egg", zh: '招牌頸肉叉燒飯 · 配煎蛋' },
    desc: {
      th: 'หมูแดงสันคอคัดพิเศษ หมักสูตรลับ 48 ชม. เสิร์ฟพร้อมไข่ดาวและผัก',
      en: 'Premium pork neck char siu, 48h marinade, served with a fried egg and greens',
      zh: '精選頸肉叉燒，醃製48小時，配煎蛋與時蔬',
    },
    price: 149,
    oldPrice: 209,
    image: '/images/menu/opt/2.jpg',
  },
  {
    name: { th: 'ข้าวหมูแดงสามชั้น Signature พร้อมไข่ดาว', en: 'Signature Char Siu Rice (Belly) + Fried Egg', zh: '招牌五花叉燒飯 · 配煎蛋' },
    desc: {
      th: 'หมูแดงสามชั้นคัดพิเศษ เนื้อฉ่ำละมุน เสิร์ฟพร้อมไข่ดาวและผัก',
      en: 'Premium pork belly char siu, juicy and tender, with a fried egg and greens',
      zh: '精選五花叉燒，鮮嫩多汁，配煎蛋與時蔬',
    },
    price: 159,
    oldPrice: 219,
    image: '/images/menu/opt/2.jpg',
  },
  {
    name: { th: 'ข้าวหมูแดงผสม Signature พร้อมไข่ดาว', en: 'Signature Mixed Char Siu Rice + Fried Egg', zh: '招牌雙拼叉燒飯 · 配煎蛋' },
    desc: {
      th: 'สันคอและสามชั้นในจานเดียว เสิร์ฟพร้อมไข่ดาวและผัก',
      en: 'Neck and belly on one plate, served with a fried egg and greens',
      zh: '頸肉與五花雙拼，配煎蛋與時蔬',
    },
    price: 159,
    oldPrice: 219,
    image: '/images/menu/opt/2.jpg',
  },
]

// ใช้รูปที่บีบอัดแล้วในโฟลเดอร์ opt/ (JPG ~1100px) เพื่อโหลดเร็วขึ้น
const IMG = (f: string) => `/images/menu/opt/${f.replace(/\.(png|jpe?g)$/i, '')}.jpg`

export const menu: MenuCategory[] = [
  {
    id: 'rice',
    title: { th: 'ข้าวหมูแดงฮ่องกง', en: 'Hong Kong Char Siu Rice', zh: '港式叉燒飯' },
    subtitle: {
      th: 'จานเดียวอิ่มครบ พร้อมข้าวสวยร้อนๆ และผักสด',
      en: 'A complete one-plate meal with hot rice and fresh greens',
      zh: '一盤滿足，附熱飯與時蔬',
    },
    items: [
      {
        name: { th: 'ข้าวหมูแดงส่วนสันคอ', en: 'Char Siu Rice (Neck)', zh: '頸肉叉燒飯' },
        desc: {
          th: 'หมูแดงสันคอคัดพิเศษ หมักสูตรลับฮ่องกง 48 ชม. เคลือบซอสหอมเข้ม เสิร์ฟพร้อมข้าวและผัก',
          en: 'Premium pork neck char siu, marinated 48h, glazed in rich sauce, served with rice and greens',
          zh: '精選頸肉叉燒，醃製48小時，裹濃香醬汁，配飯與時蔬',
        },
        price: 139,
        image: IMG('1.png'),
        ingredients: ['pork-neck', 'rice', 'veggie'],
      },
      {
        name: { th: 'ข้าวหมูแดงส่วนสามชั้น', en: 'Char Siu Rice (Belly)', zh: '五花叉燒飯' },
        desc: {
          th: 'หมูแดงสามชั้นคัดพิเศษ เนื้อฉ่ำมันละมุน หมัก 48 ชม. เสิร์ฟพร้อมข้าวและผัก',
          en: 'Premium pork belly char siu, juicy and tender, marinated 48h, with rice and greens',
          zh: '精選五花叉燒，鮮嫩多汁，醃製48小時，配飯與時蔬',
        },
        price: 149,
        image: IMG('1.png'),
        ingredients: ['pork-belly', 'rice', 'veggie'],
      },
      {
        name: { th: 'ข้าวหมูแดงผสม', en: 'Mixed Char Siu Rice', zh: '雙拼叉燒飯' },
        desc: {
          th: 'รวมสันคอและสามชั้นในจานเดียว ให้ครบทุกสัมผัส เสิร์ฟพร้อมข้าวและผัก',
          en: 'Neck and belly on one plate for the best of both, with rice and greens',
          zh: '頸肉與五花雙拼，兩種口感一次滿足，配飯與時蔬',
        },
        price: 149,
        image: IMG('1.png'),
        ingredients: ['pork-neck', 'pork-belly', 'rice', 'veggie'],
      },
    ],
  },
  {
    id: 'pork',
    title: { th: 'หมูแดงฮ่องกงล้วนๆ', en: 'Char Siu Only', zh: '純叉燒' },
    subtitle: {
      th: 'เนื้อหมูแดงล้วน 200 กรัม สำหรับสายจริงจัง',
      en: '200g of pure char siu for serious lovers',
      zh: '純叉燒200克，饕客之選',
    },
    items: [
      {
        name: { th: 'หมูแดงส่วนสันคอ 200 กรัม', en: 'Char Siu Neck 200g', zh: '頸肉叉燒 200克' },
        desc: {
          th: 'หมูแดงสันคอคัดพิเศษ 200 กรัม เนื้อชุ่มฉ่ำ เคลือบซอสหอมเข้มเต็มคำ',
          en: 'Premium pork neck char siu 200g, juicy and fully glazed in rich sauce',
          zh: '精選頸肉叉燒200克，鮮嫩多汁，裹滿濃香醬汁',
        },
        price: 249,
        image: IMG('3.jpg'),
        ingredients: ['pork-neck'],
      },
      {
        name: { th: 'หมูแดงส่วนสามชั้น 200 กรัม', en: 'Char Siu Belly 200g', zh: '五花叉燒 200克' },
        desc: {
          th: 'หมูแดงสามชั้นคัดพิเศษ 200 กรัม ชั้นมันบางละมุนละลายในปาก',
          en: 'Premium pork belly char siu 200g, thin melt-in-your-mouth layers',
          zh: '精選五花叉燒200克，層次分明，入口即化',
        },
        price: 259,
        image: IMG('3.jpg'),
        ingredients: ['pork-belly'],
      },
      {
        name: { th: 'หมูแดงผสม 200 กรัม', en: 'Mixed Char Siu 200g', zh: '雙拼叉燒 200克' },
        desc: {
          th: 'สามชั้นและสันคออย่างละ 100 กรัม ครบทั้งสองรสสัมผัสในจานเดียว',
          en: '100g each of belly and neck — both textures on one plate',
          zh: '五花與頸肉各100克，兩種口感一次擁有',
        },
        price: 259,
        image: IMG('3.jpg'),
        ingredients: ['pork-neck', 'pork-belly'],
      },
    ],
  },
  {
    id: 'veggie',
    title: { th: 'เมนูผัก', en: 'Vegetables', zh: '蔬菜' },
    items: [
      {
        name: { th: 'ผักกวางตุ้งฮ่องเต้ผัดน้ำมันหอย', en: 'Baby Bok Choy in Oyster Sauce', zh: '蠔油炒小白菜' },
        desc: {
          th: 'ผักกวางตุ้งฮ่องเต้สดกรอบ ผัดน้ำมันหอยสูตรพิเศษจากเชฟยง',
          en: 'Fresh crisp baby bok choy stir-fried in Chef Yong’s special oyster sauce',
          zh: '新鮮爽脆小白菜，以永哥特製蠔油快炒',
        },
        price: 159,
        image: IMG('veg.png'),
        ingredients: ['veggie'],
      },
    ],
  },
  {
    id: 'toppings',
    title: { th: 'ท็อปปิ้งเพิ่มความฟิน', en: 'Toppings', zh: '加點配料' },
    items: [
      {
        name: { th: 'น้ำมันพริกสูตรฮ่องกงแท้ๆ', en: 'Authentic HK Chili Oil', zh: '正宗港式辣椒油' },
        desc: {
          th: 'เครื่องเทศกว่า 9 ชนิด หอมนัว เผ็ดกำลังดี',
          en: 'Over 9 spices — fragrant, savory and just spicy enough',
          zh: '逾9種香料，香氣濃郁，辣度剛好',
        },
        price: 20,
        image: IMG('chillioil.png'),
        ingredients: ['chili'],
      },
      {
        name: { th: 'ไข่ดาว', en: 'Fried Egg', zh: '煎蛋' },
        desc: {
          th: 'ไข่ดาว 1 ฟอง (ความสุกประมาณ 80%)',
          en: 'One fried egg (about 80% done)',
          zh: '煎蛋一顆（約八分熟）',
        },
        price: 20,
        image: IMG('egg.png'),
        ingredients: ['egg'],
      },
      {
        name: { th: 'ข้าวสวย', en: 'Steamed Rice', zh: '白飯' },
        desc: { th: 'ข้าวอย่างดี 220 กรัม', en: 'Premium steamed rice, 220g', zh: '優質白飯 220克' },
        price: 20,
        image: IMG('rice.png'),
        ingredients: ['rice'],
      },
    ],
  },
  {
    id: 'drinks',
    title: { th: 'เครื่องดื่ม', en: 'Drinks', zh: '飲料' },
    items: [
      { name: { th: 'PEPSI', en: 'Pepsi', zh: '百事可樂' }, price: 30, image: IMG('pepsi.png'), ingredients: ['soda'] },
      { name: { th: 'PEPSI MAX', en: 'Pepsi Max', zh: '百事無糖' }, price: 30, image: IMG('pepsimax.png'), ingredients: ['soda'] },
      { name: { th: 'น้ำเปล่า', en: 'Water', zh: '礦泉水' }, price: 20, image: IMG('water.png'), ingredients: ['water'] },
    ],
  },
]
