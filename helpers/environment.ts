export const isClient = typeof window !== 'undefined'
export const isServer = typeof window === 'undefined'

export const onClient = (callback: () => void) => {
  if (isClient) {
    callback()
  }
}

export const onServer = (callback: () => void) => {
  if (isServer) {
    callback()
  }
}
