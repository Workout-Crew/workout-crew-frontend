import { useMutation as useTanstackMutation } from '@tanstack/react-query'
import { useBridgeStore } from '../provider'

export function useMutation<RequestBody>(
  endpoint: string,
  isTokenRequired: boolean = true,
) {
  const post = useBridgeStore(store => store.post)

  return useTanstackMutation({
    mutationFn: async (requestBody: RequestBody) =>
      await post(endpoint, requestBody, isTokenRequired),
  })
}
