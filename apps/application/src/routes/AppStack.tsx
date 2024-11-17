import { useEffect } from 'react'
import { StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenu'
import MedalScreen from '../screens/Medal'
import RecordWriteScreen from '../screens/RecordWrite'
import { UserType, useAuthStore } from '../store/auth'
import { http } from '../utils/http'
import HomeTab from './HomeTab'
import RegisterStack from './RegisterStack'
import { ScreenList, Screens, navigationRef } from './types'

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

function redirectToRegisterScreen(screen: ScreenList) {
  navigationRef.dispatch(StackActions.replace(Screens.REGISTER, { screen }))
}

async function loadUser(token: string) {
  try {
    const user = await http.post<{}, UserType>(
      `/api/kakao?token=${token}`,
      {},
      { isTokenRequired: false },
    )

    useAuthStore.getState().handleSetUser(user)

    if (!user.nickname) {
      return redirectToRegisterScreen(Screens.REGISTER_NICKNAME)
    } else if (!user.sex || !user.age || !user.height || !user.weight) {
      return redirectToRegisterScreen(Screens.REGISTER_USER_DATA)
    } else if (!user.goal) {
      return redirectToRegisterScreen(Screens.REGISTER_GOAL)
    } else {
      return null
    }
  } catch (error: unknown) {
    console.error(error)
    throw error
  }
}

export default function AppStack() {
  const storedToken = useAuthStore(store => store.token)

  useEffect(() => {
    if (storedToken) {
      loadUser(storedToken)
    }
  }, [storedToken])

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
