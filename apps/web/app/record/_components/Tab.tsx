import { ButtonHTMLAttributes, ReactNode } from 'react'
import Text from '../../_components/Text'
import { BORDER_COLOR, SHAPE_COLOR } from '../../_styles/color'

interface TabItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
  children: ReactNode
}

export default function Tab({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        flexShrink: 0,
        display: 'flex',
        width: '100%',
        height: '48px',
        borderBottom: `1px solid ${BORDER_COLOR.div}`,
        background: SHAPE_COLOR.white,
      }}
    >
      {children}
    </div>
  )
}

Tab.Item = function Item({
  isActive,
  children,
  style,
  ...props
}: TabItemProps) {
  return (
    <button
      style={{
        position: 'relative',
        flex: 1,
        display: 'grid',
        placeItems: 'center',
        border: 'none',
        background: 'none',
        outline: 'none',
        ...style,
      }}
      {...props}
    >
      <Text typography="title1">{children}</Text>
      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: BORDER_COLOR.brand,
          }}
        />
      )}
    </button>
  )
}
