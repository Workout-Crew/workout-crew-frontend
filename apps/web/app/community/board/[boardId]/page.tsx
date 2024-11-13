'use client'

import { Fragment } from 'react'
import Divider from '../../../_components/Divider'
import FloatingButton from '../../../_components/FloatingButton'
import PostItem from '../../../_components/PostItem'
import Stack from '../../../_components/Stack'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

interface Props {
  params: { boardId: string }
}

const DUMMY_DATA = [
  {
    id: 1,
    title: '마라톤 훈련 프로그램 공유해요',
    description:
      '완주를 목표로 하는 분들을 위해 12주간의 체계적인 마라톤 훈련 프로그램을 공유해요',
    writer: '김철수',
    comments: 32,
    image: 'Test',
    date: '2024-10-29',
  },
  {
    id: 2,
    title: '달리기 재미있게 하기',
    description:
      '달리기가 지루하다고 느끼는 사람들을 위해 재밌게 즐길 수 있는 방법을 공유해요',
    writer: '김영희',
    comments: 3,
    image: 'Test',
    date: '2024-10-29',
  },
  {
    id: 3,
    title: '내 달리기 기록',
    description: '3km에 12분 뛸 수 있는 수준이면 어느 정도 수준이야?',
    writer: '홍길동',
    comments: 10,
    image: null,
    date: '2024-10-28',
  },
]

export default function BoardPage({ params: { boardId } }: Props) {
  const handleClick = () => {
    console.log(boardId)
  }

  return (
    <>
      <Stack>
        {DUMMY_DATA.map(
          (
            { id, title, description, writer, comments, image, date },
            index,
            list,
          ) => (
            <Fragment key={id}>
              <PostItem
                title={title}
                description={description}
                label={`${writer} / 댓글 ${comments}개 / ${formatDistanceToNow(new Date(date), { addSuffix: true, locale: ko })}`}
                image={image}
                onClick={() => null}
                style={{ padding: '16px 0' }}
              />

              {index + 1 < list.length && <Divider />}
            </Fragment>
          ),
        )}
      </Stack>

      <FloatingButton onClick={handleClick}>게시글 작성하기</FloatingButton>
    </>
  )
}
