/// <reference types='Cypress'/>
import { data } from "../../fixtures/we/test-data.json";
import {
  searchPage,
  findAStorePopUp,
  productPage,
} from "../../locators/we/pip.json";

describe("wsi ship to store ", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  before(() => {
    cy.visit(data.brandURL);
    cy.get(searchPage.searchBox).type(data.bopis.skuNo);
    cy.get(searchPage.searchBox).submit();
  });

  it('Verify the "pick this Store" link when product is not available ', () => {
    cy.viewport(1280, 800);
    cy.wait(5000);
    cy.get("body")
      .find(".stickyOverlayCloseButton")
      .its("length")
      .then((res) => {
        if (res > 0) {
          cy.get(".stickyOverlayCloseButton").click();
        }
      });
    cy.get(productPage.bopisChangeStoreLink).click();
    cy.get(findAStorePopUp.findAStorePopupTxt).should(
      "have.text",
      data.findAStorePopUpData.findAStoreTxt
    );
    cy.get(findAStorePopUp.zipCityStTxtBox).click();
    cy.get(findAStorePopUp.zipCityStTxtBox).select(
      data.findAStorePopUpData.cityName
    );
    cy.get(findAStorePopUp.zipCityStTxtBox).select(
      data.findAStorePopUpData.pressEnter
    );
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
