import { getDate } from '../../_utils/date'
import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type ExerciseLogType = {
  exerciseLogByDateList: Array<{
    exerciseLogId: number
    title: string
    exerciseType: ExerciseType
    intensity: number
    description: string
    startTime: string
    endTime: string
    imageList: Array<string>
    gatheringTitle: string
  }>
}

export function useGetExerciseLogWithId(exerciseLogId: number, date: Date) {
  const { data } = useQuery<ExerciseLogType>(
    QUERY_KEY.exerciseLog.detail(exerciseLogId),
    `/api/exerciselog/date/${getDate(date)}`,
  )

  return data.exerciseLogByDateList.find(
    ({ exerciseLogId: id }) => id === exerciseLogId,
  )
}
