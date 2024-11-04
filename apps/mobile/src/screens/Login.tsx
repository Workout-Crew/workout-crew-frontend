import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from '../bridges/auth'
import { createUri } from '../utils/createUri'

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <WebView
        source={{ uri: createUri('login') }}
        style={{ height: '100%', flex: 1, width: '100%' }}
      />
    </SafeAreaView>
  )
}
