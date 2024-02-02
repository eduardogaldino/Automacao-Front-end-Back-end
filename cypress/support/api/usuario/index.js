Cypress.Commands.add('registroUsuariobyApi', (nome, email, password, administrador) => {
    cy.request({
        method: 'POST',
        url: `https://serverest.dev/` + '/usuarios',
        body: {
            nome: nome,
            email: email,
            password: password,
            administrador: administrador
        }

    })
})


Cypress.Commands.add('editarUsuariobyApi', (userId, nome, email, password, administrador) => {
    
    
    cy.request({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/` + userId,
        body: {
            nome: nome,
            email: email,
            password: password,
            administrador: administrador

        }
    })
})


Cypress.Commands.add('pesquisaUsuariobyApi', (userId) => {
    cy.request({
        method: 'GET',
        url: `https://serverest.dev/usuarios/`+ userId,
    })
})


Cypress.Commands.add('excluirUsuariobyApi', (userId) => {
    cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/`+ userId,
    })
})