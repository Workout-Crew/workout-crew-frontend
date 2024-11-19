import { GatheringType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type GatheringListType = {
  gatheringList: Array<GatheringType>
}

export function useGetAppliedGatheringList() {
  return useQuery<GatheringListType>(
    QUERY_KEY.gathering.apply,
    `/api/gathering/apply`,
  )
}
