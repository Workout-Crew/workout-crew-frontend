'use client'

import { useGetMedalStatue } from '../../_api/medal/useGetMedalStatus'
import MissionItem from '../../_components/MissionItem'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { getMissionName } from '../../_utils/medal'

export default function TryingMissions() {
  const { data } = useGetMedalStatue()

  return (
    <Stack style={{ padding: 16 }}>
      <Text typography="title1">현재 도전 중인 미션</Text>

      <Spacing size={20} />

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
    </Stack>
  )
}
