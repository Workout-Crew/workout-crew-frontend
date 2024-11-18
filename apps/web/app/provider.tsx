'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createLinkBridgeProvider } from '@webview-bridge/react'
import { BridgeType } from 'application'

interface Props {
  children: ReactNode
}

const queryClient = new QueryClient()

export const { BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<BridgeType>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {},
  })

export default function RootProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <BridgeProvider>{children}</BridgeProvider>
    </QueryClientProvider>
  )
}
