<template>
  <div id="app" class="h-full" :class="sizes.concat([!ligatures && 'ligatures-none'])">
    <AsyncChangeLog v-if="!home && !publicDoc && !flow" />
    <router-view :inheritAttrs="true" class="flex-grow flex-shrink min-h-0"></router-view>
  </div>
</template>

<script>
import AsyncChangeLog from '/components/AsyncChangeLog.vue'

export default {
  components: {
    AsyncChangeLog,
  },
  inject: ["mq"],
  watch: {
    theme(value) {
      this.updateTheme()
    },
  },
  computed: {
    flow() {
      // A param to indicate a user flow (e.g. completing sign-up or sign-in).
      return this.$route.query.flow
    },
    home() {
      return this.$route.name === "home"
    },
    ligatures() {
      return this.$store.state.settings.editor.ligatures
    },
    publicDoc() {
      return this.$route.name === "public-doc"
    },
    sizes() {
      if (this.mq.current === "xs") return ["xs xs-plus"]
      if (this.mq.current === "sm") return ["sm xs-plus sm-plus"]
      if (this.mq.current === "md") return ["md xs-plus sm-plus md-plus"]
      if (this.mq.current === "lg") return ["lg xs-plus sm-plus md-plus lg-plus"]
      if (this.mq.current === "xl") return ["xl xs-plus sm-plus md-plus lg-plus xl-plus"]

      return []
    },
    theme() {
      return this.$store.state.settings.theme
    },
  },
  methods: {
    closeChangelog() {
      this.showChangelog = false
    },
    updateTheme() {
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
    },
  },
  created() {
    this.updateTheme()

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      this.updateTheme()
    })
  },
}
</script>

<style>
:root {
  --app-height: 100vh;
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
</style>
