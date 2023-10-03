/// <reference types="vite/client" />

import { type Instance } from 'ink-mde'
import { type DefineComponent } from 'vue'
import { type AppEventType } from '#helpers/app'
import * as appEvents from '#helpers/app'

declare global {
  var isNuxt: boolean

  interface Navigator {
    userAgentData?: {
      platform: string,
    },
  }

  interface Window {
    appEvents: typeof appEvents,
    fathom?: {
      trackGoal: (id: string, value: number) => void,
      trackPageview: (options?: { url: string }) => void,
    },
    inkMde: Instance,
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
