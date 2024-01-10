const AuthPage = require("../support/page_objects/AuthPage");
const { auth_username, auth_password } = require("../support/constants");
const PersonalAcc = require("../support/page_objects/MainPage");
const RegistrationPage = require("../support/page_objects/RegistrationPage");
const MainPage = require("../support/page_objects/MainPage");

describe('Authentification', () => {
   beforeEach('visit', () => {
        cy.visit('/');
  });
    it("Login via 'Login to Account' Button on the Homepage", () => {
        AuthPage.clickOnAuthButtonOnMainPage();
        AuthPage.authorization(auth_username, auth_password);
        cy.get('.button_button__33qZ0').should('be.visible');
        cy.location('pathname').should('eq', '/');
    });
   it('Login via "Personal cabinet" Button on the Homepage', () => {
       MainPage.clickOnPersonalAcc();
       cy.location('pathname').should('eq', '/login');
       AuthPage.authorization(auth_username, auth_password);
       cy.location('pathname').should('eq', '/');
   });
   it('Login via "Войти" on registration form', () => {
       PersonalAcc.clickOnPersonalAcc();
       RegistrationPage.clickOnRegistrationBtn();
      AuthPage.clickOnAuthOnRegistrationForm();
      AuthPage.authorization(auth_username, auth_password);
       cy.location('pathname').should('eq', '/');
   });
    it('Login via "Войти" on restore password page', () => {
        MainPage.clickOnPersonalAcc();
        AuthPage.clickOnRestorePasswordBtn();
        AuthPage.clickOnAuthOnRegistrationForm();
        AuthPage.authorization(auth_username, auth_password);
    });
});
