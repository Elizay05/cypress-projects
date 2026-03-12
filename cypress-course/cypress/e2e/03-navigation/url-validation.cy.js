describe('URL Validation', () => {

  it('should validate the current url', () => {

    cy.visit('https://example.cypress.io/commands/navigation')

    cy.url()
      .should('eq', 'https://example.cypress.io/commands/navigation')

  })

})