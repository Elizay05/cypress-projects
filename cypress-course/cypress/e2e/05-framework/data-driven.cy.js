describe('Data Driven Tests', () => {

  const users = [
    { username: 'tomsmith', password: 'SuperSecretPassword!' },
    { username: 'tomsmith', password: 'wrongpassword' }
  ]

  users.forEach((user) => {

    it(`login test for ${user.username}`, () => {

      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('#username')
        .type(user.username)

      cy.get('#password')
        .type(user.password)

      cy.get('button[type="submit"]')
        .click()

    })

  })

})