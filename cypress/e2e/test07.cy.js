
const { homePage } = require("../support/pageObject/homePage")
const { loginPage } = require("../support/pageObject/loginPage")
const { printBarcodePage } = require("../support/pageObject/printBarcodePage")
describe('template spec', () => {
  beforeEach('Open app', () => {
      cy.visit('https://sma.tecdiary.net/admin/login')
  })
  it('TC07 : Verify create Print Barcode/Label successfully', ()=>{
    loginPage.loginToHomePage('admin@tecdiary.com','12345678')
    homePage.goToPrintBarCode()
    printBarcodePage.addItemProduct('Kiwi')
    printBarcodePage.getStyleOption('18 per sheet (a4) (2.5" x 1.835")')
    printBarcodePage.checkPrintCheckBox()
    printBarcodePage.clickUpdate()
    printBarcodePage.verifyCreatePrintBarcodeSuccessfully()
    
  })
})