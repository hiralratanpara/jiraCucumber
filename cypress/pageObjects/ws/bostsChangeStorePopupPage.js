/// <reference types='Cypress'/>

import ElementActions from '../../utils/elementActions';
import { searchPage, findAStorePopUp, productPage } from '../../locators/WS/homePage.json';
import Assertions from '../../utils/assertions.js';
import { loginPageData, homePageData, productPageData, findAStorePopUpData } from "../../fixtures/testData/WS/wsTD.json"

const elementActions = new ElementActions();
const assertions = new Assertions();

export default class WsiSelectStorePage {
    bostsChangeStoreNotAvailable() {
        cy.viewport(1280, 800);
        elementActions.navigateToWithLogin(loginPageData.url, '', loginPageData.username, loginPageData.password);
        //cy.get('form[name=nav-search-form]').type('4212770').submit()
        elementActions.setText(searchPage.searchBox, homePageData.skuNo);
        elementActions.submit(searchPage.searchBox)
        elementActions.clickElement(productPage.bostsChangeStoreLink);
        elementActions.shortWait();
        assertions.isTextEqualTo(findAStorePopUp.findAStorePopupTxt, findAStorePopUpData.findAStoreTxt);

        elementActions.mediumWait();
        elementActions.clickElement(findAStorePopUp.zipCityStTxtBox);

        elementActions.setText(findAStorePopUp.zipCityStTxtBox, findAStorePopUpData.cityName);
        elementActions.setText(findAStorePopUp.zipCityStTxtBox, findAStorePopUpData.pressEnter)
        assertions.isTextEqualTo(findAStorePopUp.storeSearchMsg, findAStorePopUpData.storeSearchMsgTxt)



       // cy.get('#distanceRadius').focus();
       elementActions.focus(findAStorePopUp.selectMilesBox);
        //$('#distanceRadius').val("200");
        //cy.get('#distanceRadius').select('200');
        elementActions.select(findAStorePopUp.selectMilesBox, '200')

        //cy.wait(5000);
        elementActions.shortWait()
        console.log(findAStorePopUp.searchBtn);
        console.log(findAStorePopUp.zipCityStTxtBox);
        //console.log(findAStorePopUp.se);
        elementActions.clickElement(findAStorePopUp.searchBtn);
        
        //cy.get('#_ev_5 > div > div.store-pickup-selector-header > form > button').click();
        //cy.get('#_ev_5 > div > div.store-pickup-selector-container > p.pickup-store-list-label.initialStoreListLabel.search-warning-no-results').should('have.text','This product is not available in any stores within 200 miles.');
        cy.wait(5000);
        assertions.isTextEqualTo(findAStorePopUp.storeSearchMsg, "This product is not available in any stores within 200 miles.")

        //entering another city
    }

    bostsChangeStoreAvailable() {
        cy.viewport(1280, 800);
        elementActions.navigateToWithLogin(loginPageData.url, '', loginPageData.username, loginPageData.password);
        //cy.get('form[name=nav-search-form]').type('4212770').submit()
        elementActions.setText(searchPage.searchBox, homePageData.skuNo);
        elementActions.submit(searchPage.searchBox)
        elementActions.clickElement(productPage.bostsChangeStoreLink);
        elementActions.shortWait();
        assertions.isTextEqualTo(findAStorePopUp.findAStorePopupTxt, findAStorePopUpData.findAStoreTxt);

        elementActions.mediumWait();
        elementActions.clickElement(findAStorePopUp.zipCityStTxtBox);

        elementActions.setText(findAStorePopUp.zipCityStTxtBox, findAStorePopUpData.cityName1);
        elementActions.setText(findAStorePopUp.zipCityStTxtBox, findAStorePopUpData.pressEnter)
        assertions.isTextEqualTo(findAStorePopUp.storeSearchMsg, findAStorePopUpData.storeSearchMsgTxt)



       // cy.get('#distanceRadius').focus();
       elementActions.focus(findAStorePopUp.selectMilesBox);
        //$('#distanceRadius').val("200");
        //cy.get('#distanceRadius').select('200');
        elementActions.select(findAStorePopUp.selectMilesBox, '200')

        //cy.wait(5000);
        elementActions.shortWait()
        console.log(findAStorePopUp.searchBtn);
        console.log(findAStorePopUp.zipCityStTxtBox);
        //console.log(findAStorePopUp.se);
        elementActions.clickElement(findAStorePopUp.searchBtn);
        
        //cy.get('#_ev_5 > div > div.store-pickup-selector-header > form > button').click();
        //cy.get('#_ev_5 > div > div.store-pickup-selector-container > p.pickup-store-list-label.initialStoreListLabel.search-warning-no-results').should('have.text','This product is not available in any stores within 200 miles.');
        cy.wait(5000);
        assertions.isTextEqualTo(findAStorePopUp.storeSearchMsg, "This product is not available in any stores within 200 miles.")

        //entering another city
    }
    



}
