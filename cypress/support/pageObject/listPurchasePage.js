
import moment from 'moment'
export class ListPurchasesPage {
    element = {
        referenceNo: () => cy.xpath('//th[text() = "Reference No"]')
    }
    getItemDateForRow(number) {
        return cy.xpath(`//tbody[@role="alert"]//tr[${number}]//td[2]`)

    }


    verifyFormatDateTimeForRow(number) {
        this.getItemDateForRow(number).invoke('text').then((text) => {
            const parsed = moment(text, 'DD/MM/yyyy HH:mm:ss')
            expect(parsed.format('DD/MM/yyyy HH:mm:ss')).to.eq(text)
        })

    }
    verifyReferenceNoOrderByDesc() {
        this.element.referenceNo().then((attr) => {
            expect(attr).to.have.attr('class', 'sorting_desc')
        })

    }
    verifyAddProductSuccess() {
        this.element.messsageAddProductSuccess().should('contain', "Product successfully added ")

    }

}

export const listPurchasesPage = new ListPurchasesPage()