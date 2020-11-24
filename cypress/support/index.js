// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
	const region = Cypress.env("region");
	const urls = Cypress.env(region);
	const brand = Cypress.env("brand" || "we");
	const url = urls[brand];

	if (region.toUpperCase() === "PROD") {
		cy.visit(url);
	} else {
		cy.visit(url, {
			auth: {
				username: Cypress.env("username"),
				password: Cypress.env("password"),
			},
		});
	}

	cy.wait(5000);
	cy.get("body")
		.find(".stickyOverlayCloseButton")
		.its("length")
		.then((res) => {
			if (res > 0) {
				cy.get(".stickyOverlayCloseButton").click();
			}
		});
});
