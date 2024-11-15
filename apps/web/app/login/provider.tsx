'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { AuthBridge } from 'mobile'

export const { BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<AuthBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      handleLogin: async () => ({
        status: false,
        error: new Error('Bridge is not ready'),
      }),
    },
    onFallback: () => {
      throw new Error()
    },
  })
