import { ExerciseType, PlaceType } from '../model'
import { useMutation } from '../useMutation'

type RequestBodyType = {
  title: string
  place: PlaceType
  exerciseType: ExerciseType
  startDate: string
  content: string
}

export function useCreateGathering() {
  return useMutation<RequestBodyType>('/api/gathering')
}
