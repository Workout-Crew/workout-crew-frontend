import { useMutation } from '@tanstack/react-query'
import { http } from '../http'

type RequestBody = {
  image: Array<string>
  request: { title: string; content: string; categoryId: number }
}

export function useCreatePost() {
  return useMutation({
    mutationFn: async (requestBody: RequestBody) =>
      await http.post('/api/board', requestBody),
  })
}
