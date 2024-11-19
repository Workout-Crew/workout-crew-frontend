import { useMutation } from '../useMutation'

type RequestBody = {
  boardId: number
  content: string
}

export function useWriteComment() {
  return useMutation<RequestBody>('/api/board/comment')
}
