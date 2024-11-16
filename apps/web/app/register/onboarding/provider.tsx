'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { OnboardingBridge } from 'mobile'

export const { bridge, BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<OnboardingBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      handleComplete: async () => undefined,
    },
    onFallback: () => {
      throw new Error()
    },
  })
