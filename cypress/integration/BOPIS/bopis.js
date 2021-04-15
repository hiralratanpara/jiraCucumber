import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

//test steps
Given("open the west elm website", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit("https://www.westelm.com/");
});

When("user search a product in the search box of home page", () => {
  cy.wait(5000);
  cy.get("body")
    .find(".stickyOverlayCloseButton", { timeout: 50000 })
    .its("length")
    .then((res) => {
      if (res > 0) {
        console.log("closing popup");
        cy.get(".stickyOverlayCloseButton").click();
      }
    });
  cy.get("#search-field").type("2527697");
  cy.get("#btnSearch").click();
});

Then("user should be displayed BOPIS option", () => {
  cy.get(
    "#productSubsetItem1 > .subset-skus > .subset-selection > .subset-attributes > .textual-att > :nth-child(1) > a"
  ).click();
  cy.get(
    "#productSubsetItem1 > .subset-skus > .subset-selection > .subset-pricing > .select-receiving-method > .options-for-receiving > .ship-to-store > .receiving-method-label > .receiving-method-label-text"
  ).should("be.visible");
});
