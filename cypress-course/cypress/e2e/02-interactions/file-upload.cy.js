describe('File Upload', () => {

  it('should upload a file', () => {

    cy.visit('https://the-internet.herokuapp.com/upload')

    cy.get('#file-upload')
      .selectFile('cypress/fixtures/sample.pdf')

    cy.get('#file-submit')
      .click()

    cy.contains('File Uploaded!')
      .should('be.visible')

  })

})