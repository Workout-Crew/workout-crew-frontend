'use client'

import { HTMLAttributes, MouseEventHandler } from 'react'
import Image from 'next/image'
import Text from '../_components/Text'
import { FONT_COLOR } from '../_styles/color'
import { createTextOverflowStyle } from '../_styles/utils'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  label: string
  image: string | null
  onClick?: MouseEventHandler<HTMLDivElement>
}

export default function PostItem({
  title,
  description,
  label,
  image,
  onClick,
  style,
  ...props
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        ...style,
      }}
      onClick={onClick}
      {...props}
    >
      <div
        style={{ overflow: 'auto', display: 'flex', flexDirection: 'column' }}
      >
        <Text typography="title2" style={createTextOverflowStyle(1)}>
          {title}
        </Text>
        <Text typography="body2" style={createTextOverflowStyle(2)}>
          {description}
        </Text>
        <Text
          typography="label_regular"
          fontColor={FONT_COLOR.black_tertiary}
          style={createTextOverflowStyle(1)}
        >
          {label}
        </Text>
      </div>

      {image && (
        <Image
          src={image}
          alt="Thumbnail"
          width={58}
          height={58}
          style={{ borderRadius: 8, objectFit: 'cover' }}
        />
      )}
    </div>
  )
}
