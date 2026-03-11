describe('Search Practice', () => {

  it('Search something', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.get('#email1')
      .type('Hello Cypress')
      .should('have.value', 'HelloCypress')
  })

})