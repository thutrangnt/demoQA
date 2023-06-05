export class AddSalesPage {
    element = {
        inputAddOn: () => cy.xpath('//div[@class ="input-group-addon no-print"][1]'),
        inputSelectCustomer: () => cy.xpath('//div[@id ="s2id_slcustomer"]'),
        inputSearch: () => cy.xpath('//div[@id="select2-drop"]//input'),
        resultSearch: () => cy.xpath('//div[@id="select2-drop"]//span'),

        addManually: () => cy.xpath('//a[@id="addManually"]'),
        btnSubmitSale: () => cy.xpath('//input[@id="add_sale"]'),

        messAddSaleSuccess: () => cy.xpath('//div[@class="alert alert-success"]')
    }
    // Select  customer
    selectCustomer() {
        this.element.inputSelectCustomer().click()
        this.element.inputSearch().type('a')

        this.element.resultSearch().click({ force: true })
    }
    // get locator of Add Product Manually dialog
    elementAddProduct = {

        inputProductCode: () => cy.xpath('//input[@id="mcode"]'),

        inputProductName: () => cy.xpath('//input[@id="mname"]'),

        productTax: () => cy.xpath('//div[@id="s2id_mtax"]'),
        firstProductTax: () => cy.xpath('//ul[@id="select2-results-10"]//li[1]'),

        inputQuantity: () => cy.xpath('//input[@id="mquantity"]'),

        unit: () => cy.xpath('//div[@id ="s2id_munit"]'),
        firstUnit: () => cy.xpath('//ul[@id="select2-results-11"]//li[1]'),

        inputUnitPrice: () => cy.xpath('//input[@id="mprice"]'),
        btnSubmit: () => cy.xpath('//button[@id="addItemManually"]')

    }
    // method Add Product Manually 
    addProductManually() {
        this.element.addManually().click()
        this.elementAddProduct.inputProductCode().type("123")
        this.elementAddProduct.inputProductName().type("Quan")

        this.elementAddProduct.productTax().click()
        this.elementAddProduct.firstProductTax().click()

        this.elementAddProduct.inputQuantity().type("1")
        this.elementAddProduct.unit().click

        this.elementAddProduct.inputUnitPrice().type("1.00")
        this.elementAddProduct.btnSubmit().click()

    }
    // Click button to add Sale
    submitAddSale() {
        this.element.btnSubmitSale().click()

    }
    verifyAddSaleSuccessfully() {
        this.element.messAddSaleSuccess().should('contain', 'Sale successfully added')

    }
}
export const addSalesPage = new AddSalesPage()