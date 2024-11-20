import { ChangeEvent, Fragment, useState } from 'react'
import { useOverlay } from '@toss/use-overlay'
import { useCreateExerciseLog } from '../_api/exercise-log/useCreateExerciseLog'
import { ExerciseType } from '../_api/model'
import BottomSheet from '../_components/BottomSheet'
import Divider from '../_components/Divider'
import Stack from '../_components/Stack'
import Text from '../_components/Text'
import { BORDER_COLOR } from '../_styles/color'
import { EXERCISE } from '../_utils/exercise'
import { base64ToFile, getRandomName } from '../_utils/image'
import { useBridgeStore } from '../provider'
import ImageList from '../record/_components/ImageList'
import Intensity from '../record/_components/Intensity'
import Memo from '../record/_components/Memo'
import TimePicker from '../record/_components/TimePicker'
import { produce } from 'immer'

type MetadataType = {
  title: string
  date: Date
  startTime: Date | null
  endTime: Date | null
  exerciseType: ExerciseType | null
  gatheringId: number | null
}

type ContentType = Array<
  | { type: 'MEMO'; data: string }
  | { type: 'INTENSITY'; data: 0 | 1 | 2 | 3 | 4 | 5 }
  | { type: 'IMAGE'; data: string[] }
>

const RECORD_TYPE = {
  MEMO: {
    title: '자유 메모',
    description: '사용자가 자유롭게 내용을 작성할 수 있는 요소입니다.',
  },
  HEALTH_MEMO: {
    title: '헬스 기록 (메모 템플릿)',
    description: '종류 / 중량 / 세트 / 반복 횟수를 작성할 수 있는 요소입니다.',
  },
  RUNNING_MEMO: {
    title: '유산소 기록 (메모 템플릿)',
    description: '거리 / 시간 등을 작성할 수 있는 요소입니다.',
  },
  INTENSITY: {
    title: '운동 강도',
    description: '사용자가 느낀 강도를 별점을 통해 표현할 수 있는 요소입니다.',
  },
  IMAGE: {
    title: '사진 기록',
    description: '운동 과정 또는 결과 사진을 업로드할 수 있는 요소입니다.',
  },
} as const

const TEMPLATE = {
  health: `운동 종류 : 
중량 :
세트 :
반복 횟수 :
-------------------
(위 템플릿을 반복해서 작성해주세요.)
`,
  running: `운동 장소 : 
거리 : 
시간 : `,
}

