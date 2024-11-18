import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { PostType } from '../model'
import { QUERY_KEY } from '../queryKey'

type PostListType = { boardList: Array<PostType> }

export function useGetPostList(categoryId: number) {
  return useQuery({
    queryKey: QUERY_KEY.board.posts(categoryId),
    queryFn: async () => {
      const { boardList } = await http.get<PostListType>(
        `/api/board/list/${categoryId}`,
      )

      return boardList
    },
  })
}
