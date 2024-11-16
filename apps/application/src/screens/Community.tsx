import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { ScreenList, navigationRef } from '../routes/types'
import { createUri } from '../utils/createUri'

type CommunityActionType = {
  navigate: (_screen: ScreenList) => Promise<void>
}

export const bridge = createBridge<CommunityActionType>({
  async navigate(screen: ScreenList) {
    navigationRef.navigate(screen)
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function CommunityScreen() {
  return (
    <WebView
      source={{ uri: createUri('community') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
