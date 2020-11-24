/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import { searchPage, productPage, pipPage } from "../locators/we/pip.json";
import { category } from "../locators/we/shop.json";
import { breadcrumbs } from "../locators/we/pip.json";

  it("Should search SKU", () => {
    cy.get(searchPage.searchBox).type(data.homePageData.skuNo).submit();
  });


});
