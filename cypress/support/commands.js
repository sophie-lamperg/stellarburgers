Cypress.Commands.add('openPage', (login) => {
    cy.url().should('equal', login);
});


