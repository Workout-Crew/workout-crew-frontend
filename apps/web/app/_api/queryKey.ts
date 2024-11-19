import { ExerciseType, PlaceType } from './model'

export const QUERY_KEY = {
  exerciseLog: {
    monthly: ['EXERCISE-LOG', 'MONTHLY'],
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
