import localforage from 'localforage'

import 'cypress-network-idle'

const signOut = async () => {
  const firebaseDb = localforage.createInstance({
    name: 'firebaseLocalStorageDb',
    storeName: 'firebaseLocalStorage',
  })

  const keys = await firebaseDb.keys()

  return Promise.all(
    keys.map((key) => {
      firebaseDb.removeItem(key)
    })
  )
}

// https://github.com/cypress-io/cypress/issues/1208
Cypress.Commands.add('clearIDB', () => {
  const names = ['contexts', 'firebase/documents', 'settings']

  return new Cypress.Promise((resolve, reject) => {
    signOut().then(() => {
      return Promise.all(names.map(name => localforage.createInstance({ name }).clear())).then(things => {
        resolve(things)
      })
    }).catch(reject)
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
