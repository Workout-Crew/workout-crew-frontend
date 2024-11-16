'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { GoalBridge } from 'application'

export const { BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<GoalBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      selectGoal: async () => {
        throw new Error('Bridge is not ready')
      },
      navigateMedalPage: async () => undefined,
    },
    onFallback: () => {
      throw new Error('Cannot load bridge')
    },
  })
