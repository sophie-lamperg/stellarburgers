export default class RegistrationPage {
    static linkToRegistration = 'a.Auth_link__1fOlj[href="/register"]';
    static linkAccount = 'a.AppHeader_header__link__3D_hX[href="/account"]';
    static nameInput = 'div.input_type_text:contains("Имя")';
    static emailInput = 'div.input_type_text:contains("Email")';
    static passwordInput = '.input_type_password';
    static registerButton = '.button_button__33qZ0';
    static passwordError = 'p.input__error:contains("Некорректный пароль")';

    static clickOnRegistrationBtn() {
    cy.get(this.linkToRegistration).should('be.visible').click();
};

   static registration(name, email, password) {
        cy.get(this.nameInput).type(name);
        cy.get(this.emailInput).contains('Email').type(email);
        cy.get(this.passwordInput).type(password);
       cy.get(this.registerButton).click();
    };
   static visiblePasswordError() {
       cy.get(this.passwordError).should('be.visible');
   }
};
