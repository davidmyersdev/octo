import { now } from '#helpers/time'

export type AppEvent = {
  type: AppEventType,
  timestamp: Date,
}

export type AppEventType = typeof appEventTypes[keyof typeof appEventTypes]
export type AppEventWatcher = (appEvent: AppEvent) => void

const appReadyWatcher = (appEvent: AppEvent) => {
  if (!isLogged(appEventTypes.appReady)) {
    const readyEventTypes: AppEventType[] = [
      appEventTypes.appMounted,
    ]

    if (readyEventTypes.includes(appEvent.type)) {
      const missingEvents = readyEventTypes.filter((type) => {
        return !isLogged(type)
      })

      if (missingEvents.length === 0) {
        logEvent(appEventTypes.appReady)
      }
    }
  }
}

export const appEventTypes = {
  appMounted: 'app_mounted',
  appReady: 'app_ready',
  networkDocLoaded: 'network_doc_loaded',
  networkDocsSynced: 'network_docs_synced',
  userSignedIn: 'user_signed_in',
  userSignedOut: 'user_signed_out',
} as const

export const appEventWatchers = [appReadyWatcher] as Array<AppEventWatcher>
export const appEvents = [] as Array<AppEvent>

export const isLogged = (type: AppEventType) => {
  return !!appEvents.find((appEvent) => {
    return appEvent.type === type
  })
}

export const logEvent = (type: AppEventType) => {
  const appEvent = { timestamp: now(), type }

  appEvents.push(appEvent)

  console.debug(`[event]: ${type}`)

  notifyWatchers(appEvent)
}

export const notifyWatchers = (appEvent: AppEvent) => {
  appEventWatchers.forEach((watcher) => {
    try {
      watcher(appEvent)
    } catch (error) {
      console.error(error)
    }
  })
}

export const onAppReady = (callback: () => void) => {
  const stopWatching = watchEvents((appEvent) => {
    if (appEvent.type === appEventTypes.appReady) {
      stopWatching()
      callback()
    }
  })
}

export const watchEvents = (callback: AppEventWatcher) => {
  appEventWatchers.push(callback)

  const stopWatching = () => {
    appEventWatchers.splice(appEventWatchers.indexOf(callback), 1)
  }

  return stopWatching
}
