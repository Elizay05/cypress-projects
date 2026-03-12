describe('Cookies', () => {

  it('should set and get cookies', () => {

    cy.setCookie('username', 'cypressUser')

    cy.getCookie('username')
      .should('have.property', 'value', 'cypressUser')

  })

})