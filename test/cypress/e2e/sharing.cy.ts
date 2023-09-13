import { withTags } from '#test/cypress/support/utils'

withTags(['api'], () => {
  describe('sharing', () => {
    beforeEach(() => {
      cy.clearIDB()
      cy.visit('/')
      cy.waitForAppReady()
    })

    it('can create a shared doc and view it from a new session', () => {
      cy.visit('/account?ci=true')
      cy.waitForAppReady()

      cy.get('[data-test-auth-tier-personal] [data-test-auth-social-google]').click()
      cy.get('#add-account-button button').click()
      cy.get('#autogen-button').click()
      cy.get('#sign-in').click()
      cy.waitForHook('user_signed_in')

      cy.visit('/docs/new?ci=true')
      cy.waitForAppReady()

      cy.focused().type('hello')
      cy.get('[data-test-toggle-sidebars]').click()
      cy.get('[data-test-share-doc]').click()
      cy.get('[data-test-public-url]').invoke('val').then((value) => {
        cy.waitForHook('network_docs_synced')
        cy.visit(`${value}`)
        cy.waitForAppReady()
        cy.waitForHook('network_doc_loaded')
        cy.window().its('inkMde').should('exist').then((inkMde) => {
          expect(inkMde.getDoc()).to.equal('hello')
        })
      })
    })
  })
})
