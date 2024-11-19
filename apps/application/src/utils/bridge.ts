import { launchImageLibrary } from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login as KakaoLogin } from '@react-native-seoul/kakao-login'
import { StackActions } from '@react-navigation/native'
import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { HomeTabScreens } from '../routes/HomeTab'
import { Screens, navigationRef } from '../routes/types'
import { http } from './http'
import { UserType } from './types'

type ActionResponseType<T> = Promise<
  { status: true; data: T } | { status: false; error: Error }
>

type BridgeStoreType = {
  user: UserType | null
}

type BridgeActionType = {
  push(pathname: string): Promise<void>
  navigate(
    screen: (typeof HomeTabScreens)[keyof typeof HomeTabScreens],
  ): Promise<void>
  goBack(): Promise<void>
  reset(): Promise<void>
  setTitle(title: string): Promise<void>
  login(token?: string): ActionResponseType<string>
  logout(): Promise<void>
  refetchUser(): Promise<void>
  getUser(): ActionResponseType<UserType | null>
  post(
    endpoint: string,
    data: unknown,
    isTokenRequired?: boolean,
  ): Promise<unknown>
  getPhotos(limit?: number): Promise<string[]>
}

export const bridge = createBridge<BridgeStoreType & BridgeActionType>(
  ({ get, set }) => ({
    user: null,
    title: null,
    async push(pathname: string) {
      navigationRef.dispatch(StackActions.push(Screens.WEBVIEW, { pathname }))
    },
    async navigate(
      screen: (typeof HomeTabScreens)[keyof typeof HomeTabScreens],
    ) {
      navigationRef.navigate(screen)
    },
    async goBack() {
      if (navigationRef.canGoBack()) {
        navigationRef.goBack()
      }
    },
    async reset() {
      navigationRef.reset({ index: 0, routes: [{ name: Screens.MAIN }] })
    },
    async setTitle(_title: string) {},
    async login(token?: string) {
      try {
        if (get().user) {
          throw new Error('Already logged in')
        }

        const { idToken } = !token ? await KakaoLogin() : { idToken: token }
        const user = await http.post<{}, UserType>(
          `/api/kakao?token=${idToken}`,
          {},
        )

        await AsyncStorage.setItem('token', user.id)
        set({ user })

        return { status: true, data: idToken }
      } catch (error: unknown) {
        console.error(error)
        return { status: false, error: error as Error }
      }
    },
    async logout() {
      await AsyncStorage.removeItem('token')
      set({ user: null })
    },
    async refetchUser() {
      const token = await AsyncStorage.getItem('token')

      if (token) {
        const user = await http.post<{}, UserType>(
          `/api/kakao?token=${token}`,
          {},
        )

        set({ user })
      }
    },
    async getUser() {
      return { status: true, data: get().user }
    },
    async post(endpoint: string, data: unknown, isTokenRequired = true) {
      const token = get().user?.id

      if (isTokenRequired && !token) {
        throw new Error('Token is required')
      }

      return await http.post(
        endpoint,
        data,
        isTokenRequired && token ? { token } : {},
      )
    },
    async getPhotos(limit: number = 10) {
      const { assets } = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: limit,
        includeBase64: true,
      })

      return (
        assets?.map(({ base64 }) => `data:image/jpeg;base64,${base64}`) || []
      )
    },
  }),
)

export type BridgeType = typeof bridge

export const { WebView } = createWebView({ bridge, debug: __DEV__ })
