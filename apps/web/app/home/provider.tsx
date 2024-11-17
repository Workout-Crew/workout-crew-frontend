'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { HomeBridge } from 'application'

export const { bridge, BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<HomeBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      getNickname: async () => {
        throw new Error('Bridge is not ready')
      },
      navigateWritePage: async () => {
        throw new Error('Bridge is not ready')
      },
      navigateRecordPage: async () => {
        throw new Error('Bridge is not ready')
      },
      navigateMedalPage: async () => {
        throw new Error('Bridge is not ready')
      },
    },
    onFallback: () => {
      throw new Error('Cannot load bridge')
    },
  })
