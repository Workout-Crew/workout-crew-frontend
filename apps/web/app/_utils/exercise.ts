import { ExerciseType } from '../_api/model'

export const EXERCISE: Record<ExerciseType, string> = {
  RUNNING: '러닝',
  HEALTH: '헬스',
  SWIMMING: '수영',
} as const

export const COLOR: Record<ExerciseType, string> = {
  RUNNING: '#4C6EF5',
  HEALTH: '#F53249',
  SWIMMING: '#3F4047',
}

export const getExercise = (type: ExerciseType) => EXERCISE[type]

export const getExerciseColor = (type: ExerciseType) => COLOR[type]
