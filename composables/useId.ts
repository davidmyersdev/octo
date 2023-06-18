import { nanoid } from 'nanoid'

export const useId = () => {
  return {
    id: () => nanoid(),
  }
}
