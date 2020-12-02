/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import { searchPage, myStore } from "../locators/we/pip.json";

describe("Verify my store ", () => {
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
      cy.wait(1000);
    }
  });

  it("Verify the promotional popup is closed", () => {
    cy.wait(3000);
    cy.get("body")
      .find(".stickyOverlayCloseButton", { timeout: 50000 })
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
    cy.get(searchPage.selectedStoreLink).should("be.visible");
  });
});
