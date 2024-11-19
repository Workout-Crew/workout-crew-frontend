import { getDate } from '../../_utils/date'
import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type MonthlyExerciseLogType = {
  exerciseLogByMonthList: Array<{
    exerciseType: ExerciseType
    startTime: string // "2024-11-19T15:23:39.912Z"
    endTime: string // "2024-11-19T15:23:39.912Z"
  }>
}

export function useGetMonthlyExerciseLog(date: Date) {
  return useQuery<MonthlyExerciseLogType>(
    QUERY_KEY.exerciseLog.monthly(date),
    `/api/exerciselog/month/${getDate(date)}`,
  )
}
