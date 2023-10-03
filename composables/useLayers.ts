export type LayerIndex = 0 | 1 | 2 | 3 | 4

export const layerMap = {
  0: {
    bg: 'bg-layer-0',
    bgCssVar: 'var(--layer-0-bg)',
    bgDisabled: 'disabled:bg-layer-0',
    bgHover: 'hover:bg-layer-0',
    bgUiActive: 'ui-active:bg-layer-0',
    bgUiOpen: 'ui-open:bg-layer-0',
    index: 0,
    nextLayer: 1,
    text: 'text-layer-0',
  },
  1: {
    bg: 'bg-layer-1',
    bgCssVar: 'var(--layer-1-bg)',
    bgDisabled: 'disabled:bg-layer-1',
    bgHover: 'hover:bg-layer-1',
    bgUiActive: 'ui-active:bg-layer-1',
    bgUiOpen: 'ui-open:bg-layer-1',
    index: 1,
    nextLayer: 2,
    text: 'text-layer-1',
  },
  2: {
    bg: 'bg-layer-2',
    bgCssVar: 'var(--layer-2-bg)',
    bgDisabled: 'disabled:bg-layer-2',
    bgHover: 'hover:bg-layer-2',
    bgUiActive: 'ui-active:bg-layer-2',
    bgUiOpen: 'ui-open:bg-layer-2',
    index: 2,
    nextLayer: 3,
    text: 'text-layer-2',
  },
  3: {
    bg: 'bg-layer-3',
    bgCssVar: 'var(--layer-3-bg)',
    bgDisabled: 'disabled:bg-layer-3',
    bgHover: 'hover:bg-layer-3',
    bgUiActive: 'ui-active:bg-layer-3',
    bgUiOpen: 'ui-open:bg-layer-3',
    index: 3,
    nextLayer: 4,
    text: 'text-layer-3',
  },
  4: {
    bg: 'bg-layer-4',
    bgCssVar: 'var(--layer-4-bg)',
    bgDisabled: 'disable:bg-layer-4',
    bgHover: 'hover:bg-layer-4',
    bgUiActive: 'ui-active:bg-layer-4',
    bgUiOpen: 'ui-open:bg-layer-4',
    index: 4,
    nextLayer: 0,
    text: 'text-layer-4',
  },
} as const

export const useLayers = (index: Ref<LayerIndex>) => {
  const layer = computed(() => layerMap[index.value])
  const nextLayer = computed(() => layerMap[layer.value.nextLayer])

  return {
    layer,
    nextLayer,
  }
}
