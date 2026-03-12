describe('Buttons', () => {

  it('should click button', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-btn')
      .click()

  })

})