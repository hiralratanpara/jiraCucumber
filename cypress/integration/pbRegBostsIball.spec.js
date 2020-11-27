/// <reference types='Cypress'/>

import { productPage, searchPage } from "../locators/ws/pip.json";
import { data } from "../fixtures/ws/test-data.json";
describe("PB bosts iball", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  before(() => {
    // console.log(Cypress.env(Cypress.env("brand")));
    // //cy.visit(Cypress.env("brand"));
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
  it("Should search SKU", () => {
    //cy.get("form[name=nav-search-form]").type("4212770").submit();
    cy.get(searchPage.searchBox).type(data.homePageData.skuNo);
    cy.get(searchPage.searchBox).submit();
  });

  it("Should check the header of the Bosts i ball ", () => {
    cy.get(productPage.shipToStoreToolTip).trigger("mouseover");
    cy.get(productPage.toolTipPopup).contains(
      data.productPageData.toolTipHeader
    );
  });

  it("Should check the text of the Bosts i ball ", () => {
    cy.get(productPage.shipToStoreToolTip).trigger("mouseover");
    cy.get(productPage.toolTipPopup).contains(data.productPageData.toolTipTxt);
  });
});
