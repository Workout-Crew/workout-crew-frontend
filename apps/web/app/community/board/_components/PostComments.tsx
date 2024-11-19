'use client'

import { Fragment, useState } from 'react'
import { useWriteComment } from '../../../_api/board/useWriteComment'
import { CommentType } from '../../../_api/model'
import Divider from '../../../_components/Divider'
import Icon from '../../../_components/Icon'
import PostItem from '../../../_components/PostItem'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'
import { BORDER_COLOR, FONT_COLOR, SHAPE_COLOR } from '../../../_styles/color'
import { useBridgeStore } from '../../../provider'
import { format } from 'date-fns'

interface Props {
  boardId: number
  comments: Array<CommentType>
  onSend: () => void
}

export default function PostComments({ boardId, comments, onSend }: Props) {
  const goBack = useBridgeStore(store => store.goBack)
  const [comment, setComment] = useState<string>('')
  const { mutate } = useWriteComment()

  const handleSend = async () => {
    if (comment) {
      mutate(
        { boardId, content: comment },
        {
          onSuccess: () => {
            onSend()
            goBack()
          },
        },
      )
    }
  }

  return (
    <Stack style={{ flex: 1, padding: 16 }}>
      {comments.map(({ id, writer, content, createdDate }, index, list) => (
        <Fragment key={id}>
          <PostItem
            title={writer}
            description={content}
            label={format(new Date(createdDate), 'yyyy-MM-dd HH:mm')}
            image={null}
            style={{ padding: '8px 0' }}
          />

          {index + 1 < list.length && <Divider />}
        </Fragment>
      ))}

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
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: '-0.5px',
              color: FONT_COLOR.black_primary,
              border: 0,
              outline: 'none',
            }}
          />
          <button
            onClick={handleSend}
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 32,
              height: 32,
              borderRadius: 16,
              border: 0,
              background: SHAPE_COLOR.brand,
            }}
          >
            <Icon type="send" size={20} color={SHAPE_COLOR.white} />
          </button>
        </div>
      </div>
    </Stack>
  )
}
