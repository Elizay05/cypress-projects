describe('Inputs', () => {

  it('should type in input field', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('test@email.com')
      .should('have.value', 'test@email.com')

  })

})