describe('Hover', () => {

  it('should show caption when hovering', () => {

    cy.visit('https://the-internet.herokuapp.com/hovers')

    cy.get('.figure')
      .first()
      .trigger('mouseover')

    cy.get('.figcaption')
      .first()
      .invoke('show')
      .should('be.visible')

  })

})