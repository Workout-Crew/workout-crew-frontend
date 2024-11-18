import { format } from 'date-fns'

export const getTodayDate = () => format(new Date(), 'yyyy-MM-dd')

export const getDate = (date: Date) => format(date, 'yyyy-MM-dd')
