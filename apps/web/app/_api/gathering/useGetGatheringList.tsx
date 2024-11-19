import { ExerciseType, GatheringType, PlaceType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'
import qs from 'querystring'

type GatheringListType = {
  gatheringList: Array<GatheringType>
}

export function useGetGatheringList(place?: PlaceType, type?: ExerciseType) {
  const queryString = qs.stringify(
    Object.assign(
      {},
      place ? { place } : {},
      type ? { exerciseType: type } : {},
    ),
  )

  return useQuery<GatheringListType>(
    QUERY_KEY.gathering.list(place, type),
    `/api/gathering${queryString ? `?${queryString}` : ''}`,
  )
}
