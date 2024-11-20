'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useGetPost } from '../../_api/board/useGetPost'
import { useWriteComment } from '../../_api/board/useWriteComment'
import Divider from '../../_components/Divider'
import Icon from '../../_components/Icon'
import PostItem from '../../_components/PostItem'
import Separator from '../../_components/Separator'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR, FONT_COLOR, SHAPE_COLOR } from '../../_styles/color'
import { format } from 'date-fns'

interface Props {
  params: { postId: string }
}

export default function PostPage({ params: { postId } }: Props) {
  const {
    data: { boardContent, commentList },
    refetch,
  } = useGetPost(parseInt(postId))
  const { mutate, isPending } = useWriteComment()
  const [comment, setComment] = useState<string>('')

  const disabled = !comment || isPending

  const handleSend = async () => {
    if (!disabled) {
      mutate(
        { boardId: parseInt(postId), content: comment },
        {
          onSuccess: () => {
            setComment('')
            refetch()
          },
        },
      )
    }
  }

  return (
    <>
      <Stack style={{ gap: 16, padding: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text typography="title1">{boardContent.writer}</Text>
          <Text typography="body2" fontColor={FONT_COLOR.black_tertiary}>
            {format(new Date(boardContent.createdDate), 'yyyy-MM-dd HH:mm')}
          </Text>
        </div>

        {boardContent.imageList.length > 0 && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 240,
            }}
          >
            <Image
              src={boardContent.imageList[0]!}
              alt="Thumbnail"
              fill
              style={{ borderRadius: 8, objectFit: 'cover' }}
            />
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text typography="title1">{boardContent.title}</Text>
          <Spacing size={8} />
          <Text typography="body1" fontColor={FONT_COLOR.black_secondary}>
            {boardContent.content}
          </Text>
        </div>
      </Stack>

      <Separator />

      <Stack style={{ flex: 1, padding: 16 }}>
        {commentList.length > 0 ? (
          commentList.map(
            ({ commentId, writer, content, createdDate }, index, list) => (
              <Fragment key={commentId}>
                <PostItem
                  title={writer}
                  description={content}
                  label={format(new Date(createdDate), 'yyyy-MM-dd HH:mm')}
                  image={null}
                  style={{ padding: '8px 0' }}
                />

                {index + 1 < list.length && <Divider />}
              </Fragment>
            ),
          )
        ) : (
          <Text
            typography="body1"
            style={{ width: '100%', padding: '64px 0', textAlign: 'center' }}
          >
            작성된 댓글이 없습니다.
          </Text>
        )}

        <Spacing size={30} />

        <div style={{ width: '100%', padding: '8px 0', marginTop: 'auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 32,
              padding: '8px 8px 8px 16px',
              borderRadius: 24,
              border: `1px solid ${BORDER_COLOR.button}`,
            }}
          >
            <input
              type="text"
              value={comment}
              placeholder="댓글을 입력해주세요."
              onChange={event => setComment(event.target.value)}
              style={{
                fontSize: 16,
                lineHeight: '20px',
                letterSpacing: '-0.5px',
                color: FONT_COLOR.black_primary,
                border: 0,
                outline: 'none',
              }}
            />
            <button
              disabled={disabled}
              onClick={handleSend}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 32,
                height: 32,
                padding: 0,
                borderRadius: 16,
                border: 0,
                background: disabled ? SHAPE_COLOR.depth_2 : SHAPE_COLOR.brand,
              }}
            >
              <Icon type="send" size={20} color={SHAPE_COLOR.white} />
            </button>
          </div>
        </div>
      </Stack>
    </>
  )
}
