import { MedalType } from '../_api/model'

const MEDAL_TITLE: Record<MedalType, string> = {
  WRITE_EXERCISE_LOG: '운동 기록 작성 횟수',
  WRITE_GATHERING_EXERCISE_LOG: '모임 운동 기록 작성 횟수',
  MAKE_GATHERING: '모임 개설 횟수',
  WRITE_VARIOUS_EXERCISE_TYPE: '기록을 작성한 운동 종류 수',
}

const MISSION_NAME: Record<MedalType, (_count: number) => string> = {
  WRITE_EXERCISE_LOG: count => `운동 기록 ${count}회 작성하기`,
  WRITE_GATHERING_EXERCISE_LOG: count => `모임 운동 기록 ${count}회 작성하기`,
  MAKE_GATHERING: count => `모임 ${count}회 개설하기`,
  WRITE_VARIOUS_EXERCISE_TYPE: count =>
    `${count}가지 종류에 대한 운동 기록 작성하기`,
}

export const getMedalTitle = (type: MedalType) => MEDAL_TITLE[type]

export const getMissionName = (type: MedalType, count: number) =>
  MISSION_NAME[type](count)

export const getLabel = (type: MedalType, count: number) => {
  switch (type) {
    case 'WRITE_EXERCISE_LOG':
      return `${count}회`
    case 'WRITE_GATHERING_EXERCISE_LOG':
      return `${count}회`
    case 'MAKE_GATHERING':
      return `${count}회`
    case 'WRITE_VARIOUS_EXERCISE_TYPE':
      return `${count}가지`
  }
}
