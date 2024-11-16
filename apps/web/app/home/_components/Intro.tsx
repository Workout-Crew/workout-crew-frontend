'use client'

import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import ChartImage from '../../_assets/intro/chart.png'
import FireImage from '../../_assets/intro/fire.png'
import RocketImage from '../../_assets/intro/rocket.png'
import TargetImage from '../../_assets/intro/target.png'
import Button from '../../_components/Button'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { SHAPE_COLOR } from '../../_styles/color'
import { useBridgeStore } from '../provider'

const DUMMY_NICKNAME = '홍길동'

const INTROS: Array<{
  image: StaticImageData
  getTitle: (_nickname: string) => ReactNode
}> = [
  {
    image: ChartImage,
    getTitle: (nickname: string) => (
      <>
        오늘도 반가워요, {nickname}님!
        <br />
        기록 증진을 위해 응원해요!
      </>
    ),
  },
  {
    image: FireImage,
    getTitle: (nickname: string) => (
      <>
        안녕하세요, {nickname}님!
        <br />
        오늘도 신나게 운동해볼까요?
      </>
    ),
  },
  {
    image: RocketImage,
    getTitle: (nickname: string) => (
      <>
        좋은 하루에요, {nickname}님!
        <br />
        오늘은 더 높이 날아볼까요?
      </>
    ),
  },
  {
    image: TargetImage,
    getTitle: (nickname: string) => (
      <>
        어서와요, {nickname}님!
        <br />
        목표 달성까지 화이팅이에요.
      </>
    ),
  },
]

export default function Intro() {
  const navigateWritePage = useBridgeStore(store => store.navigateWritePage)
  const { image, getTitle } = INTROS[Math.floor(Math.random() * INTROS.length)]!

  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Image src={image} alt="intro" width={80} height={80} />

      <Text typography="display2">{getTitle(DUMMY_NICKNAME)}</Text>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0',
          borderRadius: 8,
          background: SHAPE_COLOR.depth_1,
          textAlign: 'center',
        }}
      >
        <Text typography="title1">
          운동 루틴 추천을 위해
          <br />
          {DUMMY_NICKNAME}님의 운동 기록이 필요합니다.
        </Text>
      </div>

      <Button
        size={48}
        variant="primary"
        onClick={() => navigateWritePage(new Date())}
      >
        오늘의 운동 기록하기
      </Button>
    </Stack>
  )
}
