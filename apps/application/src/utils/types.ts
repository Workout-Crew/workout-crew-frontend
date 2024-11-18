export type GoalType = 'GAIN_MUSCLE' | 'LOSE_BODY_FAT'

export type UserType = {
  id: string
  nickname: string | null
  sex: 'MALE' | 'FEMALE' | null
  height: number | null
  weight: number | null
  age: number | null
  goal: GoalType | null
}
