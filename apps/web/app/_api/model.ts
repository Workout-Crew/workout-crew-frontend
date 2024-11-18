export type ExerciseType = 'HEALTH' | 'RUNNING' | 'SWIMMING'

export type MedalGradeType = 'GOLD' | 'SILVER' | 'BRONZE'

export type PostType = {
  id: number
  title: string
  content: string
  imageList: Array<string>
  writer: string
  commentCount: number
  createdDate: string // "2024-11-18T05:23:46.789Z"
}
