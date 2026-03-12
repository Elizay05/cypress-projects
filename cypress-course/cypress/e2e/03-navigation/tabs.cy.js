describe('Tabs Handling', () => {

  it('should open link in the same tab', () => {

    cy.visit('https://the-internet.herokuapp.com/windows')

    cy.get('.example a')
      .invoke('removeAttr', 'target')
      .click()

    cy.url()
      .should('include', '/windows/new')

  })

})