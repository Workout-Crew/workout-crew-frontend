import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { createUri } from '../utils/createUri'

type CommunityActionType = {}

export const bridge = createBridge<CommunityActionType>({})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function RecordWriteScreen() {
  return (
    <WebView
      source={{ uri: createUri('record/write') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
