'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { RegisterUserDataBridge } from 'mobile'

export const { bridge, BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<RegisterUserDataBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      registerUserData: async () => ({
        status: false,
        error: new Error('Bridge is not ready'),
      }),
    },
    onFallback: () => {
      throw new Error()
    },
  })
