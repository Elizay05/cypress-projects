describe('Local Storage', () => {

  it('should store data in local storage', () => {

    cy.visit('https://example.cypress.io')

    cy.window().then((win) => {
      win.localStorage.setItem('token', '12345')
    })

    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.equal('12345')
    })

  })

})