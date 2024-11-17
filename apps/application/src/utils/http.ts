import { SERVER_ENDPOINT } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Options = {
  isTokenRequired?: boolean
}

const getEndpoint = (url: string) => new URL(url, SERVER_ENDPOINT).toString()

const getToken = async () => {
  const token = await AsyncStorage.getItem('token')

  if (!token) throw new Error('Token is not found')

  return token
}

export const http = {
  get: async function get<Response = unknown>(
    url: string,
    { isTokenRequired }: Options = { isTokenRequired: true },
  ) {
    const res = await fetch(getEndpoint(url), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(isTokenRequired && { token: await getToken() }),
      },
    })

    return (await res.json()) as Response
  },
  post: async function post<Request = any, Response = unknown>(
    url: string,
    data: Request,
    { isTokenRequired }: Options = { isTokenRequired: true },
  ) {
    const res = await fetch(getEndpoint(url), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...(isTokenRequired && { token: await getToken() }),
      },
    })

    return (await res.json()) as Response
  },
}
