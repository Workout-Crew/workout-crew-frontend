import Separator from '../../../_components/Separator'
import GatheringContents from '../_components/GatheringContents'
import GatheringInfo from '../_components/GatheringInfo'

interface Props {
  params: { gatheringId: string }
}

async function fetchGathering(_gatheringId: string) {
  return {
    id: 2,
    title: '한강에서 같이 러닝할 사람~',
    description:
      '한강대교 남단에서 시작해서 북단 -> 이촌한강공원 -> 잠수교 북단 -> 세빛섬 -> 다시 남단으로 돌아오는 코스입니다. 같이 러닝하실 분?',
    city: '서울시',
    organizer: '김민수',
    type: '러닝',
    participants: 12,
    image: 'https://source.unsplash.com/random/800x600',
    date: '2024-11-23',
  }
}

export default async function GatheringDetailPage({
  params: { gatheringId },
}: Props) {
  const gathering = await fetchGathering(gatheringId)

  return (
    <>
      <GatheringInfo
        image={gathering.image}
        organizer={gathering.organizer}
        city={gathering.city}
        type={gathering.type}
        date={gathering.date}
        participants={gathering.participants}
      />

      <Separator />

      <GatheringContents
        title={gathering.title}
        description={gathering.description}
        gatheringId={gatheringId}
      />
    </>
  )
}
