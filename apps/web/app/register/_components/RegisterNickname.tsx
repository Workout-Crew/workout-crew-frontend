'use client'

import { useState } from 'react'
import { useMutation } from '../../_api/useMutation'
import Button from '../../_components/Button'
import Input from '../../_components/Input'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'

interface Props {
  onNext: () => void
}

export default function RegisterNickname({ onNext }: Props) {
  const [nickname, setNickname] = useState<string>('')
  const { mutate, isPending } = useMutation<{ nickname: string }>(
    '/api/account/nickname',
  )
  const handleRegister = () => {
    mutate({ nickname }, { onSuccess: onNext })
  }

  return (
    <Stack style={{ height: '100%' }}>
      <Text typography="display1">
        사용하고 싶은
        <br />
        닉네임을 입력해주세요.
      </Text>

      <Spacing size={32} />

      <Input
        label="닉네임"
        value={nickname}
        onChange={event => setNickname(event.target.value)}
        placeholder="한글과 영문, 숫자만 입력해주세요."
      />

      <Button
        size={48}
        variant="primary"
        disabled={nickname.length === 0 || isPending}
        onClick={handleRegister}
        style={{ margin: 'auto 0 16px' }}
      >
        다음
      </Button>
    </Stack>
  )
}
