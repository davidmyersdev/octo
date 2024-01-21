import { type Oklch, formatRgb, modeLrgb, modeOklch, modeRgb, useMode, wcagContrast } from 'culori/fn'

export type OkLevel = ReturnType<typeof okLevel>

const stripRgb = (color: string) => color.replace(/rgb\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)\s*\)/g, '$1 $2 $3')

const toCssVars = (level: OkLevel) => {
  return {
    [`--layer-${level.level - 1}-bg`]: stripRgb(level.bgColor),
    [`--layer-${level.level - 1}-bg-hover`]: stripRgb(level.bgHoverColor),
    [`--layer-${level.level - 1}-bg-active`]: stripRgb(level.bgActiveColor),
    [`--layer-${level.level - 1}-bg-disabled`]: stripRgb(level.bgDisabledColor),
    [`--layer-${level.level - 1}-border`]: stripRgb(level.borderColor),
    [`--layer-${level.level - 1}-text`]: stripRgb(level.textColor),
    [`--layer-${level.level - 1}-text-hover`]: stripRgb(level.textHoverColor),
    [`--layer-${level.level - 1}-text-disabled`]: stripRgb(level.textDisabledColor),
    [`--layer-${level.level - 1}-text-muted`]: stripRgb(level.textMutedColor),
  }
}

const okLevel = (color: MaybeRef<Oklch>, lightness: number, dark: boolean) => {
  const level = lightness * 10
  const okBgColor = { ...toValue(color), l: lightness }
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
    level,
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

const okLevels = (color: MaybeRef<Oklch>, dark: boolean) => {
  const okColor = toValue(color)!

  const levels = [
    okLevel(okColor, 0.1, dark),
    okLevel(okColor, 0.2, dark),
    okLevel(okColor, 0.3, dark),
    okLevel(okColor, 0.4, dark),
    okLevel(okColor, 0.5, dark),
    okLevel(okColor, 0.6, dark),
    okLevel(okColor, 0.7, dark),
    okLevel(okColor, 0.8, dark),
    okLevel(okColor, 0.9, dark),
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

export const useColors = () => {
  const oklch = useMode(modeOklch)

  useMode(modeRgb)
  useMode(modeLrgb)

  // Others to try out: #238ccd
  const color = ref('#6e5492')

  const okColor = computed(() => oklch(color.value)!)
  const level5 = computed(() => okLevel(okColor, 0.5, true))
  const dark = computed(() => okLevels(okColor, true))
  const light = computed(() => okLevels(okColor, false))
  const neutral = computed(() => level5.value)

  return {
    color,
    dark,
    light,
    neutral,
    toCssVars,
  }
}
