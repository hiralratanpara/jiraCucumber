/// <reference types='Cypress'/>

import { productPage, searchPage } from "../locators/we/pip.json";
import { data } from "../fixtures/we/test-data.json";
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
    //var brand = Cypress.env(brand);
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

  it("Should check the header of the Bosts i ball ", () => {
    if (url.toUpperCase() === "pb") {
      cy.get(productPage.shipToStoreToolTip).trigger("mouseover");
      cy.get(productPage.toolTipPopup).contains(
        data.productPageData.toolTipHeader
      );
    } else {
      console.log("iball not found");
    }
  });

  it("Should check the text of the Bosts i ball ", () => {
    cy.get(productPage.shipToStoreToolTip).trigger("mouseover");
    cy.get(productPage.toolTipPopup).contains(data.productPageData.toolTipTxt);
  });
});
