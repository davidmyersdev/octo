import { type Oklch, formatRgb, modeLrgb, modeOklch, modeRgb, useMode, wcagContrast } from 'culori/fn'

export type OkLayer = ReturnType<typeof okLayer>

const stripRgb = (color: string) => color.replace(/rgb\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)\s*\)/g, '$1 $2 $3')

export const toCssVars = (layer: OkLayer) => {
  return {
    [`--layer-${layer.index}-bg`]: stripRgb(layer.bgColor),
    [`--layer-${layer.index}-bg-hover`]: stripRgb(layer.bgHoverColor),
    [`--layer-${layer.index}-bg-active`]: stripRgb(layer.bgActiveColor),
    [`--layer-${layer.index}-bg-disabled`]: stripRgb(layer.bgDisabledColor),
    [`--layer-${layer.index}-border`]: stripRgb(layer.borderColor),
    [`--layer-${layer.index}-text`]: stripRgb(layer.textColor),
    [`--layer-${layer.index}-text-hover`]: stripRgb(layer.textHoverColor),
    [`--layer-${layer.index}-text-disabled`]: stripRgb(layer.textDisabledColor),
    [`--layer-${layer.index}-text-muted`]: stripRgb(layer.textMutedColor),
  }
}

export const okLayer = (color: MaybeRef<Oklch>, index: number, dark: boolean) => {
  // const okBgColor = { ...toValue(color), l: lightness }
  const okBgColor = toValue(color)
  const lightness = okBgColor.l
  const bgColor = formatRgb(okBgColor)
  const okBgHoverColor = okModify(okBgColor, dark ? 0.05 : -0.05)
  const bgHoverColor = formatRgb(okBgHoverColor)
  const okBgActiveColor = okModify(okBgColor, dark ? 0.1 : -0.1)
  const bgActiveColor = formatRgb(okBgActiveColor)
  const okBgDisabledColor = okModify(okBgColor, dark ? 0.025 : -0.025)
  const bgDisabledColor = formatRgb(okBgDisabledColor)
  const okTextColor = okModify(okBgColor, lightness <= 0.5 ? 0.5 : -0.5)
  const textColor = formatRgb(okTextColor)
  const textHoverColor = textColor
  const textActiveColor = textColor
  const okTextDisabledColor = okModify(okBgDisabledColor, lightness <= 0.5 ? 0.25 : -0.25)
  const textDisabledColor = formatRgb(okTextDisabledColor)
  const okTextMutedColor = okModify(okBgColor, lightness <= 0.5 ? 0.25 : -0.25)
  const textMutedColor = formatRgb(okTextMutedColor)
  const borderColor = bgHoverColor

  return {
    index,
    bgColor,
    bgHoverColor,
    bgActiveColor,
    bgDisabledColor,
    borderColor,
    textColor,
    textHoverColor,
    textActiveColor,
    textDisabledColor,
    textMutedColor,
    wcag: wcagContrast(bgColor, textColor),
  }
}

const okLayers = (color: MaybeRef<Oklch>, dark: boolean) => {
  const okColor = toValue(color)!

  const levels = [
    okLayer(okColor, 0.1, dark),
    okLayer(okColor, 0.2, dark),
    okLayer(okColor, 0.3, dark),
    okLayer(okColor, 0.4, dark),
    okLayer(okColor, 0.5, dark),
    okLayer(okColor, 0.6, dark),
    okLayer(okColor, 0.7, dark),
    okLayer(okColor, 0.8, dark),
    okLayer(okColor, 0.9, dark),
  ]

  if (!dark) {
    levels.reverse()
  }

  return levels
}

const okModify = (color: MaybeRef<Oklch>, amount: number) => {
  const okColor = toValue(color)!

  return { ...okColor, l: okColor.l + amount }
}

export const useColorLayer = (index: MaybeRef<number>) => {
  const oklch = useMode(modeOklch)

  useMode(modeRgb)
  useMode(modeLrgb)

  const color = ref('#6e5492')
  const okColor = computed(() => oklch(color.value)!)
  const layer = computed(() => okLayer(okColor, toValue(index), true))

  return {
    color,
    layer,
  }
}

export const useColors = () => {
  const oklch = useMode(modeOklch)

  useMode(modeRgb)
  useMode(modeLrgb)

  // Others to try out: #238ccd
  const color = ref('#6e5492')
  const okColor = computed(() => oklch(color.value)!)

  const level5 = computed(() => okLayer(okColor, 0.5, true))
  const dark = computed(() => okLayers(okColor, true))
  const light = computed(() => okLayers(okColor, false))
  const neutral = computed(() => level5.value)

  return {
    oklch,
    okColor,
    color,
    dark,
    light,
    neutral,
    toCssVars,
  }
}
