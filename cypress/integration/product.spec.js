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

  it("Verify the add a photo", () => {
    cy.get(productPage.addPhoto).should("be.visible");
    cy.get(productPage.addPhoto).click();
    cy.get(productPage.selectYourContent).should(
      "have.text",
      "Select Your Content"
    );
    cy.get(productPage.addPhotoPopupCloseBtn).click();
  });

  it("Verify the details n dimensions", () => {
    cy.get(productPage.detailsAndDimension).should("be.visible");
    cy.get(productPage.detailsAndDimension).click();
    cy.get(productPage.detailedSpecifications).should(
      "have.text",
      data.productPageData.detailedSpecificationTxt
    );
  });

  it("Verify the shipping n returns", () => {
    cy.get(productPage.shippingAndReturns).should("be.visible");
    cy.get(productPage.shippingAndReturns).click();
    cy.get(productPage.shippingOptions).should(
      "have.text",
      data.productPageData.shippingOptText
    );
  });

  it("Verify the overview", () => {
    cy.get(productPage.overview).should("be.visible");
    cy.get(productPage.overview).click();
    cy.get(productPage.keyDetails).should(
      "have.text",
      data.productPageData.keyDetailsTxt
    );
  });
});
