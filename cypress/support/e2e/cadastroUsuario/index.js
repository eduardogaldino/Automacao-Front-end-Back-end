
import cadLoc from './cadastro_locators'



Cypress.Commands.add('userRegister', (firstName, lastName, birthDay, birthMonth, birthYear, email, companyName, password, confirmPassword) => {
    cy.selectGender();
    cy.fillFirstNameField(firstName);
    cy.fillLastNameField(lastName);
    cy.selectBirthDay(birthDay);
    cy.selectBirthMonth(birthMonth);
    cy.selectBirthYear(birthYear);
    cy.fillEmailField(email);
    cy.fillCompanyNameField(companyName);
    cy.selectNewsletter();
    cy.fillPasswordField(password);
    cy.fillconfirmPasswordField(confirmPassword);
    cy.selectregisterButton();
})

Cypress.Commands.add('clickOnRegistrationButton', () => {
    cy.get(cadLoc.USER_REGISTER_FORM.BUTTON_OPEN_REGISTER).click();
    cy.title().should('contain', 'Register');
})

Cypress.Commands.add('selectGender', () => {
    cy.get(cadLoc.USER_REGISTER_FORM.GENDER_MALE).click().should('be.checked');
})

Cypress.Commands.add('fillFirstNameField', (firstNane) => {
    cy.get(cadLoc.USER_REGISTER_FORM.FIRST_NAME).type(firstNane);
})

Cypress.Commands.add('fillLastNameField', (lastName) => {
    cy.get(cadLoc.USER_REGISTER_FORM.LAST_NOME).type(lastName);
})

Cypress.Commands.add('selectBirthDay', (birthDay) => {
    cy.get(cadLoc.USER_REGISTER_FORM.DATE_OF_BIRTH_DAY).select(birthDay).should('have.value', birthDay);
})

Cypress.Commands.add('selectBirthMonth', (birthMonth) => {
    cy.get(cadLoc.USER_REGISTER_FORM.DATE_OF_BIRTH_MONTH).select(birthMonth).should('have.value', birthMonth);
})

Cypress.Commands.add('selectBirthYear', (birthYear) => {
    cy.get(cadLoc.USER_REGISTER_FORM.DATE_OF_BIRTH_YEAR).select(birthYear).should('have.value', birthYear);
})

Cypress.Commands.add('fillEmailField', (email) => {
    cy.get(cadLoc.USER_REGISTER_FORM.EMAIL).type(email);
})

Cypress.Commands.add('fillCompanyNameField', (companyName) => {
    cy.get(cadLoc.USER_REGISTER_FORM.COMPANY_NAME).type(companyName);
})

Cypress.Commands.add('selectNewsletter', () => {
    cy.get(cadLoc.USER_REGISTER_FORM.NEWSLETTER).should('be.checked');
})

Cypress.Commands.add('fillPasswordField', (password) => {
    cy.get(cadLoc.USER_REGISTER_FORM.PASSWORD).type(password);
})

Cypress.Commands.add('fillconfirmPasswordField', (confirmPassword) => {
    cy.get(cadLoc.USER_REGISTER_FORM.CONFIRM_PASSWORD).type(confirmPassword);
})

Cypress.Commands.add('selectregisterButton', () => {
    cy.get(cadLoc.USER_REGISTER_FORM.BUTTON_REGISTER).should('be.visible').click();

})


