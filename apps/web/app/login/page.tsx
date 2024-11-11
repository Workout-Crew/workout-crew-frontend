import Image from 'next/image'
import LogoImage from '../_assets/logo.svg'
import Stack from '../_components/Stack'
import Text from '../_components/Text'
import KakaoLoginButton from './_components/KakaoLoginButton'

export default function LoginPage() {
  return (
    <Stack
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '120px 0 60px',
      }}
    >
      <Image src={LogoImage} alt="Logo" width={150} height={192} />
      <KakaoLoginButton>
        <Text typography="title2">카카오로 로그인하기</Text>
      </KakaoLoginButton>
    </Stack>
  )
}
