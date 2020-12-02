/// <reference types='Cypress'/>
import {
  findAStorePopUp,
  productPage,
  searchPage,
} from "../locators/we/pip.json";
import { data } from "../fixtures/we/test-data.json";
describe("WE verify the bopis ", () => {
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

    cy.wait(5000);
    cy.get("body")
      .find(".stickyOverlayCloseButton")
      .its("length")
      .then((res) => {
        if (res > 0) {
          cy.get(".stickyOverlayCloseButton").click();
        }
      });
  });
  // it('Verify the BOSTS link in WS', () => {
  //     //careerPage.carrerInfo();
  //     //cy.viewport(1280, 800);
  //     wsiSelectStorePage.bostsChangeStoreNotAvailable();
  // });

  it("Should search SKU", () => {
    cy.get(searchPage.searchBox).type(data.bopis.skuNo2);
    cy.get(searchPage.searchBox).submit();
  });

  it("Choose bopis and open up a store selector", () => {
    //cy.get("#pickUpInStore0").click();
    cy.get(productPage.bopis).click();
    cy.wait(1000);
    cy.get(findAStorePopUp.bopisFindAStorePopupTxt).should("be.visible");
  });
  it("Search for a city within 25 miles were product is available for pickup", () => {
    cy.get(findAStorePopUp.zipCityStTxtBox).click();
    cy.wait(1000);
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.cityName
    );
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.pressEnter,
      { release: true }
    );
    cy.get(findAStorePopUp.bopisStoreSearchMsg).should(
      "have.text",
      data.findAStorePopUpData.bopisNotAvailable25Miles
    );
  });

  it("Verify the store selector search the store within 200 miles", () => {
    cy.get(findAStorePopUp.selectMilesBox).focus();
    cy.get(findAStorePopUp.selectMilesBox).select("200");
    cy.get(findAStorePopUp.bostsSearchBtn).click();
    cy.get(findAStorePopUp.bostsStoreSearchMsg).should(
      "have.text",
      data.findAStorePopUpData.bopisStoreAvailable200Mile
    );
  });

  it("select a store from the options available for pick up", () => {
    cy.get(findAStorePopUp.pickThisStoreBtn).click();
  });

  it("same store is displayed which selected by clicking pick this store", () => {
    cy.get(productPage.bopisStoreSelectedName).should("be.visible");

    cy.get(productPage.seeStoreDetailsLinkTxt).should(
      "have.text",
      data.productPageData.seeStoreDetails
    );
  });

  // it("bopis see store details link", () => {
  //   cy.get(productPage.bopisStoreSelectedName).should(
  //     "have.text",
  //     data.findAStorePopUpData.storeLocation
  //   );
  // });

  it("clicking on see store details link", () => {
    cy.get(productPage.bopisStoreSelectedName).should("be.visible");

    cy.get(productPage.seeStoreDetailsLinkTxt).click();
  });

  it("clicking on hide store details link", () => {
    cy.wait(1000);
    cy.get(productPage.hideStoreDetails).should(
      "have.text",
      data.productPageData.hideStoreDetails
    );
    cy.get(productPage.hideStoreDetails).click();
  });

  it("verify the bopis change store link", () => {
    //if (cy.get(productPage.bostsNotAvailableNearTxt).should("be.visible")) {
    // cy.get(productPage.bosts).click();
    // cy.wait(1000);
    // cy.get(findAStorePopUp.bostsFindAStorePopupTxt).should("be.visible");
    cy.get(productPage.bopisChangeStoreLink).click();
  });

  it("Search for a city within 25 miles were product is available for pickup", () => {
    cy.get(findAStorePopUp.zipCityStTxtBox).click();
    cy.wait(1000);
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.cityName
    );
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.pressEnter,
      { release: true }
    );
    cy.get(findAStorePopUp.bostsStoreSearchMsg).should(
      "have.text",
      data.findAStorePopUpData.bopisNotAvailable25Miles
    );
  });

  it("close the store search popup", () => {
    cy.get(findAStorePopUp.closeBtn).click();
  });
});
