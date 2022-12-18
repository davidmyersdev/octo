import localforage from 'localforage'
import docs from '/test/fixtures/encryption/docs.json'

describe('encryption', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearIDB().then(() => {
      const cache = localforage.createInstance({ name: 'firebase/documents' })

      return Promise.all(docs.map(doc => cache.setItem(doc.id, doc)))
    })
  })

  it('does not show docs that cannot be decrypted', () => {
    cy.visit('/docs')
    cy.get('[data-test-doc]').should('not.exist')
  })

  it('shows docs that can be decrypted', () => {
    cy.visit('/settings')
    cy.fixture('encryption/test-key.public').then((key: string) => {
      return cy.get('[data-test-public-key]').type(key.trim().replace(/\n/g, '{enter}'), { delay: 0 })
    })
    cy.fixture('encryption/test-key.private').then((key: string) => {
      return cy.get('[data-test-private-key]').type(key.trim().replace(/\n/g, '{enter}'), { delay: 0 })
    })
    cy.get('[data-test-toggle-crypto]').click()
    cy.visit('/docs')
    cy.get('[data-test-doc]').should('have.length', docs.length)
  })
})
