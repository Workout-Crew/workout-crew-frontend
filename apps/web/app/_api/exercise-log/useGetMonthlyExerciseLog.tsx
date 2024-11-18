import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'

type MonthlyExerciseLogType = {
  totalExerciseLogList: Array<{
    exerciseType: ExerciseType
    day: number
    hour: number
  }>
}

export function useGetMonthlyExerciseLog() {
  return useQuery({
    queryKey: QUERY_KEY.exerciseLog.monthly,
    queryFn: async () => {
      const { totalExerciseLogList } =
        await http.get<MonthlyExerciseLogType>('/api/exerciselog')

      return totalExerciseLogList
    },
  })
}
