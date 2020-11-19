
/// <reference types='Cypress'/>

//import { admin as defaultAdminUser, customer as defaultUser } from "../support/users";

class ElementActions {

    navigateTo(url, includeUrl) {
        cy.visit(url);
        cy.url().should('include', includeUrl);
    }

    navigateToWithLogin(url, includeUrl, username, password) {
        cy.visit(url, {
            auth: {
                username: username,
                password: password
            }
        });
        cy.url().should('include', includeUrl);
    }

    clickElement(element) {
        var stepName = 'clicking on element: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).click();
            console.log('clicked on element: ' + element);

        } catch (err) {
            console.log('unable to click on element:' + element);
            throw (err);
        }
    }

   
    clickWithIndex(element, index) {
        var stepName = 'clicking on element: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).eq(index).click();
            console.log('clicked on element: ' + element);

        } catch (err) {
            console.log('unable to click on element:' + element);
            throw (err);
        }
    }

    setText(element, set_text) {
        var stepName = 'setting a text in the field: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).type(set_text);
            console.log('clicked on element: ' + element);
            console.log('entered text in element: ' + element);

        } catch (err) {
            console.log('unable to set the text in field: ' + element);
            throw (err);
        }
    }

    setTextWithIndex(element, index, set_text) {
        var stepName = 'setting a text in the field: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).eq(index).type(set_text);
            console.log('entered text in element: ' + element);

        } catch (err) {
            console.log('unable to set the text in field: ' + element);
            throw (err);
        }
    }

    elementContainsText(element, text) {
        cy.wait(1000);
        cy.get(element).contains(text).should('be.visible');
    }

    selectText(element, select_text) {
        var stepName = 'select the text from select field: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).select(select_text);
            console.log('clicked on element: ' + element);
            console.log('selected text in element: ' + element);

        } catch (err) {
            console.log('unable to select the text from select field: ' + element);
            throw (err);
        }
    }

    clickElementContainsText(element, text) {
        var stepName = 'setting a text in the field: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).contains(text).should('be.visible').click();
            console.log('entered text in element: ' + element);

        } catch (err) {
            console.log('unable to set the text in field: ' + element);
            throw (err);
        }
    }

    isDisplayed(element) {
        cy.wait(1000);
        cy.contains(element).should('be.visible');              // Assert that el is visible
    }

    isPageTitle(text) {
        var stepName = text;
        try {
            cy.wait(1000);
            cy.title().should('eq', text);
            console.log('page is displayed: ' + stepName);
        } catch (err) {
            console.log('Not found page:' + stepName);
            throw (err);
        }
    }
    isVisible(element) {
        var stepName = element;
        try {
            cy.wait(1000);
            cy.get(element).should('be.visible');
            console.log('found element: ' + stepName);
        } catch (err) {
            console.log('Not found element:' + stepName);
            throw (err);
        }

    }
    scrollIntoView(element) {
        var stepName = element;
        try {
            cy.wait(1000);
            cy.get(element).scrollIntoView();
            console.log('found element: ' + stepName);
        } catch (err) {
            console.log('Not found element:' + stepName);
            throw (err);
        }
    }
    shortWait(time) {
        var stepName = time;
        cy.wait(time);
        console.log('waited for:' + stepName);
    }


    shortWait() {
        cy.wait(2000);
    }

    mediumWait() {
        cy.wait(4000);
    }

    longWait() {
        cy.wait(6000);
    }

    getIframeBody(element) {
        cy.wait(1000);
        return cy.get(element).should('exist');
    }

    getElementatIndex(element, index) {
        cy.wait(1000);
        cy.get(element).eq(index);
    }

    clickElementAtIndex(element, index) {
        cy.wait(1000);
        cy.get(element).eq(index).should('be.visible').click();
    }

    clickElementEnabled(element) {
        cy
            .wait(1000)
            .get(element)
            .should('not.have.class', 'disabled')
            .click();
    }

    getIframeBody(element) {
        return cy.get(element).should('exist')
            .then((iframe) => {
                console.log(iframe);
                return iframe.contents().find('body');
            });
    }

    setTextInIframe(iframeElement, element, text) {
        cy.wait(2000);
        this.getIframeBody(iframeElement)
            .then(iframe => {
                cy.wrap(iframe).find(element).type(text);
            });
    }

    assertPageTitle(text) {
        try {
            cy.wait(1000);
            cy.title().should('eq', text);
        } catch (err) {
            console.log('Page title does not match given text');
            throw (err);
        }
    }

    reload() {
        cy.reload();
        console.log('reloaded the current page');
    }

    runNpmRebuild() {
        cy.exec('npm run rebuild-db');
    }

    viewPageSize() {
        cy.viewport(1280, 800);
    }

    focusOnElement(iframeElement, element) {
        cy.wait(2000);
        this.getIframeBody(iframeElement)
            .then(iframe => {
                cy.wrap(iframe).find(element).focus();
            });

    }
    invokeClickElement(element1, element2) {
        var stepName = 'clicking on element: ' + element2;
        try {
            cy.wait(1000);
                    cy.get(element1).invoke("show");
                    cy.wait(2000);
                    cy.get(element2).click({force:true});
            console.log('clicked on element: ' + element2);

        } catch (err) {
            console.log('unable to click on element:' + element2);
            throw (err);
        }
    }

    focus(element) {
        var stepName = 'clicking on element: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).focus();
            console.log('clicked on element: ' + element);

        } catch (err) {
            console.log('unable to click on element:' + element);
            throw (err);
        }
    }

    mouseHover(element, set_text) {
        var stepName = 'clicking on element: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).trigger(set_text);
            console.log('clicked on element: ' + element);

        } catch (err) {
            console.log('unable to click on element:' + element);
            throw (err);
        }
    }

    submit(element) {
        var stepName = 'clicking on element: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).submit();
            console.log('clicked on element: ' + element);

        } catch (err) {
            console.log('unable to click on element:' + element);
            throw (err);
        }
    }

     select(element, select_text) {
        var stepName = 'setting a text in the field: ' + element;
        try {
            cy.wait(1000);
            cy.get(element).select(select_text);
            console.log('clicked on element: ' + element);
            console.log('entered text in element: ' + element);

        } catch (err) {
            console.log('unable to set the text in field: ' + element);
            throw (err);
        }
    }


}

export default ElementActions;
