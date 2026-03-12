describe('Selectors', () => {

  it('should find elements using css selectors', () => {

    cy.visit('https://example.cypress.io/commands/querying')

    cy.get('#query-btn')
      .should('contain', 'Button')

  })

})