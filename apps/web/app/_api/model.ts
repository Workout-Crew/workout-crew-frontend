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

export type CommentType = {
  commentId: number
  writer: string
  content: string
  createdDate: string // "2024-11-18T05:27:53.019Z"
}

export type PlaceType =
  | 'CHUNGCHEONG_NORTH'
  | 'CHUNGCHEONG_SOUTH'
  | 'GYEONGSANG_NORTH'
  | 'GYEONGSANG_SOUTH'
  | 'JEJU'
  | 'JEOLLA_NORTH'
  | 'JEOLLA_SOUTH'
  | 'KANGWON'
  | 'KYUNGGI'
  | 'SEOUL'

export type GatheringType = {
  gatheringId: number
  title: string
  description: string
  leaderNickname: string
  place: PlaceType
  currentNumber: number
  startDate: string // "2024-11-19T09:18:19.463Z"
}
