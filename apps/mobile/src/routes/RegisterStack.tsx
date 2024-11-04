import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenu'
import Onboarding from '../screens/Onboarding'
import RegisterNickname from '../screens/RegisterNickname'
import RegisterTarget from '../screens/RegisterTarget'
import RegisterUserData from '../screens/RegisterUserData'

export const RegisterStackScreens = {
  REGISTER_NICKNAME: 'RegisterNickname',
  REGISTER_USER_DATA: 'RegisterUserData',
  REGISTER_TARGET: 'RegisterTarget',
  ONBOARDING: 'Onboarding',
} as const

export type RegisterStackParamList = {
  [RegisterStackScreens.REGISTER_NICKNAME]: undefined
  [RegisterStackScreens.REGISTER_USER_DATA]: undefined
  [RegisterStackScreens.REGISTER_TARGET]: undefined
  [RegisterStackScreens.ONBOARDING]: undefined
}

const Stack = createNativeStackNavigator<RegisterStackParamList>()

export default function RegisterStack() {
  // TODO: 로그아웃 로직 구현 / REGISTER_PROFILE 헤더 버튼 연결
  const handleLogout = () => {
    console.log('Logout')
  }

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        headerRight: () => (
          <HeaderMenu>
            {({ goBack }) => (
              <HeaderMenu.MenuItem type="prev" onPress={goBack} />
            )}
          </HeaderMenu>
        ),
        navigationBarColor: '#ffffff',
      }}
    >
      <Stack.Screen
        name={RegisterStackScreens.REGISTER_NICKNAME}
        component={RegisterNickname}
        options={{
          headerRight: () => (
            <HeaderMenu>
              <HeaderMenu.MenuItem type="prev" onPress={handleLogout} />
            </HeaderMenu>
          ),
        }}
      />
      <Stack.Screen
        name={RegisterStackScreens.REGISTER_USER_DATA}
        component={RegisterUserData}
      />
      <Stack.Screen
        name={RegisterStackScreens.REGISTER_TARGET}
        component={RegisterTarget}
      />
      <Stack.Screen
        name={RegisterStackScreens.ONBOARDING}
        component={Onboarding}
      />
    </Stack.Navigator>
  )
}
