import axios from 'axios'

export const config = {
  api: {
    bodyParser: false,
  },
}

async function parseRequestBody(
  request: Request,
): Promise<{ endpoint: string; body: unknown } | null> {
  try {
    const formData = await request.formData()
    const keys = Array.from(formData.keys())

    if (keys.includes('endpoint')) {
      const newFormData = new FormData()
      const endpoint = formData.get('endpoint') as string

      keys
        .filter(key => key !== 'endpoint')
        .forEach(key => newFormData.append(key, formData.get(key) as string))

      return { endpoint, body: newFormData }
    } else return null
  } catch {
    const data = await request.json()

    if ('endpoint' in data && 'body' in data) {
      const { endpoint, body } = data

      return { endpoint, body }
    } else return null
  }
}

export async function POST(request: Request) {
  const parsed = await parseRequestBody(request)

  if (!parsed) {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { endpoint, body } = parsed

  const { data } = await axios.post(
    new URL(endpoint, 'https://uoscs-capstone.click').toString(),
    body,
    { headers: { token: request.headers.get('token') } },
  )

  return Response.json(data)
}
