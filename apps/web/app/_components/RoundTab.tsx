import { HTMLAttributes } from 'react'
import { FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Text from './Text'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

export default function RoundTab({
  children,
  isActive = false,
  style,
  ...props
}: Props) {
  return (
    <button
      style={{
        padding: '10px 16px',
        borderRadius: '9999px',
        border: 0,
        background: isActive ? SHAPE_COLOR.brand : SHAPE_COLOR.depth_1,
        ...style,
      }}
      {...props}
    >
      <Text
        typography={isActive ? 'label_bold' : 'label_regular'}
        fontColor={isActive ? FONT_COLOR.white : FONT_COLOR.black_primary}
        style={{ fontSize: 14 }}
      >
        {children}
      </Text>
    </button>
  )
}
