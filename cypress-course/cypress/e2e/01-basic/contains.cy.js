describe('Contains inside element', () => {

  it('Search text inside container', () => {

    cy.visit('https://example.cypress.io')

    cy.get('.home-list')
      .contains('Querying')
      .click()

  })

})