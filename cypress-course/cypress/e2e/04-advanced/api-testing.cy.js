describe('API Testing', () => {

  it('should get users from API', () => {

    cy.request('https://jsonplaceholder.typicode.com/users')
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.have.length.greaterThan(0)

      })

  })

})