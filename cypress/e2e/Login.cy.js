describe('test login', () => {

  beforeEach(() =>
    cy.Start()
  )

  // -------------- SuccessFull -------------- //
  describe('Successfull Login', () => {

    it('Login Successful', () => {

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
  const INVALID_USER = 'test'
  const INVALID_PASS = 'password'

  describe('Invalid Registered', () => {

    it('should not login with invalid email', () => {

      cy.get('h2')
        .should('contain.text', 'Login Page')

      cy.login(
        INVALID_USER,
        Cypress.env('ADMIN_PASS'))

      cy.get('#flash')
        .should('be.visible')
        .and('contain.text', ' Your username is invalid!')

      cy.url().should('include', '/login')

    })

    it('should not login with invalid password', () => {

      cy.get('h2')
        .should('contain.text', 'Login Page')

      cy.login(
        Cypress.env('ADMIN_USER'),
        INVALID_PASS
      )

      cy.get('#flash')
        .should('be.visible')
        .and('contain.text', 'Your password is invalid!')

      cy.url().should('include', '/login')
    })
  })

})