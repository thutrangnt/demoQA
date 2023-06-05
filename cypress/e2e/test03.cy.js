
const { homePage } = require("../support/pageObject/homePage")
const { listProductPage } = require("../support/pageObject/listProductPage")
const { loginPage } = require("../support/pageObject/loginPage")
describe('template spec', () => {
  beforeEach('Open app', () => {
      cy.visit('https://sma.tecdiary.net/admin/login')
  })
  it('TC03 : verify list products', ()=>{
    loginPage.loginToHomePage('admin@tecdiary.com','12345678')
    homePage.goToListProduct()
    listProductPage.verifyListProductPage()


  })
})