'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { OnboardingBridge } from 'application'

export const { bridge, BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<OnboardingBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      handleComplete: async () => {
        throw new Error('Bridge is not ready')
      },
    },
    onFallback: () => {
      throw new Error('Cannot load bridge')
    },
  })
