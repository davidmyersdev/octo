<script lang="ts">
import { nanoid } from 'nanoid'
import { loadSettings } from '#root/src/store/plugins/caching/settings'

import 'overlayscrollbars/overlayscrollbars.css'

export default defineComponent({
  setup() {
    const { public: { appName, appTitle } } = useConfig()
    const mq = useMq()
    const { store } = useVuex()

    const isMounted = ref(false)

    onMounted(() => {
      isMounted.value = true

      loadSettings(store)
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

    const pageKey = ref('')
    const router = useRouter()

    router.afterEach((to) => {
      if (!to.query.p) {
        pageKey.value = nanoid()
      }
    })

    return {
      pageKey,
      sizes,
    }
  },
  computed: {
    flow() {
      // A param to indicate a user flow (e.g. completing sign-up or sign-in).
      return this.$route.query.flow
    },
    showChangeLog() {
      return this.$route.path === '/docs/new' && !this.$route.query.ci
    },
    ligatures() {
      return this.$store.state.settings.editor.ligatures
    },
  },
})
</script>

<template>
  <div id="app" class="h-full" :class="sizes.concat([!ligatures ? 'ligatures-none' : ''])">
    <VitePwaManifest />
    <AsyncChangeLog v-if="showChangeLog && !flow" />
    <AppLayout>
      <AppPage :page-key="pageKey" class="bg-opacity-25 flex-grow flex-shrink h-full overflow-x-hidden relative" />
    </AppLayout>
  </div>
</template>

<style>
:root {
  --app-height: 100vh;
}

.dashboard {
  height: var(--app-height, 100vh);
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

[data-overlayscrollbars=host] [data-overlayscrollbars-viewport] {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
