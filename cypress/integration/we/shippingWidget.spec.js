/// <reference types='Cypress'/>
import WsiShipPage from '../../pageObjects/ws/shipWidgetPage';
import { data } from "../../fixtures/we/test-data.json";
import { searchPage, findAStorePopUp, productPage } from '../../locators/ws/pip.json';

const wsiShipPage = new WsiShipPage();
//const homePage = new WebStoreHomePage();

describe('wsi ship to store ', () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	before(() => {
		cy.visit(data.brandURL);
		cy.get(searchPage.searchBox).type(data.homePageData.skuNo);
		cy.get(searchPage.searchBox).submit();
	})

	it('Verify BOSTS Availability', () => {
		cy.get(productPage.selectedColor).should('have.text', data.productPageData.productColor);
		cy.wait(5000);
		cy.get('body').find('.stickyOverlayCloseButton').its('length').then(res => {
			if (res > 0) {
				cy.get('.stickyOverlayCloseButton').click();
			}
		});

		cy.get(productPage.aoddText).should('contain.text', data.productPageData.availableText);
		cy.get('.shipToStoreDetails.show-detail').should('be.visible');

		// cy.get(productPage.shipToStoreBtn).click();
		// cy.get(findAStorePopUp.findAStorePopupTxt).should('have.text', data.findAStorePopUpData.findAStoreTxt);
		// cy.get(findAStorePopUp.closeBtn).click();
	});

	it('Verify the BOSTS overlay opens on change store click', () => {
		cy.get(productPage.bostsChangeStoreLink).click();
		cy.get(findAStorePopUp.findAStorePopupTxt).should('have.text', data.findAStorePopUpData.findAStoreTxt);
		cy.get(findAStorePopUp.closeBtn).click();
	});

	it('Verify the BOPIS overlay opens on change store click', () => {
		wsiShipPage.BOPISChangeStore();
		cy.get(productPage.bopisChangeStoreLink).click();
		cy.get(findAStorePopUp.findAStorePopupTxt).should('have.text', data.findAStorePopUpData.findAStoreTxt);
		cy.get(findAStorePopUp.closeBtn).click();
	});

	/*  it('Verify the header of the text when mouseover over tooltip', () => {
				wsiShipPage.shipToStoreToolTipHeader();
		});

		it('Verify the text when mouseover over tooltip', () => {
				wsiShipPage.shipToStoreToolTipTxt();
		});
*/
	it('Verify that BOSTS popup should open when "item Not available near by" and STS option is selected', () => {

		if (cy.get(productPage.notAvailableNearTxt).contains(data.productPageData.notAvailableText).should('be.visible')) {
			cy.get(productPage.shipToStoreBtn).click();
			cy.get(findAStorePopUp.findAStorePopupTx).should('have.text', data.findAStorePopUpData.FindAStoreTxt);
		} else {
			console.log("Text not found");
		}
	});

});