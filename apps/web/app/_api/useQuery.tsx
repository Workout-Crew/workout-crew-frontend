import {
  UseSuspenseQueryOptions,
  useSuspenseQuery as useTanstackSuspenseQuery,
} from '@tanstack/react-query'
import { useBridgeStore } from '../provider'
import Axios from 'axios'

const axios = Axios.create()

export function useQuery<T>(
  queryKey: string[],
  endpoint: string,
  options: Omit<UseSuspenseQueryOptions<T>, 'queryKey' | 'queryFn'> = {},
) {
  const token = useBridgeStore(store => store.user?.id)

  return useTanstackSuspenseQuery({
    queryKey,
    queryFn: async () => {
      const res = await axios.get<T>(endpoint, { headers: { token } })
      return res.data
    },
    ...options,
  })
}
