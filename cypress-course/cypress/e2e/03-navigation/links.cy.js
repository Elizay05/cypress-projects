describe('Links Navigation', () => {

  it('should navigate using a link', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('Commands')
      .click()

    cy.contains('Navigation')
      .click()

    cy.url()
      .should('include', '/navigation')

  })

})