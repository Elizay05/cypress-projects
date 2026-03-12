class LoginPage {

  visit() {
    cy.visit('https://the-internet.herokuapp.com/login')
  }

  enterUsername(username) {
    cy.get('#username').type(username)
  }

  enterPassword(password) {
    cy.get('#password').type(password)
  }

  submit() {
    cy.get('button[type="submit"]').click()
  }

}

export default new LoginPage()