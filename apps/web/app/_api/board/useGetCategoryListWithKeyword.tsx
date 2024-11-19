import { useQuery } from '@tanstack/react-query'
import { useBridgeStore } from '../../provider'
import { QUERY_KEY } from '../queryKey'
import axios from 'axios'

type CategoryListType = {
  categoryList: Array<{ id: number; name: string; description: string }>
}

export function useGetCategoryListWithKeyword(keyword: string) {
  const token = useBridgeStore(store => store.user?.id)

  return useQuery<CategoryListType>({
    queryKey: QUERY_KEY.board.categories(keyword),
    queryFn: async () => {
      const res = await axios.get<CategoryListType>(
        keyword ? `/api/board/search/${keyword}` : '/api/board/category',
        { headers: { token } },
      )
      return res.data
    },
  })
}
