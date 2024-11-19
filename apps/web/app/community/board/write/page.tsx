'use client'

import { ChangeEvent, useState } from 'react'
import { useCreatePost } from '../../../_api/board/useCreatePost'
import Button from '../../../_components/Button'
import Gallery from '../../../_components/Gallery'
import Input from '../../../_components/Input'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'
import Text from '../../../_components/Text'
import { useSetTitle } from '../../../_hooks/useSetTitle'
import { BORDER_COLOR, FONT_COLOR } from '../../../_styles/color'
import { base64ToFile, getRandomName } from '../../../_utils/image'
import { useBridgeStore } from '../../../provider'

interface Props {
  searchParams: { categoryId: string }
}

type PostCreateType = {
  title: string
  content: string
  photos: string[]
}

export default function WritePostPage({ searchParams: { categoryId } }: Props) {
  useSetTitle('게시글 작성하기')

  const getPhotos = useBridgeStore(store => store.getPhotos)
  const goBack = useBridgeStore(store => store.goBack)
  const [{ title, content, photos }, setPost] = useState<PostCreateType>({
    title: '',
    content: '',
    photos: [],
  })
  const { mutate, isPending } = useCreatePost()

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setPost(prev => ({ ...prev, [event.target.name]: event.target.value }))

  const handleGetPhotos = async () => {
    const loaded = await getPhotos(10 - photos.length)
    setPost(prev => ({ ...prev, photos: [...prev.photos, ...loaded] }))
  }

  const handleClick = async () => {
    const formData = new FormData()
    const fileName = getRandomName(10)

    formData.append(
      'request',
      JSON.stringify({ title, content, categoryId: parseInt(categoryId) }),
    )
    photos.forEach((photo, index) =>
      formData.append('image', base64ToFile(photo, `${fileName}-${index}`)),
    )

    mutate(formData, {
      onSuccess: goBack,
      onSettled: (result, error) => console.log(result, error),
    })
  }

  return (
    <Stack style={{ flex: 1, gap: 16, padding: 16 }}>
      <Input
        label="제목"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="제목을 입력해주세요."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="content">
          <Text typography="body2">내용</Text>
        </label>

        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="내용을 입력해주세요."
          style={{
            height: 200,
            padding: 16,
            borderRadius: '4px',
            border: `1px solid ${BORDER_COLOR.button}`,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '-0.5px',
            color: FONT_COLOR.black_primary,
            outline: 'none',
            resize: 'none',
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Text typography="body2">사진 추가</Text>
        <Gallery
          images={photos}
          column={4}
          maxCount={8}
          onAppend={handleGetPhotos}
        />
      </div>

      <Spacing size={48} />

      <Button
        size={48}
        variant="primary"
        disabled={!title || !content || isPending}
        onClick={handleClick}
        style={{ marginTop: 'auto' }}
      >
        작성하기
      </Button>
    </Stack>
  )
}
