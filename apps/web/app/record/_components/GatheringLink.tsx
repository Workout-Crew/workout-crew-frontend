import CardItem from '../../_components/CardItem'
import Stack from '../../_components/Stack'
import { useBridgeStore } from '../../provider'

export default function GatheringLink() {
  const push = useBridgeStore(store => store.push)

  return (
    <Stack style={{ padding: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <CardItem
          title="모임 개설하기"
          label="바로가기"
          onClick={() => push('/community/gathering/create')}
        />
        <CardItem
          title="모임 찾기"
          label="바로가기"
          onClick={() => push('/community/gathering')}
        />
      </div>
    </Stack>
  )
}
