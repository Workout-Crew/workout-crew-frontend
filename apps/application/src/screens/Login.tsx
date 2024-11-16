import { login as KakaoLogin } from '@react-native-seoul/kakao-login'
import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { useAuthStore } from '../store/auth'
import { createUri } from '../utils/createUri'

type AuthActionType = {
  login(): Promise<
    { status: true; data: string } | { status: false; error: Error }
  >
}

export const bridge = createBridge<AuthActionType>({
  async login() {
    try {
      const { idToken } = await KakaoLogin()

      useAuthStore.getState().handleLogin(idToken)

      return { status: true, data: idToken }
    } catch (error: unknown) {
      console.error(error)
      return { status: false, error: error as Error }
    }
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function LoginScreen() {
  return (
    <WebView
      source={{ uri: createUri('login') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
      webviewDebuggingEnabled
    />
  )
}
