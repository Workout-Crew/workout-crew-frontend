import { ReactNode } from 'react'
import { SHAPE_COLOR } from '../_styles/color'
import Icon from './Icon'
import Spacing from './Spacing'
import Text from './Text'

interface Props {
  title: string
  onClose: () => void
  children: ReactNode
}

export default function BottomSheet({ title, onClose, children }: Props) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxHeight: '80%',
          minHeight: '30%',
          marginTop: 'auto',
          padding: 24,
          borderRadius: '16px 16px 0 0',
          background: SHAPE_COLOR.white,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text typography="title1">{title}</Text>
          <button
            onClick={onClose}
            style={{
              width: 28,
              height: 28,
              padding: 0,
              border: 0,
              background: 'none',
              outline: 'none',
            }}
          >
            <Icon type="close" size={28} />
          </button>
        </div>

        <Spacing size={16} />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
