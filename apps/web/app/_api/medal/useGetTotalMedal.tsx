import { MedalGradeType, MedalType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type TotalMedalType = {
  medalInfo: Array<{
    medalType: MedalType
    medalRank: MedalGradeType
    value: number
    alreadyGet: boolean
  }>
}

export function useGetTotalMedal() {
  return useQuery<TotalMedalType>(QUERY_KEY.medal.status, '/api/medal/total')
}
