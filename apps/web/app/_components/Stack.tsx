import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function Stack({ children, style, ...props }: Props) {
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 16px',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
