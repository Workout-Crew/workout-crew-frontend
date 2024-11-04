import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/Login'

export const AuthStackScreens = {
  LOGIN: 'Login',
} as const

export type AuthStackParamList = {
  [AuthStackScreens.LOGIN]: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarColor: '#ffffff' }}
    >
      <Stack.Screen name={AuthStackScreens.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  )
}
