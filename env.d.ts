/// <reference types="vite/client" />

import { type Instance } from 'ink-mde'
import { type DefineComponent } from 'vue'

declare global {
  interface Window {
    inkMde: Instance
  }
}

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>

  export default component
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $store: any,
  }
}

export {}
