import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

    const selectorsList = {
        
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: "[placeholder='yyyy-dd-mm']",
        dateCloseButton: ".--close",
        submitButton: "[type='submit']",
        submitButton: ".orangehrm-left-space"

    }

    it.only('User Info Update - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

        dashboardPage.checkDashboardPage()

        menuPage.accessMyinfo()

    
        cy.get(selectorsList.firstNameField).clear().type('Kaique')
        cy.get(selectorsList.lastNameField).clear().type('Rangel')
        cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
        cy.get(selectorsList.genericField).eq(4).clear().type('OtherId')
        cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTeste')
        cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
        cy.get(selectorsList.dateCloseButton).click()
        cy.get(selectorsList.submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    })
    it('Login - Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userFail.username)
        cy.get(selectorsList.passwordField).type(userData.userFail.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert)
    })
})

//npx cypress open

//it('teste', function() {});