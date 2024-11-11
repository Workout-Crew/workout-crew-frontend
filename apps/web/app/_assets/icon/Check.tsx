import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  width: number
  height: number
  color: string
}

export default function CheckIcon({ width, height, color, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 28"
      width={width}
      height={height}
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5.833 14 5.833 5.833L23.333 8.167"
      />
    </svg>
  )
}
