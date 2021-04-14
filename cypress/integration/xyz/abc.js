import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

//test steps
Given("open the west elm website", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit("https://www.westelm.com/");
});

When("user search a product in the search box of home page", () => {
  cy.wait(5000);
  cy.get("body")
    .find(".stickyOverlayCloseButton", { timeout: 50000 })
    .its("length")
    .then((res) => {
      if (res > 0) {
        console.log("closing popup");
        cy.get(".stickyOverlayCloseButton").click();
      }
    });
  cy.get("#search-field").type("7087926");
  cy.get("#btnSearch").click();
});

Then("user should be displayed PIP page", () => {
  cy.get("h1").should("be.visible");
});

When("user select the finish, qty and add to cart", () => {
  cy.get("#primaryGroup_addToCart_0").click();
});

Then("item is added to cart", () => {
  cy.get("#racOverlay > div.overlayTitleBar > h3 > span.racLefthdr").should(
    "be.visible"
  );
  cy.get("#overlayCloseButton").click();
});

// And("select another shade", () => {
//   cy.get(
//     "#productSubsetItem1 > div.subset-skus > div > div.subset-attributes.subsetAttributes > ul.visual-attributes.graphical-att.resetNoneActive > li:nth-child(3) > a > img"
//   ).click();
// });

// And("select another finish", () => {
//   cy.get(":nth-child(2) > a > .swatchThumb").click();
// });

// And("add the qty", () => {
//   cy.get(
//     "#productSubsetItem1 > .subset-skus > .subset-selection > .subset-attributes > .subset-qty > .quantity-input__container > .increase-count"
//   ).click();
// });

// And("select another shade, finish and qty", () => {
//   cy.get(
//     "#productSubsetItem1 > div.subset-skus > div > div.subset-attributes.subsetAttributes > ul.visual-attributes.graphical-att.resetNoneActive > li:nth-child(3) > a > img"
//   ).click();
//   cy.get(":nth-child(2) > a > .swatchThumb").click();
//   cy.get(
//     "#productSubsetItem1 > .subset-skus > .subset-selection > .subset-attributes > .subset-qty > .quantity-input__container > .increase-count"
//   ).click();
//   cy.get("#primaryGroup_addToCart_0").click();
//   cy.get("#racOverlay > div.overlayTitleBar > h3 > span.racLefthdr").should(
//     "be.visible"
//   );
// });
