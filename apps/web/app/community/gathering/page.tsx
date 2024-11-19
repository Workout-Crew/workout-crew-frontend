'use client'

import { Fragment, useState } from 'react'
import { useOverlay } from '@toss/use-overlay'
import { useGetGatheringList } from '../../_api/gathering/useGetGatheringList'
import { ExerciseType, PlaceType } from '../../_api/model'
import BottomSheet from '../../_components/BottomSheet'
import Button from '../../_components/Button'
import Divider from '../../_components/Divider'
import FloatingButton from '../../_components/FloatingButton'
import Icon from '../../_components/Icon'
import PostItem from '../../_components/PostItem'
import Separator from '../../_components/Separator'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { EXERCISE, getExercise } from '../../_utils/exercise'
import { PLACE, getPlace } from '../../_utils/gathering'
import { useBridgeStore } from '../../provider'
import { format } from 'date-fns'

type FilterType = {
  place: PlaceType | undefined
  exerciseType: ExerciseType | undefined
}

export default function GatheringPage() {
  const overlay = useOverlay()
  const push = useBridgeStore(store => store.push)
  const [filter, setFilter] = useState<FilterType>({
    place: undefined,
    exerciseType: undefined,
  })
  const {
    data: { gatheringList },
  } = useGetGatheringList(filter.place, filter.exerciseType)

  const handleSelectPlace = async () => {
    const place = await new Promise<PlaceType | undefined>(resolve => {
      overlay.open(({ exit }) => (
        <BottomSheet
          title="지역 선택하기"
          onClose={() => {
            exit()
            resolve(undefined)
          }}
        >
          {Object.entries(PLACE).map(([key, label], index, list) => (
            <Fragment key={key}>
              <div
                onClick={() => {
                  exit()
                  resolve(key as PlaceType)
                }}
                style={{ padding: '16px 0' }}
              >
                <Text typography="body1">{label}</Text>
              </div>

              {index + 1 < list.length && <Divider />}
            </Fragment>
          ))}
        </BottomSheet>
      ))
    })

    if (place) setFilter(prev => ({ ...prev, place }))
  }

  const handleSelectExerciseType = async () => {
    const exerciseType = await new Promise<ExerciseType | null>(resolve =>
      overlay.open(({ exit }) => (
        <BottomSheet
          title="운동 종류 선택하기"
          onClose={() => {
            exit()
            resolve(null)
          }}
        >
          {Object.entries(EXERCISE).map(([key, label], index, list) => (
            <Fragment key={key}>
              <div
                onClick={() => {
                  exit()
                  resolve(key as ExerciseType)
                }}
                style={{ padding: '16px 0' }}
              >
                <Text typography="body1">{label}</Text>
              </div>

              {index + 1 < list.length && <Divider />}
            </Fragment>
          ))}
        </BottomSheet>
      )),
    )

    if (exerciseType) setFilter(prev => ({ ...prev, exerciseType }))
  }

  return (
    <>
      <Stack style={{ padding: 16 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            size={32}
            variant="secondary"
            onClick={handleSelectPlace}
            style={{ alignItems: 'center' }}
          >
            {filter.place ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {getPlace(filter.place)}{' '}
                <Icon
                  type="close"
                  size={16}
                  onClick={event => {
                    event.stopPropagation()
                    setFilter(prev => ({ ...prev, place: undefined }))
                  }}
                />
              </div>
            ) : (
              '지역 선택하기'
            )}
          </Button>
          <Button
            size={32}
            variant="secondary"
            onClick={handleSelectExerciseType}
          >
            {filter.exerciseType ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {getExercise(filter.exerciseType)}{' '}
                <Icon
                  type="close"
                  size={16}
                  onClick={event => {
                    event.stopPropagation()
                    setFilter(prev => ({ ...prev, exerciseType: undefined }))
                  }}
                />
              </div>
            ) : (
              '운동 종류 선택하기'
            )}
          </Button>
        </div>
      </Stack>

      <Separator />

      <Stack>
        {gatheringList.map(
          (
            {
              gatheringId,
              title,
              description,
              place,
              leaderNickname,
              currentNumber,
              startDate,
            },
            index,
            list,
          ) => (
            <Fragment key={gatheringId}>
              <PostItem
                title={title}
                description={description}
                label={`${leaderNickname} / ${getPlace(place)} / 참가자 ${currentNumber}명 / ${format(new Date(startDate), 'MM월 dd일')}`}
                image={null}
                onClick={() => push(`/community/gathering/${gatheringId}`)}
                style={{ padding: '16px 0' }}
              />

              {index + 1 < list.length && <Divider />}
            </Fragment>
          ),
        )}
      </Stack>

      <FloatingButton onClick={() => push(`/community/gathering/create`)}>
        모임 개설하기
      </FloatingButton>
    </>
  )
}
