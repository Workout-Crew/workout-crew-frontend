import { useMutation } from '../useMutation'
import { GoalType } from 'application/src/utils/types'

type RequestBodyType = { goal: GoalType }

export function useSetGoal() {
  return useMutation<RequestBodyType>(`/api/account/goal`)
}
