'use client'

import { Fragment } from 'react'
import Divider from '../../../_components/Divider'
import Icon from '../../../_components/Icon'
import PostItem from '../../../_components/PostItem'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'
import { BORDER_COLOR, FONT_COLOR, SHAPE_COLOR } from '../../../_styles/color'
import { format } from 'date-fns'

interface Props {
  postId: string
}

const DUMMY_DATA = [
  {
    id: 1,
    writer: '김철수',
    comments:
      '완주를 목표로 하는 분들을 위해 12주간의 체계적인 마라톤 훈련 프로그램을 공유해요',
    date: '2024-10-29 12:00:00',
  },
  {
    id: 2,
    writer: '김영희',
    comments:
      '달리기가 지루하다고 느끼는 사람들을 위해 재밌게 즐길 수 있는 방법을 공유해요',
    date: '2024-10-29 12:00:00',
  },
  {
    id: 3,
    writer: '홍길동',
    comments: '3km에 12분 뛸 수 있는 수준이면 어느 정도 수준이야?',
    date: '2024-10-28 12:00:00',
  },
]

export default function PostComments({ postId }: Props) {
  const handleSend = async () => {
    console.log(postId)
  }

  return (
    <Stack style={{ flex: 1, padding: 16 }}>
      {DUMMY_DATA.map(({ id, writer, comments, date }, index, list) => (
        <Fragment key={id}>
          <PostItem
            title={writer}
            description={comments}
            label={format(new Date(date), 'yyyy-MM-dd HH:mm')}
            image={null}
            style={{ padding: '8px 0' }}
          />

          {index + 1 < list.length && <Divider />}
        </Fragment>
      ))}

      <Spacing size={30} />

      <div style={{ width: '100%', padding: '8px 0', marginTop: 'auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 32,
            padding: '8px 8px 8px 16px',
            borderRadius: 24,
            border: `1px solid ${BORDER_COLOR.button}`,
          }}
        >
          <input
            placeholder="댓글을 입력해주세요."
            style={{
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: '-0.5px',
              color: FONT_COLOR.black_primary,
              border: 0,
              outline: 'none',
            }}
          />
          <button
            onClick={handleSend}
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 32,
              height: 32,
              borderRadius: 16,
              border: 0,
              background: SHAPE_COLOR.brand,
            }}
          >
            <Icon type="send" size={20} color={SHAPE_COLOR.white} />
          </button>
        </div>
      </div>
    </Stack>
  )
}
