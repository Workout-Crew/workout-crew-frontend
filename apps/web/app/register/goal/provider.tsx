'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { RegisterGoalBridge } from 'application'

export const { bridge, BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<RegisterGoalBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      registerGoal: async () => ({
        status: false,
        error: new Error('Bridge is not ready'),
      }),
    },
    onFallback: () => {
      throw new Error('Cannot load bridge')
    },
  })
