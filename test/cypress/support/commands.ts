import localforage from 'localforage'

// https://github.com/cypress-io/cypress/issues/1208
Cypress.Commands.add('clearIDB', () => {
  const names = ['contexts', 'firebase/documents', 'settings']

  return Promise.all(names.map(name => localforage.createInstance({ name }).clear()))
})
