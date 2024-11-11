import Separator from '../_components/Separator'
import AttainableMissions from './_components/AttainableMissions'
import Intro from './_components/Intro'
import MonthlyStatus from './_components/MonthlyStatus'

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
