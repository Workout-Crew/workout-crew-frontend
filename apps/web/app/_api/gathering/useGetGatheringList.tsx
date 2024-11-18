import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { QUERY_KEY } from '../queryKey'

export function useGetGatheringList() {
  return useQuery({
    queryKey: QUERY_KEY.gathering.list,
    queryFn: async () => await http.get('/api/gathering'),
  })
}
