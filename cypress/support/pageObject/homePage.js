
export class HomePage {

    elementHomePage = {
        messageSuccess: () => cy.contains('You are successfully logged in.'),
        itemQuickLink: () => cy.contains('Quick Links'),
        itemQuickLink: () => cy.contains('Latest Five'),
        itemQuickLink: () => cy.contains('Best Sellers (Apr-2023)'),

        // menu bar:product
        product: () => cy.get('.mm_products'),
        listProduct: () => cy.get('#products_index'),
        printBarcode: () => cy.get('#products_print_barcodes'),

        // menu bar:sale
        sales: () => cy.get('.mm_sales'),
        addSale: () => cy.get('#sales_add'),

        purchases: () => cy.get('.mm_purchases'),
        listPurchases: () => cy.get('#purchases_index'),
        addPurchases: ()=> cy.get('#purchases_add'),
    }
    goToListProduct() {
        this.elementHomePage.product().click()
        this.elementHomePage.listProduct().click()
    }

    goToPrintBarCode() {
        this.elementHomePage.product().click()
        this.elementHomePage.printBarcode().click()
    }
    goToAddSales() {
        this.elementHomePage.sales().click()
        this.elementHomePage.addSale().click()
    }
    goToListPurchase() {
        this.elementHomePage.purchases().click()
        this.elementHomePage.listPurchases().click()
    }
    goToAddPurschases(){
        this.elementHomePage.purchases().click()
        this.elementHomePage.addPurchases().click()

    }
    verifyLoginSuccess() {
        this.elementHomePage.messageSuccess().should('have.text', 'You are successfully logged in.')

    }

}
export const homePage = new HomePage() 