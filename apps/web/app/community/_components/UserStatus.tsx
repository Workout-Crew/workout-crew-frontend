'use client'

import CardItem from '../../_components/CardItem'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'

const DUMMY_NICKNAME = '홍길동'

export default function UserStatus() {
  return (
    <Stack style={{ padding: 16 }}>
      <Text typography="title1">{DUMMY_NICKNAME}님의 활동 현황</Text>

      <Spacing size={20} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <CardItem
          title="내가 개설한 모임"
          description="지금까지 5개의 모임을 개설하셨어요."
          label="내역 확인하기"
          onClick={() => null}
        />
        <CardItem
          title="참가한 모임"
          description="지금까지 모임을 12번 참가하셨어요."
          label="내역 확인하기"
          onClick={() => null}
        />
        <CardItem
          title="작성한 게시글"
          description="총 37개의 글을 작성하셨어요."
          label="내역 확인하기"
          onClick={() => null}
        />
        <CardItem
          title="작성한 댓글"
          description="총 182개의 댓글을 작성하셨어요."
          label="내역 확인하기"
          onClick={() => null}
        />
      </div>
    </Stack>
  )
}
