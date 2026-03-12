describe('Scroll Page', () => {

  it('should scroll to element', () => {

    cy.visit('https://the-internet.herokuapp.com/infinite_scroll')

    cy.scrollTo('bottom')

    cy.get('.jscroll-added')
      .should('have.length.greaterThan', 0)

  })

})