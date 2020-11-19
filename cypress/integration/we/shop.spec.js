/// <reference types='Cypress'/>
import { data } from "../../fixtures/we/test-data.json";
import { breadcrumbs } from '../../locators/WE/pip.json';

describe('WE Test Shop Page ', () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	it('should display visual navigation', () => {
		cy.visit(data.brandURL);
		cy.get('.category-6 > .c-nav-category_link > span').click();
		cy.get('.left-nav > :nth-child(2) > :nth-child(3) > a').click();
		cy.wait(5000);
		cy.get('body').find('#join-email-campaign > .shader > .modal-scroll > .modal_component > .btnClose').its('length').then(res => {
			if (res > 0) {
				cy.get('#join-email-campaign > .shader > .modal-scroll > .modal_component > .btnClose').click();

			}
		});
		cy.get('.shop-hero-1').should('be.visible');

	});

	it('should display the breadcrumb', () => {
		cy.get('#breadcrumbs').should('exist');
	})

	it('should display the correct values in the breadcrumb', () => {
		cy.get(breadcrumbs.firstBreadcrumb).should('have.text', data.breadcrumb.firstBreadcrumbVal);
		cy.get(breadcrumbs.secondBreadcrumb).should('have.text', data.breadcrumb.secondBreadcrumbVal);
		cy.get(breadcrumbs.thirdBreadcrumb).should('have.text', data.breadcrumb.thirdBreadcrumbVal);
	})

});
