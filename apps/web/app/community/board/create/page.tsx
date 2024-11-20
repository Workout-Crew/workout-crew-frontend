'use client'

import { ChangeEvent, useState } from 'react'
import { useCreateCategory } from '../../../_api/board/useCreateCategory'
import Button from '../../../_components/Button'
import Input from '../../../_components/Input'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'
import { useSetTitle } from '../../../_hooks/useSetTitle'
import { useBridgeStore } from '../../../provider'

export default function CreateBoardPage() {
  useSetTitle('게시판 생성하기')

  const goBack = useBridgeStore(store => store.goBack)
  const { mutate, isPending } = useCreateCategory()
  const [{ name, description }, setBoard] = useState<{
    name: string
    description: string
  }>({
    name: '',
    description: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setBoard(prev => ({ ...prev, [event.target.name]: event.target.value }))

  const handleCreate = () => {
    mutate({ name, description }, { onSuccess: goBack })
  }

  return (
    <Stack style={{ flex: 1, padding: 16 }}>
      <Input
        label="게시판 이름"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="이름을 입력해주세요."
      />

      <Spacing size={16} />

      <Input
        label="게시판 설명"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="설명을 입력해주세요."
      />

      <Spacing size={60} />

      <Button
        size={48}
        variant="primary"
        disabled={!name || !description || isPending}
        onClick={handleCreate}
        style={{ marginTop: 'auto' }}
      >
        개설하기
      </Button>
    </Stack>
  )
}
