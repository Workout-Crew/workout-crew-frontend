import Button from '../../_components/Button'
import Divider from '../../_components/Divider'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { BORDER_COLOR, FONT_COLOR } from '../../_styles/color'
import Gallery from '../_components/Gallery'
import Intensity from '../_components/Intensity'
import Memo from '../_components/Memo'

export default function RecordWritePage() {
  return (
    <Stack style={{ padding: 16 }}>
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        style={{
          border: 0,
          outline: 'none',
          fontSize: 24,
          fontWeight: 700,
          lineHeight: '24px',
          letterSpacing: '-1px',
          color: FONT_COLOR.black_primary,
        }}
      />

      <Spacing size={16} />

      <div style={{ display: 'flex', gap: 8 }}>
        <Button size={32} variant="secondary">
          운동 시간 선택하기
        </Button>
        <Button size={32} variant="secondary">
          운동 종류 선택하기
        </Button>
      </div>

      <Divider style={{ margin: '16px 0' }} />

      <Stack style={{ gap: 16, padding: 0 }}>
        <Memo />
        <Intensity />
        <Gallery />

        <button
          style={{
            width: '100%',
            padding: '20px 0',
            borderRadius: 8,
            border: `2px dashed ${BORDER_COLOR.button}`,
            background: 'transparent',
            textAlign: 'center',
          }}
        >
          <Text typography="title2" fontColor={FONT_COLOR.placeholder}>
            + 요소 추가하기
          </Text>
        </button>
      </Stack>
    </Stack>
  )
}
