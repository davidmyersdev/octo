describe('editor', () => {
  beforeEach(() => {
    cy.visit('/docs/new')
    cy.visit('/docs/new')
  })

  it('is focused', () => {
    cy.focused().should('have.class', 'ink-mde-editor-content')
  })

  it('is editable', () => {
    cy.get('.ink-mde-editor-content').type('# Hello, World!{enter}{enter}What is going on?')
    cy.window().then((window) => {
      expect(window.inkMde.getDoc()).to.equal('# Hello, World!\n\nWhat is going on?')
    })
  })

  it('redirects to /docs/:id after typing anything', () => {
    cy.get('.ink-mde-editor-content').type('a')
    cy.url().should('not.match', /\/docs\/new$/)
    cy.url().should('match', /\/docs\/.{4,}\?p=true$/)
  })
})
