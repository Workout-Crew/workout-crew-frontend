import { useQuery } from '@tanstack/react-query'
import { getDate } from '../../_utils/date'
import { useBridgeStore } from '../../provider'
import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'
import axios from 'axios'

type ExerciseLogType = {
  exerciseLogByDateList: Array<{
    exerciseLogId: number
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
  const token = useBridgeStore(store => store.user?.id)
  const formatted = getDate(date)

  return useQuery({
    queryKey: QUERY_KEY.exerciseLog.date(formatted),
    queryFn: async () => {
      const res = await axios.get<ExerciseLogType>(
        `/api/exerciselog/date/${formatted}`,
        { headers: { token } },
      )
      return res.data
    },
  })
}
