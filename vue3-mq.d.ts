// https://github.com/craigrileyuk/vue3-mq/issues/4#issuecomment-1130365130
declare module 'vue3-mq' {
  import type { DefineComponent } from 'vue'

  type Preset =
    | 'bootstrap5'
    | 'bootstrap4'
    | 'bootstrap3'
    | 'vuetify'
    | 'tailwind'
    | 'devices'
    | 'wordpress'

  interface Breakpoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
  }

  interface MqState {
    current: keyof Breakpoints
    xs: boolean
    sm: boolean
    smMinus: boolean
    smPlus: boolean
    md: boolean
    mdMinus: boolean
    mdPlus: boolean
    lg: boolean
    lgMinus: boolean
    lgPlus: boolean
    xl: boolean
    xlMinus: boolean
    xlPlus: boolean
    xxl: boolean
    orientation: 'landscape' | 'portrait'
    isLandscape: boolean
    isPortrait: boolean
    theme: 'light' | 'dark'
    isLight: boolean
    isDark: boolean
  }

  export function useMq(): MqState
  export function updateBreakpoints({
    breakpoints,
    preset,
  }: {
    breakpoints: Breakpoints
    preset: Preset
  }): void

  export const availableBreakpoints: Breakpoints
  export const Vue3Mq: {
    install: <T>(
      app: T,
      {
        preset,
        breakpoints,
        defaultBreakpoint,
        defaultOrientation,
        defaultMotion,
        defaultTheme,
      }: {
        preset?: Preset
        breakpoints: Breakpoints
        defaultBreakpoint?: keyof Breakpoints
        defaultOrientation?: MqState['orientation']
        defaultMotion?: string
        defaultTheme?: MqState['theme']
      }
    ) => void
  }
  type Target =
    | 'xs'
    | 'sm'
    | 'sm-'
    | 'sm+'
    | 'md'
    | 'md-'
    | 'md+'
    | 'lg'
    | 'lg-'
    | 'lg+'
    | 'xl'
    | 'xl+'
    | 'xl-'
    | 'xxl'
  export const MqResponsive: DefineComponent<{
    target?: Target
    landscape?: boolean
    portrait?: boolean
    dark?: boolean
    light?: boolean
    inert?: boolean
    motion?: boolean
    tag?: string
    listTag?: string
    group?: boolean
  }>
}
