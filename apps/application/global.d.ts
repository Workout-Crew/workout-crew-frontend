declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module '@env' {
  export const CLIENT_ENDPOINT: string
  export const SERVER_ENDPOINT: string
}
