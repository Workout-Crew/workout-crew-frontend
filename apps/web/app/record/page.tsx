'use client'

import { useState } from 'react'
import Separator from '../_components/Separator'
import Calendar from './_components/Calendar'
import ExerciseList from './_components/ExerciseList'

export default function RecordPage() {
  const [date, setDate] = useState<Date>(new Date())

  const handleSelectDate = (selected: Date) => setDate(selected)

  return (
    <>
      <Calendar date={date} handleSelectDate={handleSelectDate} />
      <Separator />
      <ExerciseList date={date} />
      <Separator />
    </>
  )
}