export function useWriteRecord(
  date: Date,
  exerciseType: ExerciseType | null,
  gatheringId: string | null,
) {
  const getPhotos = useBridgeStore(store => store.getPhotos)
  const goBack = useBridgeStore(store => store.goBack)
  const overlay = useOverlay()
  const { mutate, isPending } = useCreateExerciseLog()

  const [metadata, setMetadata] = useState<MetadataType>({
    title: '',
    date: new Date(date),
    startTime: null,
    endTime: null,
    exerciseType,
    gatheringId: gatheringId ? parseInt(gatheringId) : null,
  })
  const [contents, setContents] = useState<ContentType>([])

  const handleSetTitle = (title: string) =>
    setMetadata(prev => ({ ...prev, title }))

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

    if (exerciseType) setMetadata(prev => ({ ...prev, exerciseType }))
  }

  const handleSelectTime = async () => {
    const times = await new Promise<{ start: Date; end: Date } | null>(
      resolve =>
        overlay.open(({ exit }) => (
          <BottomSheet
            title="운동 시간 선택하기"
            onClose={() => {
              exit()
              resolve(null)
            }}
          >
            <TimePicker
              date={metadata.date}
              onSubmit={time => {
                exit()
                resolve(time)
              }}
            />
          </BottomSheet>
        )),
    )

    if (times) {
      setMetadata(prev => ({
        ...prev,
        startTime: times.start,
        endTime: times.end,
      }))
    }
  }

  const handleAddItem = async () => {
    const selected = await new Promise<keyof typeof RECORD_TYPE | null>(
      resolve =>
        overlay.open(({ exit }) => (
          <BottomSheet
            title="요소 추가하기"
            onClose={() => {
              exit()
              resolve(null)
            }}
          >
            <Stack style={{ gap: 8, padding: 0 }}>
              {Object.entries(RECORD_TYPE).map(
                ([key, { title, description }]) => (
                  <div
                    onClick={() => {
                      exit()
                      resolve(key as keyof typeof RECORD_TYPE)
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 16,
                      borderRadius: 8,
                      border: `1px solid ${BORDER_COLOR.button}`,
                    }}
                    key={key}
                  >
                    <Text typography="title2">{title}</Text>
                    <Text typography="body2">{description}</Text>
                  </div>
                ),
              )}
            </Stack>
          </BottomSheet>
        )),
    )

    if (selected) {
      switch (selected) {
        case 'MEMO':
          setContents(prev => [...prev, { type: 'MEMO', data: '' }])
          break
        case 'HEALTH_MEMO':
          setContents(prev => [
            ...prev,
            { type: 'MEMO', data: TEMPLATE.health },
          ])
          break
        case 'RUNNING_MEMO':
          setContents(prev => [
            ...prev,
            { type: 'MEMO', data: TEMPLATE.running },
          ])
          break
        case 'INTENSITY':
          setContents(prev => [...prev, { type: 'INTENSITY', data: 0 }])
          break
        case 'IMAGE':
          setContents(prev => [...prev, { type: 'IMAGE', data: [] }])
          break
      }
    }
  }

  const handleChangeMemo = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setContents(prev =>
      produce(prev, draft => {
        const index = draft.findIndex(({ type }) => type === 'MEMO')

        if (index !== -1) {
          draft[index]!.data = event.target.value
        }

        return draft
      }),
    )

  const handleSetIntensity = (intensity: 0 | 1 | 2 | 3 | 4 | 5) =>
    setContents(prev =>
      produce(prev, draft => {
        const index = draft.findIndex(({ type }) => type === 'INTENSITY')

        if (index !== -1) {
          draft[index]!.data = intensity
        }

        return draft
      }),
    )

  const handleSetPhotos = async () => {
    const photos = await getPhotos(
      8 - (contents.find(c => c.type === 'IMAGE')?.data.length ?? 0),
    )

    if (photos.length > 0) {
      setContents(prev =>
        produce(prev, draft => {
          const index = draft.findIndex(({ type }) => type === 'IMAGE')

          if (index !== -1) {
            ;(draft[index]!.data as string[]).push(...photos)
          }

          return draft
        }),
      )
    }
  }

  const handleSubmit = () => {
    const { title, exerciseType, startTime, endTime, gatheringId } = metadata

    if (!title || !exerciseType || !startTime || !endTime) return

    const formData = new FormData()
    const fileName = getRandomName(10)

    formData.append(
      'request',
      JSON.stringify({
        title,
        exerciseType,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        description: contents.find(({ type }) => type === 'MEMO')?.data ?? '',
        intensity: contents.find(({ type }) => type === 'INTENSITY')?.data ?? 0,
        gatheringId,
      }),
    )
    ;(
      (contents.find(({ type }) => type === 'IMAGE')?.data ?? []) as string[]
    ).forEach((photo, index) =>
      formData.append('image', base64ToFile(photo, `${fileName}-${index}`)),
    )

    mutate(formData, {
      onSuccess: goBack,
      onSettled: (result, error) => console.log(result, error),
    })
  }

  const handleRemove = (index: number) =>
    setContents(prev => prev.filter((_, i) => i !== index))

  const render = () =>
    contents.map(({ type, data }, index) => {
      switch (type) {
        case 'MEMO':
          return (
            <Memo
              contents={data}
              onChange={handleChangeMemo}
              onRemove={() => handleRemove(index)}
              key={type}
            />
          )
        case 'INTENSITY':
          return (
            <Intensity
              intensity={data}
              onChange={handleSetIntensity}
              onRemove={() => handleRemove(index)}
              key={type}
            />
          )
        case 'IMAGE':
          return (
            <ImageList
              images={data}
              onAppend={handleSetPhotos}
              onRemove={() => handleRemove(index)}
              key={type}
            />
          )
      }
    })

  return {
    metadata,
    submitEnabled:
      Object.entries(metadata).every(
        ([key, value]) => key === 'gatheringId' || !!value,
      ) &&
      contents.length > 0 &&
      contents.every(({ data }) => {
        if (Array.isArray(data)) return data.length > 0
        else return !!data
      }) &&
      !isPending,
    handleSetTitle,
    handleSelectExerciseType,
    handleSelectTime,
    handleAddItem,
    handleSubmit,
    render,
  }
}
