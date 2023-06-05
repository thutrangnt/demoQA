
export class DetailProductPage {

    element = {
        img: () => cy.xpath('//img[@alt ="Lemon"]'),
        barCode: () => cy.xpath('//img[@class ="bcimg"]'),
        qrCode: () => cy.xpath('//img[@class ="qrimg"]'),
        type: () => cy.xpath('//td[text()= "Type"]//following-sibling::td'),
        name: () => cy.xpath('//td[text()= "Name"]//following-sibling::td'),
        code: () => cy.xpath('//td[text()= "Code"]//following-sibling::td'),
        brand: () => cy.xpath('//td[text()= "Brand"]//following-sibling::td'),
        category: () => cy.xpath('//td[text()= "Category"]//following-sibling::td'),
        unit: () => cy.xpath('//td[text()= "Unit"]//following-sibling::td'),
        cost: () => cy.xpath('//td[text()= "Cost"]//following-sibling::td'),
        price: () => cy.xpath('//td[text()= "Price"]//following-sibling::td'),
        taxRate: () => cy.xpath('//td[text()= "Tax Rate"]//following-sibling::td'),
        taxMethod: () => cy.xpath('//td[text()= "Tax Method"]//following-sibling::td'),
        alertQuantity: () => cy.xpath('//td[text()= "Alert Quantity"]//following-sibling::td'),

        edit: () => cy.xpath('//a[@data-original-title="Edit Product"]')
    }
    goToEditPage() {
        this.element.edit().click()
    }
    verifyDetailProduct() {
        this.element.img().should('be.visible')
        this.element.barCode().should('be.visible')
        this.element.qrCode().should('be.visible')
        this.element.type().should('have.text', 'Standard')
        this.element.name().should('have.text', 'Lemon')
        this.element.code().should('have.text', 'FFR03')
        this.element.brand().should('have.text', '')
        this.element.category().should('have.text', 'Fruits')
        this.element.unit().should('have.text', 'Piece (pc)')
        this.element.cost().should('have.text', 1.95)
        this.element.price().should('have.text', '3.00')
        this.element.taxRate().should('have.text', 'GST @0%')
        this.element.taxMethod().should('have.text', 'Inclusive')
        this.element.alertQuantity().should('have.text', '5.00')
    }
}
export const detailProduct = new DetailProductPage()
