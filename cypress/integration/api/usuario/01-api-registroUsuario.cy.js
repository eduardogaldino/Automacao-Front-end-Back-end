import { faker } from '@faker-js/faker'
import '../../../support/api/usuario/index'

let emailTeste = faker.internet.email();
let firstName = faker.person.firstName();

describe('cadastro de usuario API', () => {
    
    it('requisição post ', () => {
        let userId;
        cy.registroUsuariobyApi(firstName, emailTeste, 'teste123', 'true')
            .then(response => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq("Cadastro realizado com sucesso")
                userId = response.body._id;
            })



    })

})