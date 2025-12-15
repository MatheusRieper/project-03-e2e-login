describe('Login', () => {

  it('Login Successful', () => {

    // Initializing Site
    cy.Start()
    cy.get('h2')
      .should('be.visible')

    cy.login('tomsmith', 'SuperSecretPassword!')

    // checking home page

    cy.url().should('include', '/secure')

    cy.get('h2')
      .should('contain.text', ('Secure Area'))

    cy.get('h4')
      .should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.')

  })

  it('EmailInvalid', () => {

    // Initializing Site
    cy.Start()
    cy.get('h2')
      .should('contain.text', 'Login Page')

    // Email Invalid
    cy.login('matheus', 'SuperSecretPassword!')

    // Message Error
    cy.get('#flash')
      .should('contain.text', ' Your username is invalid!')

    // Checking Page
    cy.url().should('include', '/login')

  })

  it('Password Invalid', () => {

    // Initializing Site
    cy.Start()
    cy.get('h2')
      .should('contain.text', 'Login Page')

    // Password Invalid
    cy.login('tomsmith', '1234')

    // Message Error
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!')

    // Checking Page 
    cy.url().should('include', '/login')

  })
})