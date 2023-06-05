const { detailProduct } = require("../support/pageObject/detailProduct")
const { editProductPage } = require("../support/pageObject/editProductPage")
const { homePage } = require("../support/pageObject/homePage")
const { listProductPage } = require("../support/pageObject/listProductPage")
const { loginPage } = require("../support/pageObject/loginPage")
describe('template spec', () => {
  beforeEach('Open app', () => {
      cy.visit('https://sma.tecdiary.net/admin/login')
  })
  
  it('TC05 : Verify Edit product',()=>{
    loginPage.loginToHomePage('admin@tecdiary.com','12345678')
    homePage.goToListProduct()
    listProductPage.serachItemProoduct("Mouse")
    listProductPage.clickToItemProduct("Mouse")
    detailProduct.goToEditPage()
    // verify 
    editProductPage.verifyEditProductPage()
  })
})