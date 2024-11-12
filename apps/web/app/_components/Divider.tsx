import { HTMLAttributes } from 'react'
import { BORDER_COLOR } from '../_styles/color'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function Divider({ style, ...props }: Props) {
  return (
    <div
      style={{
        width: '100%',
        height: 1,
        background: BORDER_COLOR.div,
        ...style,
      }}
      {...props}
    />
  )
}
