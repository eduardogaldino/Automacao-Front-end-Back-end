import pesquisaloc from "./pesquisa_locators";
import comprasloc from "../compras/compra_locators";


Cypress.Commands.add('pesquisa', (product) => {
    cy.fillResearchField(product);
    cy.clickButtonSearch();
})



Cypress.Commands.add('fillResearchField', (product) => {
    cy.title()
    cy.get(pesquisaloc.PESQUISA_FIELDS.RESEARCH_FIELD).should('be.visible').type(product);
})

Cypress.Commands.add('clickButtonSearch', () => {
    cy.get(pesquisaloc.PESQUISA_FIELDS.BUTTON_SEARCH).should('be.visible').click();
    cy.get(comprasloc.PURCHASE_FORM.APPLE_MACBOOK_PRO_13).should('be.visible');
})    