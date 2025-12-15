// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Start', () => {

    // Redimencionando Resolução de tela
    cy.viewport(1440, 900)
    // Open Site
    cy.visit('https://the-internet.herokuapp.com/login')
})


Cypress.Commands.add('login', (email, senha) => {

    // Email
    cy.get('#username')
        .should('be.visible')
        .type(email)

    // Password
    cy.get('#password')
        .should('be.visible')
        .type(senha)

    // Button login
    cy.get('button[type="submit"]')
        .click()
})