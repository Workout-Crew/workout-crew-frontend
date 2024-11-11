import { BORDER_COLOR } from '../_styles/color'

export default function Separator() {
  return (
    <div
      style={{
        flexShrink: 0,
        width: '100%',
        height: 16,
        background: BORDER_COLOR.div,
      }}
    />
  )
}
