import { useMutation } from '@tanstack/react-query'
import { useBridgeStore } from '../../provider'
import axios from 'axios'

export function useCreatePost() {
  const token = useBridgeStore(store => store.user?.id)

  return useMutation({
    mutationFn: async (formData: FormData) =>
      axios.post('/community/board/api', formData, { headers: { token } }),
  })
}
