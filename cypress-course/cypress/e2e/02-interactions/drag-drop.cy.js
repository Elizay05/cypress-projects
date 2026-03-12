describe('Drag and Drop', () => {

  it('should drag element', () => {

    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

    cy.get('#column-a')
      .trigger('mousedown', { which: 1 })

    cy.get('#column-b')
      .trigger('mousemove')
      .trigger('mouseup', { force: true })

  })

})