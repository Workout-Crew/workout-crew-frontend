'use client'

import { ChangeEvent, useState } from 'react'
import Icon from '../../_components/Icon'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR, FONT_COLOR, SHAPE_COLOR } from '../../_styles/color'

interface Props {
  initialContents?: string
}

export default function Memo({ initialContents = '' }: Props) {
  const [contents, setContents] = useState<string>(initialContents)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setContents(event.target.value)

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
        <div>
          <Icon type="more" />
        </div>
      </div>

      <Spacing size={16} />

      <textarea
        value={contents}
        onChange={handleChange}
        style={{
          height: 120,
          padding: 16,
          borderRadius: 8,
          border: 0,
          background: SHAPE_COLOR.depth_1,
          fontSize: 14,
          lineHeight: '20px',
          letterSpacing: '-0.5px',
          color: FONT_COLOR.black_primary,
          outline: 'none',
        }}
      />
    </Stack>
  )
}
