import moment from 'moment'

export const humanFormat = 'ddd, MMM Do, YYYY [at] h:mm A'

export const humanTime = (date: Date) => {
  return moment(date).format(humanFormat)
}

export const now = () => {
  return new Date()
}
