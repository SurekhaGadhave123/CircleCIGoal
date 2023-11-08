import {TestScenario2} from "../pageObject/testScenario2";

describe('Test Scenario 2', () => {

  it('Visits LambdaTest Playground with Samsung Note 9 user agent', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-N960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Mobile Safari/537.36',
      },
    });
    cy.wait(7000)

    const  testscenario=new TestScenario2()

    //verify correct land page
    cy.url()
        .should('contain','selenium-playground')
    testscenario.getInputFormSubmitLink()
        .should('be.visible')
        .click({force:true});
    cy.url()
        .should("contain","input-form-demo")

    // Verify form accessibility with cypress-axe
    cy.log('Verifying Accessibility Standard')
    cy.get('#seleniumform').injectAxe()

    //fill all the form fields
    let data
    cy.fixture('testData').then((fdata)=>{
      data=fdata
    testscenario.getNameInput()
        .should('be.visible')
        .should('be.enabled')
        .type(data.formFields.name)
    testscenario.getEmailInput()
        .should('be.visible')
        .type(data.formFields.email)
    testscenario.getPasswordInput()
        .should('be.visible')
        .type(data.formFields.password)
    testscenario.getCompanyInput()
        .should('be.visible')
        .type(data.formFields.company)
    testscenario.getWebsiteInput()
        .should('be.visible')
        .type(data.formFields.website)
    testscenario.getCountryDrp()
        .should('be.visible')
        .select(data.formFields.country)
    testscenario.getCityInput()
        .should('be.visible')
        .type(data.formFields.city)
    testscenario.getAddress1Input()
        .should('be.visible')
        .type(data.formFields.address1)
    testscenario.getAddress2Input()
        .should('be.visible')
        .type(data.formFields.address2)
    testscenario.getStateInput()
        .should('be.visible')
        .type(data.formFields.state)
    testscenario.getZipcodeInput()
        .should('be.visible')
        .type(data.formFields.zipcode)
    testscenario.getSubmitBtn()
        .should('be.visible')
        .click({force:true})
    testscenario.getInputFormValidation()
        .should('be.visible')
    testscenario.getSuccessMsg()
        .should('exist')
        .and('contain',"Thanks for contacting us, we will get back to you shortly.")
        .invoke('text').then((text)=>{
          cy.log(text)
    })

  })
})
})