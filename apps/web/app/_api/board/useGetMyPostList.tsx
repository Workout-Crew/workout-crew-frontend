import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { PostType } from '../model'
import { QUERY_KEY } from '../queryKey'

type PostListType = { boardList: Array<PostType> }

export function useGetMyPostList() {
  return useQuery({
    queryKey: QUERY_KEY.board.myPosts,
    queryFn: async () => {
      const { boardList } = await http.get<PostListType>(`/api/board/me`)

      return boardList
    },
  })
}
