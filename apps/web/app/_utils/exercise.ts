import { ExerciseType } from '../_api/model'

const EXERCISE: Record<ExerciseType, string> = {
  RUNNING: '러닝',
  HEALTH: '헬스',
  SWIMMING: '수영',
} as const

export const getExercise = (type: ExerciseType) => EXERCISE[type]
