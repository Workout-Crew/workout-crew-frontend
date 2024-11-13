'use client'

import Button from '../../../_components/Button'
import Input from '../../../_components/Input'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'

export default function CreateBoardPage() {
  return (
    <Stack style={{ flex: 1, padding: 16 }}>
      <Input label="게시판 이름" placeholder="이름을 입력해주세요." />

      <Spacing size={16} />

      <Input label="게시판 설명" placeholder="설명을 입력해주세요." />

      <Spacing size={60} />

      <Button
        size={48}
        variant="primary"
        onClick={() => null}
        style={{ marginTop: 'auto' }}
      >
        개설하기
      </Button>
    </Stack>
  )
}
