/// <reference types="cypress" />

describe('Testes de remoção de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve clicar no botão de excluir', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})