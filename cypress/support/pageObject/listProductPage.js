 
export class ListProductPage {
    element = {
        // get title of table Product
        image: () => cy.xpath('//th[@aria-label ="Image"]'),
        code: () => cy.xpath('//th[contains(text(),"Code")]'),
        name: () => cy.xpath('//th[contains(text(),"Name")]'),
        brand: () => cy.xpath('//th[contains(text(),"Brand")]'),
        category: () => cy.xpath('//th[contains(text(),"Category")]'),
        cost: () => cy.xpath('//th[contains(text(),"Cost")]'),
        price: () => cy.xpath('//th[contains(text(),"Price")]'),
        quantity: () => cy.xpath('//th[contains(text(),"Quantity")]'),
        unit: () => cy.xpath('//th[contains(text(),"Unit")]'),
        alertQuantity: () => cy.xpath('//th[contains(text(),"Alert Quantity")]'),
        action: () => cy.xpath('//th[contains(text(),"Actions")]'),
        
        search: () => cy.xpath('//div[@class="dataTables_filter"]//input'),    
    
    }

   
    // get data test. For example : Lemon
    getItemInListProduct(item){
        // return cy.get('td').contains(item)
        return cy.xpath(`//td[text() = "${item}"]`)
    }

    clickToItemProduct(item){
        this.getItemInListProduct(item).click()
    }
    serachItemProoduct(item){
        this.element.search().type(item)
    }
    verifyListProductPage(){
        this.element.image().should('be.visible')
        this.element.code().should('be.visible')
        this.element.name().should('be.visible')
        this.element.brand().should('be.visible')
        this.element.category().should('be.visible')
        this.element.cost().should('be.visible')
        this.element.price().should('be.visible')
        this.element.quantity().should('be.visible')
        this.element.unit().should('be.visible')
        this.element.alertQuantity().should('be.visible')
        this.element.action().should('be.visible')
    }

}
export const listProductPage = new ListProductPage()