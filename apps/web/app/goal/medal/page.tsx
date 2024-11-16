import MedalCount from '../../_components/MedalCount'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'

const MOCK_DATA = {
  WRITE_EXERCISE_LOG: {
    gold: { current: 0, total: 10 },
    silver: { current: 0, total: 5 },
    bronze: { current: 0, total: 3 },
  },
  WRITE_EXERCISE_LOG_TEST: {
    gold: { current: 0, total: 10 },
    silver: { current: 0, total: 5 },
    bronze: { current: 0, total: 3 },
  },
} as const

const METADATA_BY_TYPE: Record<
  keyof typeof MOCK_DATA,
  { title: string; suffix: string }
> = {
  WRITE_EXERCISE_LOG: { title: '운동 기록 작성 횟수', suffix: '회' },
  WRITE_EXERCISE_LOG_TEST: {
    title: '운동 기록 테스트 작성 횟수',
    suffix: '회',
  },
}

export default function MedalPage() {
  return (
    <Stack style={{ gap: 32, padding: 16 }}>
      {Object.entries(MOCK_DATA).map(([type, { gold, silver, bronze }]) => {
        const { title, suffix } =
          METADATA_BY_TYPE[type as keyof typeof MOCK_DATA]

        return (
          <div key={type}>
            <Text typography="title1">{title}</Text>

            <Spacing size={10} />

            <MedalCount
              gold={{
                label: `${gold.total}${suffix}`,
                disabled: gold.total > gold.current,
              }}
              silver={{
                label: `${silver.total}${suffix}`,
                disabled: silver.total > silver.current,
              }}
              bronze={{
                label: `${bronze.total}${suffix}`,
                disabled: bronze.total > bronze.current,
              }}
            />
          </div>
        )
      })}
    </Stack>
  )
}
