import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { createUri } from '../utils/createUri'
import { GoalType } from '../utils/types'

type GoalActionType = {
  selectGoal(): Promise<GoalType>
  navigateMedalPage(): Promise<void>
}

export const bridge = createBridge<GoalActionType>({
  async selectGoal() {
    return 'GAIN_MUSCLE'
  },
  async navigateMedalPage() {
    navigationRef.navigate(Screens.MEDAL)
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function GoalScreen() {
  return (
    <WebView
      source={{ uri: createUri('goal') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
