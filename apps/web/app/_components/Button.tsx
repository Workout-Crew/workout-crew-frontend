import { ButtonHTMLAttributes, CSSProperties } from 'react'
import { BORDER_COLOR, FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Text from './Text'

type ButtonSize = 48 | 32
type ButtonVariant = 'primary' | 'secondary'

const STYLES: Record<ButtonSize, Record<ButtonVariant, CSSProperties>> = {
  48: {
    primary: {
      width: '100%',
      height: 48,
      border: 0,
      background: SHAPE_COLOR.brand,
    },
    secondary: {
      width: '100%',
      height: 48,
      border: `1px solid ${BORDER_COLOR.button}`,
      background: SHAPE_COLOR.white,
    },
  },
  32: {
    primary: {
      width: 'fit-content',
      height: 32,
      padding: '0 12px',
      border: 0,
      background: SHAPE_COLOR.brand,
    },
    secondary: {
      width: 'fit-content',
      height: 32,
      padding: '0 12px',
      border: `1px solid ${BORDER_COLOR.button}`,
      background: SHAPE_COLOR.depth_1,
    },
  },
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize
  variant: ButtonVariant
}

export default function Button({
  children,
  disabled,
  size,
  style,
  variant,
  ...props
}: Props) {
  const isBigPrimary = size === 48 && variant === 'primary'
  const typography = `label_${isBigPrimary ? 'bold' : 'regular'}` as const
  const fontColor = disabled
    ? FONT_COLOR.black_tertiary
    : variant === 'primary'
      ? FONT_COLOR.white
      : FONT_COLOR.black_primary

  return (
    <button
      style={{
        display: 'grid',
        placeItems: 'center',
        borderRadius: 4,
        ...STYLES[size][variant],
        ...(disabled && {
          background: isBigPrimary ? SHAPE_COLOR.depth_2 : SHAPE_COLOR.depth_1,
        }),
        ...style,
      }}
      {...props}
    >
      <Text
        typography={typography}
        fontColor={fontColor}
        style={{ fontSize: 14 }}
      >
        {children}
      </Text>
    </button>
  )
}
