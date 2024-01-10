export default class AuthPage {
    static emailInput = 'div.input_type_text:contains("Email")';
    static passwordInput = '.input_type_password';
    static authButton = '.button_button__33qZ0:contains("Войти")';
    static authButtonOnMainPage = '.button_button__33qZ0';
    static createOrderBtn = '.button_button__33qZ0:contains("Оформить заказ")';
    static authOnRegistrationForm = 'a.Auth_link__1fOlj[href="/login"]'
    static restorePasswordBtn = 'a.Auth_link__1fOlj[href="/forgot-password"]';

    static authorization(email, password) {
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.authButton).click();
    };
    static clickOnAuthOnRegistrationForm() {
        cy.get(this.authOnRegistrationForm).click();
    }
    static clickOnRestorePasswordBtn() {
        cy.get(this.restorePasswordBtn).click();
    }
};
