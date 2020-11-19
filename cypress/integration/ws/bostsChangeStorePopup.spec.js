/// <reference types='Cypress'/>
//import WebStoreHomePage from '../../../pageObjects/webStoreUI/homePage';
import WsiSelectStorePage from '../../pageObjects/ws/bostsChangeStorePopupPage';

const wsiSelectStorePage = new WsiSelectStorePage();
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

    it('Verify the "pick this Store" link when product avilable ', () => {
        //careerPage.carrerInfo();
        //cy.viewport(1280, 800);
        wsiSelectStorePage.bostsChangeStoreAvailable();
    });



   

});