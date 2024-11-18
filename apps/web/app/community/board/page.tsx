'use client'

import Input from '../../_components/Input'
import ListItem from '../../_components/ListItem'
import Separator from '../../_components/Separator'
import Stack from '../../_components/Stack'

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
  {
    id: 4,
    name: '클라이밍 게시판',
    description: null,
  },
  {
    id: 5,
    name: '러닝 게시판',
    description: '러닝에 관심 많은 사람 모여라',
  },
  {
    id: 6,
    name: '헬스 게시판',
    description: '헬스 게시판이에요',
  },
  {
    id: 7,
    name: '축구 게시판',
    description: '축구 얘기 나눠요',
  },
  {
    id: 8,
    name: '농구 게시판',
    description: null,
  },
  {
    id: 9,
    name: '테니스 게시판',
    description: null,
  },
]

export default function BoardPage() {
  return (
    <>
      <Stack style={{ padding: 16 }}>
        <Input placeholder="다른 게시판을 검색해보세요." />
      </Stack>

      <Separator />

      <Stack style={{ gap: 16, padding: 16 }}>
        {DUMMY_DATA.map(({ id, name, description }) => (
          <ListItem
            title={name}
            description={description}
            onClick={() => null}
            key={id}
          />
        ))}
      </Stack>
    </>
  )
}
