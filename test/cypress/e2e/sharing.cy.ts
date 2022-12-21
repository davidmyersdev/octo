describe('sharing', () => {
  beforeEach(() => {
    cy.clearIDB()
    cy.visit('/')
  })

  it('can create a shared doc and view it from a new session', () => {
    cy.visit('/account?ci=true')
    cy.get('[data-test-auth-tier-personal] [data-test-auth-social-google]').click()
    cy.get('#add-account-button button').click()
    cy.get('#autogen-button').click()
    cy.get('#sign-in').click()
    cy.waitForHook('user_logged_in')
    cy.visit('/docs/new?ci=true')
    cy.focused().type('hello')
    cy.get('[data-test-share-doc]').click()
    cy.get('[data-test-public-url]').invoke('val').then((value) => {
      cy.waitForHook('docs_synced')
      cy.visit(`${value}`)
      cy.waitForHook('public_doc_found')
      cy.window().its('inkMde').should('exist').then((inkMde) => {
        expect(inkMde.getDoc()).to.equal('hello')
      })
    })
  })
})
