import { MouseEventHandler, ReactNode } from 'react'
import Text from '../../_components/Text'
import { FONT_COLOR } from '../../_styles/color'

interface Props {
  active: boolean
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Day({ active, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        height: 50,
        border: 0,
        background: 'transparent',
      }}
    >
      <Text
        typography={active ? 'title2' : 'body2'}
        fontColor={
          active ? FONT_COLOR.black_primary : FONT_COLOR.black_tertiary
        }
      >
        {children}
      </Text>
    </button>
  )
}
