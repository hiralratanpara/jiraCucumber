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
    // cy.visit(data.brandURL);
    // cy.viewport(1280, 800);
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

  // it('Verify the "pick this Store" link when product is not available ', () => {
  //   //cy.viewport(1280, 800);
  //   cy.wait(5000);
  //   cy.get("body")
  //     .find(".stickyOverlayCloseButton")
  //     .its("length")
  //     .then((res) => {
  //       if (res > 0) {
  //         cy.get(".stickyOverlayCloseButton").click();
  //       }
  //     });
  // });

  it("Should search SKU", () => {
    cy.get(searchPage.searchBox).type(data.homePageData.skuNo);
    cy.get(searchPage.searchBox).submit();
  });

  it("Verify the popup displays after clicking on bopis ", () => {
    cy.get(productPage.bopisChangeStoreLink).click();
    cy.get(findAStorePopUp.findAStorePopupTxt).should(
      "have.text",
      data.findAStorePopUpData.findAStoreTxt
    );
  });

  it("Verify the store selector search the store within 25 miles", () => {
    cy.get(findAStorePopUp.zipCityStTxtBox).click();
    //cy.get(findAStorePopUp.zipCityStTxtBox).type("nyc");
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.cityName
    );
    cy.get(findAStorePopUp.zipCityStTxtBox).type(
      data.findAStorePopUpData.pressEnter
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
    cy.get(findAStorePopUp.findAndPickStoreSearch).should(
      "have.text",
      data.findAStorePopUpData.findAStoreTxt
    );
    //cy.get(".initialStoreListLabel").should("have.text", "Find & Pick a Store");
  });
});
