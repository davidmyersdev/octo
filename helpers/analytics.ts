import { isClient } from '#helpers/environment'

export const track = (id: string, value = 0) => {
  if (isClient) {
    window.fathom?.trackGoal(id, value)
  }
}
