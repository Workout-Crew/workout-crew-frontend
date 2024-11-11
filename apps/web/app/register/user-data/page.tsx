import Button from '../../_components/Button'
import Input from '../../_components/Input'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'

export default function RegisterUserDataPage() {
  return (
    <Stack style={{ height: '100%' }}>
      <Text typography="display1">
        운동 추천을 위해
        <br />
        아래 정보를 입력해주세요.
      </Text>

      <Spacing size={32} />

      <Stack style={{ gap: 16, padding: 0 }}>
        <Input label="성별" placeholder="성별을 입력해주세요." />
        <Input label="나이" placeholder="숫자만 입력해주세요." />
        <Input label="키 (cm)" placeholder="숫자만 입력해주세요." />
        <Input label="몸무게 (kg)" placeholder="숫자만 입력해주세요." />
      </Stack>

      <Button size={48} variant="primary" style={{ margin: 'auto 0 16px' }}>
        다음
      </Button>
    </Stack>
  )
}
