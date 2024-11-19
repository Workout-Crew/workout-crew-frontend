import { MouseEventHandler, ReactNode } from 'react'
import { ExerciseType } from '../../_api/model'
import Text from '../../_components/Text'
import { FONT_COLOR } from '../../_styles/color'
import { getExerciseColor } from '../../_utils/exercise'

interface Props {
  active: boolean
  exercises: ExerciseType[]
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Day({ active, exercises, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        height: 50,
        border: 0,
        background: 'transparent',
      }}
    >
      <Text
        typography={active ? 'title2' : 'body2'}
        fontColor={
          active ? FONT_COLOR.black_primary : FONT_COLOR.black_tertiary
        }
      >
        {children}
      </Text>

      {exercises.length > 0 && (
        <div
          style={{
            position: 'absolute',
            bottom: 5,
            left: '50%',
            transform: 'translate(-50%)',
            display: 'flex',
            gap: 2,
          }}
        >
          {exercises.map((exercise, index) => (
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: 2.5,
                background: getExerciseColor(exercise),
              }}
              key={`${exercise}-${index}`}
            />
          ))}
        </div>
      )}
    </button>
  )
}
