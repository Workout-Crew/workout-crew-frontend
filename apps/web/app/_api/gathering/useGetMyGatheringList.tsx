import { GatheringType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type GatheringListType = {
  gatheringList: Array<GatheringType & { gatheringExerciseLog: boolean }>
}

export function useGetMyGatheringList() {
  return useQuery<GatheringListType>(
    QUERY_KEY.gathering.my,
    `/api/gathering/me`,
  )
}
