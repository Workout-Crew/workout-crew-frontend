'use client'

import BottomLink from '../_components/BottomLink'
import CardItem from '../_components/CardItem'
import ListItem from '../_components/ListItem'
import PostItem from '../_components/PostItem'
import Separator from '../_components/Separator'
import Spacing from '../_components/Spacing'
import Stack from '../_components/Stack'
import Text from '../_components/Text'
import { format } from 'date-fns'

const DUMMY_NICKNAME = '홍길동'
const BOARD_DUMMY_DATA = [
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
const GATHERING_DUMMY_DATA = [
  {
    id: 1,
    title: '축구할 사람 구해요',
    description: '아침 11시에 대운동장에서 축구하는데, 같이 축구해요~',
    city: '서울시',
    organizer: '김철수',
    participants: 8,
    image: null,
    date: '2024-11-24',
  },
  {
    id: 2,
    title: '한강에서 같이 러닝할 사람~',
    description:
      '한강대교 남단에서 시작해서 북단 -> 이촌한강공원 -> 잠수교 북단 -> 세빛섬 -> 다시 남단으로 돌아오는 코스입니다. 같이 러닝하실 분?',
    city: '서울시',
    organizer: '김민수',
    participants: 12,
    image: 'https://source.unsplash.com/random/800x600',
    date: '2024-11-23',
  },
  {
    id: 3,
    title: '양재 클라이밍팟',
    description: '초보자들 많아요! 편하게 참여하세요~',
    city: '서울시',
    organizer: '김영희',
    participants: 3,
    image: null,
    date: '2024-11-21',
  },
]

export default function CommunityPage() {
  return (
    <>
      <Stack style={{ padding: 16 }}>
        <Text typography="title1">{DUMMY_NICKNAME}님의 활동 현황</Text>

        <Spacing size={20} />

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}
        >
          <CardItem
            title="내가 개설한 모임"
            label="내역 확인하기"
            onClick={() => null}
          />
          <CardItem
            title="참가한 모임"
            label="내역 확인하기"
            onClick={() => null}
          />
          <CardItem
            title="작성한 게시글"
            label="내역 확인하기"
            onClick={() => null}
          />
          <CardItem
            title="작성한 댓글"
            label="내역 확인하기"
            onClick={() => null}
          />
        </div>
      </Stack>

      <Separator />

      <Stack style={{ gap: 20, padding: 16 }}>
        <Text typography="title1">게시판 목록</Text>

        <Stack style={{ gap: 16, padding: 0 }}>
          {BOARD_DUMMY_DATA.map(({ id, name, description }) => (
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

      <Separator />

      <Stack style={{ gap: 20, padding: 16 }}>
        <Text typography="title1">참가 가능한 모임</Text>

        <Stack style={{ gap: 16, padding: 0 }}>
          {GATHERING_DUMMY_DATA.map(
            ({
              id,
              title,
              description,
              city,
              organizer,
              participants,
              image,
              date,
            }) => (
              <PostItem
                title={title}
                description={description}
                label={`${organizer} / ${city} / 참가자 ${participants}명 / ${format(new Date(date), 'MM월 dd일')}`}
                image={image}
                onClick={() => null}
                key={id}
              />
            ),
          )}
        </Stack>

        <BottomLink onClick={() => null}>더보기</BottomLink>
      </Stack>

      <Separator />
    </>
  )
}
