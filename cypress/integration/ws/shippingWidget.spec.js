/// <reference types='Cypress'/>
import WsiShipPage from '../../pageObjects/ws/shipWidgetPage';

const wsiShipPage = new WsiShipPage();
//const homePage = new WebStoreHomePage();

describe('wsi ship to store ', () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});
	it('Verify the BOSTS link in WS', () => {
		wsiShipPage.bostsLink();
	});

	it('Verify the BOSTS change store link in WS', () => {
		wsiShipPage.BOSTSChangeStore();
	});

	it('Verify the BOPIS change store link in WS', () => {
		wsiShipPage.BOPISChangeStore();
	});

	it('Verify the header of the text when mouseover over tooltip', () => {
		wsiShipPage.shipToStoreToolTipHeader();
	});

	it('Verify the text when mouseover over tooltip', () => {
		wsiShipPage.shipToStoreToolTipTxt();
	});

	it('Verify that BOSTS popup should open when "item Not available near by" and STS option is selected', () => {
		wsiShipPage.notAvailableAtStore();
	});

});