export class AddPurchasePage{
    element ={

        inputGroupAddon:()=> cy.xpath('//a[@id ="addManually1"]')
    
    }
    goToAddProductPage(){
        this.element.inputGroupAddon().click() 
    }
}
export const addPurchasePage = new AddPurchasePage()