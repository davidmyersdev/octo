describe('editor', () => {
  beforeEach(() => {
    cy.clearIDB()
    cy.visit('/docs/new')
    cy.waitForAppReady()
  })

  it('is focused', () => {
    cy.focused().should('have.class', 'ink-mde-editor-content')
  })

  it('is editable', () => {
    cy.get('.ink-mde-editor-content').type('# Hello, World!{enter}{enter}What is going on?')
    cy.window().its('inkMde').should('exist').then((inkMde) => {
      expect(inkMde.getDoc()).to.equal('# Hello, World!\n\nWhat is going on?')
    })
  })

  it('redirects to /docs/:docId after typing anything', () => {
    cy.get('.ink-mde-editor-content').type('a')
    cy.url().should('not.match', /\/docs\/new$/)
    cy.url().should('match', /\/docs\/[\w-]+$/)
  })
})
