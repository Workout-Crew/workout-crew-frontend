'use client'

import { useState } from 'react'
import Button from '../../_components/Button'
import RoundTab from '../../_components/RoundTab'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'

type TargetType = 'GAIN_MUSCLE' | 'LOSE_BODY_FAT'

const TARGET: Record<TargetType, string> = {
  GAIN_MUSCLE: '근육이 있는 몸 만들기',
  LOSE_BODY_FAT: '체지방 빠르게 감량하기',
}

export default function RegisterTargetPage() {
  const [target, setTarget] = useState<TargetType>()

  const handleSelect = (target: TargetType) => setTarget(target)

  return (
    <Stack style={{ height: '100%' }}>
      <Text typography="display1">
        원하는 운동 목표를
        <br />
        선택해주세요.
      </Text>

      <Spacing size={32} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {Object.entries(TARGET).map(([key, label]) => (
          <RoundTab
            isActive={key === target}
            onClick={() => handleSelect(key as TargetType)}
            key={key}
          >
            {label}
          </RoundTab>
        ))}
      </div>

      <Button
        size={48}
        variant="primary"
        disabled={!target}
        style={{ margin: 'auto 0 16px' }}
      >
        다음
      </Button>
    </Stack>
  )
}
