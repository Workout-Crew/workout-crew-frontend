import { useSuspenseQuery } from '@tanstack/react-query'
import { useBridgeStore } from '../../provider'
import { ExerciseType } from '../model'
import { QUERY_KEY } from '../queryKey'
import axios from 'axios'

type ExerciseRecommendationType = {
  exerciseType: ExerciseType
  intensity: number
  description: string
}

export function useGetExerciseRecommendation() {
  const token = useBridgeStore(store => store.user?.id)

  return useSuspenseQuery({
    queryKey: QUERY_KEY.recommendation,
    queryFn: async () => {
      const res = await axios.get<ExerciseRecommendationType | null>(
        '/api/exerciserecommendation',
        {
          validateStatus: status => status === 200 || status === 400,
          headers: { token },
        },
      )

      return res.status === 400 ? null : res.data
    },
  })
}
