import { ReactNode } from 'react'
import { BridgeProvider } from './provider'

export default function Layout({ children }: { children: ReactNode }) {
  return <BridgeProvider>{children}</BridgeProvider>
}
