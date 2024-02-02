import comprasloc from "./compra_locators";



Cypress.Commands.add('compra', (coutry, state, city, address1, address2, zipCode, phoneNumber, faxNumber) => {
    cy.clickElementComputers();
    cy.clickElementNotebooks();
    cy.clickElementProductNotebook();
    cy.wait(3000);
    cy.clickButtonAddToCard();
    cy.clickElementShoppingToCart();
    cy.selectTermOfService();
    cy.clickButtonCheckout();
    cy.selectCoutry(coutry);
    cy.selectState(state);
    cy.fillCity(city);
    cy.fillAddress1(address1);
    cy.fillAddress2(address2);
    cy.fillZipCode(zipCode);
    cy.filPhoneNumber(phoneNumber);
    cy.fillFaxNumber(faxNumber);
    cy.clickButtonContinue();
    cy.selectShipping();
    cy.clickButtonCotinueShipping();
    cy.clickMoneyOrder();
    cy.clickButtonContinuePayment();
    cy.clickButtonContinuePayInformation();
    cy.clickButtonConfirmOrder();
    cy.wait(3000);
    cy.clickButtonContinuePurchasseEndScreen();
})

Cypress.Commands.add('clickElementComputers', () => {
    cy.get(comprasloc.PURCHASE_FORM.ELEMENT_OPEN_COMPUTERS).click();
    cy.title().should('contain', 'Computers');
})

Cypress.Commands.add('clickElementNotebooks', () => {
    cy.get(comprasloc.PURCHASE_FORM.ELEMENT_OPEN_NOTEBOOKS).click();
    cy.title().should('contain', 'Notebooks');
})

Cypress.Commands.add('clickElementProductNotebook', () => {
    cy.get(comprasloc.PURCHASE_FORM.APPLE_MACBOOK_PRO_13).click();
})

Cypress.Commands.add('clickButtonAddToCard', () => {
    cy.get(comprasloc.PURCHASE_FORM.BUTTON_ADD_TO_CART).should('be.visible').should('be.enabled').click();
})

Cypress.Commands.add('clickElementShoppingToCart', () => {
    cy.get(comprasloc.PURCHASE_FORM.ELEMENT_SHOPPING_TO_CART).click();
})

Cypress.Commands.add('selectTermOfService', () => {
    cy.get(comprasloc.PURCHASE_FORM.TERM_OF_SERVICE).click().should('be.checked');
})

Cypress.Commands.add('clickButtonCheckout', () => {
    cy.get(comprasloc.PURCHASE_FORM.BUTTON_CHECKOUT).should('be.visible').click();
})

Cypress.Commands.add('selectCoutry', (coutry) => {
    cy.title().should('contain', 'Checkout');
    cy.get(comprasloc.PURCHASE_FORM.SELECT_COUTRY).select(coutry).contains(coutry);
})

Cypress.Commands.add('selectState', (state) => {
    cy.get(comprasloc.PURCHASE_FORM.SELECT_STATE).select(state)//.should('have.value', state);
})

Cypress.Commands.add('fillCity', (city) => {
    cy.get(comprasloc.PURCHASE_FORM.CITY).type(city);
})

Cypress.Commands.add('fillAddress1', (address1) => {
    cy.get(comprasloc.PURCHASE_FORM.ADDRESS_1).type(address1);
})

Cypress.Commands.add('fillAddress2', (address2) => {
    cy.get(comprasloc.PURCHASE_FORM.ADDRESS_2).type(address2);
})

Cypress.Commands.add('fillZipCode', (zipCode) => {
    cy.get(comprasloc.PURCHASE_FORM.ZIP_CODE).type(zipCode);
})

Cypress.Commands.add('filPhoneNumber', (phoneNumber) => {
    cy.get(comprasloc.PURCHASE_FORM.PHONE_NUMBER).type(phoneNumber);
})

Cypress.Commands.add('fillFaxNumber', (faxNumber) => {
    cy.get(comprasloc.PURCHASE_FORM.FAX_NUMBER).type(faxNumber);
})

Cypress.Commands.add('clickButtonContinue', () => {
    cy.get(comprasloc.PURCHASE_FORM.BUTTON_CONTINUE).click();
})

Cypress.Commands.add('selectShipping', () => {
    cy.get(comprasloc.SHIPPING_METHOD.SELECT_SHIPPING).click();
})

Cypress.Commands.add('clickButtonCotinueShipping',()  => {
    cy.get(comprasloc.SHIPPING_METHOD.BUTTON_CONTINUE).click();
})

Cypress.Commands.add('clickMoneyOrder', ()  => {
    cy.get(comprasloc.PAYMENT_METHOD.MONEY_ORDER).click();
})

Cypress.Commands.add('clickButtonContinuePayment', ()  => {
    cy.get(comprasloc.PAYMENT_METHOD.BUTTON_CONTINUE).click();
})

Cypress.Commands.add('clickButtonContinuePayInformation', () => {
    cy.get(comprasloc.PAYMENT_INFORMATION.BUTTON_CONTINUE).click();
})

Cypress.Commands.add('clickButtonConfirmOrder', () => {
    cy.get(comprasloc.CONFIRM_ORDER.BUTTON_CONFIRM_ORDER).click();
})

Cypress.Commands.add('clickButtonContinuePurchasseEndScreen', () => {
    cy.get(comprasloc.PURCHASE_END_SCREEN.BUTTON_CONTINUE).should('be.visible').click();
    cy.get('.topic-block-title > h2').should('be.visible'); 
})