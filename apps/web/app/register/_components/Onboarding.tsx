'use client'

import Image from 'next/image'
import MedalImage from '../../_assets/medal/gold_medal.png'
import Button from '../../_components/Button'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'

interface Props {
  onNext: () => void
}

export default function Onboarding({ onNext }: Props) {
  return (
    <Stack style={{ height: '100%' }}>
      <Text typography="display1">
        목표를 달성하면 증표를 드려요.
        <br />
        이제 시작해볼까요?
      </Text>

      <Spacing size={80} />

      <Image
        src={MedalImage}
        alt="메달 이미지"
        width={250}
        height={250}
        quality={100}
        style={{ margin: '0 auto' }}
      />

      <Button
        size={48}
        variant="primary"
        onClick={onNext}
        style={{ margin: 'auto 0 16px' }}
      >
        시작하기
      </Button>
    </Stack>
  )
}
