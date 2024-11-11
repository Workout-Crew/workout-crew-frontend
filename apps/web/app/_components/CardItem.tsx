import { HTMLAttributes, MouseEventHandler } from 'react'
import { FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Icon from './Icon'
import Spacing from './Spacing'
import Text from './Text'

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  title: string
  description: string
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
        padding: 10,
        borderRadius: 4,
        background: SHAPE_COLOR.depth_1,
        ...style,
      }}
      {...props}
    >
      <Text typography="title2">{title}</Text>
      <Text typography="label_regular">{description}</Text>

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
          {label}
        </Text>
        <Icon type="chevronRight" size={13} color={SHAPE_COLOR.iconlight} />
      </button>
    </div>
  )
}
