describe('test login', function () {

  beforeEach(function () {
    cy.openPage()
  })

  // -------------- SuccessFull -------------- //
  describe('Successfull Login', function () {

    it('Login Successful', function () {

      cy.get('h2')
        .should('be.visible')
        .and('contain.text', 'Login Page')

      cy.login(
        Cypress.env('ADMIN_USER'),
        Cypress.env('ADMIN_PASS')
      )

      cy.url().should('include', '/secure')

      cy.get('h2')
        .should('contain.text', ('Secure Area'))

      cy.get('h4')
        .should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.')

      cy.get('[class="button secondary radius"]')
        .should('be.visible')
        .and('contain.text', 'Logout')
    })
  })

  // -------------- Invalid Login -------------- //

  describe('Invalid Registered', function () {

    beforeEach(function () {
      cy.fixture('login').as('login')
    })

    it('should not login with unregistered', function () {

      this.login.invalid.forEach((data) => {

        cy.login(data.email, data.password)

        cy.contains(data.message)
          .should('be.visible')

        cy.reload()
      })
    })
  })

})  