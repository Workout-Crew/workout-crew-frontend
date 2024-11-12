'use client'

import Icon from '../../_components/Icon'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR, SHAPE_COLOR } from '../../_styles/color'

const DUMMY_DATA = 4

export default function Intensity() {
  return (
    <Stack
      style={{
        padding: 16,
        borderRadius: 8,
        border: `1px solid ${BORDER_COLOR.div}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text typography="title2">운동 강도</Text>
        <div>
          <Icon type="more" />
        </div>
      </div>

      <Spacing size={16} />

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            type="star"
            size={40}
            color={
              index + 1 <= DUMMY_DATA
                ? SHAPE_COLOR.brand
                : SHAPE_COLOR.iconlight
            }
            key={index}
          />
        ))}
      </div>
    </Stack>
  )
}
