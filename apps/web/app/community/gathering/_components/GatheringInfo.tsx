import { ExerciseType, PlaceType } from '../../../_api/model'
import SimpleListItem from '../../../_components/SimpleListItem'
import Stack from '../../../_components/Stack'
import { getDate } from '../../../_utils/date'
import { getExercise } from '../../../_utils/exercise'
import { getPlace } from '../../../_utils/gathering'

interface Props {
  organizer: string
  place: PlaceType
  type: ExerciseType
  date: string
  participants: number
}

export default function GatheringInfo({
  organizer,
  place,
  type,
  date,
  participants,
}: Props) {
  return (
    <Stack style={{ padding: 16 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: 10,
        }}
      >
        <SimpleListItem label="주최자">{organizer}</SimpleListItem>
        <SimpleListItem label="모임 위치">{getPlace(place)}</SimpleListItem>
        <SimpleListItem label="운동 종류">{getExercise(type)}</SimpleListItem>
        <SimpleListItem label="날짜 및 시간">
          {getDate(new Date(date))}
        </SimpleListItem>
        <SimpleListItem label="참여 인원">{participants}명</SimpleListItem>
      </div>
    </Stack>
  )
}
