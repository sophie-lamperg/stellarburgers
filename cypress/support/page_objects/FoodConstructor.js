export default class FoodConstructor {
    static bunsBtn = '.tab_tab__1SPyG:contains("Булки")';
    static saucesBtn = '.tab_tab__1SPyG:contains("Соусы")';
    static fillingsBtn = '.tab_tab__1SPyG:contains("Начинки")';
    static currentClass = '.tab_tab_type_current__2BEPc';
    static bunsHeader = 'h2.text:contains("Булки")';
    static saucesHeader = 'h2.text:contains("Соусы")';
    static fillingsHeader = 'h2.text:contains("Начинки")';

    static clickOnBunsBtn() {
        cy.get(this.bunsBtn).should('be.visible').click({ force: true });
    };
    static clickOnFillingsBtn() {
        cy.get(this.fillingsHeader).should('be.visible').click();
    };
    static clickOnSaucesBtn() {
        cy.get(this.saucesBtn).should('be.visible').click();
    };
    static checkBunsHeader() {
        cy.get(this.bunsHeader).should('be.visible');
    };
    static checkSaucesHeader() {
        cy.get(this.saucesHeader).should('be.visible');
    };
    static checkFillingsHeader() {
        cy.get(this.fillingsHeader).should('be.visible');
    };
    static bunsBtnHasCurrentClass() {
        cy.get(this.bunsBtn).should('have.class', this.currentClass);
    };
    static saucesBtnHasCurrentClass() {
        cy.get(this.saucesBtn).should('have.class', this.currentClass);
    };
    static fillingsBtnHasCurrentClass() {
        cy.get(this.fillingsBtn).should('have.class', this.currentClass);
    };
};
