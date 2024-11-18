export type ExerciseType = 'HEALTH' | 'RUNNING' | 'SWIMMING'

export type MedalGradeType = 'GOLD' | 'SILVER' | 'BRONZE'

export type MedalType =
  | 'WRITE_EXERCISE_LOG'
  | 'WRITE_GATHERING_EXERCISE_LOG'
  | 'MAKE_GATHERING'
  | 'WRITE_VARIOUS_EXERCISE_TYPE'

export type PostType = {
  id: number
  title: string
  content: string
  imageList: Array<string>
  writer: string
  commentCount: number
  createdDate: string // "2024-11-18T05:23:46.789Z"
}
