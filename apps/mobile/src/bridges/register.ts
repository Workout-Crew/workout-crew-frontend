import { NODE_ENV } from '@env'
import { bridge, createWebView } from '@webview-bridge/react-native'
import { ScreenList, navigationRef } from '../routes/types'

export const registerBridge = bridge({
  async navigate(name: ScreenList) {
    if (navigationRef.current?.isReady()) {
      navigationRef.current.navigate(name)
    }
  },
})

export type RegisterBridge = typeof registerBridge

export const { WebView } = createWebView({
  bridge: registerBridge,
  debug: NODE_ENV === 'development',
})
