'use client'

import { Suspense, useState } from 'react'
import Separator from '../_components/Separator'
import Calendar from './_components/Calendar'
import ExerciseList from './_components/ExerciseList'
import GatheringLink from './_components/GatheringLink'
import MyGatheringList from './_components/MyGatheringList'
import ParticipantedGatheringList from './_components/ParticipantedGatheringList'
import Tab from './_components/Tab'

const TAB = { record: '기록보기', gathering: '내 모임' } as const

export default function RecordPage() {
  const [tab, setTab] = useState<keyof typeof TAB>('record')
  const [date, setDate] = useState<Date>(new Date())

  const handleSelectDate = (selected: Date) => setDate(selected)

  return (
    <>
      <Tab>
        {Object.entries(TAB).map(([key, label]) => (
          <Tab.Item
            isActive={tab === key}
            onClick={() => setTab(key as keyof typeof TAB)}
            key={key}
          >
            {label}
          </Tab.Item>
        ))}
      </Tab>

      {tab === 'record' ? (
        <>
          <Calendar date={date} handleSelectDate={handleSelectDate} />
          <Separator />
          <ExerciseList date={date} />
          <Separator />
        </>
      ) : (
        <Suspense fallback={null}>
          <GatheringLink />
          <Separator />
          <MyGatheringList />
          <Separator />
          <ParticipantedGatheringList />
          <Separator />
        </Suspense>
      )}
    </>
  )
}
