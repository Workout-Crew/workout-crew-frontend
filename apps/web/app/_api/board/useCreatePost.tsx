import { useMutation } from '../useMutation'

export function useCreatePost() {
  return useMutation<FormData>('/api/board')
}
