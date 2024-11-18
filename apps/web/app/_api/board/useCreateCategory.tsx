import { useMutation } from '@tanstack/react-query'
import { http } from '../http'

type RequestBody = {
  name: string
  description: string
}

export function useCreateCategory() {
  return useMutation({
    mutationFn: async (requestBody: RequestBody) =>
      await http.post('/api/board/category', requestBody),
  })
}
