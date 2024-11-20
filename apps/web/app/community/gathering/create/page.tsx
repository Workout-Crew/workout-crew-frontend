'use client'

import { ChangeEvent, Fragment, useState } from 'react'
import { useOverlay } from '@toss/use-overlay'
import { useCreateGathering } from '../../../_api/gathering/useCreateGathering'
import { ExerciseType, PlaceType } from '../../../_api/model'
import BottomSheet from '../../../_components/BottomSheet'
import Button from '../../../_components/Button'
import Divider from '../../../_components/Divider'
import Input from '../../../_components/Input'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'
import Text from '../../../_components/Text'
import { useSetTitle } from '../../../_hooks/useSetTitle'
import { BORDER_COLOR, FONT_COLOR } from '../../../_styles/color'
import { EXERCISE, getExercise } from '../../../_utils/exercise'
import { PLACE, getPlace } from '../../../_utils/gathering'
import { useBridgeStore } from '../../../provider'
import { format } from 'date-fns'

type GatheringCreateType<Nullable = true> = {
  title: string
  place: Nullable extends true ? PlaceType | null : PlaceType
  exerciseType: Nullable extends true ? ExerciseType | null : ExerciseType
  startDate: Nullable extends true ? string | null : string
  content: string
}

export default function GatheringCreatePage() {
  useSetTitle('모임 개설하기')

  const goBack = useBridgeStore(store => store.goBack)
  const overlay = useOverlay()
  const { mutate, isPending } = useCreateGathering()
  const [gathering, setGathering] = useState<GatheringCreateType>({
    title: '',
    place: null,
    exerciseType: null,
    startDate: null,
    content: '',
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setGathering(prev => ({ ...prev, [event.target.name]: event.target.value }))

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

    if (exerciseType) setGathering(prev => ({ ...prev, exerciseType }))
  }

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

    if (place) setGathering(prev => ({ ...prev, place }))
  }

  const handleCreate = () => {
    if (gathering.place) {
      mutate(gathering as unknown as GatheringCreateType<false>, {
        onSuccess: goBack,
      })
    }
  }

  return (
    <Stack style={{ flex: 1, gap: 16, padding: 16 }}>
      <Input
        label="제목"
        name="title"
        value={gathering.title}
        onChange={handleChange}
        placeholder="제목을 입력해주세요."
      />
      <Input
        label="위치"
        value={gathering.place ? getPlace(gathering.place) : undefined}
        onClick={handleSelectPlace}
        readOnly
        placeholder="위치을 선택해주세요."
      />
      <Input
        label="운동 종류"
        value={
          gathering.exerciseType
            ? getExercise(gathering.exerciseType)
            : undefined
        }
        onClick={handleSelectExerciseType}
        readOnly
        placeholder="운동 종류를 선택해주세요."
      />
      <Input
        label="날짜 및 시간"
        name="startDate"
        type="datetime-local"
        value={
          gathering.startDate
            ? format(new Date(gathering.startDate), 'yyyy-MM-dd HH:mm')
            : undefined
        }
        onChange={event =>
          setGathering(prev => ({
            ...prev,
            startDate: new Date(event.target.value).toISOString(),
          }))
        }
        placeholder="날짜와 시간을 선택해주세요."
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="content">
          <Text typography="body2">내용</Text>
        </label>

        <textarea
          id="content"
          name="content"
          value={gathering.content}
          onChange={handleChange}
          placeholder="내용을 입력해주세요."
          style={{
            height: 200,
            padding: 16,
            borderRadius: '4px',
            border: `1px solid ${BORDER_COLOR.button}`,
            fontSize: 16,
            lineHeight: '20px',
            letterSpacing: '-0.5px',
            color: FONT_COLOR.black_primary,
            outline: 'none',
            resize: 'none',
          }}
        />
      </div>

      <Spacing size={48} />

      <Button
        size={48}
        variant="primary"
        disabled={Object.values(gathering).some(value => !value) || isPending}
        onClick={handleCreate}
        style={{ marginTop: 'auto' }}
      >
        개설하기
      </Button>
    </Stack>
  )
}
