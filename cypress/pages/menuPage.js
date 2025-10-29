class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }

        return selectors
    }

    accessMyinfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

}

export default MenuPage
