describe('Fixtures', () => {

  it('should load user data from fixture', () => {

    cy.fixture('user').then((user) => {

      expect(user.email).to.equal('test@email.com')
      expect(user.password).to.equal('123456')

    })

  })

})