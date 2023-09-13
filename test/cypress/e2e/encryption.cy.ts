import localforage from 'localforage'
import docs from '#root/test/fixtures/encryption/docs.json'
import { withTags } from '#test/cypress/support/utils'

withTags([], () => {
  describe('encryption', () => {
    beforeEach(() => {
      cy.clearIDB().then(() => {
        const cache = localforage.createInstance({ name: 'firebase/documents' })

        return Promise.all(docs.map(doc => cache.setItem(doc.id, doc)))
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
})
