/// <reference types='Cypress'/>
import { data } from "../fixtures/ws/test-data.json";
import {
  searchPage,
  findAStorePopUp,
  productPage,
} from "../locators/ws/pip.json";

describe("PB verify the bopis change store link ", () => {
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
  });

  it("Verify the store selector search the store within 25 miles", () => {
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
  });

  it("Verify the store selector search the store within 200 miles", () => {
    cy.get(findAStorePopUp.selectMilesBox).focus();
    cy.get(findAStorePopUp.selectMilesBox).select("200");
    cy.get(findAStorePopUp.searchBtn).click();
    cy.get(findAStorePopUp.findAndPickStoreSearch).should(
      "have.text",
      data.findAStorePopUpData.findAStoreTxt
    );
  });
});
