'use client'

// import Image from 'next/image'
import Icon from '../../_components/Icon'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR, FONT_COLOR } from '../../_styles/color'

export default function Gallery() {
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 8,
        }}
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              borderRadius: 4,
              aspectRatio: 1,
            }}
            key={index}
          >
            <div
              style={{ width: '100%', height: '100%', background: '#D9D9D9' }}
            />
            {/* <Image src={url} alt="사진" fill /> */}
          </div>
        ))}
        <button
          style={{
            width: '100%',
            aspectRatio: 1,
            borderRadius: 4,
            border: `2px dashed ${BORDER_COLOR.button}`,
            background: 'transparent',
            fontSize: 24,
            color: FONT_COLOR.black_tertiary,
          }}
          onClick={() => null}
        >
          +
        </button>
      </div>
    </Stack>
  )
}
