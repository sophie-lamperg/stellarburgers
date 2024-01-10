export default class MainPage {
    static personalAccBtn = 'a.AppHeader_header__link__3D_hX[href="/account"]';
    static constructorBtn = 'a.AppHeader_header__link__3D_hX:contains("Конструктор")';
    static logo = '.AppHeader_header__logo__2D0X2';

    static clickOnPersonalAcc() {
        cy.get(this.personalAccBtn).click();
    };

    static clickOnLogo() {
        cy.get(this.logo).click();
    };
    static clickOnConstructorBtn() {
        cy.get(this.constructorBtn).click();
    };
}
