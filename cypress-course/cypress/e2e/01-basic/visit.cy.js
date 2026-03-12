describe('Visit Page', () => {

  it('should open the home page', () => {

    cy.visit('https://example.cypress.io')

    cy.url().should('include', 'cypress')

  })

})