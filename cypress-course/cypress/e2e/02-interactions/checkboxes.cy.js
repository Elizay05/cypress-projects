describe('Checkboxes', () => {

  it('should check and uncheck checkbox', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should('be.checked')

    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .uncheck()
      .should('not.be.checked')

  })

})