'use client'

import Button from '../../../_components/Button'
import Input from '../../../_components/Input'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'

export default function GatheringFilter() {
  return (
    <Stack style={{ padding: 16 }}>
      <Input placeholder="다른 모임을 검색해보세요." />

      <Spacing size={10} />

      <div style={{ display: 'flex', gap: 8 }}>
        <Button size={32} variant="secondary" style={{ alignItems: 'center' }}>
          지역 선택하기
        </Button>
        <Button size={32} variant="secondary">
          운동 종류 선택하기
        </Button>
      </div>
    </Stack>
  )
}
