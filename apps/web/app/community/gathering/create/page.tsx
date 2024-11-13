'use client'

import Button from '../../../_components/Button'
import Gallery from '../../../_components/Gallery'
import Input from '../../../_components/Input'
import Spacing from '../../../_components/Spacing'
import Stack from '../../../_components/Stack'
import Text from '../../../_components/Text'
import { BORDER_COLOR, FONT_COLOR } from '../../../_styles/color'

export default function GatheringCreatePage() {
  return (
    <Stack style={{ flex: 1, gap: 16, padding: 16 }}>
      <Input label="제목" placeholder="제목을 입력해주세요." />
      <Input label="위치" placeholder="위치을 선택해주세요." />
      <Input label="운동 종류" placeholder="운동 종류를 선택해주세요." />
      <Input label="날짜 및 시간" placeholder="날짜와 시간을 선택해주세요." />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="contents">
          <Text typography="body2">내용</Text>
        </label>

        <textarea
          id="contents"
          placeholder="내용을 입력해주세요."
          style={{
            height: 200,
            padding: 16,
            borderRadius: '4px',
            border: `1px solid ${BORDER_COLOR.button}`,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '-0.5px',
            color: FONT_COLOR.black_primary,
            outline: 'none',
            resize: 'none',
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Text typography="body2">사진 추가</Text>
        <Gallery
          images={['1', '2', '3', '4']}
          column={4}
          maxCount={8}
          onAppend={() => null}
        />
      </div>

      <Spacing size={48} />

      <Button size={48} variant="primary" style={{ marginTop: 'auto' }}>
        개설하기
      </Button>
    </Stack>
  )
}
