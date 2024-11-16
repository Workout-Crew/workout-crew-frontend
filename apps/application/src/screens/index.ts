import { bridge as authBridge } from './Login'
import { bridge as onboardingBridge } from './Onboarding'
import { bridge as registerGoalBridge } from './RegisterGoal'
import { bridge as registerNicknameBridge } from './RegisterNickname'
import { bridge as registerUserDataBridge } from './RegisterUserData'

export type AuthBridge = typeof authBridge
export type RegisterNicknameBridge = typeof registerNicknameBridge
export type RegisterUserDataBridge = typeof registerUserDataBridge
export type RegisterGoalBridge = typeof registerGoalBridge
export type OnboardingBridge = typeof onboardingBridge
