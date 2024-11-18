'use client'

import { useSearchParams } from 'next/navigation'
import { useFunnel } from '@use-funnel/browser'
import { useBridgeStore } from '../provider'
import Onboarding from './_components/Onboarding'
import RegisterGoal from './_components/RegisterGoal'
import RegisterNickname from './_components/RegisterNickname'
import RegisterUserData from './_components/RegisterUserData'

type FunnelType = {
  nickname: {}
  userData: {}
  goal: {}
  onboarding: {}
}

export default function RegisterPage() {
  const searchParam = useSearchParams()
  const funnel = useFunnel<FunnelType>({
    id: 'register-step',
    initial: {
      step: searchParam.get('register-step') as keyof FunnelType,
      context: {},
    },
  })
  const navigate = useBridgeStore(store => store.navigate)
  const refetchUser = useBridgeStore(store => store.refetchUser)

  return (
    <funnel.Render
      nickname={({ history }) => (
        <RegisterNickname onNext={() => history.push('userData')} />
      )}
      userData={({ history }) => (
        <RegisterUserData onNext={() => history.push('goal')} />
      )}
      goal={({ history }) => (
        <RegisterGoal onNext={() => history.push('onboarding')} />
      )}
      onboarding={() => (
        <Onboarding
          onNext={async () => {
            await refetchUser()
            navigate('Home')
          }}
        />
      )}
    />
  )
}
