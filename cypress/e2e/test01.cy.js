
const { loginPage } = require("../support/pageObject/loginPage")
describe('template spec', () => {
  beforeEach('Open app', () => {
      cy.visit('https://sma.tecdiary.net/admin/login')
  })

  it('verify login page',()=>{
   
      loginPage.verifyLoginPage()
  })

})