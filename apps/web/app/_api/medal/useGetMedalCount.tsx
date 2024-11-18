import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { MedalGradeType } from '../model'
import { QUERY_KEY } from '../queryKey'

type MedalCountType = Record<Lowercase<MedalGradeType>, number>

export function useGetMonthlyExerciseLog() {
  return useQuery({
    queryKey: QUERY_KEY.medal.count,
    queryFn: async () => await http.get<MedalCountType>('/api/medal/count'),
  })
}
