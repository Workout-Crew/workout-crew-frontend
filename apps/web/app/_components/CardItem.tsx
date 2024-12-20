import { HTMLAttributes, MouseEventHandler } from 'react'
import { FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Icon from './Icon'
import Spacing from './Spacing'
import Text from './Text'

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  title: string
  description?: string
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function CardItem({
  title,
  description,
  label,
  style,
  onClick,
  ...props
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 12,
        borderRadius: 8,
        background: SHAPE_COLOR.depth_1,
        ...style,
      }}
      {...props}
    >
      <Text typography="title2">{title}</Text>
      {description && (
        <Text typography="caption" style={{ wordBreak: 'keep-all' }}>
          {description}
        </Text>
      )}

      <Spacing size={16} />

      <button
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          marginTop: 'auto',
          padding: 0,
          border: 0,
          background: 'none',
        }}
      >
        <Text typography="caption" fontColor={FONT_COLOR.black_tertiary}>
          {label}
        </Text>
        <Icon type="chevronRight" size={13} color={SHAPE_COLOR.iconlight} />
      </button>
    </div>
  )
}
