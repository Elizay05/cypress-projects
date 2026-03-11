describe('Assertions Practice', () => {

  it('Validate elements', () => {

    cy.visit('https://example.cypress.io/commands/assertions')

    cy.get('.assertion-table')
      .should('exist')
      .and('be.visible')
      .and('have.class', 'assertion-table')
  })
})