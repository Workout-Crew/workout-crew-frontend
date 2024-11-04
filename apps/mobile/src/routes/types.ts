import { createNavigationContainerRef } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList, AppStackScreens } from './AppStack'
import { AuthStackParamList, AuthStackScreens } from './AuthStack'
import { HomeTabParamList, HomeTabScreens } from './HomeTab'
import { RegisterStackParamList, RegisterStackScreens } from './RegisterStack'

export const navigationRef = createNavigationContainerRef()

export const Screens = {
  ...AppStackScreens,
  ...AuthStackScreens,
  ...HomeTabScreens,
  ...RegisterStackScreens,
} as const

export type ScreenList = (typeof Screens)[keyof typeof Screens]

type ParamList = AppStackParamList &
  AuthStackParamList &
  HomeTabParamList &
  RegisterStackParamList

export type ScreenProps<T extends keyof ParamList> = NativeStackScreenProps<
  ParamList,
  T
>

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AppStackParamList,
        AuthStackParamList,
        HomeTabParamList,
        RegisterStackParamList {}
  }
}
