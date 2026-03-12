describe('Alerts', () => {

  it('should handle alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.on('window:alert', (text) => {
      expect(text).to.contains('I am a JS Alert')
    })

    cy.contains('Click for JS Alert')
      .click()

  })

})