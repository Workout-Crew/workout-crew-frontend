'use client'

import { Fragment } from 'react'
import { useOverlay } from '@toss/use-overlay'
import { useSetGoal } from '../../_api/account/useSetGoal'
import BottomSheet from '../../_components/BottomSheet'
import Button from '../../_components/Button'
import Divider from '../../_components/Divider'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { FONT_COLOR, SHAPE_COLOR } from '../../_styles/color'
import { GOAL, getGoal } from '../../_utils/goal'
import { useBridgeStore } from '../../provider'
import { GoalType } from 'application/src/utils/types'

export default function ExerciseTarget() {
  const overlay = useOverlay()
  const refetchUser = useBridgeStore(store => store.refetchUser)
  const nickname = useBridgeStore(store => store.user?.nickname)
  const goal = useBridgeStore(store => store.user?.goal)
  const { mutate } = useSetGoal()

  const handleClick = async () => {
    const selectedGoal = await new Promise<GoalType | null>(resolve =>
      overlay.open(({ exit }) => (
        <BottomSheet
          title="운동 목표 변경하기"
          onClose={() => {
            exit()
            resolve(null)
          }}
        >
          {Object.entries(GOAL).map(([key, label], index, list) => (
            <Fragment key={key}>
              <div
                onClick={() => {
                  exit()
                  resolve(key as GoalType)
                }}
                style={{ padding: '16px 0' }}
              >
                <Text typography="body1">{label}</Text>
              </div>

              {index + 1 < list.length && <Divider />}
            </Fragment>
          ))}
        </BottomSheet>
      )),
    )

    if (selectedGoal) mutate({ goal: selectedGoal }, { onSuccess: refetchUser })
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
