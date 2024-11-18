import { MedalGradeType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type MedalCountType = Record<Lowercase<MedalGradeType>, number>

export function useGetMedalCount() {
  return useQuery<MedalCountType>(QUERY_KEY.medal.count, '/api/medal/count')
}
