'use client'

import BottomLink from '../../_components/BottomLink'
import ListItem from '../../_components/ListItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

const DUMMY_DATA = [
  {
    id: 1,
    title: '시립대 헬스 메이트',
    city: '서울시',
    date: '2024-11-12',
  },
  {
    id: 2,
    title: '한강에서 같이 러닝할 사람~',
    city: '서울시',
    date: '2024-11-09',
  },
  {
    id: 3,
    title: '양재 클라이밍팟',
    city: '서울시',
    date: '2024-11-07',
  },
]

export default function MyGatheringList() {
  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">내가 신청한 모임</Text>

      <Stack style={{ gap: 16, padding: 0 }}>
        {DUMMY_DATA.map(({ id, title, city, date }) => (
          <ListItem
            title={title}
            description={`${city} / ${formatDistanceToNow(new Date(date), { addSuffix: true, locale: ko })}`}
            onClick={() => null}
            key={id}
          />
        ))}
      </Stack>

      <BottomLink onClick={() => null}>더보기</BottomLink>
    </Stack>
  )
}
