interface Props {
  size: number
  direction?: 'horizontal' | 'vertical'
}

export default function Spacing({ size, direction = 'vertical' }: Props) {
  return (
    <div
      style={{
        flex: 'none',
        [direction === 'vertical' ? 'height' : 'width']: size,
      }}
    />
  )
}
