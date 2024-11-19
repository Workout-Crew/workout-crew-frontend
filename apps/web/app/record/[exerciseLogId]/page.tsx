'use client'

import { useGetExerciseLogWithId } from '../../_api/exercise-log/useGetExerciseLogWithId'
import Divider from '../../_components/Divider'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { getExercise } from '../../_utils/exercise'
import { useBridgeStore } from '../../provider'
import ImageList from '../_components/ImageList'
import Intensity from '../_components/Intensity'
import Memo from '../_components/Memo'
import { format } from 'date-fns'

interface Props {
  params: { exerciseLogId: string }
  searchParams: { date: string }
}

export default function RecordDetailPage({
  params: { exerciseLogId },
  searchParams: { date },
}: Props) {
  const goBack = useBridgeStore(store => store.goBack)
  const exerciseLog = useGetExerciseLogWithId(
    parseInt(exerciseLogId),
    new Date(date),
  )

  if (!exerciseLog) {
    goBack()
    return null
  }

  return (
    <Stack style={{ padding: 16 }}>
      <Text typography="display1">{exerciseLog.title}</Text>
      <Spacing size={8} />
      <Text typography="body1">
        {getExercise(exerciseLog.exerciseType)} /{' '}
        {format(exerciseLog.startTime, 'yyyy년 MM월 dd일 HH:mm')}~
        {format(exerciseLog.endTime, 'HH:mm')}
      </Text>

      <Divider style={{ margin: '16px 0' }} />

      <Stack style={{ gap: 16, padding: 0 }}>
        {exerciseLog.description && (
          <Memo initialContents={exerciseLog.description} readOnly />
        )}

        {exerciseLog.intensity && (
          <Intensity intensity={exerciseLog.intensity} readOnly />
        )}

        {exerciseLog.imageList.length > 0 && (
          <ImageList images={exerciseLog.imageList} readOnly />
        )}
      </Stack>
    </Stack>
  )
}
