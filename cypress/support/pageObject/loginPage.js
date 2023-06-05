
export class LoginPage {

    elementLogin = {
        email: () => cy.get('[placeholder="Username"]'),
        passWord: () => cy.get('[placeholder="Password"]'),
        checkBox: () => cy.get('[class ="checkbox pull-left"]'),
        btnLogin: () => cy.get('button').contains('Login')
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