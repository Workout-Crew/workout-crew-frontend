'use client'

import Gallery from '../../_components/Gallery'
import Icon from '../../_components/Icon'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR } from '../../_styles/color'

interface Props {
  images: string[]
  readOnly?: boolean
  onAppend?: () => void
  onRemove?: () => void
}

export default function ImageList({
  images,
  readOnly,
  onAppend,
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
        <Text typography="title2">사진 기록</Text>
        {!readOnly && (
          <div onClick={onRemove}>
            <Icon type="close" />
          </div>
        )}
      </div>

      <Spacing size={16} />

      <Gallery
        images={images}
        column={4}
        maxCount={8}
        onAppend={!readOnly ? onAppend : undefined}
      />
    </Stack>
  )
}
