/// <reference types='Cypress'/>

import { category } from "../locators/we/shop.json";

describe("WE Verify Shop Page ", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  before(() => {
    // console.log(Cypress.env(Cypress.env("brand")));

    // cy.visit("https://regression.westelm.com/", {
    //   auth: {
    //     username: "ptqaenv",
    //     password: "ta8PoLe",
    //   },
    // });
    var region = Cypress.env("region");
    var urls = Cypress.env(region);
    var brand = Cypress.env("brand");
    var url = urls[brand];

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
  });
  it("should display the product related to material selected valvet", () => {
    cy.get(category.superCat).click();
    cy.get(category.leftMenu).click({ force: true });
    if (cy.get(category.faucetValvetCheckBox).click()) {
      cy.get(category.firstSofaShown).should("be.visible");
    }
  });

  it("Verify the promotional popup is closed", () => {
    cy.get("body")
      .find(".stickyOverlayCloseButton")
      .its("length")
      .then((res) => {
        if (res > 0) {
          cy.get(".stickyOverlayCloseButton").click();
        }
      });
  });
});
