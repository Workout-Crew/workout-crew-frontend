import React, { useEffect } from 'react'
import { LogBox, StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { useBridge } from '@webview-bridge/react-native'
import RootStack from './routes/RootStack'
import { navigationRef } from './routes/types'
import { bridge } from './utils/bridge'

LogBox.ignoreAllLogs()

export default function App() {
  const user = useBridge(bridge, store => store.user)
  const handleLogin = useBridge(bridge, store => store.login)

  useEffect(() => {
    if (!user) {
      AsyncStorage.getItem('token').then(async token => {
        if (token) {
          await handleLogin(token)
        }

        setTimeout(() => BootSplash.hide({ fade: true }), 1500)
      })
    }
  }, [handleLogin, user])

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
          <RootStack />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
