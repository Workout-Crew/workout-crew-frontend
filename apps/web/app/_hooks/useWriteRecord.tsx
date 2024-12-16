import { ChangeEvent, Fragment, useState } from 'react'
import { useOverlay } from '@toss/use-overlay'
import { useCreateExerciseLog } from '../_api/exercise-log/useCreateExerciseLog'
import { ExerciseType } from '../_api/model'
import BottomSheet from '../_components/BottomSheet'
import Divider from '../_components/Divider'
import Text from '../_components/Text'
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

export type ContentType =
  | { type: 'MEMO'; data: string }
  | { type: 'INTENSITY'; data: 0 | 1 | 2 | 3 | 4 | 5 }
  | { type: 'IMAGE'; data: string[] }

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
  const [contents, setContents] = useState<ContentType[]>([])

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

  const handleAddItem = async (item: ContentType) => {
    setContents(prev => [...prev, item])
    // switch (selected) {
    //   case 'MEMO':
    //     setContents(prev => [...prev, { type: 'MEMO', data: '' }])
    //     break
    //   case 'HEALTH_MEMO':
    //     setContents(prev => [
    //       ...prev,
    //       { type: 'MEMO', data: TEMPLATE.health },
    //     ])
    //     break
    //   case 'RUNNING_MEMO':
    //     setContents(prev => [
    //       ...prev,
    //       { type: 'MEMO', data: TEMPLATE.running },
    //     ])
    //     break
    //   case 'INTENSITY':
    //     setContents(prev => [...prev, { type: 'INTENSITY', data: 0 }])
    //     break
    //   case 'IMAGE':
    //     setContents(prev => [...prev, { type: 'IMAGE', data: [] }])
    //     break
    // }
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
