/// <reference types="cypress"/>
import '../../../support/e2e/login/index'
import '../../../support/e2e/cadastroUsuario/index'
import { faker } from '@faker-js/faker'

let firstName = faker.person.firstName();
let lastName = faker.person.firstName();
let email = faker.internet.email();
let companyName = faker.string.alphanumeric(10);
let password = faker.string.alphanumeric(10);
const day = Math.floor(Math.random() * 31) + 1;
const month = Math.floor(Math.random() * 12) + 1;
const year = Math.floor(Math.random() * (2024 - 1914 + 1)) + 1914;
const years = year.toString();

describe('Testes de login ', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.clickOnRegistrationButton();
        cy.userRegister(firstName, lastName, day, month, years, email, companyName, password, password)

    })
    context('Login de Usuario com Sucesso', () => {
        it('login de usuario', () => {
            cy.userLogin(email, password);
            cy.get('.topic-block-title > h2').should('be.visible');
        })

    })

})

