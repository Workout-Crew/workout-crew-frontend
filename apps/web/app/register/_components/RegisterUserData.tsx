'use client'

import { ChangeEvent, useState } from 'react'
import { useMutation } from '../../_api/useMutation'
import Button from '../../_components/Button'
import Input from '../../_components/Input'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'

type UserDataType = {
  sex: 'MALE' | 'FEMALE'
  age: number
  height: number
  weight: number
}

interface Props {
  onNext: () => void
}

const isValid = (data: Partial<UserDataType>): data is UserDataType =>
  Object.values(data).every(value => !!value)

export default function RegisterUserData({ onNext }: Props) {
  const [userData, setUserData] = useState<Partial<UserDataType>>({
    sex: undefined,
    age: undefined,
    height: undefined,
    weight: undefined,
  })
  const { mutate, isPending } = useMutation<UserDataType>('/api/account')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUserData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))

  const handleRegister = () => {
    if (isValid(userData)) {
      mutate(userData, { onSuccess: onNext })
    }
  }

  return (
    <Stack style={{ height: '100%' }}>
      <Text typography="display1">
        운동 추천을 위해
        <br />
        아래 정보를 입력해주세요.
      </Text>

      <Spacing size={32} />

      <Stack style={{ gap: 16, padding: 0 }}>
        <div>
          <Text typography="body2">내용</Text>
          <Spacing size={10} />
          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              size={48}
              variant={userData.sex === 'MALE' ? 'primary' : 'secondary'}
              onClick={() => setUserData(prev => ({ ...prev, sex: 'MALE' }))}
            >
              남성
            </Button>
            <Button
              size={48}
              variant={userData.sex === 'FEMALE' ? 'primary' : 'secondary'}
              onClick={() => setUserData(prev => ({ ...prev, sex: 'MALE' }))}
            >
              여성
            </Button>
          </div>
        </div>

        <Input
          label="나이"
          type="number"
          name="age"
          placeholder="숫자만 입력해주세요."
          onChange={handleChange}
        />
        <Input
          label="키 (cm)"
          type="number"
          name="height"
          placeholder="숫자만 입력해주세요."
          onChange={handleChange}
        />
        <Input
          label="몸무게 (kg)"
          type="number"
          name="weight"
          placeholder="숫자만 입력해주세요."
          onChange={handleChange}
        />
      </Stack>

      <Button
        size={48}
        variant="primary"
        disabled={!isValid(userData) || isPending}
        onClick={handleRegister}
        style={{ margin: 'auto 0 16px' }}
      >
        다음
      </Button>
    </Stack>
  )
}
