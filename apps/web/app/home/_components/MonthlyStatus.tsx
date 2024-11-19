'use client'

import { useGetMonthlyExerciseStatus } from '../../_api/exercise-log/useGetMonthlyExerciseStatus'
import BottomLink from '../../_components/BottomLink'
import CardItem from '../../_components/CardItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { SHAPE_COLOR } from '../../_styles/color'
import { getTodayDate } from '../../_utils/date'
import { getExercise } from '../../_utils/exercise'
import { useBridgeStore } from '../../provider'

export default function MonthlyStatus() {
  const { data } = useGetMonthlyExerciseStatus()
  const push = useBridgeStore(store => store.push)
  const navigate = useBridgeStore(store => store.navigate)

  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">이번 달 운동 현황</Text>

      {!data?.totalExerciseLogList || data.totalExerciseLogList.length === 0 ? (
        <Stack
          style={{
            alignItems: 'center',
            padding: '20px 16px',
            borderRadius: 8,
            background: SHAPE_COLOR.depth_1,
          }}
        >
          <Text typography="title1">
            이번 달의 첫 번째 운동을 시작해보세요!
          </Text>
        </Stack>
      ) : (
        <div style={{ display: 'flex', gap: 8, overflow: 'scroll' }}>
          {data.totalExerciseLogList.map(({ exerciseType, day, hour }) => (
            <CardItem
              title={getExercise(exerciseType)}
              description={`${day}일 동안 총 ${hour}시간 운동했어요.`}
              label={`${getExercise(exerciseType)} 추가 기록하기`}
              onClick={() =>
                push(
                  `/record/write?date=${getTodayDate()}&exerciseType=${exerciseType}`,
                )
              }
              key={exerciseType}
              style={{ flexShrink: 0 }}
            />
          ))}
        </div>
      )}

      <BottomLink onClick={() => navigate('Record')}>더보기</BottomLink>
    </Stack>
  )
}
