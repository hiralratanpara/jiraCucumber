/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import {
  title
} from "../locators/we/title.json";






describe('verify webpage title', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  before(() => {
    cy.visit(data.brandURL.url, { timeout: 200000 });
  })

  it('Verify page title is Westelm', () => {



    cy.get(title.westelmTitle).should('contain.text', 'West Elm');



  });

});

