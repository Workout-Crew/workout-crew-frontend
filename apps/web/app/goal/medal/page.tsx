'use client'

import { useGetTotalMedal } from '../../_api/medal/useGetTotalMedal'
import { MedalGradeType, MedalType } from '../../_api/model'
import MedalCount from '../../_components/MedalCount'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { useSetTitle } from '../../_hooks/useSetTitle'
import { getLabel, getMedalTitle } from '../../_utils/medal'

type ClusteredMedalType = Record<
  MedalType,
  Record<MedalGradeType, { value: number; alreadyGet: boolean }>
>

export default function MedalPage() {
  useSetTitle('전체 미션 목록')

  const { data } = useGetTotalMedal()

  const filtered = data.medalInfo.reduce<ClusteredMedalType>(
    (total, { medalType, medalRank, value, alreadyGet }) => {
      if (medalType in total) {
        return {
          ...total,
          [medalType]: {
            ...total[medalType],
            [medalRank]: { value, alreadyGet },
          },
        }
      } else {
        return { ...total, [medalType]: { [medalRank]: { value, alreadyGet } } }
      }
    },
    {} as ClusteredMedalType,
  )

  return (
    <Stack style={{ gap: 32, padding: 16 }}>
      {Object.entries(filtered).map(([type, { GOLD, SILVER, BRONZE }]) => (
        <div key={type}>
          <Text typography="title1">{getMedalTitle(type as MedalType)}</Text>

          <Spacing size={10} />

          <MedalCount
            gold={{
              label: getLabel(type as MedalType, GOLD.value),
              disabled: !GOLD.alreadyGet,
            }}
            silver={{
              label: getLabel(type as MedalType, SILVER.value),
              disabled: !SILVER.alreadyGet,
            }}
            bronze={{
              label: getLabel(type as MedalType, BRONZE.value),
              disabled: !BRONZE.alreadyGet,
            }}
          />
        </div>
      ))}
    </Stack>
  )
}
