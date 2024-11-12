'use client'

import BottomLink from '../../_components/BottomLink'
import ListItem from '../../_components/ListItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'

const DUMMY_DATA = [
  {
    id: 1,
    name: '운동 정보 게시판',
    description: '운동에 관한 유익한 정보를 공유해요',
  },
  {
    id: 2,
    name: '운동 사진 게시판',
    description: '운동하면서 촬영한 사진을 올려주세요',
  },
  {
    id: 3,
    name: '식단 게시판',
    description: '어떤 식단을 구성했는지 올려주세요',
  },
]

export default function BoardList() {
  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">게시판 목록</Text>

      <Stack style={{ gap: 16, padding: 0 }}>
        {DUMMY_DATA.map(({ id, name, description }) => (
          <ListItem
            title={name}
            description={description}
            onClick={() => null}
            key={id}
          />
        ))}
      </Stack>

      <BottomLink onClick={() => null}>더보기</BottomLink>
    </Stack>
  )
}
