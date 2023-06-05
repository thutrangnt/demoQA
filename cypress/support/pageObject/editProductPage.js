

export class EditProductPage {
    element = {
        productType: () => cy.xpath('//label[@for="type"]'),
        productName: () => cy.xpath('//label[@for="name"]'),
        productCode: () => cy.xpath('//label[@for="code"]'),
        productSlug: () => cy.xpath('//label[@for="slug"]'),
        productBarcode: () => cy.xpath('//label[@for="barcode_symbology"]')

    }
    verifyEditProductPage() {
        this.element.productType().should('have.text', "Product Type").and('be.visible')
        this.element.productName().should('have.text', "Product Name").and('be.visible')
        this.element.productCode().should('have.text', "Product Code").and('be.visible')
        this.element.productSlug().should('have.text', "Slug").and('be.visible')
        this.element.productBarcode().should('have.text', "Barcode Symbology").and('be.visible')


    }

}

export const editProductPage = new EditProductPage()