import { useEffect } from 'react'
import { StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import { useAuthStore } from '../store/auth'
import { fetch } from '../utils/fetch'
import HomeTab from './HomeTab'
import RegisterStack from './RegisterStack'
import { Screens, navigationRef } from './types'

export const AppStackScreens = {
  ROOT: 'Root',
  REGISTER: 'Register',
} as const

export type AppStackParamList = {
  [AppStackScreens.ROOT]: undefined
  [AppStackScreens.REGISTER]: undefined
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
    </Stack.Navigator>
  )
}
