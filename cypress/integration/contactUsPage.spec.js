/// <reference types='Cypress'/>
import { data } from "../fixtures/we/test-data.json";

import {
  contactUsPage
} from "../locators/we/contactUs.json";


describe('Contact Us feature', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  before(() => {
    cy.visit('https://www.westelm.com/customer-service/email-us/?cm_re=GlobalLinks-_-Footer-_-ContactUs', { timeout: 200000 });



  })


  it('Contact Us', () => {



    cy.get(contactUsPage.contactFormName).should('have.text', '');
    cy.get(contactUsPage.contactFormEmail).should('have.text', '');
    cy.get(contactUsPage.contactFormConfirmEmail).should('have.text', '');
    cy.get(contactUsPage.contactFormZipcode).should('have.text', '');
    cy.get(contactUsPage.contactFormPhone).should('have.text', '');
    cy.get(contactUsPage.contactFormFeedbackAbout).should('contain.text', 'Please Select');
    cy.get(contactUsPage.contactFormOrderNumber).should('have.text', '');
    cy.get(contactUsPage.contactFormEnterMessage).should('have.text', '');


  })

  it('Contact Us form able to type', () => {


    cy.get(contactUsPage.popupwindow).trigger("mouseover").click();
    cy.get(contactUsPage.contactFormName).type('name');
    cy.get(contactUsPage.contactFormZipcode).type('12345');


  });
  it('Customer Service numbers', () => {


    cy.get(contactUsPage.customerServiceNumbers).should('contain.text', '1.888.922.4119')


  });

  it('Customer Service numbers', () => {


    cy.get(contactUsPage.customerServiceNumbers).should('contain.text', '+800 15004444')


  });

  it('Customer Service numbers', () => {


    cy.get(contactUsPage.customerServiceNumbers).should('contain.text', 'customerservice@westelm.com')


  });






});