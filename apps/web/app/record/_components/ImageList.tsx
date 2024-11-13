'use client'

import Gallery from '../../_components/Gallery'
import Icon from '../../_components/Icon'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR } from '../../_styles/color'

export default function ImageList() {
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
        <div>
          <Icon type="more" />
        </div>
      </div>

      <Spacing size={16} />

      <Gallery
        images={['a', 'b', 'c', 'd', 'e', 'f', 'g']}
        column={5}
        maxCount={10}
        onAppend={() => null}
      />
    </Stack>
  )
}
