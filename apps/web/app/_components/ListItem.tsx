import { MouseEventHandler } from 'react'
import { createTextOverflowStyle } from '../_styles/utils'
import Icon from './Icon'
import Text from './Text'

interface Props {
  title: string
  description: string | null
  onClick: MouseEventHandler<HTMLDivElement>
}

export default function ListItem({ title, description, onClick }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      }}
      onClick={onClick}
    >
      <div
        style={{ overflow: 'auto', display: 'flex', flexDirection: 'column' }}
      >
        <Text typography="title2" style={createTextOverflowStyle(1)}>
          {title}
        </Text>
        {description && (
          <Text typography="body2" style={createTextOverflowStyle(1)}>
            {description}
          </Text>
        )}
      </div>

      <Icon type="chevronRight" size={18} style={{ flexShrink: 0 }} />
    </div>
  )
}
