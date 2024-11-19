import { useMutation } from '../useMutation'

type RequestBodyType = {
  gatheringId: number
}

export function useRequestJoiningGathering() {
  return useMutation<RequestBodyType>('/api/gathering/join')
}
