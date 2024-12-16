'use client'

import { ReactNode, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useGetExerciseRecommendation } from '../../_api/recommendation/useGetExerciseRecommendation'
import ChartImage from '../../_assets/intro/chart.png'
import FireImage from '../../_assets/intro/fire.png'
import RocketImage from '../../_assets/intro/rocket.png'
import TargetImage from '../../_assets/intro/target.png'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { SHAPE_COLOR } from '../../_styles/color'
import { getExercise } from '../../_utils/exercise'
import { useBridgeStore } from '../../provider'

type IntroUtilsType = {
  image: StaticImageData
  getTitle: (_nickname: string) => ReactNode
}

const INTROS: Array<IntroUtilsType> = [
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
  const { data } = useGetExerciseRecommendation()
  const nickname = useBridgeStore(store => store.user?.nickname)
  const [{ image, getTitle }] = useState<IntroUtilsType>(
    INTROS[Math.floor(Math.random() * INTROS.length)]!,
  )

  if (!nickname) return null
  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Image src={image} alt="intro" width={80} height={80} />

      <Text typography="display2">{getTitle(nickname)}</Text>

      <div
        style={{
          display: 'flex',
          padding: '20px',
          borderRadius: 8,
          background: SHAPE_COLOR.depth_1,
        }}
      >
        {data ? (
          <Stack style={{ padding: 0, alignItems: 'flex-start' }}>
            <Text typography="title1">
              {getExercise(data.exerciseType)}을 추천드려요!
            </Text>
            <Spacing size={8} />
            <Text typography="body1" style={{ wordBreak: 'keep-all' }}>
              {data.description}
            </Text>
          </Stack>
        ) : (
          <Text
            typography="title1"
            style={{ margin: '0 auto', textAlign: 'center' }}
          >
            운동 루틴 추천을 위해
            <br />
            {nickname}님의 운동 기록이 필요합니다.
          </Text>
        )}
      </div>
    </Stack>
  )
}
