it("Scenario of page moving", () => {
  cy.visit("http://localhost:3000/section33/33-06-cypress-e2e-test");
  cy.get("button").click();
  cy.get("div").contains("Let's play with IU!");
});
