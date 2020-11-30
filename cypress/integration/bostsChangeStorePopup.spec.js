/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import {
  searchPage,
  findAStorePopUp,
  productPage,
} from "../locators/we/pip.json";

describe("BOSTS Search Validation", () => {
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
    cy.get(searchPage.searchBox).type(data.homePageData.skuNo).submit();
  });

  it("Choose bopis and open up a store selector", () => {
    cy.get("#pickUpInStore0").click();
  });
  it("Search for a city within 25 miles were product is available for pickup", () => {
    cy.get("#addressText", { timeout: 1000 }).click();
    cy.get("#addressText").type("Sacramento, CA, USA");
    cy.get("#addressText").type("{enter}", { release: true });
    cy.get(findAStorePopUp.storeSearchMsg).should(
      "have.text",
      data.findAStorePopUpData.storeSearchMsgTxt
    );
  });

  it("Verify the store selector search the store within 200 miles", () => {
    cy.get(findAStorePopUp.selectMilesBox).focus();
    cy.get(findAStorePopUp.selectMilesBox).select("200");
    cy.get(findAStorePopUp.searchBtn).click();
    cy.get(findAStorePopUp.storeSearchMsg).should(
      "have.text",
      data.findAStorePopUpData.storeSearch200MilesMsgTxt
    );
    //cy.get(".initialStoreListLabel").should("have.text", "Find & Pick a Store");
  });

  it("select a store from the options available for pick up", () => {
    cy.get(findAStorePopUp.pickThisStoreBtn).click();
  });

  it("same store is displayed which selected by clicking pick this store", () => {
    cy.get(productPage.bopisStoreSelectedName).should(
      "have.text",
      "Galleria At Roseville"
    );
    cy.get(productPage.seeStoreDetailsLinkTxt).should(
      "have.text",
      "See Store Details"
    );
  });

  it("bopis see store details link", () => {
    cy.get(productPage.bopisStoreSelectedName).should(
      "have.text",
      "Galleria At Roseville"
    );
  });

  it("clicking on see store details link", () => {
    cy.get(productPage.seeStoreDetailsLinkTxt).click();
    // cy.get('a.shipToStoreDetails hide-detail ship-to-store-selector').click();
    // cy.get(productPage.seeStoreDetailsLinkTxt).should('have.text', 'Hide Store Details');
  });

  it("close the store search popup", () => {
    cy.get(findAStorePopUp.closeBtn).click();
  });
});
