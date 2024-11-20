'use client'

import { useRequestJoiningGathering } from '../../../_api/gathering/useRequestJoiningGathering'
import Button from '../../../_components/Button'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'
import Text from '../../../_components/Text'

interface Props {
  title: string
  description: string
  gatheringId: string
  isJoined: boolean
  isLeader: boolean
  isEnded: boolean
  onApply: () => void
}

export default function GatheringContents({
  title,
  description,
  gatheringId,
  isJoined,
  isLeader,
  isEnded,
  onApply,
}: Props) {
  const { mutate, isPending } = useRequestJoiningGathering()

  const handleApply = async () => {
    mutate(
      { gatheringId: parseInt(gatheringId) },
      { onSuccess: () => onApply() },
    )
  }

  return (
    <Stack style={{ flex: 1, padding: 16 }}>
      <Text typography="title1">{title}</Text>

      <Spacing size={10} />

      <Text typography="body2">{description}</Text>

      {!isLeader && (
        <>
          <Spacing size={60} />

          <Button
            size={48}
            variant="primary"
            disabled={isJoined || isEnded || isPending}
            onClick={handleApply}
            style={{ marginTop: 'auto' }}
          >
            {isJoined
              ? '참가 신청 완료'
              : isEnded
                ? '참가 신청 마감'
                : '참가 신청하기'}
          </Button>
        </>
      )}
    </Stack>
  )
}
