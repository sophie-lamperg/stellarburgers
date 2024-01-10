export default class LogOut {
    static logOutBtn = '.Account_button__14Yp3:contains("Выход")';

    static clickOnLogoutBtn() {
        cy.get(this.logOutBtn).should('be.visible').click();
    };
}
