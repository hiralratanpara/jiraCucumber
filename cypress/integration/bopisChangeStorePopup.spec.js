/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import {
  searchPage,
  findAStorePopUp,
  productPage,
} from "../locators/we/pip.json";

describe("wsi ship to store ", () => {
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
    cy.get(searchPage.searchBox).type(data.bopis.skuNo);
    cy.get(searchPage.searchBox).submit();
  });

  it('Verify the "pick this Store" link when product is not available ', () => {
    cy.viewport(1280, 800);
    cy.get(productPage.bopisChangeStoreLink).click();
    cy.get(findAStorePopUp.findAStorePopupTxt).should(
      "have.text",
      data.findAStorePopUpData.findAStoreTxt
    );
    cy.get(findAStorePopUp.zipCityStTxtBox).click();
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.cityName
    );
    /*  cy.get(findAStorePopUp.zipCityStTxtBox).select(
      data.findAStorePopUpData.pressEnter
    );*/
    cy.get(findAStorePopUp.searchBtn).click();
    cy.get(findAStorePopUp.storeSearchMsg).should(
      "have.text",
      data.findAStorePopUpData.storeSearchMsgTxt
    );
    cy.get(findAStorePopUp.selectMilesBox).focus();
    cy.get(findAStorePopUp.selectMilesBox).select("200");
    cy.get(findAStorePopUp.searchBtn).click();
    cy.get(findAStorePopUp.storeSearchMsg).should(
      "have.text",
      "This product is not available in any stores within 200 miles."
    );
  });
});
