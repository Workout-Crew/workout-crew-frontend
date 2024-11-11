import Image from 'next/image'
import BronzeMedalImage from '../_assets/medal/bronze_medal.png'
import GoldMedalImage from '../_assets/medal/gold_medal.png'
import SilverMedalImage from '../_assets/medal/silver_medal.png'
import { FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Spacing from './Spacing'
import Text from './Text'

type MedalType = 'gold' | 'silver' | 'bronze'

type Props = {
  [_key in MedalType]: { label: string; disabled?: boolean }
}

export default function MedalCount({ gold, silver, bronze }: Props) {
  const list = [
    { ...gold, image: GoldMedalImage },
    { ...silver, image: SilverMedalImage },
    { ...bronze, image: BronzeMedalImage },
  ]

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {list.map(({ label, disabled, image }) => (
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          key={label}
        >
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              width: '100%',
              aspectRatio: 1,
              borderRadius: 8,
              background: SHAPE_COLOR.depth_1,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '70%',
                height: '70%',
                opacity: disabled ? 0.3 : 1,
              }}
            >
              <Image src={image} alt="Gold Medal" fill />
            </div>
          </div>

          <Spacing size={8} />

          <Text typography="caption" fontColor={FONT_COLOR.black_secondary}>
            {label}
          </Text>
        </div>
      ))}
    </div>
  )
}
