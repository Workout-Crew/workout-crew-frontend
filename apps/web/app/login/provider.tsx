'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { AuthBridge } from 'application'

export const { BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<AuthBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      login: async () => ({
        status: false,
        error: new Error('Bridge is not ready'),
      }),
    },
    onFallback: () => {
      throw new Error('Cannot load bridge')
    },
  })
