export class AddProductPage{
    element ={

        inputProductName: ()=> cy.xpath('//input[@name="name"]'),
        inputProductCode: ()=> cy.xpath('//input[@name="code"]'),
        inputSlug: ()=> cy.xpath('//input[@name="slug"]'),

        dropDownCategory:()=> cy.xpath('//div[@id="s2id_category"]'),
        firstCategory: () =>cy.xpath('//ul[@id="select2-results-6"]//li[1]') ,

        dropDownUnit:()=> cy.xpath('//div[@id="s2id_unit"]'),
        firstUnit: () =>cy.xpath('//ul[@id="select2-results-7"]//li[2]') ,

        inputProductCost: ()=> cy.xpath('//input[@name="cost"]'),
        inputProductPrice: ()=> cy.xpath('//input[@name="price"]'),
        inputSubmit: ()=> cy.xpath('//input[@name="add_product"]'),

    }
    
    addProduct(name,code,slug, cost, price){
        this.element.inputProductName().clear().type(name)

        this.element.inputProductCode().clear().type(code)

        this.element.inputSlug().clear().type(slug)

        this.element.dropDownCategory().click()
        this.element.firstCategory().click()

        this.element.dropDownUnit().click()
        this.element.firstUnit().click()

        this.element.inputProductCost().type(cost)
        this.element.inputProductPrice().type(price)
       
        this.element.inputSubmit().click({force:true})

    }


}
export const addProductPage = new AddProductPage()
