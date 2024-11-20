'use client'

import { useGetGatheringDetail } from '../../../_api/gathering/useGetGatheringDetail'
import Separator from '../../../_components/Separator'
import { useSetTitle } from '../../../_hooks/useSetTitle'
import GatheringContents from '../_components/GatheringContents'
import GatheringInfo from '../_components/GatheringInfo'
import { isAfter } from 'date-fns'

interface Props {
  params: { gatheringId: string }
}

export default function GatheringDetailPage({
  params: { gatheringId },
}: Props) {
  useSetTitle('모임 상세 정보')

  const { data, refetch } = useGetGatheringDetail(parseInt(gatheringId))

  return (
    <>
      <GatheringInfo
        organizer={data.leaderNickname}
        place={data.place}
        type={data.exerciseType}
        date={data.startDate}
        participants={data.currentNumber}
      />

      <Separator />

      <GatheringContents
        title={data.title}
        description={data.content}
        gatheringId={gatheringId}
        isJoined={data.isJoined}
        isLeader={data.isLeader}
        isEnded={isAfter(new Date(), new Date(data.startDate))}
        onApply={() => refetch()}
      />
    </>
  )
}
