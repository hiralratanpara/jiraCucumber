/// <reference types='Cypress'/>

import {
  productPage,
  searchPage,
  findAStorePopUp,
} from "../locators/we/pip.json";
import { data } from "../fixtures/we/test-data.json";
describe("Verify bosts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  var region = Cypress.env("region");
  var urls = Cypress.env(region);
  var brand = Cypress.env("brand");
  var url = urls[brand];

  before(() => {
    // var region = Cypress.env("region");
    // var urls = Cypress.env(region);
    // var brand = Cypress.env("brand");
    // var url = urls[brand];

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
    if (url === "https://westelm.com") {
      cy.get(searchPage.searchBox).type(data.homePageData.skuNo);
      cy.get(searchPage.searchBox).submit();
    } else {
      cy.get("#search-field").type(data.bopis.skuNo2);
      cy.get(".search-button").click();
    }
  });

  it("Verify the promotional popup is closed", () => {
    cy.wait(5000);
    cy.get("body")
      .find(".stickyOverlayCloseButton", { timeout: 100000 })
      .its("length")
      .then((res) => {
        if (res > 0) {
          cy.get(".stickyOverlayCloseButton").click();
        }
      });
  });

  it("verify the bosts change store link", () => {
    cy.get(productPage.bostsChangeStoreLink).click();
    cy.get(findAStorePopUp.bostsFindAStorePopupTxt).should("be.visible");
  });

  it("Search for a city within 25 miles were product is available for pickup", () => {
    cy.get(findAStorePopUp.zipCityStTxtBox).click();
    cy.wait(1000);
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.cityName1
    );
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.pressEnter,
      { release: true }
    );
    cy.get(findAStorePopUp.bostsStoreSearchMsg).should("be.visible");
  });

  it("Verify the store selector search the store within 200 miles", () => {
    //cy.get(findAStorePopUp.selectMilesBox).focus();
    cy.get(findAStorePopUp.selectMilesBox).select("200");
    cy.get(findAStorePopUp.bostsSearchBtn).click();
    cy.get(findAStorePopUp.bostsStoreSearchMsg).should("be.visible");
  });

  it("select a store from the options available for ship to store", () => {
    cy.get(findAStorePopUp.shipToThisStore).click();
  });

  it("same store is displayed which selected by clicking ship to this store", () => {
    cy.get(productPage.bostsSeeStoreDetailsLink).should(
      "have.text",
      "See Store Details"
    );
  });

  // it("bosts see store details link", () => {
  //   cy.get(productPage.bostsStoreSelectName).should("be.visible");
  // });

  it("clicking on see store details link", () => {
    cy.get(productPage.bostsSeeStoreDetailsLink).click();
    cy.get(productPage.bostsHideStoreDetailsLink).should(
      "have.text",
      "Hide Store Details"
    );
  });
  it("Clicking on the hide store details", () => {
    cy.get(productPage.bostsHideStoreDetailsLink).click();
  });
});

/* /// <reference types='Cypress'/>

import {
  productPage,
  searchPage,
  findAStorePopUp,
} from "../locators/we/pip.json";
import { data } from "../fixtures/we/test-data.json";
describe("Verify bosts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  before(() => {
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
    cy.get(searchPage.searchBox).type(data.homePageData.skuNo);
    cy.get(searchPage.searchBox).submit();
  });

  it("Verify the promotional popup is closed", () => {
    cy.wait(5000);
    cy.get("body")
      .find(".stickyOverlayCloseButton", { timeout: 100000 })
      .its("length")
      .then((res) => {
        if (res > 0) {
          cy.get(".stickyOverlayCloseButton").click();
        }
      });
  });

  it("verify the bosts change store link", () => {
    cy.get(productPage.bostsChangeStoreLink).click();
    cy.get(findAStorePopUp.bostsFindAStorePopupTxt).should("be.visible");
  });

  it("Search for a city within 25 miles were product is available for pickup", () => {
    cy.get(findAStorePopUp.zipCityStTxtBox).click();
    cy.wait(1000);
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.cityName1
    );
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.pressEnter,
      { release: true }
    );
    cy.get(findAStorePopUp.bostsStoreSearchMsg).should("be.visible");
  });

  it("Verify the store selector search the store within 200 miles", () => {
    //cy.get(findAStorePopUp.selectMilesBox).focus();
    cy.get(findAStorePopUp.selectMilesBox).select("200");
    cy.get(findAStorePopUp.bostsSearchBtn).click();
    cy.get(findAStorePopUp.bostsStoreSearchMsg).should("be.visible");
  });

  it("select a store from the options available for ship to store", () => {
    cy.get(findAStorePopUp.shipToThisStore).click();
  });

  it("same store is displayed which selected by clicking ship to this store", () => {
    cy.get(productPage.bostsSeeStoreDetailsLink).should(
      "have.text",
      "See Store Details"
    );
  });

  // it("bosts see store details link", () => {
  //   cy.get(productPage.bostsStoreSelectName).should("be.visible");
  // });

  it("clicking on see store details link", () => {
    cy.get(productPage.bostsSeeStoreDetailsLink).click();
    cy.get(productPage.bostsHideStoreDetailsLink).should(
      "have.text",
      "Hide Store Details"
    );
  });
  it("Clicking on the hide store details", () => {
    cy.get(productPage.bostsHideStoreDetailsLink).click();
  });
});
 */
