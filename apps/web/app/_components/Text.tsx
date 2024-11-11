import { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import { FONT_COLOR } from '../_styles/color'

export const Typography = {
  display1: {
    fontSize: 24,
    lineHeight: '32px',
    fontWeight: 700,
    letterSpacing: -1,
  },
  display2: {
    fontSize: 20,
    lineHeight: '28px',
    fontWeight: 700,
    letterSpacing: -1,
  },
  title1: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 700,
    letterSpacing: -0.5,
  },
  title2: {
    fontSize: 14,
    lineHeight: '24px',
    fontWeight: 700,
    letterSpacing: -0.5,
  },
  body1: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: -0.5,
  },
  body2: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: -0.5,
  },
  caption: {
    fontSize: 13,
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: -0.5,
  },
  label_bold: {
    fontSize: 10,
    lineHeight: '14px',
    fontWeight: 700,
    letterSpacing: -0.5,
  },
  label_regular: {
    fontSize: 10,
    lineHeight: '14px',
    fontWeight: 400,
    letterSpacing: -0.5,
  },
}

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography: keyof typeof Typography
  fontColor?: string
  style?: Omit<CSSProperties, 'color'>
  children: ReactNode
}

export default function Text({
  typography,
  fontColor = FONT_COLOR.black_primary,
  style,
  children,
  ...props
}: Props) {
  return (
    <span
      style={{ ...Typography[typography], color: fontColor, ...style }}
      {...props}
    >
      {children}
    </span>
  )
}
