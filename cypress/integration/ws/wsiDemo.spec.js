/// <reference types="cypress" />

/* describe('opening WSI home page ', () => {
    // beforeEach(() => {
    //     cy.viewport(1280, 800);
    //     //homePage.navigateToHomepage();
    // });
    it('wsi home page', () => {
       // cy.visit("https://www.potterybarn.com/");
       cy.visit('https://regression.potterybarn.com/')
    //    cy.wait(1000);
    //    cy.get('#product .emailCampaignOverlay .overlayCloseButton').click();
    })

    it('Dismiss overlay', ()=>{
        const closeButton = cy.get('#product .emailCampaignOverlay .overlayCloseButton').first();
        if (closeButton) {
          closeButton.click(-50, -50, { force: true });
        }
    })
    it('Select swatch', ()=>{
        const smallSwatch = cy.get('.attributeValue a').eq(1);
        if (smallSwatch) {
          smallSwatch.click();
        }
    })
    it('Choose BOSTS and open up a store selector', ()=>{
        const openSelectorPanel = cy.get('.ship-to-store input').eq(0);
        if (openSelectorPanel) {
          openSelectorPanel.click();
        }
    })
    it('Search for a city within 200 miles', ()=>{
        cy.get('form.store-pickup-selector-forms').type('nyc').submit();
      })
    }) */

describe("First test", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    it('should load', () => {
     /*   cy.visit('https://regression.potterybarn.com/', {
            auth: {
                username: 'ptqaenv',
                password: 'ta8PoLe'
            }
        })
*/
        cy.visit('https://westelm.com')
    })
    it('Should search SKU', () => {
        cy.get('form[name=nav-search-form]').type('4212770').submit()
    })
    it('Should load the sku', () => {
        cy.get('.pip-summary').get('h1').contains('Personalized McKenna Leather Jewelry Armoire, White')
    })
    it('Should display the correct swatch', () => {
        //cy.get('.visual-attributes.graphical-att').get('li').first().should('have.text','Ivory')
        cy.get('#productSubsetItem1 > div > div > div.subset-attributes.subsetAttributes > h4 > span').should('have.text', 'White');
        cy.wait(1000);
    })

    it('Choose BOSTS and open up a store selector', () => {
        //const openSelectorPanel = cy.get('#shipToStore0').eq(0);
        const openSelectorPanel = cy.get('#shipToStore0');
        if (openSelectorPanel) {
            openSelectorPanel.click();
            cy.wait(5000);
            //cy.get('#_ev_5 > div > div.store-pickup-selector-header > form').type('nyc');
        }
    })
    it('Search for a city within 200 miles', () => {
        // cy.on('window:confirm', function(confirmText){
        //     return true
        //   });
        cy.get('#addressText').click();
        cy.wait(5000);
        cy.get('#addressText').type('nyc');
        cy.get('#addressText').type('{enter}', { release: true })
        cy.wait(5000);
        cy.get('#_ev_5 > div > div.store-pickup-selector-container > p.pickup-store-list-label.initialStoreListLabel.search-warning-no-results').should('have.text','This product is not available in any stores within 25 miles.')
        cy.get('#distanceRadius').focus();
        //$('#distanceRadius').val("200");
        cy.get('#distanceRadius').select('200');

        //cy.get('store-pickup-selector-forms').submit();
       //cy.get('.distance-radius').click();
        cy.wait(5000);
         cy.get('#_ev_5 > div > div.store-pickup-selector-header > form > button').click();
         cy.get('#_ev_5 > div > div.store-pickup-selector-container > p.pickup-store-list-label.initialStoreListLabel.search-warning-no-results').should('have.text','This product is not available in any stores within 200 miles.');
         cy.wait(5000);
    })

})


describe("Second test", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    it('should load', () => {
        cy.visit('https://regression.potterybarn.com/')
    })
    it('Should search SKU', () => {
        cy.get('form[name=nav-search-form]').type('4212770').submit()
    })
    it('Should load the sku', () => {
        cy.get('.pip-summary').get('h1').contains('Personalized McKenna Leather Jewelry Armoire, White')
    })
    it('Should display the correct swatch', () => {
        //cy.get('.visual-attributes.graphical-att').get('li').first().should('have.text','Ivory')
        cy.get('#productSubsetItem1 > div > div > div.subset-attributes.subsetAttributes > h4 > span').should('have.text', 'White');
        cy.wait(1000);
    })

    it('select change store in BOSTS ', () => {
        //const openSelectorPanel = cy.get('#shipToStore0').eq(0);
        const openSelectorPanel = cy.get('#productSubsetItem1 > div > div > div.subset-pricing.subsetPricing > div.select-receiving-method.pb-testing-default-land.storePickupOptions.bopis-show-hide-toggle.show-ship-to-and-store-pickup > ul > li.ship-to-store > label > div.store-details-container > a.open-store-selector.ship-to-store-selector.openStorePickupSelectorBosts');
        if (openSelectorPanel) {
            openSelectorPanel.click();
            cy.wait(5000);
            //cy.get('#_ev_5 > div > div.store-pickup-selector-header > form').type('nyc');
        }
    })
    it('Search for a city within 200 miles', () => {
        // cy.on('window:confirm', function(confirmText){
        //     return true
        //   });
        cy.get('#addressText').click();
        cy.wait(5000);
        cy.get('#addressText').type('Jacksonville, FL, USA');
        cy.get('#addressText').type('{enter}', { release: true })
        cy.wait(5000);
        cy.get('#_ev_5 > div > div.store-pickup-selector-container > p.pickup-store-list-label.initialStoreListLabel.search-warning-no-results').should('have.text','This product is not available in any stores within 25 miles.')
        cy.get('#distanceRadius').focus();
        //$('#distanceRadius').val("200");
        cy.get('#distanceRadius').select('200');

        //cy.get('store-pickup-selector-forms').submit();
       //cy.get('.distance-radius').click();
        cy.wait(5000);
         cy.get('#_ev_5 > div > div.store-pickup-selector-header > form > button').click();
         cy.get('#_ev_5 > div > div.store-pickup-selector-container > p.pickup-store-list-label.initialStoreListLabel.search-warning-no-results').should('have.text','This product is not available in any stores within 200 miles.');
         cy.wait(5000);
    })

})

