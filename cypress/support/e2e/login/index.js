import loginloc from "./login_locators";


Cypress.Commands.add('userLogin', (email, senha) => {
    cy.clickOnLoginButton()
    cy.fillEmailLogin(email);
    cy.fillSenhaLogin(senha);
    cy.selectLogInbutton()
})


Cypress.Commands.add('clickOnLoginButton', () => {
    cy.get(loginloc.LOGIN_FIELDS.BUTTON_OPEN_LOGIN).click();
    cy.title().should('contain', 'nopCommerce demo store. Login');
})

Cypress.Commands.add('fillEmailLogin', (email) => {
    cy.get(loginloc.LOGIN_FIELDS.EMAIL).type(email);
})

Cypress.Commands.add('fillSenhaLogin', (senha) => {
    cy.get(loginloc.LOGIN_FIELDS.SENHA).type(senha);
})

Cypress.Commands.add('selectLogInbutton', () => {
    cy.get(loginloc.LOGIN_FIELDS.BUTTON_LOG_IN).click();
    cy.get('.topic-block-title > h2').should('be.visible');
})