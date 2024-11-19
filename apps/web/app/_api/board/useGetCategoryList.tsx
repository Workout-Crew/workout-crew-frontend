import { QUERY_KEY } from '../queryKey'
import { useQuery } from '../useQuery'

type CategoryListType = {
  categoryList: Array<{ id: number; name: string; description: string }>
}

export function useGetCategoryList() {
  return useQuery<CategoryListType>(
    QUERY_KEY.board.categories('none'),
    '/api/board/category',
  )
}
