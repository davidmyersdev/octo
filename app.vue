<template>
  <div id="app" class="h-full" :class="sizes.concat([!ligatures && 'ligatures-none'])">
    <AsyncChangeLog v-if="showChangeLog && !flow" />
    <AppLayout>
      <AppPage :pageKey="pageKey" class="dashboard-content flex-grow flex-shrink h-full overflow-x-hidden relative" />
    </AppLayout>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

import 'overlayscrollbars/overlayscrollbars.css'
import '/src/sw.js'

export default defineComponent({
  inject: ['mq'],
  setup() {
    useRoot()
    useHead({
      title: 'Build your second brain',
      titleTemplate: (title) => `${title} | Octo`,
    })

    const pageKey = ref('')
    const router = useRouter()

    router.beforeEach((to) => {
      if (!to.query.p) {
        pageKey.value = nanoid()
      }
    })

    return {
      pageKey,
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
    sizes() {
      if (this.mq.current === 'xs') return ['xs xs-plus']
      if (this.mq.current === 'sm') return ['sm xs-plus sm-plus']
      if (this.mq.current === 'md') return ['md xs-plus sm-plus md-plus']
      if (this.mq.current === 'lg') return ['lg xs-plus sm-plus md-plus lg-plus']
      if (this.mq.current === 'xl') return ['xl xs-plus sm-plus md-plus lg-plus xl-plus']

      return []
    },
  },
})
</script>

<style>
:root {
  --app-height: 100vh;
}

html, body, #app, .__nuxt {
  height: var(--app-height, 100vh);
}

.october {
  --ink-syntax-name-color: #eb6123;
  --ink-syntax-name-label-color: #abb2bf;
  --ink-syntax-name-variable-color: #ebda23;
}

* {
  box-sizing: border-box;
}

.ligatures-none * {
  font-variant-ligatures: none;
}

body {
  font-family: "Inter", helvetica, sans-serif !important;
  margin: 0;
}

body,
pre {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

pre {
  font-family: "Fira Code", monospace !important;
  margin: 0;
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

.notification {
  width: 20rem;
  z-index: 90;
}

.notification .notification-body {
  padding: 1rem;
}

svg {
  flex-shrink: 0;
}

.border-transparent {
  border-color: transparent !important;
}

.cursor-pointer {
  cursor: pointer;
}

.relative-fixed {
  /* this is a hack to position fixed elements relative to this container instead of the viewport */
  transform: translateZ(0);
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-3 {
  bottom: 1rem !important;
}

.left-0 {
  left: 0 !important;
}

.right-0 {
  right: 0 !important;
}

.right-2 {
  right: 0.5rem !important;
}

.right-3 {
  right: 1rem !important;
}

.top-0 {
  top: 0 !important;
}

.top-2 {
  top: 0.5rem !important;
}

.top-3 {
  top: 1rem !important;
}

.z-index-10 {
  z-index: 10;
}

.z-index-1 {
  z-index: 1;
}

.min-h-0 {
  min-height: 0 !important;
}

.min-w-0 {
  min-width: 0 !important;
}

/* theming */

.dark .notification {
  box-shadow: 0 0 0 0.125rem #111 !important;
}

.light .notification {
  box-shadow: 0 0 0 0.125rem #eee !important;
}

hr {
  background-color: #aaa;
}

/* lib */

/* When overlay scrollbars are mounted, we need to remove overflow from the host element. */
[data-overlayscrollbars=host] {
  overflow: hidden !important;
}

[data-overlayscrollbars=host] .os-viewport {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
