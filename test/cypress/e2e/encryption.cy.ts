import localforage from 'localforage'
import docs from '#root/test/fixtures/encryption/docs.json'

describe('encryption', () => {
  beforeEach(() => {
    cy.clearIDB()
    cy.wrap(null).then(() => {
      return new Cypress.Promise(async (resolve, reject) => {
        try {
          const cache = localforage.createInstance({ name: 'firebase/documents' })

          await Promise.all(docs.map(doc => cache.setItem(doc.id, doc)))

          resolve()
        } catch (error) {
          reject(error)
        }
      })
    })
    cy.visit('/')
    cy.waitForAppReady()
  })

  it('does not show docs that cannot be decrypted', () => {
    cy.visit('/docs')
    cy.waitForAppReady()

    cy.get('[data-test-doc]').should('not.exist')
  })

  it('shows docs that can be decrypted', () => {
    cy.visit('/settings')
    cy.waitForAppReady()

    cy.fixture('encryption/test-key.public').then((key: string) => {
      return cy.get('[data-test-public-key]').type(key.trim().replace(/\n/g, '{enter}'), { delay: 0 })
    })
    cy.fixture('encryption/test-key.private').then((key: string) => {
      return cy.get('[data-test-private-key]').type(key.trim().replace(/\n/g, '{enter}'), { delay: 0 })
    })
    cy.get('[data-test-toggle-crypto]:not(:disabled)').click()
    cy.visit('/docs')
    cy.get('[data-test-doc]').should('have.length', docs.length)
  })
})
