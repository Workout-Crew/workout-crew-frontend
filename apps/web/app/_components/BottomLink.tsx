import { MouseEventHandler, ReactNode } from 'react'
import { FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Divider from './Divider'
import Icon from './Icon'
import Text from './Text'

interface Props {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function BottomLink({ children, onClick }: Props) {
  return (
    <div>
      <Divider />
      <button
        onClick={onClick}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: 3,
          border: 0,
          paddingTop: 16,
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
