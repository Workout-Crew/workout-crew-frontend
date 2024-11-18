import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'
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

  return useQuery<ExerciseLogType>(
    QUERY_KEY.exerciseLog.date(formatted),
    `/api/exerciselog/date/${formatted}`,
  )
}
