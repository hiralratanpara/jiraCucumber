/// <reference types='Cypress'/>

import ElementActions from '../../utils/elementActions';
import { searchPage, findAStorePopUp, productPage } from '../../locators/WS/pip.json';
import Assertions from '../../utils/assertions.js';
import { data } from "../../fixtures/ws/test-data.json"

const elementActions = new ElementActions();
const assertions = new Assertions();

export default class WsiShipPage {
	bostsLink() {
		elementActions.navigateToWithLogin(data.loginPageData.url, '', data.loginPageData.username, data.loginPageData.password);
		elementActions.setText(searchPage.searchBox, homePageData.skuNo);
		elementActions.shortWait();
		elementActions.submit(searchPage.searchBox)
		assertions.isTextEqualTo(productPage.selectedColor, productPageData.productColor);
		elementActions.shortWait();
		elementActions.clickElement(productPage.shipToStoreBtn);
		elementActions.shortWait();
		assertions.isTextEqualTo(findAStorePopUp.findAStorePopupTxt, findAStorePopUpData.findAStoreTxt);
		elementActions.clickElement(findAStorePopUp.closeBtn);
		elementActions.shortWait();

		/* can be another scenario   
		elementActions.clickElement(searchPage.zipCityStTxtBox);
		elementActions.setText(searchPage.zipCityStTxtBox, "nyc");
		elementActions.setText(searchPage.zipCityStTxtBox, "{enter}")
		assertions.isTextEqualTo(searchPage.storeSearchMsg, "This product is not available in any stores within 25 miles.") */

	}
	BOSTSChangeStore() {
		elementActions.clickElement(productPage.bostsChangeStoreLink);
		elementActions.shortWait();
		assertions.isTextEqualTo(findAStorePopUp.findAStorePopupTxt, findAStorePopUpData.findAStoreTxt);
		elementActions.clickElement(findAStorePopUp.closeBtn);

	}
	BOPISChangeStore() {
		elementActions.clickElement(productPage.bopisChangeStoreLink);
		elementActions.shortWait();
		assertions.isTextEqualTo(findAStorePopUp.findAStorePopupTxt, findAStorePopUpData.findAStoreTxt);
		elementActions.clickElement(findAStorePopUp.closeBtn);
	}

	shipToStoreToolTipHeader() {
		//elementActions.mediumWait();
		//cy.get('#productSubsetItem1 > div > div > div.subset-pricing.subsetPricing > div.select-receiving-method.pb-testing-default-land.storePickupOptions.bopis-show-hide-toggle.show-ship-to-and-store-pickup > ul > li.ship-to-store > label > span > img').trigger('mouseover');
		elementActions.mouseHover(productPage.shipToStoreToolTip, 'mouseover');
		//elementActions.longWait();
		//assertions.contains('.shipItemTooltip', productPageData.toolTipHeader)
		assertions.contains(productPage.toolTipPopup, productPageData.toolTipHeader)
	}

	shipToStoreToolTipTxt() {
		//elementActions.mediumWait();
		//cy.get('#productSubsetItem1 > div > div > div.subset-pricing.subsetPricing > div.select-receiving-method.pb-testing-default-land.storePickupOptions.bopis-show-hide-toggle.show-ship-to-and-store-pickup > ul > li.ship-to-store > label > span > img').trigger('mouseover');
		elementActions.mouseHover(productPage.shipToStoreToolTip, 'mouseover');
		//elementActions.shortWait();
		//assertions.contains('.shipItemTooltip', 'Reduced Shipping Ship To Store')
		assertions.contains(productPage.toolTipPopup, productPageData.toolTipTxt);

	}

	notAvailableAtStore() {
		// elementActions.shortWait();
		// elementActions.elementContainsText(productPage.notAvailableNearTxt, 'Not available near ')
		// elementActions.shortWait();  
		if (elementActions.elementContainsText(productPage.notAvailableNearTxt, productPageData.notAvailableText)) {
			elementActions.clickElement(productPage.shipToStoreBtn);
			assertions.isTextEqualTo(findAStorePopUp.findAStorePopupTx, findAStorePopUpData.FindAStoreTxt);
		} else {
			console.log("Text not found");
		}
	}
}
