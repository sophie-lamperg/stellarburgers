const {faker} = require("@faker-js/faker");
const RegistrationPage = require("../support/page_objects/RegistrationPage");
const PersonalAcc = require("../support/page_objects/PersonalAcc");

describe('User registration and login', () => {
        beforeEach('visit', () => {
                cy.visit(`/`);
        });
        it('Registration with valid data and login', () => {
                PersonalAcc.clickOnPersonalAcc();

                let name = faker.internet.userName();
                let email = faker.internet.email();
                let password = faker.internet.password();

                RegistrationPage.clickOnRegistrationBtn();
                RegistrationPage.registration(name, email, password);
                cy.visitPage(`${Cypress.config().baseUrl}login`);
        });
        it('Attempt to register with invalid password', () => {
                PersonalAcc.clickOnPersonalAcc();

                let name = faker.internet.userName();
                let email = faker.internet.email();
                let wrongPassword = faker.internet.password(5);

                RegistrationPage.clickOnRegistrationBtn();
                RegistrationPage.registration(name, email, wrongPassword);
                RegistrationPage.visiblePasswordError();
        });
});
