import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { createUri } from '../utils/createUri'

type MedalActionType = {}

export const bridge = createBridge<MedalActionType>({})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function MedalScreen() {
  return (
    <WebView
      source={{ uri: createUri('goal/medal') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
