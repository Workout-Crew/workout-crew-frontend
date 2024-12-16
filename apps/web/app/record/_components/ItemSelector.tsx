import { useState } from 'react'
import Button from '../../_components/Button'
import Spacing from '../../_components/Spacing'
import Text from '../../_components/Text'
import { ContentType } from '../../_hooks/useWriteRecord'
import { BORDER_COLOR, FONT_COLOR } from '../../_styles/color'

interface Props {
  handleAddItem: (_item: ContentType) => void
}

const RECORD_TYPE = {
  MEMO: '자유 메모',
  HEALTH_MEMO: '헬스 기록(메모 템플릿)',
  RUNNING_MEMO: '유산소 기록(메모 템플릿)',
  INTENSITY: '운동 강도',
  IMAGE: '사진 기록',
} as const

const TEMPLATE = {
  health: `운동 종류 : 
중량 :
세트 :
반복 횟수 :
-------------------
(위 템플릿을 반복해서 작성해주세요.)
`,
  running: `운동 장소 : 
거리 : 
시간 : `,
}

export default function ItemSelector({ handleAddItem }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleClick = (type: keyof typeof RECORD_TYPE) => {
    switch (type) {
      case 'MEMO':
        handleAddItem({ type: 'MEMO', data: '' })
        break
      case 'HEALTH_MEMO':
        handleAddItem({ type: 'MEMO', data: TEMPLATE.health })
        break
      case 'RUNNING_MEMO':
        handleAddItem({ type: 'MEMO', data: TEMPLATE.running })
        break
      case 'INTENSITY':
        handleAddItem({ type: 'INTENSITY', data: 0 })
        break
      case 'IMAGE':
        handleAddItem({ type: 'IMAGE', data: [] })
        break
    }

    setIsVisible(false)
  }

  return (
    <div>
      <Button
        size={48}
        variant="secondary"
        onClick={() => setIsVisible(prev => !prev)}
      >
        + 요소 추가하기
      </Button>

      {isVisible && (
        <>
          <Spacing size={16} />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              padding: '8px',
              borderRadius: 8,
              border: `2px dashed ${BORDER_COLOR.button}`,
            }}
          >
            {Object.entries(RECORD_TYPE).map(([key, title]) => (
              <Button
                size={48}
                variant="secondary"
                onClick={() => handleClick(key as keyof typeof RECORD_TYPE)}
                key={key}
              >
                <Text typography="body2" fontColor={FONT_COLOR.black_primary}>
                  {title} 추가
                </Text>
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
