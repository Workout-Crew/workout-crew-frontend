'use client'

import Image from 'next/image'
import KakaoImage from '../_assets/kakao.svg'
import LogoImage from '../_assets/logo.svg'
import Stack from '../_components/Stack'
import Text from '../_components/Text'
import { useBridgeStore } from './provider'

export default function LoginPage() {
  const login = useBridgeStore(store => store.login)

  const handleLogin = async () => {
    const result = await login()

    if ('data' in result) {
      console.log(result.data)
    } else {
      console.error(result.error)
    }
  }

  return (
    <Stack
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '120px 0 60px',
      }}
    >
      <Image src={LogoImage} alt="Logo" width={150} height={192} priority />

      <button
        onClick={handleLogin}
        style={{
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
          width: '100%',
          maxWidth: '265px',
          height: '48px',
          borderRadius: '24px',
          border: 'none',
          background: '#FFE812',
          outline: 'none',
        }}
      >
        <Image
          src={KakaoImage}
          alt="Kakao"
          width={40}
          height={40}
          style={{ position: 'absolute', top: '4px', left: '4px' }}
        />
        <Text typography="title2">카카오로 로그인하기</Text>
      </button>
    </Stack>
  )
}
