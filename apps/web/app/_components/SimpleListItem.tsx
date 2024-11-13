import { ReactNode } from 'react'
import Text from './Text'

interface Props {
  label: string
  children: ReactNode
}

export default function SimpleListItem({ label, children }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Text typography="title2">{label}</Text>
      </div>
      <div>
        <Text typography="body2">{children}</Text>
      </div>
    </div>
  )
}
