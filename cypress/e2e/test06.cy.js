
const { homePage } = require("../support/pageObject/homePage")
const { loginPage } = require("../support/pageObject/loginPage")
const { printBarcodePage } = require("../support/pageObject/printBarcodePage")
describe('template spec', () => {
  beforeEach('Open app', () => {
      cy.visit('https://sma.tecdiary.net/admin/login')
  })
  it('TC06: Verify Print Barcode/Label page', ()=>{
    loginPage.loginToHomePage('admin@tecdiary.com','12345678')
    homePage.goToPrintBarCode()
    printBarcodePage.verifyPrintBarcodeElement()
    
  })
})