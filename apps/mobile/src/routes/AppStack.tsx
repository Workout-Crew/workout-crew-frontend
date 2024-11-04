import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import HomeTab from './HomeTab'
import RegisterStack from './RegisterStack'

export const AppStackScreens = {
  ROOT: 'Root',
  REGISTER: 'Register',
  SETTING: 'Setting',
} as const

export type AppStackParamList = {
  [AppStackScreens.ROOT]: undefined
  [AppStackScreens.REGISTER]: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export default function AppStack() {
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
