
export class LoginPage {

    elementLogin = {
        email: () => cy.get('[name="identity"]'),
        passWord: () => cy.get('[name="password"]'),
        checkBox: () => cy.get('[class ="checkbox pull-left"]'),
        btnLogin: () => cy.get('button[type="submit"]').contains("Login")
    }

    loginToHomePage(email, passWord) {
        this.elementLogin.email().clear().type(email)
        this.elementLogin.passWord().clear().type(passWord)
        this.elementLogin.btnLogin().click()
    }
    verifyLoginPage() {
        this.elementLogin.email().should('be.visible')
        this.elementLogin.passWord().should('be.visible')
        this.elementLogin.checkBox().should('be.visible')
        this.elementLogin.btnLogin().should('be.visible')
    }
}

export const loginPage = new LoginPage();