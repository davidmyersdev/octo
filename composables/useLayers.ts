export type LayerIndex = 0 | 1 | 2 | 3 | 4

export const layerMap = {
  0: {
    bg: 'bg-layer-0',
    bgCssVar: 'var(--layer-0-bg)',
    bgDisabled: 'disabled:bg-layer-0',
    bgDisabledCssVar: 'var(--layer-0-bg-disabled)',
    bgHover: 'hover:bg-layer-0',
    bgUiActive: 'ui-active:bg-layer-0',
    bgUiOpen: 'ui-open:bg-layer-0',
    class: 'layer-0',
    index: 0,
    nextLayer: 1,
    text: 'text-layer-0',
    textCssVar: 'var(--layer-0-text)',
  },
  1: {
    bg: 'bg-layer-1',
    bgCssVar: 'var(--layer-1-bg)',
    bgDisabled: 'disabled:bg-layer-1',
    bgDisabledCssVar: 'var(--layer-1-bg-disabled)',
    bgHover: 'hover:bg-layer-1',
    bgUiActive: 'ui-active:bg-layer-1',
    bgUiOpen: 'ui-open:bg-layer-1',
    class: 'layer-1',
    index: 1,
    nextLayer: 2,
    text: 'text-layer-1',
    textCssVar: 'var(--layer-1-text)',
  },
  2: {
    bg: 'bg-layer-2',
    bgCssVar: 'var(--layer-2-bg)',
    bgDisabled: 'disabled:bg-layer-2',
    bgDisabledCssVar: 'var(--layer-2-bg-disabled)',
    bgHover: 'hover:bg-layer-2',
    bgUiActive: 'ui-active:bg-layer-2',
    bgUiOpen: 'ui-open:bg-layer-2',
    class: 'layer-2',
    index: 2,
    nextLayer: 3,
    text: 'text-layer-2',
    textCssVar: 'var(--layer-2-text)',
  },
  3: {
    bg: 'bg-layer-3',
    bgCssVar: 'var(--layer-3-bg)',
    bgDisabled: 'disabled:bg-layer-3',
    bgDisabledCssVar: 'var(--layer-3-bg-disabled)',
    bgHover: 'hover:bg-layer-3',
    bgUiActive: 'ui-active:bg-layer-3',
    bgUiOpen: 'ui-open:bg-layer-3',
    class: 'layer-3',
    index: 3,
    nextLayer: 4,
    text: 'text-layer-3',
    textCssVar: 'var(--layer-3-text)',
  },
  4: {
    bg: 'bg-layer-4',
    bgCssVar: 'var(--layer-4-bg)',
    bgDisabled: 'disabled:bg-layer-4',
    bgDisabledCssVar: 'var(--layer-4-bg-disabled)',
    bgHover: 'hover:bg-layer-4',
    bgUiActive: 'ui-active:bg-layer-4',
    bgUiDisabled: 'ui-disabled:bg-layer-4',
    class: 'layer-4',
    bgUiOpen: 'ui-open:bg-layer-4',
    index: 4,
    nextLayer: 0,
    text: 'text-layer-4',
    textCssVar: 'var(--layer-4-text)',
  },
} as const

export const useLayers = (index?: Ref<LayerIndex>) => {
  const injectedIndex = inject('layerIndex', 0)
  const layerIndex = computed(() => index?.value ?? injectedIndex)
  const layer = computed(() => layerMap[layerIndex.value])
  const nextLayer = computed(() => layerMap[layer.value.nextLayer])

  return {
    layer,
    layerIndex,
    nextLayer,
  }
}
