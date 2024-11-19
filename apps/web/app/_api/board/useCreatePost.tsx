import { useMutation } from '../useMutation'

type RequestBody = {
  image: Array<string>
  request: { title: string; content: string; categoryId: number }
}

export function useCreatePost() {
  return useMutation<RequestBody>('/api/board')
}
