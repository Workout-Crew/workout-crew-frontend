import { SERVER_ENDPOINT } from '@env'

const getEndpoint = (url: string) => new URL(url, SERVER_ENDPOINT).toString()

export const http = {
  get: async function get<Response = unknown>(url: string) {
    const res = await fetch(getEndpoint(url), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return (await res.json()) as Response
  },
  post: async function post<Request = any, Response = unknown>(
    url: string,
    data: Request,
    headers: Record<string, string> = {},
  ) {
    const res = await fetch(getEndpoint(url), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    return (await res.json()) as Response
  },
}
