/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";
import {
  search
} from "../locators/we/signIn.json";

import {
  signInError
} from "../locators/we/signIn.json";





describe('sign in function working correctly ', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  before(() => {
    cy.visit(data.brandURL.url, { timeout: 200000 });
    cy.get(search.accountButton).click();

  })

  it('login feature', () => {
    cy.get(search.emailTextField).should('have.value', '');
    cy.get(search.passwordTextField).should('have.value', '');
    cy.get(search.signInButton).should('contain.text', 'Sign In');
    // cy.get('a.shipToStoreDetails hide-detail ship-to-store-selector').click();
    // cy.get(productPage.seeStoreDetailsLinkTxt).should('have.text', 'Hide Store Details');
  })



  it('account sign in text fields able to type', () => {
    cy.get(search.emailTextField).type('wrong@gmail.com');
    cy.get(search.passwordTextField).type('Welcome7210^');





  })



  it('account creation form', () => {
    cy.get(search.fullName).should('have.value', '');
    cy.get(search.email).should('have.value', '');
    cy.get(search.confirmemail).should('have.value', '');
    cy.get(search.password).should('have.value', '');
    cy.get(search.confirmPassword).should('have.value', '');
    cy.get(search.createAnAccount).should('contain.text', 'Create An Account');
  })



  it('account creation form able to fill out', () => {
    cy.get(search.fullName).type('testing');
    cy.get(search.email).type('testingb952@gmail.com');
    cy.get(search.confirmemail).type('testingb95299@gmail.com');
    cy.get(search.password).type('Welcome7210^');
    cy.get(search.confirmPassword).type('Welcome7210^');


  })







});



