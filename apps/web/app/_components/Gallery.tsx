import Image from 'next/image'
import { BORDER_COLOR, FONT_COLOR } from '../_styles/color'

interface Props {
  images: string[]
  column: number
  maxCount: number
  onAppend?: () => void
}

export default function Gallery({ images, column, maxCount, onAppend }: Props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        gap: 8,
      }}
    >
      {images.map((url, index) => (
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
          <Image src={url} alt="사진" fill />
        </div>
      ))}

      {onAppend && images.length < maxCount && (
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
          onClick={onAppend}
        >
          +
        </button>
      )}
    </div>
  )
}
