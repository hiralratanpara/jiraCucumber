/// <reference types='Cypress'/>

import {
  productPage,
  searchPage,
  findAStorePopUp,
} from "../locators/ws/pip.json";
import { data } from "../fixtures/ws/test-data.json";
describe("PB verify bosts change store ", () => {
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

  it("verify the bosts link", () => {
    cy.get(productPage.bostsChangeStoreLink).click();
    cy.get(findAStorePopUp.findAStorePopupTxt).should("be.visible");
  });

  // it("Should check the text of the Bosts i ball ", () => {
  //   cy.get(productPage.shipToStoreToolTip).trigger("mouseover");
  //   cy.get(productPage.toolTipPopup).contains(data.productPageData.toolTipTxt);
  // });

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
});
