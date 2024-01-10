const PersonalAcc = require("../support/page_objects/MainPage");
const RegistrationPage = require("../support/page_objects/RegistrationPage");
const AuthPage = require("../support/page_objects/AuthPage");
const {auth_username, auth_password} = require("../support/constants");
const LogOut = require("../support/page_objects/LogOut");
describe('Log out of personal acc', () => {
    beforeEach('visit', () => {
        cy.visit('/');
    });

    it('log out of your account by clicking on the button', () => {
        PersonalAcc.clickOnPersonalAcc();
        RegistrationPage.clickOnRegistrationBtn();
        AuthPage.clickOnAuthOnRegistrationForm();
        AuthPage.authorization(auth_username, auth_password);
        cy.location('pathname').should('eq', '/');
        PersonalAcc.clickOnPersonalAcc();
        cy.location('pathname').should('eq', '/account/profile');
        LogOut.clickOnLogoutBtn();
        cy.location('pathname').should('eq', '/login');
    });
})
