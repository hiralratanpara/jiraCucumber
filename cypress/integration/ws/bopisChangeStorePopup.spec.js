/// <reference types='Cypress'/>
//import WebStoreHomePage from '../../../pageObjects/webStoreUI/homePage';
import WsiBopisSelectStorePage from '../../pageObjects/ws/bopisChangeStorePopupPage';

const wsiBopisSelectStorePage = new WsiBopisSelectStorePage();
//const homePage = new WebStoreHomePage();

describe('wsi ship to store ', () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	it('Verify the BOSTS link in WS', () => {
		//careerPage.carrerInfo();
		//cy.viewport(1280, 800);
		wsiBopisSelectStorePage.bopisChangeStoreNotAvailable();
	});

	it('Verify the "pick this Store" link when product avilable ', () => {
		//careerPage.carrerInfo();
		//cy.viewport(1280, 800);
		wsiBopisSelectStorePage.bopisChangeStoreAvailable();
	});

});