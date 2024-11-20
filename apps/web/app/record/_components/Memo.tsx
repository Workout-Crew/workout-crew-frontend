'use client'

import { ChangeEventHandler } from 'react'
import Icon from '../../_components/Icon'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR, FONT_COLOR, SHAPE_COLOR } from '../../_styles/color'

interface Props {
  contents: string
  readOnly?: boolean
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  onRemove?: () => void
}

export default function Memo({
  contents,
  readOnly = false,
  onChange,
  onRemove,
}: Props) {
  return (
    <Stack
      style={{
        padding: 16,
        borderRadius: 8,
        border: `1px solid ${BORDER_COLOR.div}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text typography="title2">자유 메모</Text>
        {!readOnly && (
          <div onClick={onRemove}>
            <Icon type="close" />
          </div>
        )}
      </div>

      <Spacing size={16} />

      <textarea
        value={contents}
        onChange={onChange}
        readOnly={readOnly}
        style={{
          height: 120,
          padding: 16,
          borderRadius: 8,
          border: 0,
          background: SHAPE_COLOR.depth_1,
          fontSize: 16,
          lineHeight: '20px',
          letterSpacing: '-0.5px',
          color: FONT_COLOR.black_primary,
          outline: 'none',
          resize: 'none',
        }}
      />
    </Stack>
  )
}
