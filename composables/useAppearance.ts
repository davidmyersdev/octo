export const useAppearance = () => {
  const appearance = useColorMode({
    emitAuto: true,
    modes: {
      october: 'dark october',
    },
  })

  return {
    appearance,
  }
}
