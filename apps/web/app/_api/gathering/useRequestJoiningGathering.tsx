import { useMutation } from '@tanstack/react-query'
import { http } from '../http'

type RequestBodyType = {
  gatheringId: number
}

export function useRequestJoiningGathering() {
  return useMutation({
    mutationFn: async (body: RequestBodyType) =>
      await http.post<RequestBodyType, {}>('/api/gathering/join', body),
  })
}
