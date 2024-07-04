// import LoginPage from "@pages/loginPage";
import LoginPage from "pages/Login.page";
import HomePage from "pages/homepagedashboard.page";
import AdminLoginPage from "pages/AdminLogin.page"
import { test as baseTest } from "@playwright/test";
import { Page } from "@playwright/test";



const test = baseTest.extend<{
    loginPage: LoginPage;
    homePage : HomePage;
    adminloginPage : AdminLoginPage
}>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage : async ({page}, use) => {
        await use(new HomePage(page));
    },

    adminloginPage : async ({page}, use) => {
        await use(new AdminLoginPage(page));
    }

})
export default test;
export const expect = test.expect;

