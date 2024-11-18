import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type MonthlyExerciseLogType = {
  totalExerciseLogList: Array<{
    exerciseType: ExerciseType
    day: number
    hour: number
  }>
}

export function useGetMonthlyExerciseLog() {
  return useQuery<MonthlyExerciseLogType>(
    QUERY_KEY.exerciseLog.monthly,
    '/api/exerciselog',
  )
}
