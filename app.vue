<template>
  <div id="app" class="h-screen" :class="sizes.concat([!ligatures && 'ligatures-none'])">
    <NuxtLayout name="editor">
      <NuxtPage :pageKey="routeKey" />
    </NuxtLayout>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { defineComponent } from 'vue'
import { useMq } from 'vue3-mq'

export default defineComponent({
  watch: {
    $route: {
      deep: true,
      handler(route) {
        if (route.params.preserve) { return }

        this.routeKey = nanoid()
      },
    },
    theme(value) {
      this.updateTheme()
    },
  },
  data() {
    return {
      routeKey: null,
      sizes: [],
    }
  },
  computed: {
    ligatures() {
      return this?.$store?.state.settings.editor.ligatures
    },
    theme() {
      return this?.$store?.state.settings.theme
    },
  },
  methods: {
    closeChangelog() {
      this.showChangelog = false
    },
    getSizes() {
      const mq = useMq()

      if (mq.current === "xs") return ["xs xs-plus"]
      if (mq.current === "sm") return ["sm xs-plus sm-plus"]
      if (mq.current === "md") return ["md xs-plus sm-plus md-plus"]
      if (mq.current === "lg") return ["lg xs-plus sm-plus md-plus lg-plus"]
      if (mq.current === "xl") return ["xl xs-plus sm-plus md-plus lg-plus xl-plus"]

      return []
    },
    updateSizes() {
      this.sizes = this.getSizes()
    },
    updateTheme() {
      if (process.browser) {
        document.documentElement.classList.remove("auto", "dark", "light", "october")

        switch (this.theme) {
          case "dark":
            document.documentElement.classList.add("dark")
            break
          case "light":
            document.documentElement.classList.add("light")
            break
          case "october":
            document.documentElement.classList.add("dark", "october")
            break
          case "auto":
            const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            const preferredTheme = isDark ? "dark" : "light"

            document.documentElement.classList.add("auto", preferredTheme)
            break
          default:
            document.documentElement.classList.add("dark")
            break
        }
      }
    },
  },
  mounted() {
    this.updateTheme()
    this.updateSizes()

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      this.updateTheme()
    })

    // TODO: Determine whether we need both of these.
    if (/Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgentData.platform)) {
      this?.$store?.dispatch('SET_MOD_KEY', '⌘ cmd')
    }
  },
})
</script>

<style>
html, body, #__nuxt, #app {
  height: 100vh;
  height: -webkit-fill-available;
}

#__nuxt, #app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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

hr {
  margin-top: 0.5rem;
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

.simplebar-scrollbar::before {
  bottom: 0.25rem !important;
  top: 0.25rem !important;
}

.simplebar-content {
  display: flex;
  flex-direction: column;
  min-height: 100% !important;
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

.dark .simplebar-scrollbar::before {
  background-color: rgba(255, 255, 255, 0.25);
}

.light .simplebar-scrollbar::before {
  background-color: rgba(0, 0, 0, 0.5);
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .text-theme {
    @apply text-brand;
  }

  .october .text-theme {
    color: #eb6123;
  }

  /* utils */
  .ligatures-none {
    font-variant-ligatures: none;
  }

  .ligatures-normal {
    font-variant-ligatures: normal;
  }

  .flex-basis-1\/2 {
    flex-basis: 50%;
  }

  .flex-basis-1\/3 {
    flex-basis: 33%;
  }

  .flex-basis-2\/3 {
    flex-basis: 66%;
  }

  .has-tooltip {
    @apply relative cursor-pointer;
  }

  .has-tooltip:hover .tooltip {
    @apply visible;
  }

  .tooltip {
    @apply invisible absolute z-50 ml-2 w-48 text-xs;
  }

  /* vue router */
  .sidebar-link.NuxtLink-exact-active, .sidebar-button.NuxtLink-exact-active {
    @apply md:bg-gray-200 md:dark:bg-gray-900 md:bg-opacity-50 md:dark:bg-opacity-50;
  }

  /* form */
  .button {
    @apply button-flat shadow;
  }

  .button-flat {
    @apply button-base justify-center lg:justify-between;
  }

  .button-base {
    @apply inline-flex items-center rounded cursor-pointer focus:outline-none focus:ring focus-within:ring;
  }

  .button-size-small {
    @apply px-2 py-1;
  }

  .button-size-medium {
    @apply px-3 py-2;
  }

  .button-color-gray {
    @apply bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700;
  }

  .button-color-surface {
    @apply bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800;
  }

  .button-color-blue {
    @apply bg-blue-300 hover:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600;
  }

  .form-button {
    @apply button button-size-medium button-color-gray;
  }

  .form-text {
    @apply block rounded px-3 py-2 shadow bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring;
  }

  .radio {
    @apply appearance-none outline-none rounded-full border-4 cursor-pointer border-gray-300 dark:border-white bg-gray-300 dark:bg-white checked:bg-blue-500 dark:checked:bg-blue-500 disabled:bg-gray-500 dark:disabled:bg-gray-500 w-4 h-4;
  }

  .checkbox {
    @apply appearance-none outline-none rounded-sm border-4 cursor-pointer border-gray-300 dark:border-white bg-gray-300 dark:bg-white checked:bg-blue-500 dark:checked:bg-blue-500 disabled:bg-gray-500 dark:disabled:bg-gray-500 w-4 h-4;
  }

  /* sidebar */
  .sidebar-button {
    @apply flex items-center justify-between rounded mb-2 p-6 md:p-2 bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-700 md:dark:hover:bg-gray-800 focus:outline-none focus:ring;
  }

  .sidebar-label {
    @apply flex items-center justify-between text-sm p-6 md:px-2 text-gray-500;
  }

  .sidebar-link {
    @apply flex items-center justify-between rounded mb-2 md:mb-1 p-6 md:p-2 bg-gray-100 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 md:dark:hover:bg-gray-900 focus:outline-none focus:ring;
  }

  .context-label {
    @apply flex items-center justify-between text-sm p-6 md:py-2 md:px-1.5 md:mb-2 text-gray-500;
  }

  .context-tag {
    @apply flex items-center justify-between rounded p-6 md:p-2 bg-gray-100 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 md:dark:hover:bg-gray-900 focus:outline-none focus:ring;
  }
}
</style>
