import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { PostType } from '../model'
import { QUERY_KEY } from '../queryKey'

type PostItemType = {
  boardContent: PostType
  commentList: [
    {
      content: string
      writer: string
      createdDate: string // '2024-11-18T05:27:53.019Z'
    },
  ]
}

export function useGetPost(postId: number) {
  return useQuery({
    queryKey: QUERY_KEY.board.post(postId),
    queryFn: async () =>
      await http.get<PostItemType>(`/api/board/detail/${postId}`),
  })
}
