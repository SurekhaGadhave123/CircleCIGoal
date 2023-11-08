import {TestScenario1} from "../pageObject/testScenario1";

describe('Test Scenario 1', () => {
    let data
  before(() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.fixture('testData').then((fdata)=>{
        data=fdata
    })
  })

    it('User should be able to Handle Drag & Drop Sliders', () => {
        const  testscenario=new TestScenario1()
        cy.url()
            .should('contain','selenium-playground')
        testscenario.getDragAndDropSlidersLink()
            .should('be.visible')
            .click({force:true});
        cy.url()
            .should("contain","drag-drop-range-sliders-demo")
        testscenario.getSliderAtStartLink()
            .invoke('val', data.testScenario1.sliderEndValue)
            .trigger('input')
        testscenario.getSliderAtStartLink()
            .should('have.value',data.testScenario1.sliderEndValue)
    })
})