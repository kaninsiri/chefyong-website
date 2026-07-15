// ไอคอนส่วนประกอบเมนู (tag) — ใช้ SVG ที่ลูกค้าเลือก, currentColor, ขนาด 16px
import type { ReactNode } from 'react'
import type { TStr } from '../i18n'

export type Ingredient =
  | 'pork-neck'
  | 'pork-belly'
  | 'rice'
  | 'veggie'
  | 'egg'
  | 'chili'
  | 'soda'
  | 'water'

const SZ = 16

// หมู (Tabler) — ใช้ทั้งสันคอและสามชั้น
const pork: ReactNode = (
  <svg width={SZ} height={SZ} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} aria-hidden>
    <path d="M15 11v.01M16 3v3.803A6.02 6.02 0 0 1 18.658 10h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342a6 6 0 0 1-1.658 2.473V18.5a1.5 1.5 0 0 1-3 0v-.583a6 6 0 0 1-1 .083h-4a6 6 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027A6 6 0 0 1 8.999 6h2.5z" />
  </svg>
)

const icons: Record<Ingredient, ReactNode> = {
  'pork-neck': pork,
  'pork-belly': pork,
  veggie: (
    <svg width={SZ} height={SZ} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} aria-hidden>
      <path d="M5 21c.5-4.5 2.5-8 7-10" />
      <path d="M9 18c6.218 0 10.5-3.288 11-12v-2h-4.014c-9 0-11.986 4-12 9c0 1 0 3 2 5h3z" />
    </svg>
  ),
  chili: (
    <svg width={SZ} height={SZ} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} aria-hidden>
      <path d="M18 7V4a2 2 0 0 0-4 0m0 6s2 0 4 2c2-2 4-2 4-2" />
      <path d="M22 10c0 6.6-5.4 12-12 12c-4.4 0-8-2.7-8-6v-.4C3.3 17.1 5 18 7 18c3.9 0 7-3.6 7-8c0-1.7 1.3-3 3-3h2c1.7 0 3 1.3 3 3" />
    </svg>
  ),
  soda: (
    <svg width={SZ} height={SZ} viewBox="0 0 20 20" aria-hidden>
      <path fill="currentColor" d="M8.5 2h3a1.5 1.5 0 0 1 .547 2.897c.121.487.477.856 1.022 1.393l.01.01c.384.378.839.826 1.237 1.423q.015.02.025.042a4.14 4.14 0 0 1 .65 2.515q.009.11.009.22v5a2.5 2.5 0 0 1-3.75 2.165A2.5 2.5 0 0 1 10 18a2.5 2.5 0 0 1-1.25-.335A2.5 2.5 0 0 1 5 15.5v-5q0-.11.01-.22A4 4 0 0 1 5 10c0-1.33.639-2.512 1.63-3.326q.17-.18.328-.342l.002-.001c.533-.55.881-.925.997-1.432A1.5 1.5 0 0 1 8.5 2M14 14v-3.5q0-.082-.008-.161a.5.5 0 0 1-.002-.093a3.15 3.15 0 0 0-.529-2.002A5 5 0 0 0 13.287 8H6.718a3.2 3.2 0 0 0-.708 2.246a.5.5 0 0 1-.001.093A2 2 0 0 0 6 10.5V14zm-8 1v.5a1.5 1.5 0 0 0 2.437 1.171a.5.5 0 0 1 .626 0c.257.206.582.329.937.329s.68-.123.937-.329a.5.5 0 0 1 .626 0A1.5 1.5 0 0 0 14 15.5V15zm5.046-10h-2.09c-.157.872-.714 1.446-1.24 1.987L7.705 7h4.661l-.042-.041C11.79 6.434 11.212 5.864 11.047 5M8.5 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1" />
    </svg>
  ),
  water: (
    <svg width={SZ} height={SZ} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden>
      <path strokeLinejoin="round" strokeWidth={1.5} d="M6.632 18.263L5.031 6.1C4.91 5.188 5.116 5 6.126 5h10.749c1.01 0 1.214.188 1.094 1.1l-1.601 12.163c-.218 1.655-.327 2.483-.954 2.98c-1.297 1.031-6.587.987-7.828 0c-.627-.497-.736-1.325-.954-2.98" />
      <path strokeWidth={1.5} d="m13.5 19l.446-16.059A1 1 0 0 1 14.944 2h4.057" />
      <path strokeWidth={1.5} d="M6 10c.182-.333.782-1 2.09-1c1.637 0 1.205 1 2.296 1s2.728-1 4.364-1s2.75 1 2.75 1" />
      <path strokeLinejoin="round" strokeWidth={2} d="M10.009 16H10" />
    </svg>
  ),
  egg: (
    <svg width={SZ} height={SZ} viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M4 12c0-2.694 1.902-5.217 4.445-6.716c2.584-1.523 5.34-1.726 6.945-.492c.472.363.733.96.946 1.85q.076.322.146.667l.015.076c.042.204.086.417.134.625c.105.462.244.972.474 1.435c.345.695.84 1.285 1.27 1.785l.118.136c.405.47.754.875 1.03 1.325c.288.468.475.954.507 1.535c.032.589-.091 1.35-.544 2.367c-1.29 2.904-5.005 4.039-8.732 3.148C7.092 18.865 4 16.144 4 12m12.61-8.793c-2.562-1.97-6.306-1.34-9.18.354C4.515 5.279 2 8.359 2 12c0 5.355 4.037 8.67 8.29 9.686c4.187 1.001 9.172-.114 11.024-4.28c.547-1.233.766-2.312.713-3.289c-.054-.985-.38-1.79-.8-2.474c-.366-.595-.82-1.122-1.21-1.572l-.124-.144c-.439-.51-.777-.928-.998-1.372c-.12-.244-.217-.565-.314-.99a29 29 0 0 1-.125-.585l-.016-.076c-.048-.232-.1-.479-.159-.727c-.23-.964-.619-2.16-1.671-2.97M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8" />
    </svg>
  ),
  rice: (
    <svg width={SZ} height={SZ} viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M7 19.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1a3.58 3.58 0 0 0-1.8-3a3.66 3.66 0 0 0-3.63-3.13a4 4 0 0 0-1 .13a3.7 3.7 0 0 0-5.11 0a4 4 0 0 0-1-.13A3.66 3.66 0 0 0 4.81 7A3.58 3.58 0 0 0 3 10a1 1 0 0 0-1 1a10 10 0 0 0 5 8.66m-.89-11l.83-.26l-.16-.9a1.64 1.64 0 0 1 1.66-1.62a1.8 1.8 0 0 1 .83.2l.81.45l.5-.77a1.71 1.71 0 0 1 2.84 0l.5.77l.81-.45a1.8 1.8 0 0 1 .83-.2a1.65 1.65 0 0 1 1.67 1.6l-.16.85l.82.28A1.59 1.59 0 0 1 19 10H5a1.59 1.59 0 0 1 1.11-1.39zM19.94 12a8 8 0 0 1-4.39 6.16a1 1 0 0 0-.55.9V20H9v-.94a1 1 0 0 0-.55-.9A8 8 0 0 1 4.06 12z" />
    </svg>
  ),
}

export const ingredientLabel: Record<Ingredient, TStr> = {
  'pork-neck': { th: 'สันคอ', en: 'Neck', zh: '頸肉' },
  'pork-belly': { th: 'สามชั้น', en: 'Belly', zh: '五花' },
  rice: { th: 'ข้าว', en: 'Rice', zh: '飯' },
  veggie: { th: 'ผัก', en: 'Veggie', zh: '青菜' },
  egg: { th: 'ไข่ดาว', en: 'Fried egg', zh: '煎蛋' },
  chili: { th: 'น้ำมันพริก', en: 'Chili oil', zh: '辣椒油' },
  soda: { th: 'น้ำอัดลม', en: 'Soda', zh: '汽水' },
  water: { th: 'น้ำเปล่า', en: 'Water', zh: '水' },
}

export default function IngredientIcon({ name }: { name: Ingredient }) {
  return <>{icons[name]}</>
}
