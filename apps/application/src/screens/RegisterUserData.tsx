import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { useAuthStore } from '../store/auth'
import { createUri } from '../utils/createUri'
import { http } from '../utils/http'

type RequestBodyType = {
  sex: 'MALE' | 'FEMALE'
  age: number
  height: number
  weight: number
}

type RegisterUserDataActionType = {
  registerUserData(
    data: RequestBodyType,
  ): Promise<
    { status: true; data: undefined } | { status: false; error: Error }
  >
}

export const bridge = createBridge<RegisterUserDataActionType>({
  async registerUserData(data: RequestBodyType) {
    try {
      await http.post<RequestBodyType>(`/api/account`, data)

      useAuthStore.getState().handleSetUser(data)
      navigationRef.navigate(Screens.REGISTER_GOAL)

      return { status: true, data: undefined }
    } catch (error: unknown) {
      console.error(error)
      return { status: false, error: error as Error }
    }
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function RegisterUserDataScreen() {
  return (
    <WebView
      source={{ uri: createUri('register/user-data') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
