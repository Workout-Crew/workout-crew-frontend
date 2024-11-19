'use client'

import { useState } from 'react'
import { useSetGoal } from '../../_api/account/useSetGoal'
import Button from '../../_components/Button'
import RoundTab from '../../_components/RoundTab'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { GOAL } from '../../_utils/goal'
import { GoalType } from 'application/src/utils/types'

interface Props {
  onNext: () => void
}

export default function RegisterGoal({ onNext }: Props) {
  const [goal, setGoal] = useState<GoalType>()
  const { mutate, isPending } = useSetGoal()

  const handleSelect = (goal: GoalType) => setGoal(goal)

  const handleRegister = () => {
    if (goal) {
      mutate({ goal }, { onSuccess: onNext })
    }
  }

  return (
    <Stack style={{ height: '100%' }}>
      <Text typography="display1">
        원하는 운동 목표를
        <br />
        선택해주세요.
      </Text>

      <Spacing size={32} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {Object.entries(GOAL).map(([key, label]) => (
          <RoundTab
            isActive={key === goal}
            onClick={() => handleSelect(key as GoalType)}
            key={key}
          >
            {label}
          </RoundTab>
        ))}
      </div>

      <Button
        size={48}
        variant="primary"
        disabled={!goal || isPending}
        onClick={handleRegister}
        style={{ margin: 'auto 0 16px' }}
      >
        다음
      </Button>
    </Stack>
  )
}
