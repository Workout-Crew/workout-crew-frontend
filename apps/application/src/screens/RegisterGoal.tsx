import {
  bridge as createBridge,
  createWebView,
} from '@webview-bridge/react-native'
import { Screens, navigationRef } from '../routes/types'
import { createUri } from '../utils/createUri'

type GoalType = 'GAIN_MUSCLE' | 'LOSE_BODY_FAT'

type RegisterGoalActionType = {
  registerGoal(
    goal: GoalType,
  ): Promise<{ status: true; data: GoalType } | { status: false; error: Error }>
}

export const bridge = createBridge<RegisterGoalActionType>({
  async registerGoal(goal: GoalType) {
    try {
      // await fetch.post<RequestBodyType>(`/api/account/goal`, { goal })

      navigationRef.navigate(Screens.ONBOARDING)

      return { status: true, data: goal }
    } catch (error: unknown) {
      console.error(error)
      return { status: false, error: error as Error }
    }
  },
})

const { WebView } = createWebView({ bridge, debug: __DEV__ })

export default function RegisterGoalScreen() {
  return (
    <WebView
      source={{ uri: createUri('register/goal') }}
      style={{ height: '100%', flex: 1, width: '100%' }}
    />
  )
}
