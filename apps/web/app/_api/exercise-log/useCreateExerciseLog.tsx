import { useMutation } from '../useMutation'

export function useCreateExerciseLog() {
  return useMutation<FormData>('/api/exerciselog')
}
