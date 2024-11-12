import Separator from '../_components/Separator'
import AvailableGatheringList from './_components/AvailableGatheringList'
import BoardList from './_components/BoardList'
import MyGatheringList from './_components/MyGatheringList'
import UserStatus from './_components/UserStatus'

export default function CommunityPage() {
  return (
    <>
      <UserStatus />
      <Separator />
      <MyGatheringList />
      <Separator />
      <BoardList />
      <Separator />
      <AvailableGatheringList />
      <Separator />
    </>
  )
}
