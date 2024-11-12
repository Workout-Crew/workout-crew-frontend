'use client'

import { Fragment } from 'react'
import Divider from '../../_components/Divider'
import PostItem from '../../_components/PostItem'
import Stack from '../../_components/Stack'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

const DUMMY_DATA = [
  {
    id: 1,
    title: '러닝하기 좋은 곳 추천',
    description:
      '시립대 근처에 러닝하기 좋은 곳 있으면 추천 좀 해줄 사람 구해요',
    writer: '김철수',
    comments: 10,
    image: 'Test',
    date: '2024-10-29',
  },
  {
    id: 2,
    title: '러닝화 뭐가 좋을까?',
    description: '10만원 내외로 괜찮은 러닝화 추천 좀 해줘!',
    writer: '김영희',
    comments: 8,
    image: 'Test',
    date: '2024-10-29',
  },
  {
    id: 3,
    title: '초보자도 도전 가능한 러닝 대회 추천',
    description:
      '처음 러닝 대회에 도전하는데, 5km나 10km 코스가 있는 대회 추천 좀 해줄 수 있을까?',
    writer: '홍길동',
    comments: 22,
    image: null,
    date: '2024-10-28',
  },
  {
    id: 4,
    title: '달리기 부상 예방',
    description:
      '달리기 후에 발생하는 근육통, 무릎 통증 등 부상 예방을 위해 어떻게 해야할까?',
    writer: '김민수',
    comments: 15,
    image: 'Test',
    date: '2024-10-24',
  },
]

export default function MyPostListPage() {
  return (
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
  )
}
