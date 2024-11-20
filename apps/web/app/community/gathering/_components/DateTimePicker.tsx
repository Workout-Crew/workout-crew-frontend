import { ChangeEvent, useState } from 'react'
import Button from '../../../_components/Button'
import Spacing from '../../../_components/Spacing'
import Text from '../../../_components/Text'
import { BORDER_COLOR, FONT_COLOR, SHAPE_COLOR } from '../../../_styles/color'
import { format, isBefore } from 'date-fns'

type TimeType = {
  startHour: string
  startMinute: string
  endHour: string
  endMinute: string
}

interface Props {
  date: Date
  onSubmit: (_time: { start: Date; end: Date }) => void
}

const SELECT_STYLE = {
  height: '48px',
  padding: '0 16px',
  margin: 0,
  borderRadius: '4px',
  border: `1px solid ${BORDER_COLOR.button}`,
  background: SHAPE_COLOR.white,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.5px',
  outline: 'none',
  color: FONT_COLOR.black_primary,
}

export default function TimePicker({ date, onSubmit }: Props) {
  const [{ startHour, startMinute, endHour, endMinute }, setTimes] =
    useState<TimeType>({
      startHour: '00',
      startMinute: '00',
      endHour: '00',
      endMinute: '00',
    })

  const startTime = new Date(
    `${format(date, 'yyyy-MM-dd')} ${startHour}:${startMinute}:00`,
  )
  const endTime = new Date(
    `${format(date, 'yyyy-MM-dd')} ${endHour}:${endMinute}:00`,
  )

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setTimes(prev => ({ ...prev, [event.target.name]: event.target.value }))

  return (
    <>
      <Text typography="body2">시작 시간</Text>
      <Spacing size={8} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <select
          name="startHour"
          value={startHour}
          onChange={handleChange}
          style={SELECT_STYLE}
        >
          {Array.from({ length: 24 }, (_, index) =>
            index.toString().padStart(2, '0'),
          ).map(hour => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select
          name="startMinute"
          value={startMinute}
          onChange={handleChange}
          style={SELECT_STYLE}
        >
          {Array.from({ length: 60 }, (_, index) =>
            index.toString().padStart(2, '0'),
          ).map(minute => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </select>
      </div>

      <Spacing size={16} />

      <Text typography="body2">종료 시간</Text>
      <Spacing size={8} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <select
          name="endHour"
          value={endHour}
          onChange={handleChange}
          style={SELECT_STYLE}
        >
          {Array.from({ length: 24 }, (_, index) =>
            index.toString().padStart(2, '0'),
          ).map(hour => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select
          name="endMinute"
          value={endMinute}
          onChange={handleChange}
          style={SELECT_STYLE}
        >
          {Array.from({ length: 60 }, (_, index) =>
            index.toString().padStart(2, '0'),
          ).map(minute => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </select>
      </div>

      <Spacing size={32} />

      <Button
        size={48}
        variant="primary"
        disabled={!isBefore(startTime, endTime)}
        onClick={() => onSubmit({ start: startTime, end: endTime })}
        style={{ marginTop: 'auto' }}
      >
        시간 설정하기
      </Button>
    </>
  )
}
