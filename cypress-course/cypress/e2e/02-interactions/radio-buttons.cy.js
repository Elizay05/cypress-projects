describe('Radio Buttons', () => {

  it('should select radio button', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('[type="radio"]')
      .first()
      
      .check()
      .should('be.checked')

  })

})