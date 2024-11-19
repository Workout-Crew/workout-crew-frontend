import { PostType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type PostListType = { boardList: Array<PostType> }

export function useGetMyPostList() {
  return useQuery<PostListType>(QUERY_KEY.board.myPosts, `/api/board/me`)
}
