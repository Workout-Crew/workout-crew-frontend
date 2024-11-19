'use client'

import { useEffect } from 'react'
import Button from '../../_components/Button'
import Icon from '../../_components/Icon'
import Spacing from '../../_components/Spacing'
import Stack from '../../_components/Stack'
import Text from '../../_components/Text'
import Day from './Day'
import {
  add,
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  sub,
} from 'date-fns'
import { Day as Week, useLilius } from 'use-lilius'

interface Props {
  date: Date
  handleSelectDate: (_date: Date) => void
}

const WEEKS = ['일', '월', '화', '수', '목', '금', '토']

export default function Calendar({ date, handleSelectDate }: Props) {
  const { calendar, setViewing } = useLilius({ weekStartsOn: Week.SUNDAY })

  const handleSetPrevMonth = () => {
    const prevMonth = sub(date, { months: 1 })

    handleSelectDate(
      isSameMonth(Date.now(), prevMonth) ? new Date() : endOfMonth(prevMonth),
    )
  }

  const handleSetNextMonth = () => {
    const nextMonth = add(date, { months: 1 })

    handleSelectDate(
      isSameMonth(Date.now(), nextMonth) ? new Date() : startOfMonth(nextMonth),
    )
  }

  useEffect(() => setViewing(date), [date, setViewing])

  return (
    <Stack style={{ padding: 16 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icon
            type="chevronRight"
            size={18}
            onClick={handleSetPrevMonth}
            style={{ transform: 'rotate(180deg)' }}
          />
          <Text typography="title1">
            {format(date, 'yyyy')}년 {format(date, 'MM')}월
          </Text>
          <Icon type="chevronRight" size={18} onClick={handleSetNextMonth} />
        </div>
        <Button
          size={32}
          variant="primary"
          onClick={() => handleSelectDate(new Date())}
        >
          오늘도 돌아가기
        </Button>
      </div>

      <Spacing size={20} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0 10px',
        }}
      >
        {WEEKS.map(week => (
          <Text
            typography="body2"
            style={{ display: 'grid', placeItems: 'center', height: 40 }}
            key={week}
          >
            {week}
          </Text>
        ))}

        {calendar[0]?.flat().map(targetDate => {
          const key = targetDate.toString()

          return isSameMonth(targetDate, date) ? (
            <Day
              active={isSameDay(date, targetDate)}
              onClick={() => handleSelectDate(targetDate)}
              key={key}
            >
              {targetDate.getDate()}
            </Day>
          ) : (
            <div key={key} />
          )
        })}
      </div>
    </Stack>
  )
}
