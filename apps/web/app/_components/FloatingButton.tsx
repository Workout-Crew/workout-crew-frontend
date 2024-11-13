import { HTMLAttributes } from 'react'
import { FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Text from './Text'

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export default function FloatingButton({ children, style, ...props }: Props) {
  return (
    <button
      style={{
        position: 'fixed',
        bottom: 50,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        display: 'grid',
        placeItems: 'center',
        width: 'fit-content',
        padding: '8px 16px',
        borderRadius: '9999px',
        border: 0,
        background: SHAPE_COLOR.brand,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        ...style,
      }}
      {...props}
    >
      <Text typography="title2" fontColor={FONT_COLOR.white}>
        {children}
      </Text>
    </button>
  )
}
