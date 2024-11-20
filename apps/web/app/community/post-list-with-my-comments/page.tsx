'use client'

import { Fragment } from 'react'
import { useGetPostListWithMyComment } from '../../_api/board/useGetPostListWithMyComment'
import Divider from '../../_components/Divider'
import PostItem from '../../_components/PostItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { useSetTitle } from '../../_hooks/useSetTitle'
import { useBridgeStore } from '../../provider'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

export default function PostListWithMyCommentsPage() {
  useSetTitle('작성한 댓글이 있는 게시글')

  const push = useBridgeStore(state => state.push)
  const {
    data: { boardList },
  } = useGetPostListWithMyComment()

  return (
    <Stack>
      {boardList.length > 0 ? (
        boardList.map(
          (
            {
              id,
              title,
              content,
              writer,
              commentCount,
              imageList,
              createdDate,
            },
            index,
            list,
          ) => (
            <Fragment key={id}>
              <PostItem
                title={title}
                description={content}
                label={`${writer} / 댓글 ${commentCount}개 / ${formatDistanceToNow(new Date(createdDate), { addSuffix: true, locale: ko })}`}
                image={imageList[0] || null}
                onClick={() => push(`/community/${id}`)}
                style={{ padding: '16px 0' }}
              />

              {index + 1 < list.length && <Divider />}
            </Fragment>
          ),
        )
      ) : (
        <Text
          typography="body1"
          style={{ width: '100%', padding: '64px 0', textAlign: 'center' }}
        >
          내 댓글이 달린 게시글이 없습니다.
        </Text>
      )}
    </Stack>
  )
}
