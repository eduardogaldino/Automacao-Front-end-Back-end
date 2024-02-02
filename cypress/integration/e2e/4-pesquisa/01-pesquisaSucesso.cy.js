import '../../../support/e2e/pesquisa/index';
import '../../../support/e2e/pesquisa/pesquisa_locators'



describe('Testes de pesquisa ', () => {
    beforeEach(() => {
        cy.visit('/');

    })
    context('Validando pesquisa com sucesso', () => {
        it('Pesquisa de produto', () => {
            cy.pesquisa('Apple MacBook Pro 13-inch');
        })
    })

})