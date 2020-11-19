/// <reference types='Cypress'/>
import { data } from "../../fixtures/we/test-data.json";
import {searchPage,productPage,pipPage} from '../../locators/we/pip.json'
import {category} from '../../locators/we/shop.json'
import { breadcrumbs } from '../../locators/WE/pip.json';

describe('WE Test Shop Page ', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  
    before(() => {
        cy.visit(data.brandURL);
        cy.wait(5000);
        cy.get('body').find( '.stickyOverlayCloseButton' ).its('length').then(res=>{
            if(res > 0){
                cy.get('.stickyOverlayCloseButton').click();
            
            }
        });
        
    })
    it('Should search SKU', () => {
      cy.get(searchPage.searchBox).type(data.homePageData.skuNo).submit()
    })

    it('Should load the sku', () => {
       cy.get(pipPage.productLabel).get('h1').contains(data.homePageData.skuName)
    })

    it('Should display the correct swatch', () => {
       cy.get(pipPage.swatchLabel).should('have.text', data.homePageData.defaultSwatch);
    })

    it('should display visual navigation', () => {
        cy.get(category.superCat).click();
        cy.get(category.leftMenu).click();
        
        cy.get('body').find( '#join-email-campaign > .shader > .modal-scroll > .modal_component > .btnClose' ).its('length').then(res=>{
            if(res > 0){
                cy.get('#join-email-campaign > .shader > .modal-scroll > .modal_component > .btnClose').click();
            
            }
        });
        cy.wait(5000);
        cy.get(category.visualNav).should('be.visible');
    
        
        it('should display the breadcrumb', () => {
           cy.get('#breadcrumbs').should('exist');  
        })

        it('should display the correct values in the breadcrumb', () => {
            cy.get(breadcrumbs.firstBreadcrumb).should('have.text', data.breadcrumb.firstBreadcrumbVal);
            cy.get(breadcrumbs.secondBreadcrumb).should('have.text', data.breadcrumb.secondBreadcrumbVal);
            cy.get(breadcrumbs.thirdBreadcrumb).should('have.text', data.breadcrumb.thirdBreadcrumbVal);
         })
    });
});
