import { Fragment } from 'react'
import { useGetAppliedGatheringList } from '../../_api/gathering/useGetAppliedGatheringList'
import BottomLink from '../../_components/BottomLink'
import Divider from '../../_components/Divider'
import PostItem from '../../_components/PostItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { getPlace } from '../../_utils/gathering'
import { useBridgeStore } from '../../provider'
import { format } from 'date-fns'

export default function ParticipantedGatheringList() {
  const push = useBridgeStore(store => store.push)
  const {
    data: { gatheringList },
  } = useGetAppliedGatheringList()

  return (
    <Stack style={{ padding: 16 }}>
      <Text typography="title1">참가 신청한 모임</Text>

      <Stack style={{ gap: 16, padding: 0 }}>
        {gatheringList.length > 0 ? (
          gatheringList
            .slice(0, 3)
            .map(
              (
                {
                  gatheringId,
                  title,
                  description,
                  currentNumber,
                  startDate,
                  leaderNickname,
                  place,
                },
                index,
                list,
              ) => {
                return (
                  <Fragment key={gatheringId}>
                    <PostItem
                      title={title}
                      description={description}
                      label={`${leaderNickname} / ${getPlace(place)} / 참가자 ${currentNumber}명 / ${format(new Date(startDate), 'MM월 dd일')}`}
                      image={null}
                      onClick={() =>
                        push(`/community/gathering/${gatheringId}`)
                      }
                      style={{ padding: '16px 0' }}
                    />

                    {index + 1 < list.length && <Divider />}
                  </Fragment>
                )
              },
            )
        ) : (
          <Text
            typography="body1"
            style={{ width: '100%', padding: '64px 0', textAlign: 'center' }}
          >
            참가 신청한 모임이 없습니다.
          </Text>
        )}
      </Stack>

      {gatheringList.length > 3 && (
        <BottomLink onClick={() => push('/community/my-gathering-list')}>
          더보기
        </BottomLink>
      )}
    </Stack>
  )
}
