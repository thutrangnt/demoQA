
const { addProductPage } = require("../support/pageObject/addProductPage")
const { addPurchasePage } = require("../support/pageObject/addPurchasePage")
const { homePage } = require("../support/pageObject/homePage")
const { listProductPage } = require("../support/pageObject/listProductPage")
const { loginPage } = require("../support/pageObject/loginPage")
describe('template spec', () => {
  beforeEach('Open app', () => {
      cy.visit('https://sma.tecdiary.net/admin/login')
  })
  it('TC10: Verify add product at PurchasePage successfully', () => {
    loginPage.loginToHomePage('admin@tecdiary.com', '12345678')
    homePage.goToAddPurschases()
    addPurchasePage.goToAddProductPage()
    addProductPage.addProduct("Quan", "NTT126", "quan", "1.44", "1.22")
    listProductPage.verifyListProductPage()
  })
})