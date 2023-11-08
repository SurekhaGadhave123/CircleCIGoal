export class TestScenario2{
    getInputFormSubmitLink() {
        return cy.findByText('Input Form Submit')
    }
    getNameInput() {
        return cy.get("input[id='name']")
    }
    getEmailInput() {
        return cy.get("input[placeholder='Email']")
    }
    getPasswordInput() {
        return cy.get("input[name='password']")
    }
    getCompanyInput() {
        return cy.get("input[id='company']")
    }
    getWebsiteInput() {
        return cy.get("input[placeholder='Website']")
    }
    getCountryDrp() {
        return cy.get("select[name='country']")
    }
    getCityInput() {
        return cy.get("input[name='city']")
    }
    getAddress1Input() {
        return cy.get("input[id='inputAddress1']")
    }
    getAddress2Input() {
        return cy.get("input[name='address_line2']")
    }
    getStateInput() {
        return cy.get("#inputState")
    }
    getZipcodeInput() {
        return cy.get("#inputZip")
    }
    getSubmitBtn() {
        return cy.findByText("Submit")
    }
    getInputFormValidation() {
        return cy.findByText("Input form validations")
    }
    getSuccessMsg() {
        return cy.get(".success-msg.hidden")
    }



}