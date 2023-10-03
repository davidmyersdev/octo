import localforage from 'localforage'
import type * as appEvents from '#helpers/app'

import 'cypress-network-idle'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      clearIDB: () => typeof Cypress.Promise,
      waitForAppReady: () => typeof Cypress.Promise,
      waitForHook: (name: appEvents.AppEventType) => typeof Cypress.Promise,
    }
  }

  interface Window {
    appEvents: typeof appEvents,
  }
}

const signOut = async () => {
  const firebaseDb = localforage.createInstance({
    name: 'firebaseLocalStorageDb',
    storeName: 'firebaseLocalStorage',
  })

  const keys = await firebaseDb.keys()

  return Promise.all(
    keys.map((key) => (
      firebaseDb.removeItem(key)
    )),
  )
}

// https://github.com/cypress-io/cypress/issues/1208
Cypress.Commands.add('clearIDB', () => {
  const names = ['contexts', 'firebase/documents', 'settings']

  cy.wrap(null).then(() => {
    return new Cypress.Promise(async (resolve, reject) => {
      try {
        await signOut()

        for (const name of names) {
          await localforage.createInstance({ name }).clear()
        }

        resolve()
      } catch (error) {
        reject(error)
      }
    })
  })
})

Cypress.Commands.add('waitForAppReady', () => {
  cy.window().then({ timeout: 60000 }, (window) => {
    return new Cypress.Promise((resolve) => {
      if (window.appEvents.isLogged(window.appEvents.appEventTypes.appReady)) {
        return resolve()
      }

      window.appEvents.onAppReady(() => {
        resolve()
      })
    })
  })
})

Cypress.Commands.add('waitForHook', (type) => {
  cy.window().then({ timeout: 60000 }, (window) => {
    return new Cypress.Promise((resolve) => {
      const stopWatching = window.appEvents.watchEvents(() => {
        if (window.appEvents.isLogged(type)) {
          stopWatching()
          resolve()
        }
      })
    })
  })
})
