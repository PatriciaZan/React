describe("Acesso ao site Cypress", () => {
    it("Deve acessar o site de exemplo do cypress", () => {
        cy.visit("https://example.cypress.io");
    });
    it("Deve acessar a pagina de Actions", () => {
        cy.visit("https://example.cypress.io");
        cy.contains("focus").click();
        cy.url().should("include", "/commands/actions");
    });
});
