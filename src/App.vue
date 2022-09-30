<template>
  <div id="app" class="h-screen" :class="sizes.concat([!ligatures && 'ligatures-none'])">
    <div
      v-if="showStripeModal"
      class="flex items-center justify-center fixed top-0 left-0 h-full w-full z-50 bg-darkest"
    >
      <div class="flex flex-col items-center justify-center gap-8 text-center text-2xl">
        <svg
          class="animate-spin mr-3 h-10 w-10 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Redirecting you to Stripe for checkout</span>
      </div>
    </div>
    <ChangeLog v-if="!home && !publicDoc" />
    <router-view :inheritAttrs="true" class="flex-grow flex-shrink min-h-0"></router-view>
  </div>
</template>

<script>
import ChangeLog from '/components/ChangeLog.vue'

export default {
  name: "App",
  components: {
    ChangeLog,
  },
  inject: ["mq"],
  watch: {
    theme(value) {
      this.updateTheme()
    },
  },
  computed: {
    home() {
      return this.$route.name === "home"
    },
    ligatures() {
      return this.$store.state.settings.editor.ligatures
    },
    publicDoc() {
      return this.$route.name === "public_doc"
    },
    showStripeModal() {
      return this.$store.state.showStripeModal
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
</style>
