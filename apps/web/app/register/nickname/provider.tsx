'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { RegisterNicknameBridge } from 'application'

export const { BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<RegisterNicknameBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      registerNickname: async () => ({
        status: false,
        error: new Error('Bridge is not ready'),
      }),
    },
    onFallback: () => {
      throw new Error('Cannot load bridge')
    },
  })
