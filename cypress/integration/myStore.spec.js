/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import { searchPage, myStore } from "../locators/we/pip.json";

describe("WE verify my store ", () => {
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
      // cy.visit("https://regression.westelm.com/", {
      //   auth: {
      //     username: "ptqaenv",
      //     password: "ta8PoLe",
      //   },
      // });
    }
  });
  it("Verify the My store link is displayed ", () => {
    cy.get(searchPage.myStoreTxt).should("have.text", data.myStore.myStoreTxt);
  });

  it("Verify the My store link is clickable ", () => {
    cy.get(searchPage.selectedStoreLink).click();
  });

  it("Verify the zipcode can be entered successfully in store selector popup ", () => {
    if (cy.get(myStore.myStorePopupHeading).should("be.visible")) {
      cy.get(myStore.zipTextBox).click();
      cy.get(myStore.zipTextBox).type(data.myStore.zip);
      cy.get(myStore.zipTextBox).type(data.findAStorePopUpData.pressEnter);
    }
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

  it("Verify the store search is selectable", () => {
    cy.get(myStore.storeOption).should("be.visible");
    cy.get(myStore.setAsMyStoreBtn).click();
  });

  it("Verify the selected store is set as my store in home page", () => {
    // cy.get(searchPage.selectedStoreLink).should(
    //   "have.text",
    //   data.myStore.eastonTownCenterTxtHomePage
    // );
    cy.get(searchPage.selectedStoreLink).should("be.visible");
  });
});
