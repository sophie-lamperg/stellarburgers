import FoodConstructor from "../support/page_objects/FoodConstructor";

describe('Check food constructor', () => {
    beforeEach('visit', () => {
        cy.visit('/');
    });
    it('click on sauces btn', () => {
        FoodConstructor.clickOnSaucesBtn();
        FoodConstructor.checkSaucesHeader();
    });
    it('click on fillings btn', () => {
        FoodConstructor.clickOnFillingsBtn();
        FoodConstructor.checkFillingsHeader();
    });
    it('click on buns btn', () => {
        FoodConstructor.clickOnBunsBtn();
        FoodConstructor.checkBunsHeader();
    });
})
