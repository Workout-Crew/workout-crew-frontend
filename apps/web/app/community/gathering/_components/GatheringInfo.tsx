import SimpleListItem from '../../../_components/SimpleListItem'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'

interface Props {
  image: string
  organizer: string
  city: string
  type: string
  date: string
  participants: number
}

export default function GatheringInfo({
  // image,
  organizer,
  city,
  type,
  date,
  participants,
}: Props) {
  return (
    <Stack style={{ padding: 16 }}>
      <div
        style={{
          width: '100%',
          height: 240,
          borderRadius: 8,
          background: '#D9D9D9',
        }}
      />

      <Spacing size={16} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: 10,
        }}
      >
        <SimpleListItem label="주최자">{organizer}</SimpleListItem>
        <SimpleListItem label="모임 위치">{city}</SimpleListItem>
        <SimpleListItem label="운동 종류">{type}</SimpleListItem>
        <SimpleListItem label="날짜 및 시간">{date}</SimpleListItem>
        <SimpleListItem label="참여 인원">{participants}명</SimpleListItem>
      </div>
    </Stack>
  )
}
