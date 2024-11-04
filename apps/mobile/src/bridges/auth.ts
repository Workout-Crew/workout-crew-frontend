import { NODE_ENV } from '@env'
import { login } from '@react-native-seoul/kakao-login'
import { bridge, createWebView } from '@webview-bridge/react-native'
import { fetch } from '../utils/fetch'

type RequestBodyType = { idToken: string }
type ResponseType = { accessToken: string; refreshToken: string }

type StateType = {
  isAuthorized: boolean
}

type ActionType = {
  handleLogin(): Promise<
    { status: true; data: ResponseType } | { status: false; error: Error }
  >
}

export const authBridge = bridge<StateType & ActionType>(({ set }) => ({
  isAuthorized: false,
  async handleLogin() {
    try {
      const { idToken } = await login()

      const credentials = await fetch.post<RequestBodyType, ResponseType>(
        '/auth',
        { idToken },
      )

      set({ isAuthorized: true })

      return { status: true, data: credentials }
    } catch (error: unknown) {
      return { status: false, error: error as Error }
    }
  },
}))

export type AuthBridge = typeof authBridge

export const { WebView } = createWebView({
  bridge: authBridge,
  debug: NODE_ENV === 'development',
})
