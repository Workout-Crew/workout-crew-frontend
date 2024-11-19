import { ExerciseType } from '../model'
import { useMutation } from '../useMutation'

type RequestBodyType = {
  title: string
  exerciseType: ExerciseType
  startTime: string // "2024-11-19T19:25:40.650Z"
  endTime: string // "2024-11-19T19:25:40.650Z"
  description: string
  intensity: 0 | 1 | 2 | 3 | 4 | 5
  gatheringId: number | null
}

export function useCreateExerciseLog() {
  return useMutation<RequestBodyType>(`/api/exerciselog`)
}
