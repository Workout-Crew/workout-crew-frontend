'use client'

import { ReactNode, Suspense } from 'react'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import { usePathname } from 'next/navigation'
import { OverlayProvider } from '@toss/use-overlay'
import './_styles/global.css'
import RootProvider from './provider'

const TokenLoader = dynamic(() => import('./_components/TokenLoader'), {
  ssr: false,
})

const pretendard = localFont({
  src: './_styles/pretendard.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  const pathname = usePathname()

  return (
    <html lang="en" className={pretendard.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>

      <body>
        <RootProvider>
          <TokenLoader disabled={pathname.startsWith('/login')}>
            <OverlayProvider>
              <Suspense fallback={null}>{children}</Suspense>
            </OverlayProvider>
          </TokenLoader>
        </RootProvider>
      </body>
    </html>
  )
}
