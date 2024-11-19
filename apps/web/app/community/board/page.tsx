'use client'

import { useState } from 'react'
import { useGetCategoryListWithKeyword } from '../../_api/board/useGetCategoryListWithKeyword'
import Input from '../../_components/Input'
import ListItem from '../../_components/ListItem'
import Separator from '../../_components/Separator'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import useDebounce from '../../_hooks/useDebounce'
import { useBridgeStore } from '../../provider'

export default function BoardPage() {
  const push = useBridgeStore(store => store.push)
  const [search, setSearch] = useState<string>('')
  const debouncedValue = useDebounce(search, 300)
  const { data, isLoading } = useGetCategoryListWithKeyword(debouncedValue)

  return (
    <>
      <Stack style={{ padding: 16 }}>
        <Input
          type="text"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="다른 게시판을 검색해보세요."
        />
      </Stack>

      <Separator />

      {!isLoading && (
        <Stack style={{ gap: 16, padding: 16 }}>
          {data?.categoryList && data.categoryList.length > 0 ? (
            data.categoryList.map(({ id, name, description }) => (
              <ListItem
                title={name}
                description={description}
                onClick={() => push(`/community/board/${id}`)}
                key={id}
              />
            ))
          ) : (
            <Text
              typography="body1"
              style={{ width: '100%', padding: '64px 0', textAlign: 'center' }}
            >
              개설한 모임이 없습니다.
            </Text>
          )}
        </Stack>
      )}
    </>
  )
}
