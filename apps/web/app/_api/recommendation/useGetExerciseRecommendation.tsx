import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'

type ExerciseRecommendationType = {
  exerciseType: ExerciseType
  intensity: number
  description: string
}

export function useGetExerciseRecommendation() {
  return useQuery({
    queryKey: QUERY_KEY.recommendation,
    queryFn: async () =>
      await http.get<ExerciseRecommendationType>('/api/exerciserecommendation'),
  })
}
