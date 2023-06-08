
const { homePage } = require("../support/pageObject/homePage")
const { listPurchasesPage } = require("../support/pageObject/listPurchasePage")
const { loginPage } = require("../support/pageObject/loginPage")
describe('template spec', () => {
  beforeEach('Open app', () => {
      cy.visit('https://sma.tecdiary.net/admin/login')
  })
  
  it('Verify Purchases List', ()=>{
    loginPage.loginToHomePage('admin@tecdiary.com','12345678')
    homePage.goToListPurchase()
    listPurchasesPage.verifyFormatDateTimeForRow(1)
    listPurchasesPage.verifyReferenceNoOrderByDesc()
  })
})