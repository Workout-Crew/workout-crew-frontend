'use client'

import { useState } from 'react'
import Button from '../../_components/Button'
import Input from '../../_components/Input'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { useBridgeStore } from './provider'

export default function RegisterNicknamePage() {
  const [nickname, setNickname] = useState<string>('')
  const registerNickname = useBridgeStore(store => store.registerNickname)

  const handleRegister = () => {
    if (nickname.length > 0) {
      registerNickname(nickname)
    }
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
        disabled={nickname.length === 0}
        onClick={handleRegister}
        style={{ margin: 'auto 0 16px' }}
      >
        다음
      </Button>
    </Stack>
  )
}
