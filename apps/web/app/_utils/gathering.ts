import { PlaceType } from '../_api/model'

export const PLACE: Record<PlaceType, string> = {
  SEOUL: '서울시',
  KYUNGGI: '경기도',
  KANGWON: '강원도',
  CHUNGCHEONG_NORTH: '충청북도',
  CHUNGCHEONG_SOUTH: '충청남도',
  JEOLLA_NORTH: '전라북도',
  JEOLLA_SOUTH: '전라남도',
  GYEONGSANG_NORTH: '경상북도',
  GYEONGSANG_SOUTH: '경상남도',
  JEJU: '제주도',
}

export const getPlace = (place: PlaceType) => PLACE[place]
