'use client'

import { Fragment } from 'react'
import { useGetMyGatheringList } from '../../_api/gathering/useGetMyGatheringList'
import Button from '../../_components/Button'
import Divider from '../../_components/Divider'
import PostItem from '../../_components/PostItem'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { useBridgeStore } from '../../provider'
import { format, isAfter } from 'date-fns'

export default function MyGatheringListPage() {
  const push = useBridgeStore(store => store.push)
  const {
    data: { gatheringList },
  } = useGetMyGatheringList()

  return (
    <Stack>
      {gatheringList.length > 0 ? (
        gatheringList.map(
          ({ title, description, maximumNumber, startDate }, index, list) => {
            const isDone = isAfter(new Date(), new Date(startDate))

            return (
              <Fragment key={title}>
                <div style={{ padding: '16px 0' }}>
                  <PostItem
                    title={title}
                    description={description}
                    label={`참가자 ${maximumNumber}명 / ${format(new Date(startDate), 'MM월 dd일')}`}
                    image={null}
                    onClick={() => push(`/community/gathering/${title}`)}
                  />

                  {isDone && (
                    <Fragment>
                      <Spacing size={16} />
                      <Button
                        size={48}
                        variant="primary"
                        disabled={true}
                        onClick={() => push(`/record/write`)}
                      >
                        {true ? '모임 기록 작성 완료' : '모임 기록 작성하기'}
                      </Button>
                    </Fragment>
                  )}
                </div>

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
          개설한 모임이 없습니다.
        </Text>
      )}
    </Stack>
  )
}
