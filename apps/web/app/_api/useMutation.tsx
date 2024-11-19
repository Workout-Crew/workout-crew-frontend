import { useMutation as useTanstackMutation } from '@tanstack/react-query'
import { useBridgeStore } from '../provider'
import axios from 'axios'

export function useMutation<RequestBody>(endpoint: string) {
  const token = useBridgeStore(store => store.user?.id)

  return useTanstackMutation({
    mutationFn: async (body: RequestBody) => {
      if (body instanceof FormData) {
        body.append('endpoint', endpoint)

        await axios.post('/proxy', body, { headers: { token } })
      } else {
        await axios.post('/proxy', { endpoint, body }, { headers: { token } })
      }
    },
  })
}
