/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
//import { searchPage, productPage, pipPage } from "../locators/ws/pip.json";
import { category } from "../locators/we/shop.json";
import { breadcrumbs } from "../locators/we/pip.json";

describe("WE Test Shop Page ", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  before(() => {
    //cy.viewport(Cypress.env("viewport"));
    // console.log(Cypress.env(Cypress.env("brand")));
    // cy.visit(Cypress.env("brand"));
    // cy.visit("https://regression.potterybarn.com/", {
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
  it("should display the hamburger on the mobile view ", () => {
    cy.get("#search-field").click();
    cy.get("#search-field").type("abcvcvc");
    cy.get("#search > button > svg").click();

    //cy.get(".open-shop > .header-icon-wrapper > svg").click();
    //cy.get(".open-shop > .header-icon-wrapper").scrollTo("top");
    //cy.get(".open-shop > .header-icon-wrapper").click();
    //cy.get(".open-shop > .header-icon-wrapper > svg").scrollTo("top");
    //cy.get(".open-shop > .header-icon-wrapper > svg").click();
    // cy.get(".open-shop > .header-icon-wrapper").click();
    // cy.get(".open-shop > .header-icon-wrapper").should("be.visible");
    // cy.get(".open-shop > .header-icon-wrapper").click();
  });

  // it("Click on the hamburger ", () => {
  //   cy.get(".open-shop > .header-icon-wrapper").click();
  // });
});
