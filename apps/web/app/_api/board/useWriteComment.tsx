import { useMutation } from '@tanstack/react-query'
import { http } from '../http'

type RequestBody = {
  boardId: number
  content: string
}

export function useWriteComment() {
  return useMutation({
    mutationFn: async (requestBody: RequestBody) =>
      await http.post('/api/board/comment', requestBody),
  })
}
