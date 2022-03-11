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





Cypress.Commands.add('LoginIntoOpenMrs', ({username,password,location1}) => { 
    cy.visit('https://demo.openmrs.org/openmrs/login.htm')
    cy.get('#username').click().type(username)
    cy.get('#password').click().type(password)
    cy.get('#Pharmacy').click()
    cy.get('#loginButton').click()

 })
