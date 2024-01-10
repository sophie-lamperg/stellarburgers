import MainPage from "../support/page_objects/MainPage";

describe('Check transition on main page', () => {
    beforeEach('visit', () => {
        cy.visit('/');
    });
    it('Click on constructor btn', () => {
        MainPage.clickOnPersonalAcc();
        cy.location('pathname').should('eq', '/login');
        MainPage.clickOnConstructorBtn();
        cy.location('pathname').should('eq', '/');
    });
    it('Click on logo btn', () => {
        MainPage.clickOnPersonalAcc();
        cy.location('pathname').should('eq', '/login');
        MainPage.clickOnLogo();
        cy.location('pathname').should('eq', '/');
    });
})
