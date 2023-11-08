export class TestScenario1{
    getDragAndDropSlidersLink() {
        return cy.findByText('Drag & Drop Sliders')
    }
    getSliderAtStartLink() {
        return cy.get("input[value='15']")
    }
    getSliderAtEndLink() {
        return cy.get("input[value='95']")
    }
}