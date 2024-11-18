import { GoalType } from 'application/src/utils/types'

export const GOAL: Record<GoalType, string> = {
  GAIN_MUSCLE: '근육이 있는 몸 만들기',
  LOSE_BODY_FAT: '체지방 빠르게 감량하기',
}

export const getGoal = (goal: GoalType) => GOAL[goal] || '알 수 없음'
