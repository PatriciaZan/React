describe("Testando a lista interativa", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/modulo-oito");
    });

    it("Deve acessar a lista interativa do modulo 8", () => {
        cy.visit("http://localhost:5173/modulo-oito");
    });

    it("Deve aparecer a informação 'Não há dados' se não houver tarefas cadastradas", () => {
        cy.get(`[data-testid="sem-dados"]`).should("be.visible");
    });

    it("Não deve ser possível adicionar tarefas se o input estiver vasio", () => {
        cy.get(`[data-testid="input-tarefa"]`).should("be.empty");
        cy.get(`[data-testid="adicionar-tarefa"]`).should("be.disabled");
    });

    it("Deve ser possivel add tarefas se o input não estiver vasio", () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).should("not.be.disabled");
    });

    it("Ao adicionar uma tarefa deve aparecer na lista de tarefas da tabela", () => {
        cy.get(`[data-testid="sem-dados"]`).should("be.visible");
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();

        cy.get(`[data-testid="sem-dados"]`).should("not.exist");
        cy.get(`[data-testid="texto-tarefa"]`)
            .eq(0)
            .should("contain", "Tarefa 1");

        cy.get(`[data-testid="status-tarefas"]`)
            .eq(0)
            .should("contain", "Não finalizada");
    });

    it("Deve ser possivél remover uam tarefa", () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 2");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();

        cy.get(`[data-testid="remover-tarefa"]`).eq(0).click();

        cy.get(`[data-testid="texto-tarefa"]`).should(
            "not.contain",
            "Tarefa 1"
        );
    });

    it('Deve ser possivel marcar uma tarefa como "finalizada"', () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="mudar-status"]`).eq(0).click();

        cy.get(`[data-testid="status-tarefas"]`)
            .eq(0)
            .should("contain", "Finalizada");
        cy.get(`[data-testid="icone-finalizada"]`).eq(0).should("be.visible");
    });

    it('Deve ser posivel marca uma tarefa como "não finalizada"', () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="mudar-status"]`).eq(0).click();

        cy.get(`[data-testid="status-tarefas"]`)
            .eq(0)
            .should("contain", "Finalizada");

        cy.get(`[data-testid="mudar-status"]`).eq(0).click();
        cy.get(`[data-testid="status-tarefas"]`)
            .eq(0)
            .should("contain", "Não finalizada");
        cy.get(`[data-testid="icone-nao-finalizada"]`)
            .eq(0)
            .should("be.visible");
    });

    it("deve ser possivel filtrar as tarefas finalizadas", () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 2");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();

        cy.get(`[data-testid="mudar-status"]`).eq(0).click();
        cy.get(`[data-testid="filtro-finalizadas"]`).click();

        cy.get(`[data-testid="status-tarefas"]`).each(($status) => {
            cy.wrap($status).should("contain", "Finalizada");
        });
        cy.get(`[data-testid="label-filtro"]`).should(
            "contain",
            "Visualizando: Tarefas finalizadas"
        );
    });

    it("deve ser possivel filtrar as tarefas não finalizadas", () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 2");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();

        cy.get(`[data-testid="mudar-status"]`).eq(0).click();
        cy.get(`[data-testid="filtro-nao-finalizadas"]`).click();

        cy.get(`[data-testid="status-tarefas"]`).each(($status) => {
            cy.wrap($status).should("contain", "Não Finalizada");
        });
        cy.get(`[data-testid="label-filtro"]`).should(
            "contain",
            "Visualizando: Tarefas não finalizadas"
        );
    });

    it("deve ser possivel filtrar todadas as tarefas", () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 2");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();

        cy.get(`[data-testid="mudar-status"]`).eq(0).click();
        cy.get(`[data-testid="filtro-todas"]`).click();

        cy.get(`[data-testid="label-filtro"]`).should(
            "contain",
            "Visualizando: Todas tarefas"
        );

        cy.get(`[data-testid="status-tarefas"]`).should("have.length", 2);
    });
});
