import moment from 'moment'

export const useTime = () => {
  return {
    humanTime: (date: Date) => {
      return moment(date).format('ddd, MMM Do, YYYY [at] h:mm A')
    },
    now: () => new Date(),
  }
}
