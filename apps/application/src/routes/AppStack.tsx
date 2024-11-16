import { useEffect } from 'react'
import { Text } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenu'
import MedalScreen from '../screens/Medal'
import RecordWriteScreen from '../screens/RecordWrite'
import { useAuthStore } from '../store/auth'
import { fetch } from '../utils/fetch'
import HomeTab from './HomeTab'
import RegisterStack from './RegisterStack'
import { Screens, navigationRef } from './types'

export const AppStackScreens = {
  ROOT: 'Root',
  REGISTER: 'Register',
  MEDAL: 'Medal',
  RECORD_WRITE: 'RecordWrite',
} as const

export type AppStackParamList = {
  [AppStackScreens.ROOT]: undefined
  [AppStackScreens.REGISTER]: undefined
  [AppStackScreens.MEDAL]: undefined
  [AppStackScreens.RECORD_WRITE]: { date: Date }
}

const Stack = createNativeStackNavigator<AppStackParamList>()

// type ResponseType = {
//   nickname: string
//   sex: 'MALE' | 'FEMALE'
//   age: number
//   height: number
//   weight: number
//   goal: 'GAIN_MUSCLE' | 'LOSE_BODY_FAT'
// }

// async function checkRegisterRequiredUser(token: string) {
//   const user = await fetch.post<{}, Partial<ResponseType>>(
//     `/api/kakao?token=${token}`,
//     {},
//   )

//   if (!user.nickname) {
//     navigationRef.navigate(Screens.REGISTER_NICKNAME)
//   } else if (!user.sex || !user.age || !user.height || !user.weight) {
//     navigationRef.navigate(Screens.REGISTER_USER_DATA)
//   } else if (!user.goal) {
//     navigationRef.navigate(Screens.REGISTER_TARGET)
//   }
// }

export default function AppStack() {
  const token = useAuthStore(store => store.token)

  useEffect(() => {
    if (token) {
      // navigationRef.dispatch(
      //   StackActions.replace(Screens.REGISTER, {
      //     screen: Screens.ONBOARDING,
      //   }),
      // )
    }

    // if (token) checkRegisterRequiredUser(token)
  }, [token])

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        navigationBarColor: '#ffffff',
      }}
    >
      <Stack.Screen
        name={AppStackScreens.ROOT}
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppStackScreens.REGISTER}
        component={RegisterStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppStackScreens.MEDAL}
        component={MedalScreen}
        options={{
          headerLeft: () => (
            <HeaderMenu>
              {({ goBack }) => (
                <HeaderMenu.MenuItem type="prev" onPress={goBack} />
              )}
            </HeaderMenu>
          ),
          headerTitle: () => (
            <HeaderMenu.Title>전체 미션 목록</HeaderMenu.Title>
          ),
        }}
      />
      <Stack.Screen
        name={AppStackScreens.RECORD_WRITE}
        component={RecordWriteScreen}
        options={{
          headerLeft: () => (
            <HeaderMenu>
              {({ goBack }) => (
                <HeaderMenu.MenuItem type="prev" onPress={goBack} />
              )}
            </HeaderMenu>
          ),
          headerTitle: () => <HeaderMenu.Title>기록 추가하기</HeaderMenu.Title>,
        }}
      />
    </Stack.Navigator>
  )
}
