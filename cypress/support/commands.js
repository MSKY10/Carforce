// Login
Cypress.Commands.add('login', (username, password) => {

    cy.visit(`https://staging-dubizzle-cars.empgautos.com/admin/`)
    cy.get(':nth-child(1) > div > .form-control').type(username)
    cy.get('.has-icon > .form-control').type(password + "{enter}")

})