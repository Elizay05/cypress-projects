describe('Network Intercept', () => {

  it('should intercept API request', () => {

    cy.intercept('GET', '**/users').as('getUsers')

    cy.visit('https://example.cypress.io')

    cy.window().then((win) => {
      win.fetch('https://jsonplaceholder.typicode.com/users')
    })

    cy.wait('@getUsers')
      .its('response.statusCode')
      .should('eq', 200)

  })

})