/// <reference types="cypress" /> 

export class PrintBarcodePage {
    element = {
        addProduct: () => cy.xpath('//input[@name="add_item"]'),
        style: () => cy.xpath('//div[@id="s2id_style"]'),
        // site_name: ()=> cy.xpath('//input[@name="site_name"]'),

        site_name: () => cy.xpath('//input[@name="site_name"]//parent::div'),
        product_name: () => cy.xpath('//input[@name="product_name"]//parent::div'),
        price: () => cy.xpath('//input[@name="price"]//parent::div'),
        currencies: () => cy.xpath('//input[@name="currencies"]//parent::div'),
        unit: () => cy.xpath('//input[@name="unit"]//parent::div'),
        category: () => cy.xpath('//label[@for="category"]'),
        variants: () => cy.xpath('//label[@for="variants"]'),
        product_image: () => cy.xpath('//label[@for="product_image"]'),
        check_promo: () => cy.xpath('//label[@for="check_promo"]'),

        listBox: () => cy.xpath('//ul[@id= "select2-results-1"]'),
        btnSubmit: () => cy.xpath('//input[@value="Update"]'),
        form: () => cy.xpath('//form[@id="barcode-print-form"]')
    }

    elementAfterUpdate = {
        image: () => cy.xpath('//span[@class="product_image"]'),
        barcode_site: () => cy.xpath('//span[@class="barcode_site"]'),
        barcode_name: () => cy.xpath('//span[@class="barcode_name"]'),
        barcode_price: () => cy.xpath('//span[@class="barcode_price"]'),
        barcode_unit: () => cy.xpath('//span[@class="barcode_unit"]'),
        barcode_category: () => cy.xpath('//span[@class="barcode_category"]'),
        barcode_image: () => cy.xpath('//span[@class="barcode_image"]'),

    }

    addItemProduct(item) {
        this.element.addProduct().type(item);
        cy.wait(2000)
    }
    getStyleOption(item) {
        this.element.style().click()
        this.element.listBox().contains(item).click()

    }
    checkPrintCheckBox() {
        // this.element.parent_site_name().click()
        // this.element.site_name().uncheck({force:true})
        // this.element.product_name()
        // this.element.price().click()
        this.element.currencies().click()
        this.element.unit().click()
        this.element.category().click()
        this.element.variants().click()
        this.element.product_image().click()
        // this.element.check_promo().click()
    }
    clickUpdate() {
        this.element.btnSubmit().click({ force: true })
    }
    verifyPrintBarcodeElement() {
        this.element.addProduct().should('be.visible')
        this.element.style().should('be.visible')
        this.element.site_name().should('be.visible')
        this.element.product_name().should('be.visible')
        this.element.price().should('be.visible')
        this.element.currencies().should('be.visible')
        this.element.unit().should('be.visible')
        this.element.category().should('be.visible')
        this.element.variants().should('be.visible')
        this.element.product_image().should('be.visible')
        this.element.check_promo().should('be.visible')

    }
    verifyCreatePrintBarcodeSuccessfully() {
        this.elementAfterUpdate.image().should('be.visible')
        this.elementAfterUpdate.barcode_site().should('be.visible')
        this.elementAfterUpdate.barcode_name().should('be.visible')
        this.elementAfterUpdate.barcode_price().should('be.visible')
        this.elementAfterUpdate.barcode_unit().should('be.visible')
        this.elementAfterUpdate.barcode_category().should('be.visible')
        this.elementAfterUpdate.barcode_image().should('be.visible')

    }

}
export const printBarcodePage = new PrintBarcodePage()