'use client'

import { Fragment } from 'react'
import Divider from '../../_components/Divider'
import FloatingButton from '../../_components/FloatingButton'
import PostItem from '../../_components/PostItem'
import Separator from '../../_components/Separator'
import Stack from '../../_components/Stack'
import GatheringFilter from './_components/GatheringFilter'
import { format } from 'date-fns'

const DUMMY_DATA = [
  {
    id: 1,
    title: '축구할 사람 구해요',
    description: '아침 11시에 대운동장에서 축구하는데, 같이 축구해요~',
    city: '서울시',
    organizer: '김철수',
    participants: 8,
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
    date: '2024-11-23',
  },
  {
    id: 3,
    title: '양재 클라이밍팟',
    description: '초보자들 많아요! 편하게 참여하세요~',
    city: '서울시',
    organizer: '김영희',
    participants: 3,
    date: '2024-11-21',
  },
  {
    id: 4,
    title: '풋살 인원 구합니다',
    description: '저녁 7시에 6vs6 풋살 매치 진행할 사람 구해요',
    city: '서울시',
    organizer: '김민수',
    participants: 6,
    date: '2024-11-20',
  },
]

export default function GatheringPage() {
  return (
    <>
      <GatheringFilter />
      <Separator />

      <Stack>
        {DUMMY_DATA.map(
          (
            { id, title, description, city, organizer, participants, date },
            index,
            list,
          ) => (
            <Fragment key={id}>
              <PostItem
                title={title}
                description={description}
                label={`${organizer} / ${city} / 참가자 ${participants}명 / ${format(new Date(date), 'MM월 dd일')}`}
                image={null}
                onClick={() => null}
                style={{ padding: '16px 0' }}
              />

              {index + 1 < list.length && <Divider />}
            </Fragment>
          ),
        )}
      </Stack>

      <FloatingButton onClick={() => null}>모임 개설하기</FloatingButton>
    </>
  )
}
