export const toRounded = (value: number, { decimals = 2 } = {}) => {
  const factor = 10 ** decimals

  return Math.round((value + Number.EPSILON) * factor) / factor
}
