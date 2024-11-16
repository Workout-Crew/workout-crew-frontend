import dynamic from 'next/dynamic'
import Separator from '../_components/Separator'
import AttainableMissions from './_components/AttainableMissions'
import MonthlyStatus from './_components/MonthlyStatus'

const Intro = dynamic(() => import('./_components/Intro'), { ssr: false })

export default function HomePage() {
  return (
    <>
      <Intro />
      <Separator />
      <MonthlyStatus />
      <Separator />
      <AttainableMissions />
      <Separator />
    </>
  )
}
