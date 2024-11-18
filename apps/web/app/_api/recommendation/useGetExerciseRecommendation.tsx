import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type ExerciseRecommendationType = {
  exerciseType: ExerciseType
  intensity: number
  description: string
}

export function useGetExerciseRecommendation() {
  return useQuery<ExerciseRecommendationType>(
    QUERY_KEY.recommendation,
    '/api/exerciserecommendation',
  )
}
