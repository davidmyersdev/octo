import { humanTime, now } from '#helpers/time'

export const useTime = () => {
  return {
    humanTime,
    now,
  }
}
