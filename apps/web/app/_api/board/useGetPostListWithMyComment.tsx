import { PostType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type PostListType = { boardList: Array<PostType> }

export function useGetPostListWithMyComment() {
  return useQuery<PostListType>(
    QUERY_KEY.board.postsWithMyComment,
    `/api/board/comment/me`,
  )
}
