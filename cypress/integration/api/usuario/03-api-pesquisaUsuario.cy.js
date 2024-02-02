import { faker } from '@faker-js/faker'
import '../../../support/api/usuario/index'

let emailTeste = faker.internet.email();
let firstName = faker.person.firstName();

describe('pesquisa de usuario Api', () => {
    
    it('teste de api get', () => {

        let userId;
        cy.registroUsuariobyApi(firstName, emailTeste, 'teste123', 'true')
            .then(response => {
                expect(response.status).to.eq(201);
                userId = response.body._id;

                cy.pesquisaUsuariobyApi(userId)
                    .then(response => {
                        expect(response.status).to.eq(200);
                        expect(response.body).to.have.property('nome');
                        expect(response.body).to.have.property('email');
                        expect(response.body).to.have.property('password');
                        expect(response.body).to.have.property('administrador');
                        expect(response.body).to.have.property('_id');

                    })

            })

    })

})


