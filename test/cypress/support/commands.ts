import localforage from 'localforage'
import { useHooks } from '/composables/useHooks'

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

Cypress.Commands.add('waitForHook', (targetHook: string) => {
  cy.window().then({ timeout: 30000 }, (window) => {
    return new Cypress.Promise((resolve, reject) => {
      const { subscribe } = useHooks(window)

      const unsubscribe = subscribe((hook) => {
        if (hook === targetHook) {
          unsubscribe()
          resolve()
        }
      })
    })
  })
})
