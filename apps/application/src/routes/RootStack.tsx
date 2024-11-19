import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useBridge } from '@webview-bridge/react-native'
import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenu'
import { WebViewScreen } from '../components/WebViewScreen'
import { bridge } from '../utils/bridge'
import HomeTab from './HomeTab'
import { ScreenProps, Screens } from './types'

export const RootStackScreens = {
  LOGIN: 'Login',
  MAIN: 'Main',
  WEBVIEW: 'WebView',
} as const

export type RootStackParamList = {
  [RootStackScreens.LOGIN]: undefined
  [RootStackScreens.MAIN]: undefined
  [RootStackScreens.WEBVIEW]: { pathname: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  const navigation = useNavigation()
  const user = useBridge(bridge, store => store.user)

  useEffect(() => {
    if (user) {
      if (!user.nickname) {
        navigation.navigate(Screens.WEBVIEW, {
          pathname: 'register?register-step=nickname',
        })
      } else if (!user.sex || !user.age || !user.height || !user.weight) {
        navigation.navigate(Screens.WEBVIEW, {
          pathname: 'register?register-step=userData',
        })
      } else if (!user.goal) {
        navigation.navigate(Screens.WEBVIEW, {
          pathname: 'register?register-step=goal',
        })
      }
    }
  }, [navigation, user])

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        navigationBarColor: '#ffffff',
      }}
    >
      {user === null ? (
        <Stack.Screen
          name={RootStackScreens.LOGIN}
          component={(props: ScreenProps<'Login'>) => (
            <WebViewScreen
              {...(props as unknown as ScreenProps<'WebView'>)}
              overridedPathname="login"
            />
          )}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name={RootStackScreens.MAIN}
            component={HomeTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={RootStackScreens.WEBVIEW}
            component={WebViewScreen}
            options={{
              headerLeft: () => (
                <HeaderMenu>
                  {({ goBack }) => (
                    <HeaderMenu.MenuItem type="prev" onPress={goBack} />
                  )}
                </HeaderMenu>
              ),
            }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}
