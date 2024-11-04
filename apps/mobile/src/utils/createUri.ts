import { CLIENT_ENDPOINT } from '@env'

export const createUri = (pathname: string) =>
  new URL(pathname, CLIENT_ENDPOINT).toString()
