'use client'

import { useGetMedalStatue } from '../../_api/medal/useGetMedalStatus'
import BottomLink from '../../_components/BottomLink'
import MissionItem from '../../_components/MissionItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { getMissionName } from '../../_utils/medal'
import { useBridgeStore } from '../../provider'

export default function AttainableMissions() {
  const { data } = useGetMedalStatue()
  const push = useBridgeStore(store => store.push)

  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">달성 가능한 미션</Text>

      <Stack style={{ gap: 16, padding: 0 }}>
        {data?.medalMissionList && data.medalMissionList.length > 0 ? (
          data.medalMissionList.map(
            ({ medalType, medalRank, currentValue, nextValue }) => (
              <MissionItem
                title={getMissionName(medalType, nextValue)}
                grade={medalRank}
                current={currentValue}
                total={nextValue}
                key={medalType}
              />
            ),
          )
        ) : (
          <Text
            typography="body1"
            style={{
              width: '100%',
              padding: '32px 0',
              textAlign: 'center',
            }}
          >
            달성 가능한 미션이 없습니다.
          </Text>
        )}
      </Stack>

      <BottomLink onClick={() => push('/goal/medal')}>더보기</BottomLink>
    </Stack>
  )
}
