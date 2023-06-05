
const { homePage } = require("../support/pageObject/homePage")
const { loginPage } = require("../support/pageObject/loginPage")
describe('template spec', () => {
  beforeEach('Open app', () => {
      cy.visit('https://sma.tecdiary.net/admin/login')
  })
  it('verify login success',()=>{
    loginPage.loginToHomePage('admin@tecdiary.com','12345678')
    homePage.verifyLoginSuccess()
  })
})