import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  width: number
  height: number
  color: string
}

export default function StarIcon({ width, height, color, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 28"
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="m15 .25 3.368 10.365h10.898l-8.817 6.405 3.368 10.365L15 20.98l-8.817 6.405L9.551 17.02.734 10.615h10.898L15 .25Z"
      />
    </svg>
  )
}
