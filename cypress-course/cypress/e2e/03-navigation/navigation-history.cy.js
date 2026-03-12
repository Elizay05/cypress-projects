describe('Browser Navigation', () => {

  it('should navigate back and forward', () => {

    cy.visit('https://example.cypress.io')

    cy.visit('https://example.cypress.io/commands/navigation')

    cy.go('back')

    cy.url()
      .should('eq', 'https://example.cypress.io/')

    cy.go('forward')

    cy.url()
      .should('include', '/navigation')

  })

})