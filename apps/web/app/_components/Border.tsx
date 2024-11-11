import { BORDER_COLOR } from '../_styles/color'

interface Props {
  size: number
  padding?: number
}

export default function Border({ size, padding = 0 }: Props) {
  return (
    <div
      style={{
        flex: 'none',
        height: size,
        paddingTop: padding,
        paddingBottom: padding,
        background: BORDER_COLOR.div,
      }}
    />
  )
}
