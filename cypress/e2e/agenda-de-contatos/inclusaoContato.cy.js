/// <reference types="cypress" />

describe('Teste para incluir um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o formulário e salvar', () => {
        cy.get('[type="text"]').type('Andrew Campos')
        cy.get('[type="email"]').type('teste@teste.com')
        cy.get('[type="tel"]').type('21912345678')
        cy.get('.adicionar').first().click()
    })
})