'use client'

import { useGetCategoryList } from '../_api/board/useGetCategoryList'
import { useGetGatheringList } from '../_api/gathering/useGetGatheringList'
import BottomLink from '../_components/BottomLink'
import CardItem from '../_components/CardItem'
import ListItem from '../_components/ListItem'
import PostItem from '../_components/PostItem'
import Separator from '../_components/Separator'
import Spacing from '../_components/Spacing'
import Stack from '../_components/Stack'
import Text from '../_components/Text'
import { getPlace } from '../_utils/gathering'
import { useBridgeStore } from '../provider'
import { format } from 'date-fns'

export default function CommunityPage() {
  const nickname = useBridgeStore(store => store.user?.nickname)
  const push = useBridgeStore(store => store.push)
  const {
    data: { categoryList },
  } = useGetCategoryList()
  const {
    data: { gatheringList },
  } = useGetGatheringList('SEOUL', 'HEALTH') // Fixme

  return (
    <>
      <Stack style={{ padding: 16 }}>
        <Text typography="title1">{nickname}님의 활동 현황</Text>

        <Spacing size={20} />

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}
        >
          <CardItem
            title="내가 개설한 모임"
            label="내역 확인하기"
            onClick={() => push('/community/my-gathering-list')}
          />
          <CardItem
            title="참가한 모임"
            label="내역 확인하기"
            onClick={() => push('/community/participanted-gathering-list')}
          />
          <CardItem
            title="작성한 게시글"
            label="내역 확인하기"
            onClick={() => push('/community/my-post-list')}
          />
          <CardItem
            title="작성한 댓글"
            label="내역 확인하기"
            onClick={() => push('/community/post-list-with-my-comments')}
          />
        </div>
      </Stack>

      <Separator />

      <Stack style={{ gap: 20, padding: 16 }}>
        <Text typography="title1">게시판 목록</Text>

        <Stack style={{ gap: 16, padding: 0 }}>
          {categoryList.length > 0 ? (
            categoryList.map(({ id, name, description }) => (
              <ListItem
                title={name}
                description={description}
                onClick={() => push(`/community/board/${id}`)}
                key={id}
              />
            ))
          ) : (
            <Text
              typography="body1"
              style={{ width: '100%', padding: '32px 0', textAlign: 'center' }}
            >
              게시판이 존재하지 않습니다.
            </Text>
          )}
        </Stack>

        <BottomLink onClick={() => push('/community/board')}>더보기</BottomLink>
      </Stack>

      <Separator />

      <Stack style={{ gap: 20, padding: 16 }}>
        <Text typography="title1">참가 가능한 모임</Text>

        <Stack style={{ gap: 16, padding: 0 }}>
          {gatheringList.length > 0 ? (
            gatheringList.map(
              ({
                gatheringId,
                title,
                description,
                place,
                leaderNickname,
                currentNumber,
                startDate,
              }) => (
                <PostItem
                  title={title}
                  description={description}
                  label={`${leaderNickname} / ${getPlace(place)} / 참가자 ${currentNumber}명 / ${format(new Date(startDate), 'MM월 dd일')}`}
                  image={null}
                  onClick={() => push(`/community/gathering/${gatheringId}`)}
                  key={gatheringId}
                />
              ),
            )
          ) : (
            <Text
              typography="body1"
              style={{ width: '100%', padding: '32px 0', textAlign: 'center' }}
            >
              참여 가능한 모임이 없습니다.
            </Text>
          )}
        </Stack>

        <BottomLink onClick={() => push('/community/gathering')}>
          더보기
        </BottomLink>
      </Stack>

      <Separator />
    </>
  )
}
