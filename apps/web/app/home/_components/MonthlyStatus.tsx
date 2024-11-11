'use client'

import BottomLink from '../../_components/BottomLink'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { SHAPE_COLOR } from '../../_styles/color'

export default function MonthlyStatus() {
  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">이번 달 운동 현황</Text>

      <Stack
        style={{
          alignItems: 'center',
          padding: '20px 16px',
          borderRadius: 8,
          background: SHAPE_COLOR.depth_1,
        }}
      >
        <Text typography="title1">이번 달의 첫 번째 운동을 시작해보세요!</Text>
      </Stack>

      <BottomLink onClick={() => null}>운동 기록하기</BottomLink>
    </Stack>
  )
}
