import { useGetGatheringDetail } from '../../../_api/gathering/useGetGatheringDetail'
import Separator from '../../../_components/Separator'
import GatheringContents from '../_components/GatheringContents'
import GatheringInfo from '../_components/GatheringInfo'

interface Props {
  params: { gatheringId: string }
}

export default async function GatheringDetailPage({
  params: { gatheringId },
}: Props) {
  const { data, refetch } = useGetGatheringDetail(parseInt(gatheringId))

  return (
    <>
      <GatheringInfo
        organizer={data.leaderNickname}
        place={data.place}
        type={data.exerciseType}
        date={data.startDate}
        participants={0}
      />

      <Separator />

      <GatheringContents
        title={data.title}
        description={data.description}
        gatheringId={gatheringId}
        onApply={() => refetch()}
      />
    </>
  )
}
