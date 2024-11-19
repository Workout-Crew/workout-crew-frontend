import { CLIENT_ENDPOINT } from '@env'
import { ScreenProps } from '../routes/types'
import { WebView } from '../utils/bridge'

export const createUri = (pathname: string) =>
  new URL(pathname, CLIENT_ENDPOINT).toString()

export function WebViewScreen({
  overridedPathname,
  route: { params },
  navigation,
}: ScreenProps<'WebView'> & { overridedPathname?: string }) {
  return (
    <WebView
      source={{ uri: createUri(overridedPathname ?? params.pathname) }}
      style={{ flex: 1, height: '100%', width: '100%' }}
      onMessage={({ nativeEvent }) => {
        const data = JSON.parse(nativeEvent.data)

        if (data?.body?.method === 'setTitle') {
          navigation.setOptions({ title: data.body.args[0] })
        }
      }}
      webviewDebuggingEnabled={__DEV__}
    />
  )
}
