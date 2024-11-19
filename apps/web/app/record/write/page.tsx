'use client'

import { ExerciseType } from '../../_api/model'
import Button from '../../_components/Button'
import Divider from '../../_components/Divider'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { useSetTitle } from '../../_hooks/useSetTitle'
import { useWriteRecord } from '../../_hooks/useWriteRecord'
import { BORDER_COLOR, FONT_COLOR } from '../../_styles/color'
import { getExercise } from '../../_utils/exercise'
import { format } from 'date-fns'

interface Props {
  searchParams: {
    date: string
    exerciseType: ExerciseType | null
    gatheringId: string | null
  }
}

export default function RecordWritePage({
  searchParams: { date, exerciseType, gatheringId },
}: Props) {
  useSetTitle('기록 작성하기')

  const {
    metadata,
    submitEnabled,
    handleSetTitle,
    handleSelectExerciseType,
    handleSelectTime,
    handleAddItem,
    handleSubmit,
    render,
  } = useWriteRecord(new Date(date), exerciseType, gatheringId)

  return (
    <Stack style={{ padding: 16 }}>
      <input
        type="text"
        name="title"
        value={metadata.title}
        onChange={event => handleSetTitle(event.target.value)}
        placeholder="제목을 입력해주세요."
        style={{
          padding: 0,
          border: 0,
          outline: 'none',
          fontSize: 24,
          fontWeight: 700,
          lineHeight: '24px',
          letterSpacing: '-1px',
          color: FONT_COLOR.black_primary,
        }}
      />

      <Spacing size={16} />

      <div style={{ display: 'flex', gap: 8 }}>
        <Button size={32} variant="secondary" onClick={handleSelectTime}>
          {metadata.startTime && metadata.endTime
            ? `${format(metadata.startTime, 'HH:mm')}~${format(metadata.endTime, 'HH:mm')}`
            : '운동 시간 선택하기'}
        </Button>
        <Button
          size={32}
          variant="secondary"
          onClick={handleSelectExerciseType}
        >
          {metadata.exerciseType
            ? getExercise(metadata.exerciseType)
            : '운동 종류 선택하기'}
        </Button>
      </div>

      <Divider style={{ margin: '16px 0' }} />

      <Stack style={{ gap: 16, padding: 0 }}>
        {render()}

        <button
          onClick={handleAddItem}
          style={{
            width: '100%',
            padding: '20px 0',
            borderRadius: 8,
            border: `2px dashed ${BORDER_COLOR.button}`,
            background: 'transparent',
            textAlign: 'center',
          }}
        >
          <Text typography="title2" fontColor={FONT_COLOR.placeholder}>
            + 요소 추가하기
          </Text>
        </button>

        <Button
          size={48}
          variant="primary"
          disabled={!submitEnabled}
          onClick={handleSubmit}
        >
          저장하기
        </Button>
      </Stack>
    </Stack>
  )
}
