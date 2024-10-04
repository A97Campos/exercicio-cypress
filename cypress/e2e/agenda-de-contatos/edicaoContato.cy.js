/// <reference types="cypress" />

describe('Teste para editar um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Preencher e salvar a edicao', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('testando edição')
        cy.get('.alterar').click()
    })
})