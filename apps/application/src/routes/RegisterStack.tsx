import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenu'
import Onboarding from '../screens/Onboarding'
import RegisterGoal from '../screens/RegisterGoal'
import RegisterNickname from '../screens/RegisterNickname'
import RegisterUserData from '../screens/RegisterUserData'
import { useAuthStore } from '../store/auth'

export const RegisterStackScreens = {
  REGISTER_NICKNAME: 'RegisterNickname',
  REGISTER_USER_DATA: 'RegisterUserData',
  REGISTER_GOAL: 'RegisterGoal',
  ONBOARDING: 'Onboarding',
} as const

export type RegisterStackParamList = {
  [RegisterStackScreens.REGISTER_NICKNAME]: undefined
  [RegisterStackScreens.REGISTER_USER_DATA]: undefined
  [RegisterStackScreens.REGISTER_GOAL]: undefined
  [RegisterStackScreens.ONBOARDING]: undefined
}

const Stack = createNativeStackNavigator<RegisterStackParamList>()

export default function RegisterStack() {
  const handleLogout = useAuthStore(store => store.handleLogout)

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        headerLeft: () => (
          <HeaderMenu>
            {({ canGoBack, goBack }) => (
              <HeaderMenu.MenuItem
                type={'prev'}
                onPress={canGoBack() ? goBack : handleLogout}
              />
            )}
          </HeaderMenu>
        ),
        navigationBarColor: '#ffffff',
      }}
    >
      <Stack.Screen
        name={RegisterStackScreens.REGISTER_NICKNAME}
        component={RegisterNickname}
      />
      <Stack.Screen
        name={RegisterStackScreens.REGISTER_USER_DATA}
        component={RegisterUserData}
      />
      <Stack.Screen
        name={RegisterStackScreens.REGISTER_GOAL}
        component={RegisterGoal}
      />
      <Stack.Screen
        name={RegisterStackScreens.ONBOARDING}
        component={Onboarding}
      />
    </Stack.Navigator>
  )
}
