import { useEffect } from 'react'
import { useBridgeStore } from '../provider'

export function useSetTitle(title: string) {
  const setTitle = useBridgeStore(store => store.setTitle)

  useEffect(() => {
    setTitle(title)
  }, [title])
}
