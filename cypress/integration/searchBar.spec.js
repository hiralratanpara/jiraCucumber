/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import {
  searchBar
} from "../locators/we/search.json";

import {
  contactUsPage
} from "../locators/we/contactUs.json";


import {
  searchResults
} from "../locators/we/pip.json";

describe('search bar function working correctly ', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  before(() => {
    cy.visit(data.brandURL.url, { timeout: 200000 });

  })


  it('search bar', () => {
    cy.get(searchBar.search).should('have.value', '');
    cy.get(searchBar.search).type('bathroom');
    cy.get(searchBar.search_button).trigger("mouseover").click();



  });

});
