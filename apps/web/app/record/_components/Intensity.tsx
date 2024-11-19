'use client'

import Icon from '../../_components/Icon'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR, SHAPE_COLOR } from '../../_styles/color'

interface Props {
  intensity: number
  readOnly?: boolean
  onChange?: (_intensity: 0 | 1 | 2 | 3 | 4 | 5) => void
  onRemove?: () => void
}

export default function Intensity({
  intensity,
  readOnly,
  onChange,
  onRemove,
}: Props) {
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
        {!readOnly && (
          <div onClick={onRemove}>
            <Icon type="close" />
          </div>
        )}
      </div>

      <Spacing size={16} />

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
        {Array.from({ length: 5 }).map((_, index) => {
          const targetIntensity = (index + 1) as 0 | 1 | 2 | 3 | 4 | 5

          return (
            <Icon
              type="star"
              size={40}
              color={
                targetIntensity <= intensity
                  ? SHAPE_COLOR.brand
                  : SHAPE_COLOR.iconlight
              }
              onClick={
                !readOnly
                  ? () =>
                      onChange?.(
                        intensity === targetIntensity ? 0 : targetIntensity,
                      )
                  : undefined
              }
              key={index}
            />
          )
        })}
      </div>
    </Stack>
  )
}
