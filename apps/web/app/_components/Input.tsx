import { InputHTMLAttributes, forwardRef, useId } from 'react'
import { BORDER_COLOR, FONT_COLOR, SHAPE_COLOR } from '../_styles/color'
import Text from './Text'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default forwardRef<HTMLInputElement, Props>(function Input(
  { label, style, ...props },
  ref,
) {
  const id = useId()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <label htmlFor={id}>
        <Text typography="body2">{label}</Text>
      </label>

      <input
        id={id}
        ref={ref}
        style={{
          height: '48px',
          padding: '0 16px',
          borderRadius: '4px',
          border: `1px solid ${BORDER_COLOR.button}`,
          background: SHAPE_COLOR.white,
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '-0.5px',
          outline: 'none',
          boxSizing: 'border-box',
          color: FONT_COLOR.black_primary,
          ...style,
        }}
        {...props}
      />
    </div>
  )
})
