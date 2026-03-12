describe('Custom Commands', () => {

  it('should use custom login command', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.login('tomsmith', 'SuperSecretPassword!')

  })

})