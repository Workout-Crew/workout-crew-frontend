import { PostType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type PostListType = { boardList: Array<PostType> }

export function useGetPostList(categoryId: number) {
  return useQuery<PostListType>(
    QUERY_KEY.board.posts(categoryId),
    `/api/board/list/${categoryId}`,
  )
}
