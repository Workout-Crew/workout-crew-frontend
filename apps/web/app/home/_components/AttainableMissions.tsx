'use client'

import BottomLink from '../../_components/BottomLink'
import MissionItem from '../../_components/MissionItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { useBridgeStore } from '../provider'

const MOCK_DATA = [
  {
    id: 1,
    title: '운동 기록 10회 작성하기',
    userRank: 'GOLD',
    current: 3,
    total: 10,
  },
  {
    id: 2,
    title: '운동 메이트와 3회 운동하기',
    userRank: 'SILVER',
    current: 2,
    total: 5,
  },
  {
    id: 3,
    title: '3가지 운동에 대한 운동 기록 작성하기',
    userRank: 'BRONZE',
    current: 1,
    total: 3,
  },
] as const

export default function AttainableMissions() {
  const navigateMedalPage = useBridgeStore(store => store.navigateMedalPage)

  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">달성 가능한 미션</Text>

      <Stack style={{ gap: 16, padding: 0 }}>
        {MOCK_DATA.map(({ id, title, userRank, current, total }) => (
          <MissionItem
            type={userRank}
            title={title}
            current={current}
            total={total}
            key={id}
          />
        ))}
      </Stack>

      <BottomLink onClick={() => navigateMedalPage()}>더보기</BottomLink>
    </Stack>
  )
}
