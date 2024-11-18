'use client'

import { useGetMedalCount } from '../../_api/medal/useGetMedalCount'
import BottomLink from '../../_components/BottomLink'
import MedalCount from '../../_components/MedalCount'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { useBridgeStore } from '../../provider'

export default function MyMedals() {
  const { data } = useGetMedalCount()
  const push = useBridgeStore(store => store.push)

  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">내가 보유한 메달</Text>

      <MedalCount
        gold={{ label: `금메달 ${data?.gold ?? 0}개` }}
        silver={{ label: `은메달 ${data?.silver ?? 0}개` }}
        bronze={{ label: `동메달 ${data?.bronze ?? 0}개` }}
      />

      <BottomLink onClick={() => push('/goal/medal')}>전체 보기</BottomLink>
    </Stack>
  )
}
