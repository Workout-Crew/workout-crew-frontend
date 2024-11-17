import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { useAuthStore } from '../store/auth'
import { createUri } from '../utils/createUri'
import { http } from '../utils/http'

type RegisterNicknameActionType = {
  registerNickname(
    nickname: string,
  ): Promise<{ status: true; data: string } | { status: false; error: Error }>
}

export const bridge = createBridge<RegisterNicknameActionType>({
  async registerNickname(nickname) {
    try {
      await http.post<{ nickname: string }>(`/api/account/nickname`, {
        nickname,
      })

      useAuthStore.getState().handleSetUser({ nickname })
      navigationRef.navigate(Screens.REGISTER_USER_DATA)

      return { status: true, data: nickname }
    } catch (error: unknown) {
      console.error(error)
      return { status: false, error: error as Error }
    }
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function RegisterNicknameScreen() {
  return (
    <WebView
      source={{ uri: createUri('register/nickname') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
