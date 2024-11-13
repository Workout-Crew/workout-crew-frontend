import Separator from '../../../../_components/Separator'
import PostComments from '../../_components/PostComments'
import PostInfo from '../../_components/PostInfo'

interface Props {
  params: { postId: string }
}

async function fetchPost(_postId: string) {
  return {
    id: 1,
    title: '마라톤 훈련 프로그램 공유해요',
    description:
      '완주를 목표로 하는 분들을 위해 12주간의 체계적인 마라톤 훈련 프로그램을 공유해요',
    writer: '김철수',
    comments: 32,
    image: 'Test',
    date: '2024-10-29',
  }
}

export default async function PostPage({ params: { postId } }: Props) {
  const post = await fetchPost(postId)

  return (
    <>
      <PostInfo
        title={post.title}
        description={post.description}
        writer={post.writer}
        image={post.image}
        date={post.date}
      />

      <Separator />

      <PostComments postId={postId} />
    </>
  )
}
