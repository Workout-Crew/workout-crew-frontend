'use client'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { RecordBridge } from 'application'

export const { bridge, BridgeProvider, useBridgeStore } =
  createLinkBridgeProvider<RecordBridge>({
    throwOnError: true,
    timeout: 1000 * 60 * 60 * 24,
    initialBridge: {
      navigateWritePage: async () => {
        throw new Error('Bridge is not ready')
      },
    },
    onFallback: () => {
      throw new Error('Cannot load bridge')
    },
  })
