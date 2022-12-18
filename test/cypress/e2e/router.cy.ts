describe('/', () => {
  beforeEach(() => cy.visit('/'))

  it('redirects to /home on first visit', () => {
    cy.url().should('match', /\/home$/)
  })

  it('does not redirect to /home on subsequent visits', () => {
    cy.visit('/')

    cy.url().should('match', /\/$/)
  })
})

describe('/docs/new', () => {
  beforeEach(() => cy.visit('/docs/new'))

  it('redirects to /home on first visit', () => {
    cy.url().should('match', /\/home$/)
  })

  it('does not redirect to /home on subsequent visits', () => {
    cy.visit('/docs/new')

    cy.url().should('match', /\/docs\/new$/)
  })
})
