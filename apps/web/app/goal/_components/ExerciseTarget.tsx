'use client'

import Button from '../../_components/Button'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { FONT_COLOR, SHAPE_COLOR } from '../../_styles/color'
import { getGoal } from '../../_utils/goal'
import { useBridgeStore } from '../../provider'

export default function ExerciseTarget() {
  const nickname = useBridgeStore(store => store.user?.nickname)
  const goal = useBridgeStore(store => store.user?.goal)

  const handleClick = async () => {
    // const goal = await selectGoal()

    console.log(goal)
  }

  if (!nickname || !goal) return null

  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="display2">
        {nickname}님이 설정한 목표는
        <br />
        <Text typography="display2" fontColor={FONT_COLOR.point}>
          {getGoal(goal)}
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

      <Button size={48} variant="primary" onClick={handleClick}>
        운동 목표 변경하기
      </Button>
    </Stack>
  )
}
