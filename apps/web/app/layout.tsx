import { ReactNode } from 'react'
import localFont from 'next/font/local'
import './_styles/global.css'

const pretendard = localFont({
  src: './_styles/pretendard.woff2',
  display: 'swap',
})

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>{children}</body>
    </html>
  )
}
