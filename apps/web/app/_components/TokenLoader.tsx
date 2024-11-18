'use client'

import { ReactNode } from 'react'
import { useBridgeStore } from '../provider'

interface Props {
  disabled: boolean
  children: ReactNode
}

export default function TokenLoader({ disabled, children }: Props) {
  const token = useBridgeStore(store => store.user?.id)

  if (!disabled && !token) {
    return null
  }

  return children
}
