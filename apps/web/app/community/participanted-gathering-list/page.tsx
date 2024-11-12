'use client'

import { Fragment } from 'react'
import Divider from '../../_components/Divider'
import PostItem from '../../_components/PostItem'
import Stack from '../../_components/Stack'
import { format } from 'date-fns'

const DUMMY_DATA = [
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
    date: '2024-11-12',
  },
  {
    id: 3,
    title: '양재 클라이밍팟',
    description: '초보자들 많아요! 편하게 참여하세요~',
    city: '서울시',
    organizer: '김영희',
    participants: 3,
    image: null,
    date: '2024-11-10',
  },
]

export default function ParticipantedGatheringListPage() {
  return (
    <Stack>
      {DUMMY_DATA.map(
        (
          {
            id,
            title,
            description,
            city,
            organizer,
            participants,
            image,
            date,
          },
          index,
          list,
        ) => (
          <Fragment key={id}>
            <PostItem
              title={title}
              description={description}
              label={`${organizer} / ${city} / 참가자 ${participants}명 / ${format(new Date(date), 'MM월 dd일')}`}
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
