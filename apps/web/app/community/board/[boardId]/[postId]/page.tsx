import { useGetPost } from '../../../../_api/board/useGetPost'
import Separator from '../../../../_components/Separator'
import PostComments from '../../_components/PostComments'
import PostInfo from '../../_components/PostInfo'

interface Props {
  params: { postId: string }
}

export default async function PostPage({ params: { postId } }: Props) {
  const {
    data: { boardContent, commentList },
    refetch,
  } = useGetPost(parseInt(postId))

  return (
    <>
      <PostInfo
        title={boardContent.title}
        description={boardContent.content}
        writer={boardContent.writer}
        image={boardContent.imageList[0] || null}
        date={boardContent.createdDate}
      />

      <Separator />

      <PostComments
        boardId={parseInt(postId)}
        comments={commentList}
        onSend={refetch}
      />
    </>
  )
}
