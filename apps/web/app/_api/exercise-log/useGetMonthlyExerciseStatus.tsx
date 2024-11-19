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

export function useGetMonthlyExerciseStatus() {
  return useQuery<MonthlyExerciseLogType>(
    QUERY_KEY.exerciseLog.status,
    '/api/exerciselog',
  )
}
