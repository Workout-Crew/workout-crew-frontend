import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'

type GatheringDetailType = {
  title: string
  content: string
  leaderNickname: string
  place: 'SEOUL'
  exerciseType: ExerciseType
  startDate: string // "2024-11-18T05:12:58.215Z"
  maximumNumber: number
  leader: boolean
}

export function useGetGatheringDetail(gatheringId: number) {
  return useQuery({
    queryKey: QUERY_KEY.gathering.detail(gatheringId),
    queryFn: async () =>
      await http.get<GatheringDetailType>(
        `/api/gathering/detail/${gatheringId}`,
      ),
  })
}
