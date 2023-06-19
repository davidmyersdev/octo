export const debouncer = (delay: number) => {
  const debounces = new Map<unknown, ReturnType<typeof setTimeout>>()

  const debounce = (id: unknown, callback: () => void) => {
    const existingTimeout = debounces.get(id)

    if (existingTimeout) {
      clearTimeout(existingTimeout)
    }

    const newTimeout = setTimeout(() => {
      debounces.delete(id)

      try {
        callback()
      } catch (error) {
        console.error(error)
      }
    }, delay)

    debounces.set(id, newTimeout)
  }

  return {
    debounce,
  }
}
