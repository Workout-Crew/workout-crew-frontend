'use client'

import { useGetExerciseLogWithDate } from '../../_api/exercise-log/useGetExerciseLogWithDate'
import Button from '../../_components/Button'
import ListItem from '../../_components/ListItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { getDate } from '../../_utils/date'
import { getExercise } from '../../_utils/exercise'
import { useBridgeStore } from '../../provider'
import { format } from 'date-fns'

interface Props {
  date: Date
}

export default function ExerciseList({ date }: Props) {
  const push = useBridgeStore(store => store.push)
  const { data, isFetching } = useGetExerciseLogWithDate(date)

  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">{format(date, 'dd')}일 운동 기록</Text>

      {!isFetching && (
        <Stack style={{ gap: 16, padding: 0 }}>
          {data?.exerciseLogByDateList &&
          data.exerciseLogByDateList.length > 0 ? (
            data.exerciseLogByDateList.map(
              ({ exerciseLogId, title, exerciseType, startTime, endTime }) => (
                <ListItem
                  title={title}
                  description={`${getExercise(exerciseType)} / ${format(new Date(startTime), 'HH:mm')}~${format(new Date(endTime), 'HH:mm')}`}
                  onClick={() =>
                    push(
                      `/record/${exerciseLogId}?date=${getDate(new Date(startTime))}`,
                    )
                  }
                  key={exerciseLogId}
                />
              ),
            )
          ) : (
            <Text
              typography="body1"
              style={{ width: '100%', padding: '48px 0', textAlign: 'center' }}
            >
              작성한 운동 기록이 없습니다.
            </Text>
          )}
        </Stack>
      )}

      <Button
        size={48}
        variant="primary"
        onClick={() => push(`/record/write?date=${getDate(date)}`)}
      >
        기록 작성하기
      </Button>
    </Stack>
  )
}
