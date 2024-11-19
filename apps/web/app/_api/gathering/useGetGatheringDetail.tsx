import { ExerciseType, GatheringType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type GatheringDetailType = GatheringType & {
  exerciseType: ExerciseType
  leader: boolean
  isJoined: boolean
}

export function useGetGatheringDetail(gatheringId: number) {
  return useQuery<GatheringDetailType>(
    QUERY_KEY.gathering.detail(gatheringId),
    `/api/gathering/detail/${gatheringId}`,
  )
}
