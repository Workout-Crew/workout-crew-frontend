import { useQuery } from '@tanstack/react-query'
import { http } from '../http'
import { QUERY_KEY } from '../queryKey'

type CategoryListType = {
  categoryList: Array<{ id: number; name: string; description: string }>
}

export function useGetCategoryList(keyword: string) {
  return useQuery({
    queryKey: QUERY_KEY.board.categories(keyword),
    queryFn: async () => {
      const { categoryList } = await http.get<CategoryListType>(
        keyword ? `/api/board/search/${keyword}` : '/api/board/category',
      )

      return categoryList
    },
  })
}
