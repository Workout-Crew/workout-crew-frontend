import { HTMLAttributes } from 'react'
import Image from 'next/image'
import KakaoImage from '../../_assets/kakao.svg'

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export default function KakaoLoginButton({ children, style, ...props }: Props) {
  return (
    <button
      {...props}
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
        ...style,
      }}
    >
      <Image
        src={KakaoImage}
        alt="Kakao"
        width={40}
        height={40}
        style={{ position: 'absolute', top: '4px', left: '4px' }}
      />
      {children}
    </button>
  )
}
