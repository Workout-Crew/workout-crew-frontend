import { useMutation } from '@tanstack/react-query'
import { http } from '../http'
import { ExerciseType } from '../model'

type RequestBodyType = {
  title: string
  place: 'SEOUL'
  exerciseType: ExerciseType
  startDate: string
  content: string
  maximumNumber: number
}

export function useCreateGathering() {
  return useMutation({
    mutationFn: async (body: RequestBodyType) =>
      await http.post<RequestBodyType, {}>('/api/gathering', body),
  })
}
