import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { createUri } from '../utils/createUri'

type OnboardingActionType = {
  handleComplete(): Promise<void>
}

export const bridge = createBridge<OnboardingActionType>({
  async handleComplete() {
    navigationRef.reset({ index: 0, routes: [{ name: Screens.ROOT }] })
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function Onboarding() {
  return (
    <WebView
      source={{ uri: createUri('register/onboarding') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
