import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'
import { useBridge } from '@webview-bridge/react-native'
import { authBridge } from './bridges/auth'
import AppStack from './routes/AppStack'
import AuthStack from './routes/AuthStack'
import { navigationRef } from './routes/types'

const SPLASH_SHOW_TIME = 1000

export default function App() {
  const isAuthorized = useBridge(authBridge, bridge => bridge.isAuthorized)

  useEffect(() => {
    setTimeout(() => BootSplash.hide({ fade: true }), SPLASH_SHOW_TIME)
  }, [])

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {isAuthorized ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
