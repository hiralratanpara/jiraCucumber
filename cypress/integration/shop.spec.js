/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import { searchPage, productPage, pipPage } from "../locators/we/pip.json";
import { category } from "../locators/we/shop.json";
import { breadcrumbs } from "../locators/we/pip.json";

describe("WE Test Shop Page ", () => {
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
  it("Should search SKU", () => {
    cy.get(searchPage.searchBox).type(data.homePageData.skuNo).submit();
  });

  it("Should load the sku", () => {
    cy.get(pipPage.productLabel).get("h1").contains(data.homePageData.skuName);
  });

  it("Should display the correct swatch", () => {
    cy.get(pipPage.swatchLabel).should(
      "have.text",
      data.homePageData.defaultSwatch
    );
  });

  it("should display visual navigation", () => {
    cy.get(category.superCat).click();
    cy.get(category.leftMenu).click();

    cy.get("body")
      .find(
        "#join-email-campaign > .shader > .modal-scroll > .modal_component > .btnClose"
      )
      .its("length")
      .then((res) => {
        if (res > 0) {
          cy.get(
            "#join-email-campaign > .shader > .modal-scroll > .modal_component > .btnClose"
          ).click();
        }
      });
    cy.wait(5000);
    cy.get(category.visualNav).should("be.visible");
    });
    it("should display the shop grid", () => {
     cy.get(category.shopGrid).should("be.visible");
    });

    it("should display the breadcrumb", () => {
      cy.get("#breadcrumbs").should("exist");
    });

    it("should display the correct values in the breadcrumb", () => {
      cy.get(breadcrumbs.firstBreadcrumb).should(
        "have.text",
        data.breadcrumb.firstBreadcrumbVal
      );
      cy.get(breadcrumbs.secondBreadcrumb).should(
        "have.text",
        data.breadcrumb.secondBreadcrumbVal
      );
      cy.get(breadcrumbs.thirdBreadcrumb).should(
        "have.text",
        data.breadcrumb.thirdBreadcrumbVal
      );
    });

    it("should display the correct values in the sub-cat-aside", () => {
      cy.get(category.firstSubcataside).should(
        "have.text",
        data.subCatAside.firstSubcataside
      );
      cy.get(category.secondSubcataside).should(
        "have.text",
        data.subCatAside.secondSubcataside
      );
      cy.get(category.thirdSubcataside).should(
        "have.text",
        data.subCatAside.thirdSubcataside
      );
      cy.get(category.fourthSubcataside).should(
        "have.text",
        data.subCatAside.fourthSubcataside
      );
      cy.get(category.fifthaSubcataside).should(
        "have.text",
        data.subCatAside.fifthaSubcataside
      );
      cy.get(category.sixsthSubcataside).should(
        "have.text",
        data.subCatAside.sixsthSubcataside
      );
     cy.get(category.seventhSubcataside).should(
       "have.text",
       data.subCatAside.seventhSubcataside
     );
     cy.get(category.eightSubcataside).should(
       "have.text",
       data.subCatAside.eightSubcataside
     );
     cy.get(category.ninthSubcataside).should(
       "have.text",
       data.subCatAside.ninthSubcataside
     );
    });

   it("should display 'filter by' in left menu", () => {
    cy.get(category.visualNav).should("be.visible");
   });
});
