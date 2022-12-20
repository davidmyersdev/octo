import moment from 'moment'

describe('notepad', () => {
  beforeEach(() => {
    cy.clearIDB()
    cy.visit('/')
    cy.visit('/notepad')
  })

  it('is focused', () => {
    cy.focused().should('have.class', 'ink-mde-editor-content')
  })

  it('has some default text', () => {
    const date = moment().format('dddd, MMMM Do, YYYY')

    cy.window().its('inkMde').should('exist').then((inkMde) => {
      expect(inkMde.getDoc()).to.match(new RegExp(`^#daily\n\n# ${date}`))
    })
  })
})
