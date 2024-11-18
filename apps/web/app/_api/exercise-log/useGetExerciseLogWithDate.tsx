import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { format } from 'date-fns'

type ExerciseLogType = {
  exerciseLogByDateList: Array<{
    title: string
    exerciseType: ExerciseType
    description: string
    startTime: string
    endTime: string
    imageList: Array<string>
    gatheringTitle: string
  }>
}

export function useGetExerciseLogWithDate(date: Date) {
  const formatted = format(date, 'yyyy-MM-dd')

  return useQuery({
    queryKey: QUERY_KEY.exerciseLog.date(formatted),
    queryFn: async () => {
      const { exerciseLogByDateList } = await http.get<ExerciseLogType>(
        `/api/exerciselog/date/${formatted}`,
      )

      return exerciseLogByDateList
    },
  })
}
