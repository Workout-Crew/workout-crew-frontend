import { useMutation } from '../useMutation'

type RequestBody = {
  name: string
  description: string
}

export function useCreateCategory() {
  return useMutation<RequestBody>('/api/board/category')
}
