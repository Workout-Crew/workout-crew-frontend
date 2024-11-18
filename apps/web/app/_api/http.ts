import Axios, { AxiosRequestConfig } from 'axios'

const axios = Axios.create({ baseURL: 'https://uoscs-capstone.click' })

export const http = {
  get: async function get<Response = unknown>(
    url: string,
    options: AxiosRequestConfig = {},
  ) {
    const res = await axios.get<Response>(url, options)
    return res.data
  },
  post: async function post<Request = any, Response = unknown>(
    url: string,
    data?: Request,
  ) {
    const res = await axios.post<Response>(url, { data })
    return res.data
  },
}
