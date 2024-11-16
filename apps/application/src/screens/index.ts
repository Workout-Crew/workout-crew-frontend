import { bridge as goalBridge } from './Goal'
import { bridge as homeBridge } from './Home'
import { bridge as authBridge } from './Login'
import { bridge as onboardingBridge } from './Onboarding'
import { bridge as recordBridge } from './Record'
import { bridge as registerGoalBridge } from './RegisterGoal'
import { bridge as registerNicknameBridge } from './RegisterNickname'
import { bridge as registerUserDataBridge } from './RegisterUserData'

export type AuthBridge = typeof authBridge
export type RegisterNicknameBridge = typeof registerNicknameBridge
export type RegisterUserDataBridge = typeof registerUserDataBridge
export type RegisterGoalBridge = typeof registerGoalBridge
export type OnboardingBridge = typeof onboardingBridge
export type GoalBridge = typeof goalBridge
export type HomeBridge = typeof homeBridge
export type RecordBridge = typeof recordBridge
