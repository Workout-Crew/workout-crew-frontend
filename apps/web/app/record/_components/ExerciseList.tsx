'use client'

import Button from '../../_components/Button'
import ListItem from '../../_components/ListItem'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import { format } from 'date-fns'

interface Props {
  date: Date
}

const DUMMY_DATA = [
  { id: 1, title: '헬스 등/어깨 루틴', type: '헬스', time: '14:00~15:00' },
  { id: 2, title: '5km 중랑천 러닝', type: '러닝', time: '21:00~21:30' },
]

export default function ExerciseList({ date }: Props) {
  return (
    <Stack style={{ gap: 20, padding: 16 }}>
      <Text typography="title1">{format(date, 'dd')}일 운동 기록</Text>

      <Stack style={{ gap: 16, padding: 0 }}>
        {DUMMY_DATA.map(({ id, title, type, time }) => (
          <ListItem
            title={title}
            description={`${type} / ${time}`}
            onClick={() => null}
            key={id}
          />
        ))}
      </Stack>

      <Button size={48} variant="primary" onClick={() => null}>
        기록 추가하기
      </Button>
    </Stack>
  )
}
