<script lang="ts">
import { appEventTypes, logEvent } from '/helpers/app'
import { loadKeybindings } from '/src/store/modules/keybindings'
import { loadDocs } from '/src/store/plugins/caching/documents'
import { loadSettings } from '/src/store/plugins/caching/settings'
import { syncDocs } from '/src/store/plugins/sync'

import 'overlayscrollbars/overlayscrollbars.css'

export default defineComponent({
  setup() {
    const { public: { appName, appTitle } } = useConfig()
    const mq = useMq()
    const router = useRouter()
    const { store } = useVuex()

    const isMounted = ref(false)

    const flow = computed(() => {
      // A param to indicate a user flow (e.g. completing sign-up or sign-in).
      return router.currentRoute.value.query.flow
    })

    const showChangeLog = computed(() => {
      return router.currentRoute.value.path === '/docs/new' && !router.currentRoute.value.query.ci
    })

    const ligatures = computed(() => {
      return store.state.settings.editor.ligatures
    })

    onMounted(async () => {
      isMounted.value = true

      await loadSettings(store)
      await loadDocs(store)
      await loadKeybindings(store)

      syncDocs(store)

      // This is used by tests to determine when the app is ready.
      document.body.dataset.isMounted = 'true'

      logEvent(appEventTypes.appMounted)

      if (import.meta.env.TAURI_DESKTOP) {
        const { init } = await import('/src/native')

        await init()
      }
    })

    const sizes = computed(() => {
      if (!isMounted.value) return []

      if (mq.value.current === 'xs') return ['xs xs-plus']
      if (mq.value.current === 'sm') return ['sm xs-plus sm-plus']
      if (mq.value.current === 'md') return ['md xs-plus sm-plus md-plus']
      if (mq.value.current === 'lg') return ['lg xs-plus sm-plus md-plus lg-plus']
      if (mq.value.current === 'xl') return ['xl xs-plus sm-plus md-plus lg-plus xl-plus']
      if (mq.value.current === 'xxl') return ['xxl xs-plus sm-plus md-plus lg-plus xl-plus xxl-plus']

      return []
    })

    useRoot()
    useHead({
      title: appTitle,
      titleTemplate: (title) => `${title} | ${appName}`,
    })

    return {
      flow,
      ligatures,
      showChangeLog,
      sizes,
    }
  },
})
</script>

<template>
  <div id="app" class="h-full" :class="sizes.concat([!ligatures ? 'ligatures-none' : ''])">
    <VitePwaManifest />
    <AsyncChangeLog v-if="showChangeLog && !flow" />
    <AppLayout>
      <AppPage class="bg-opacity-25 flex-grow flex-shrink h-full overflow-x-hidden relative" />
    </AppLayout>
  </div>
</template>

<style>
:root {
  --app-height: 100vh;
}

* {
  box-sizing: border-box;
}

.ligatures-none * {
  font-variant-ligatures: none;
}

body {
  font-family: "Inter", helvetica, sans-serif !important;
}

body,
pre {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

pre {
  font-family: "Fira Code", monospace !important;
}

.CodeMirror .cm-m-markdown:not(.cm-comment) {
  font-family: "Inter", helvetica, sans-serif !important;
}

.monospace {
  font-family: "Fira Code", monospace !important;
}

.sans-serif {
  font-family: "Inter", helvetica, sans-serif !important;
}

svg {
  flex-shrink: 0;
}

/* lib */

/* When overlay scrollbars are mounted, we need to remove overflow from the host element. */
[data-overlayscrollbars=host] {
  overflow: hidden !important;
}

.os-scrollbar {
  /* https://kingsora.github.io/OverlayScrollbars/#:~:text=to%20read%20it.-,Styling,-OverlayScrollbars%20comes%20with */
  --os-handle-bg: rgb(var(--layer-bg-hover));
  --os-handle-bg-hover: rgb(var(--layer-bg-hover));
  --os-handle-bg-active: rgb(var(--layer-bg-hover));
}
</style>
