import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  width: number
  height: number
  color: string
}

export default function MoreIcon({ width, height, color, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.625 14a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm6.125 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm4.375 1.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
