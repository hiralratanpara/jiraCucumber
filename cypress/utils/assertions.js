/// <reference types='Cypress'/>

class Assertions {

    contains(element, message) {
        cy.get(element).contains( message);
    }

    isTextEqualTo(element, text) {
        cy.get(element).should('have.text', text);
    }

    areEqual(expectedMessage, actualMessage) {
        cy.expect(actualMessage).to.eq(expectedMessage);
    }

    arraysAreEqual(expectedMessage, actualMessage) {
        cy.expect(actualMessage).to.have.members(expectedMessage);
    }

    areNotEqual(expectedMessage, actualMessage) {
        cy.expect(actualMessage).to.not.eq(expectedMessage);
    }

    isTrue(value) {
        expect(value).to.be.true;
    }
    areNotDeeplyEqual(expectedObject, actualObject) {
        cy.expect(actualObject).to.not.eql(expectedObject);
    }

    isFalse(value) {
        expect(value).to.be.false;
    }

    isGreaterThan(expectedValue, actualValue) {
        expect(expectedValue).to.be.greaterThan(actualValue);
    }

    isLessThan(expectedValue, actualValue) {
        expect(expectedValue).to.be.lessThan(actualValue);
    }

    exists(property) {
        expect(property).to.exist;
    }

    isVisible(element, text) {
        cy.get(element).contains(text).should('be.visible');
    }

    isVisibleAtIndex(element, index, text) {
        cy.get(element).contains(text).eq(index).contains(text).should('be.visible');
    }

}
export default Assertions;
