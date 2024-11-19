import { useEffect, useState } from 'react'

export default function useDebounce<Type>(value: Type, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<Type>(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}
