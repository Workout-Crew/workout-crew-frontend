import { CommentType, PostType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type PostItemType = {
  boardContent: PostType
  commentList: Array<CommentType>
}

export function useGetPost(postId: number) {
  return useQuery<PostItemType>(
    QUERY_KEY.board.post(postId),
    `/api/board/detail/${postId}`,
  )
}
