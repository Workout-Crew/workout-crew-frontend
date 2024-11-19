import Stack from '../../../_components/Stack'
import Text from '../../../_components/Text'
import { FONT_COLOR } from '../../../_styles/color'
import { format } from 'date-fns'

interface Props {
  title: string
  description: string
  writer: string
  image: string | null
  date: string
}

export default function PostInfo({
  title,
  description,
  writer,
  image,
  date,
}: Props) {
  return (
    <Stack style={{ gap: 16, padding: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text typography="title2">{writer}</Text>
        <Text typography="label_regular" fontColor={FONT_COLOR.black_tertiary}>
          {format(new Date(date), 'yyyy-MM-dd HH:mm')}
        </Text>
      </div>

      {image && (
        <div
          style={{
            width: '100%',
            height: 240,
            borderRadius: 8,
            background: '#D9D9D9',
          }}
        />
      )}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text typography="title2">{title}</Text>
        <Text typography="body2" fontColor={FONT_COLOR.black_secondary}>
          {description}
        </Text>
      </div>
    </Stack>
  )
}
