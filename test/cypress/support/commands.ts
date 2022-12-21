import localforage from 'localforage'

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
