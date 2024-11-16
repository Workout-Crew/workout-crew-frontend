import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { createUri } from '../utils/createUri'

type HomeActionType = {
  navigateWritePage: (_date: Date) => Promise<void>
  navigateRecordPage: () => Promise<void>
  navigateMedalPage: () => Promise<void>
}

export const bridge = createBridge<HomeActionType>({
  async navigateWritePage(date: Date) {
    navigationRef.navigate(Screens.RECORD_WRITE, { date })
  },
  async navigateRecordPage() {
    navigationRef.navigate(Screens.RECORD)
  },
  async navigateMedalPage() {
    navigationRef.navigate(Screens.MEDAL)
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function HomeScreen() {
  return (
    <WebView
      source={{ uri: createUri('home') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
