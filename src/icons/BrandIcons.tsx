// โลโก้ช่องทางสั่งอาหาร + โซเชียล (SVG, ปรับขนาดผ่าน prop size)

export function GrabIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="12" fill="#00B14F" />
      <path
        fill="#fff"
        d="M24 12c-6.1 0-11 4.7-11 10.6 0 3.4 1.7 6.4 4.4 8.3l-1 4.1 4.5-2.3c1 .2 2 .3 3.1.3 6.1 0 11-4.7 11-10.7S30.1 12 24 12Zm-4.4 13.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm8.8 0a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z"
      />
    </svg>
  )
}

export function LineManIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="12" fill="#06C755" />
      <path
        fill="#fff"
        d="M24 11c-7.2 0-13 4.6-13 10.3 0 5.1 4.6 9.4 10.9 10.2.4.1 1 .3 1.1.6.1.3.1.7 0 1l-.2 1.1c-.1.4-.4 1.6 1.4.9 1.8-.8 9.6-5.7 13.1-9.7 2.4-2.6 3.7-5.3 3.7-8.1C41 15.6 35.2 11 28 11Zm-6.7 13.6h-2.6c-.4 0-.7-.3-.7-.7v-5.1c0-.4.3-.7.7-.7.4 0 .7.3.7.7v4.5h1.9c.4 0 .7.3.7.7 0 .3-.3.6-.7.6Zm2.7-.7c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7v-5.1c0-.4.3-.7.7-.7.4 0 .7.3.7.7v5.1Zm6.3 0c0 .3-.2.6-.5.7h-.2c-.2 0-.4-.1-.6-.3l-2.6-3.5v3.1c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7v-5.1c0-.3.2-.6.5-.7h.2c.2 0 .4.1.5.3l2.7 3.5v-3.1c0-.4.3-.7.7-.7.4 0 .7.3.7.7v5.1Zm4.5-3.2c.4 0 .7.3.7.7 0 .4-.3.6-.7.6h-1.9v1.2h1.9c.4 0 .7.3.7.7 0 .4-.3.7-.7.7h-2.6c-.4 0-.7-.3-.7-.7v-5.1c0-.4.3-.7.7-.7h2.6c.4 0 .7.3.7.7 0 .4-.3.7-.7.7h-1.9v1.2h1.9Z"
      />
    </svg>
  )
}

const st = { stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' } as const

export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <rect {...st} x="3" y="3" width="18" height="18" rx="5" />
      <circle {...st} cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path {...st} d="M14.5 8.5H16V5.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.8v1.9H8v2.8h2.2V21h2.9v-6.8h2.2l.4-2.8h-2.6V9.8c0-.8.2-1.3 1.4-1.3Z" />
    </svg>
  )
}

export function TiktokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path {...st} d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5c.3 0 .7 0 1 .1" />
      <path {...st} d="M14 4c.3 2.4 2.1 4.2 4.5 4.5" />
    </svg>
  )
}

export function LineIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path {...st} d="M12 4c-4.4 0-8 2.9-8 6.4 0 3.2 2.9 5.9 6.8 6.4.9.1.8.6.7 1.3l-.1.9c-.1.5.3.9 1 .6 2.4-1.4 5.4-3.9 6.8-6 .6-.9 1-2 1-3.2C20 6.9 16.4 4 12 4Z" />
    </svg>
  )
}
