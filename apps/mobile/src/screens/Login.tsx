import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login as KakaoLogin } from '@react-native-seoul/kakao-login'
import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { useAuthStore } from '../store/auth'
import { createUri } from '../utils/createUri'
import { fetch } from '../utils/fetch'

type ResponseType = {
  nickname: string
  sex: 'MALE' | 'FEMALE'
  age: number
  height: number
  weight: number
  goal: 'GAIN_MUSCLE' | 'LOSE_BODY_FAT'
}

type AuthActionType = {
  login(): Promise<
    { status: true; data: string } | { status: false; error: Error }
  >
}

export const bridge = createBridge<AuthActionType>({
  async login() {
    try {
      const { idToken } = await KakaoLogin()

      const user = await fetch.post<{ idToken: string }, Partial<ResponseType>>(
        '/auth',
        { idToken },
      )

      useAuthStore.setState({ token: idToken })
      AsyncStorage.setItem('token', idToken)

      if (!user.nickname) {
        navigationRef.navigate(Screens.REGISTER_NICKNAME)
      } else if (!user.sex || !user.age || !user.height || !user.weight) {
        navigationRef.navigate(Screens.REGISTER_USER_DATA)
      } else if (!user.goal) {
        navigationRef.navigate(Screens.REGISTER_TARGET)
      }

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <WebView
        source={{ uri: createUri('login') }}
        style={{ height: '100%', flex: 1, width: '100%' }}
      />
    </SafeAreaView>
  )
}
