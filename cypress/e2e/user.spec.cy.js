import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
    
    it.only('User Info Update - Success', () => {
       loginPage.accessLoginPage()
       loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

        dashboardPage.checkDashboardPage()

        menuPage.accessMyinfo()

        myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
        myInfoPage.fillEmployeeDetails('EmployeeId', 'Other Id', 'Drivers Number 123', '2025-10-30')
        myInfoPage.fillStatus()
        myInfoPage.saveForm()

    })

})

//npx cypress open