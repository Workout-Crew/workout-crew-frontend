'use client'

import Button from '../../_components/Button'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { FONT_COLOR, SHAPE_COLOR } from '../../_styles/color'

const DUMMY_NICKNAME = '홍길동'
const DUMMY_TARGET = '근육이 있는 몸 만들기'

export default function ExerciseTarget() {
  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="display2">
        {DUMMY_NICKNAME}님이 설정한 목표는
        <br />
        <Text typography="display2" fontColor={FONT_COLOR.point}>
          {DUMMY_TARGET}
        </Text>{' '}
        입니다!
      </Text>

      <Text
        typography="caption"
        fontColor={FONT_COLOR.black_secondary}
        style={{
          padding: 16,
          borderRadius: 8,
          background: SHAPE_COLOR.depth_1,
        }}
      >
        설정하신 운동 목표는 더욱 적합한
        <br />
        루틴과 강도를 추천드리기 위해 사용돼요.
      </Text>

      <Button size={48} variant="primary">
        오늘의 운동 기록하기
      </Button>
    </Stack>
  )
}
