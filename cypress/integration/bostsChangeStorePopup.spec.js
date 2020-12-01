/// <reference types='Cypress'/>
//import WebStoreHomePage from '../../../pageObjects/webStoreUI/homePage';
//import WsiSelectStorePage from '../../pageObjects/ws/bostsChangeStorePopupPage';

//const wsiSelectStorePage = new WsiSelectStorePage();
//const homePage = new WebStoreHomePage();

describe('wsi ship to store ', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    // it('Verify the BOSTS link in WS', () => {
    //     //careerPage.carrerInfo();
    //     //cy.viewport(1280, 800);
    //     wsiSelectStorePage.bostsChangeStoreNotAvailable();
    // });

    it('Should search SKU', () => {
        cy.get('form[name=nav-search-form]').type('4212770').submit()
        //cy.get(searchPage.searchBox).type(data.homePageData.skuNo);
     })
     
     it('Choose bopis and open up a store selector', () => {
         cy.get('#pickUpInStore0').click();
     })
     it('Search for a city within 25 miles were product is available for pickup', () => {
         
         cy.get('#addressText').click();
         cy.wait(1000);
         cy.get('#addressText').type('Sacramento, CA, USA');
         cy.get('#addressText').type('{enter}', { release: true })
          cy.get('#_ev_5 > div > div.store-pickup-selector-container > p.pickup-store-list-label.initialStoreListLabel.store-search-result-header').should('have.text','Find & Pick a Store')
     
         // cy.get('#distanceRadius').focus();
         // //$('#distanceRadius').val("200");
         // cy.get('#distanceRadius').select('200');
     
         //cy.get('store-pickup-selector-forms').submit();
        //cy.get('.distance-radius').click();
         //cy.wait(5000);
         //  cy.get('#_ev_5 > div > div.store-pickup-selector-header > form > button').click();
         //  cy.get('#_ev_5 > div > div.store-pickup-selector-container > p.pickup-store-list-label.initialStoreListLabel.search-warning-no-results').should('have.text','This product is not available in any stores within 200 miles.');
         //  cy.wait(5000);
     })
     
     it('select a store from the options available for pick up', () => {
         cy.get(findAStorePopUp.pickThisStoreBtn).click();
         
     })
     
     it('same store is displayed which selected by clicking pick this store', () => {
        cy.get(productPage.bopisStoreSelectedName).should('have.text','Galleria At Roseville')
        cy.get(productPage.seeStoreDetailsLinkTxt).should('have.text', 'See Store Details');
     })
     
     it('bopis see store details link', () => {
         cy.get(productPage.bopisStoreSelectedName).should('have.text','Galleria At Roseville')
      })
     
      it('clicking on see store details link', () => {
         cy.get(productPage.seeStoreDetailsLinkTxt).click();
         // cy.get('a.shipToStoreDetails hide-detail ship-to-store-selector').click();
         // cy.get(productPage.seeStoreDetailsLinkTxt).should('have.text', 'Hide Store Details');
      })
     
     



   

});