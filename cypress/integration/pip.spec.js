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
    cy.wait(3000);
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

  // it("Verify the promotional popup is closed", () => {
  //   cy.get("body")
  //     .find(".stickyOverlayCloseButton")
  //     .its("length")
  //     .then((res) => {
  //       if (res > 0) {
  //         cy.get(".stickyOverlayCloseButton").click();
  //       }
  //     });
  // });

  it("Verify the add a photo", () => {
    cy.get(productPage.addPhoto).should("be.visible");
    cy.get(productPage.addPhoto).click();
    cy.wait(2000);
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
