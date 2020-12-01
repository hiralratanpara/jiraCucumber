/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import { searchPage, productPage, pipPage } from "../locators/we/pip.json";
import { category } from "../locators/we/shop.json";
import { breadcrumbs } from "../locators/we/pip.json";

describe("WE Test Shop Page ", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  before(() => {
    const region = Cypress.env("region");
    const urls = Cypress.env(region);
    const brand = Cypress.env("brand");
    const url = urls[brand];

    if (region.toUpperCase() === "PROD") {
      cy.visit(url);
    } else {
      cy.visit(url, {
        auth: {
          username: Cypress.env("username"),
          password: Cypress.env("password"),
        },
      });
    }

    cy.get("body")
      .find(".stickyOverlayCloseButton", { timeout: 10000 })
      .its("length")
      .then((res) => {
        if (res > 0) {
          cy.get(".stickyOverlayCloseButton").click();
        }
      });
  });
  it("Should search SKU", () => {
    cy.get(searchPage.searchBox).type(data.homePageData.skuNo).submit();
  });
});
