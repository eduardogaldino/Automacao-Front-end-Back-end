import '../../../support/e2e/compras/index'
import '../../../support/e2e/compras/compra_locators'
import { faker } from '@faker-js/faker'
import '../../../support/e2e/cadastroUsuario/cadastro_locators'
import '../../../support/e2e/cadastroUsuario/index'
import '../../../support/e2e/login/index'


let firstName = faker.person.firstName();
let lastName = faker.person.firstName();
let email = faker.internet.email();
let companyName = faker.string.alphanumeric(10);
let password = faker.string.alphanumeric(10);
let endereco1 = faker.string.alpha(20);
let endereco2 = faker.string.alpha(20);

const day = Math.floor(Math.random() * 31) + 1;
const month = Math.floor(Math.random() * 12) + 1;
const year = Math.floor(Math.random() * (2024 - 1914 + 1)) + 1914;
const years = year.toString();

describe('Teste de realização de compra ', () => {

    
    beforeEach(() => {
        cy.visit('/');
        cy.clickOnRegistrationButton();
        cy.userRegister(firstName, lastName, day, month, years, email, companyName, password, password);
        cy.userLogin(email, password);

    })
    context('Validando compra com sucesso', () => {
        it('compra com sucesso', () => {
            cy.compra('Angola', 'Other', 'Luanda', endereco1, endereco2, '12323422', '11111111', '22222222');

        })

    })

})
