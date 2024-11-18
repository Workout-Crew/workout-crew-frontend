import { createNavigationContainerRef } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeTabParamList, HomeTabScreens } from './HomeTab'
import { RootStackParamList, RootStackScreens } from './RootStack'

export const navigationRef = createNavigationContainerRef()

export const Screens = { ...RootStackScreens, ...HomeTabScreens } as const

export type ScreenList = (typeof Screens)[keyof typeof Screens]

type ParamList = RootStackParamList & HomeTabParamList

export type ScreenProps<T extends keyof ParamList> = NativeStackScreenProps<
  ParamList,
  T
>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, HomeTabParamList {}
  }
}
