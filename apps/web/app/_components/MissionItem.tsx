import Image from 'next/image'
import BronzeMedalImage from '../_assets/medal/bronze_medal.png'
import GoldMedalImage from '../_assets/medal/gold_medal.png'
import SilverMedalImage from '../_assets/medal/silver_medal.png'
import { FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Spacing from './Spacing'
import Text from './Text'

const MEDAL_IMAGE_BY_TYPE = {
  GOLD: GoldMedalImage,
  SILVER: SilverMedalImage,
  BRONZE: BronzeMedalImage,
}

interface Props {
  type: keyof typeof MEDAL_IMAGE_BY_TYPE
  title: string
  current: number
  total: number
}

export default function MissionItem({ type, title, current, total }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          width: 40,
          height: 40,
          borderRadius: 4,
          background: SHAPE_COLOR.depth_1,
        }}
      >
        <Image
          src={MEDAL_IMAGE_BY_TYPE[type]}
          alt={title}
          width={32}
          height={32}
        />
      </div>

      <Spacing size={10} direction="horizontal" />

      <div style={{ flex: 1 }}>
        <Text typography="title2" fontColor={FONT_COLOR.black_secondary}>
          {title} ({current}/{total})
        </Text>

        <Spacing size={2} />

        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            height: 8,
            borderRadius: 4,
            background: SHAPE_COLOR.div,
          }}
        >
          <div
            style={{
              width: `${(current / total) * 100}%`,
              height: '100%',
              borderRadius: 4,
              background: SHAPE_COLOR.brand,
            }}
          />
        </div>
      </div>
    </div>
  )
}
