import LoginPage from '../../pages/LoginPage'

describe('Page Object Model', () => {

  it('should login using page object', () => {

    LoginPage.visit()
    LoginPage.enterUsername('tomsmith')
    LoginPage.enterPassword('SuperSecretPassword!')
    LoginPage.submit()

    cy.url().should('include', '/secure')

  })

})