'use client'

import { Fragment } from 'react'
import { useGetPostList } from '../../../_api/board/useGetPostList'
import Divider from '../../../_components/Divider'
import FloatingButton from '../../../_components/FloatingButton'
import PostItem from '../../../_components/PostItem'
import Stack from '../../../_components/Stack'
import { useSetTitle } from '../../../_hooks/useSetTitle'
import { useBridgeStore } from '../../../provider'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

interface Props {
  params: { boardId: string }
  searchParams: { name: string }
}

export default function BoardPage({
  params: { boardId },
  searchParams: { name },
}: Props) {
  useSetTitle(name)

  const push = useBridgeStore(store => store.push)
  const {
    data: { boardList },
  } = useGetPostList(parseInt(boardId))

  return (
    <>
      <Stack>
        {boardList.map(
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
        )}
      </Stack>

      <FloatingButton
        onClick={() => push(`/community/board/write?categoryId=${boardId}`)}
      >
        게시글 작성하기
      </FloatingButton>
    </>
  )
}
