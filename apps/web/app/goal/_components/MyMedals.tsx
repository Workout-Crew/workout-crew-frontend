'use client'

import BottomLink from '../../_components/BottomLink'
import MedalCount from '../../_components/MedalCount'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { useBridgeStore } from '../provider'

export default function MyMedals() {
  const navigateMedalPage = useBridgeStore(store => store.navigateMedalPage)

  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">내가 보유한 메달</Text>

      <MedalCount
        gold={{ label: '금메달 1개' }}
        silver={{ label: '은메달 2개' }}
        bronze={{ label: '동메달 4개' }}
      />

      <BottomLink onClick={() => navigateMedalPage()}>전체 보기</BottomLink>
    </Stack>
  )
}
