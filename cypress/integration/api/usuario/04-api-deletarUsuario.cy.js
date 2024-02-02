import { faker } from '@faker-js/faker'
import '../../../support/api/usuario/index'

let emailTeste = faker.internet.email();
let firstName = faker.person.firstName();



describe('exclusao de usuario API',() => {
    it('teste de api delete ', () => {

        let userId;
        cy.registroUsuariobyApi(firstName, emailTeste, 'teste123', 'true')
            .then(response => {
                expect(response.status).to.eq(201);
                userId = response.body._id;
    
                cy.excluirUsuariobyApi(userId)
                    .then(response => {
                        expect(response.status).to.eq(200);
                        expect(response.body.message).to.eql("Registro excluído com sucesso");
                    })
    
            })
    
    
    
    })
})

