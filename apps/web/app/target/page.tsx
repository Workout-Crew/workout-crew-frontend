import Separator from '../_components/Separator'
import ExerciseTarget from './_components/ExerciseTarget'
import MyMedals from './_components/MyMedals'
import TryingMissions from './_components/TryingMissions'

export default function TargetPage() {
  return (
    <>
      <ExerciseTarget />
      <Separator />
      <MyMedals />
      <Separator />
      <TryingMissions />
      <Separator />
    </>
  )
}
