//Group of functions to clear Local and Session Storage

Cypress.Commands.add('clearSessionStr', () => {
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
});

Cypress.Commands.add('clearLocalStr', () => {
    cy.window().then((win) => {
        win.localStorage.clear();
    });
});