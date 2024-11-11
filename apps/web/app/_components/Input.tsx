import { InputHTMLAttributes, useId } from 'react'
import { BORDER_COLOR } from '../_styles/color'
import Text from './Text'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input({ label, style, ...props }: Props) {
  const id = useId()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label htmlFor={id}>
        <Text typography="body2">{label}</Text>
      </label>

      <input
        id={id}
        style={{
          height: '48px',
          padding: '0 16px',
          borderRadius: '4px',
          border: `1px solid ${BORDER_COLOR.button}`,
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '-0.5px',
          outline: 'none',
          ...style,
        }}
        {...props}
      />
    </div>
  )
}
