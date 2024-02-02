import { faker } from '@faker-js/faker'
import '../../../support/api/usuario/index'

let firstName = faker.person.firstName();
let email = faker.internet.email();
let emailTeste = faker.internet.email();
describe('edição de usuario API', () => {

    it('teste de api put ', () => {

        let userId;
        cy.registroUsuariobyApi(firstName, emailTeste, 'teste123', 'true')
            .then(response => {
                expect(response.status).to.eq(201);
                userId = response.body._id;
                
                cy.editarUsuariobyApi(userId, firstName, email, 'teste@123', 'true')
                    .then(response => {
                        expect(response.status).to.eq(200);
                        console.log(response.status + 'edit')
                        expect(response.body.message).to.eq("Registro alterado com sucesso");

                    })

            })




    })
})