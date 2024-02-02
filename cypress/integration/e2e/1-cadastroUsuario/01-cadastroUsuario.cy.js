/// <reference types="cypress"/>
import cadLoc from '../../../support/e2e/cadastroUsuario/cadastro_locators';
import '../../../support/e2e/cadastroUsuario/index'
import { faker } from '@faker-js/faker'
import { userMessages } from '../../../fixtures/message.json'

let firstName = faker.person.firstName();
let lastName = faker.person.firstName();
let email = faker.internet.email();
let companyName = faker.string.alphanumeric(10);
let password = faker.string.alphanumeric(10);
const day = Math.floor(Math.random() * 31) + 1;
const month = Math.floor(Math.random() * 12) + 1;
const year = Math.floor(Math.random() * (2024 - 1914 + 1)) + 1914;
const years = year.toString();

describe('Testes de cadastro de usuario', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clickOnRegistrationButton();
    })

    context('Registro de usuario com sucesso', () => {

        it('Registro de Usuario', () => {

            cy.userRegister(firstName, lastName, day, month, years, email, companyName, password, password)

            cy.get(cadLoc.USER_REGISTER_FORM.MENSAGEM_SUCESSO).should('be.visible').should('have.text', userMessages.sucessMessage);
            cy.get(cadLoc.USER_REGISTER_FORM.BUTTON_CONTINUE).should('be.visible').click();
        })

    })

    context('restriçoes de registro de Usuarios', () => {

        it('validar o não preenchimento do campo email  ', () => {
            cy.selectGender();
            cy.fillFirstNameField(firstName);
            cy.fillLastNameField(lastName);
            cy.selectBirthDay(day);
            cy.selectBirthMonth(month);
            cy.selectBirthYear(years);
            cy.fillCompanyNameField(companyName);
            cy.selectNewsletter();
            cy.fillPasswordField(password);
            cy.fillconfirmPasswordField(password);
            cy.selectregisterButton();
            cy.get(cadLoc.USER_REGISTER_FORM_MESSAGE.EMAIL_MESSAGE_ERROR).should('be.visible').should('have.text', userMessages.emailErrorMessage);
        })


        it('validar o não preenchimento do campo senha  ', () => {
            cy.selectGender();
            cy.fillFirstNameField(firstName);
            cy.fillLastNameField(lastName);
            cy.selectBirthDay(day);
            cy.selectBirthMonth(month);
            cy.selectBirthYear(years);
            cy.fillEmailField(email);
            cy.fillCompanyNameField(companyName);
            cy.selectNewsletter();
            cy.fillconfirmPasswordField(password);
            cy.selectregisterButton();
            cy.get(cadLoc.USER_REGISTER_FORM_MESSAGE.CONFIRM_PASSWORD_MESSAGE_ERROR).should('be.visible').should('have.text', userMessages.passworsNotKnown);
        })

        it('validar o não preenchimento do campo comfirmar senha  ', () => {
            cy.selectGender();
            cy.fillFirstNameField(firstName);
            cy.fillLastNameField(lastName);
            cy.selectBirthDay(day);
            cy.selectBirthMonth(month);
            cy.selectBirthYear(years);
            cy.fillEmailField(email);
            cy.fillCompanyNameField(companyName);
            cy.selectNewsletter();
            cy.fillPasswordField(password);
            cy.selectregisterButton();
            cy.get(cadLoc.USER_REGISTER_FORM_MESSAGE.CONFIRM_PASSWORD_MESSAGE_ERROR).should('be.visible').should('have.text', userMessages.ComfirmPasswordErrorMessage);
        })


        it('validar o nao prenchimento de todos os campos', () => {
            cy.selectregisterButton();
            cy.get(cadLoc.USER_REGISTER_FORM_MESSAGE.FIRST_NAME_MESSAGE_ERROR).should('be.visible').should('have.text', userMessages.firstNameErrorMessage);
            cy.get(cadLoc.USER_REGISTER_FORM_MESSAGE.LAST_NAME_MESSAGE_ERROR).should('be.visible').should('have.text', userMessages.lastNameErrorMessage);
            cy.get(cadLoc.USER_REGISTER_FORM_MESSAGE.EMAIL_MESSAGE_ERROR).should('be.visible').should('have.text', userMessages.emailErrorMessage);
            cy.get(cadLoc.USER_REGISTER_FORM_MESSAGE.PASSWORD_MESSAGE_ERROR).should('be.visible').should('have.text', userMessages.passwordErrorMessage);
            cy.get(cadLoc.USER_REGISTER_FORM_MESSAGE.CONFIRM_PASSWORD_MESSAGE_ERROR).should('be.visible').should('have.text', userMessages.ComfirmPasswordErrorMessage);
        })





    })



})

