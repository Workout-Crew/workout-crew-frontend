'use client'

import { ChangeEvent, useState } from 'react'
import { useCreateGathering } from '../../../_api/gathering/useCreateGathering'
import { ExerciseType, PlaceType } from '../../../_api/model'
import Button from '../../../_components/Button'
import Input from '../../../_components/Input'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'
import Text from '../../../_components/Text'
import { BORDER_COLOR, FONT_COLOR } from '../../../_styles/color'
import { useBridgeStore } from '../../../provider'

type GatheringCreateType<Nullable = true> = {
  title: string
  place: Nullable extends true ? PlaceType | null : PlaceType
  exerciseType: Nullable extends true ? ExerciseType | null : ExerciseType
  startDate: Nullable extends true ? string | null : string
  content: string
}

export default function GatheringCreatePage() {
  const goBack = useBridgeStore(store => store.goBack)
  const { mutate } = useCreateGathering()
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
      <Input label="위치" placeholder="위치을 선택해주세요." />
      <Input label="운동 종류" placeholder="운동 종류를 선택해주세요." />
      <Input label="날짜 및 시간" placeholder="날짜와 시간을 선택해주세요." />

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
            fontSize: '14px',
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
        disabled={Object.values(gathering).every(value => !!value)}
        onClick={handleCreate}
        style={{ marginTop: 'auto' }}
      >
        개설하기
      </Button>
    </Stack>
  )
}
