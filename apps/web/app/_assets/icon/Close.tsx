import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  width: number
  height: number
  color: string
}

export default function CloseIcon({ width, height, color, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m7 7 14 14m0-14L7 21"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
