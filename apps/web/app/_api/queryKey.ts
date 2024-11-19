import { ExerciseType, PlaceType } from './model'
import { format } from 'date-fns'

export const QUERY_KEY = {
  exerciseLog: {
    detail: (exerciseLogId: number) => [
      'EXERCISE-LOG',
      'DETAIL',
      exerciseLogId.toString(),
    ],
    status: ['EXERCISE-LOG', 'STATUS'],
    monthly: (date: Date) => [
      'EXERCISE-LOG',
      'MONTHLY',
      format(date, 'yyyy-MM'),
    ],
    date: (date: string) => ['EXERCISE-LOG', 'DATE', date],
  },
  medal: {
    count: ['MEDAL', 'COUNT'],
    status: ['MEDAL', 'STATUS'],
  },
  recommendation: ['RECOMMENDATION'],
  gathering: {
    list: (place?: PlaceType, type?: ExerciseType) => [
      'GATHERING',
      'LIST',
      place ?? 'none',
      type ?? 'none',
    ],
    my: ['GATHERING', 'MY'],
    apply: ['GATHERING', 'APPLY'],
    detail: (gatheringId: number) => [
      'GATHERING',
      'DETAIL',
      gatheringId.toString(),
    ],
  },
  board: {
    categories: (keyword: string) => ['BOARD', 'CATEGORY', keyword],
    posts: (categoryId: number) => ['BOARD', 'POSTS', categoryId.toString()],
    post: (postId: number) => ['BOARD', 'POST', postId.toString()],
    myPosts: ['BOARD', 'MY-POSTS'],
    postsWithMyComment: ['BOARD', 'POSTS-WITH-MY-COMMENT'],
  },
}
