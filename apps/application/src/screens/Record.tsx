import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { createUri } from '../utils/createUri'

type RecordActionType = {
  navigateWritePage: (_date: Date) => Promise<void>
}

export const bridge = createBridge<RecordActionType>({
  async navigateWritePage(date: Date) {
    navigationRef.navigate(Screens.RECORD_WRITE, { date })
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function RecordScreen() {
  return (
    <WebView
      source={{ uri: createUri('record') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
