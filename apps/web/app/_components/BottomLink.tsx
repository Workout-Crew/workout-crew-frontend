import { MouseEventHandler, ReactNode } from 'react'
import { FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Divider from './Divider'
import Icon from './Icon'
import Spacing from './Spacing'
import Text from './Text'

interface Props {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function BottomLink({ children, onClick }: Props) {
  return (
    <div>
      <Divider />
      <Spacing size={16} />
      <button
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          margin: '0 auto',
          border: 0,
          background: 'none',
        }}
      >
        <Text typography="caption" fontColor={FONT_COLOR.black_tertiary}>
          {children}
        </Text>
        <Icon type="chevronRight" size={13} color={SHAPE_COLOR.iconlight} />
      </button>
    </div>
  )
}
