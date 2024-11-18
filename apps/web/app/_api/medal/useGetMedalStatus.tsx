import { MedalGradeType, MedalType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type MedalStatusType = {
  medalMissionList: Array<{
    medalType: MedalType
    medalRank: MedalGradeType
    currentValue: number
    nextValue: number
  }>
}

export function useGetMedalStatue() {
  return useQuery<MedalStatusType>(QUERY_KEY.medal.status, '/api/medal/mission')
}
