describe('Environment Variables', () => {

  it('should read environment variable', () => {

    cy.visit(Cypress.env('baseUrl'))

    cy.url().should('include', 'cypress')

  })

})