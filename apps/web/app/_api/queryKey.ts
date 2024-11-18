export const QUERY_KEY = {
  exerciseLog: {
    monthly: ['EXERCISE-LOG', 'MONTHLY'],
    date: (date: string) => ['EXERCISE-LOG', 'DATE', date],
  },
  medal: {
    count: ['MEDAL', 'COUNT'],
  },
  recommendation: ['RECOMMENDATION'],
  gathering: {
    list: ['GATHERING', 'LIST'],
    detail: (gatheringId: number) => ['GATHERING', 'DETAIL', gatheringId],
  },
  board: {
    categories: (keyword: string) => ['BOARD', 'CATEGORY', keyword],
    posts: (categoryId: number) => ['BOARD', 'POSTS', categoryId],
    post: (postId: number) => ['BOARD', 'POST', postId],
    myPosts: ['BOARD', 'MY-POSTS'],
    postsWithMyComment: ['BOARD', 'POSTS-WITH-MY-COMMENT'],
  },
}
