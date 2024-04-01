// import LoginPage from "@pages/loginPage";
import LoginPage from "pages/Login.page";
import HomePage from "pages/homepagedashboard.page";
import { test as baseTest } from "@playwright/test";
import { Page } from "@playwright/test";



const test = baseTest.extend<{
    loginPage: LoginPage;
    homePage : HomePage;
}>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage : async ({page}, use) => {
        await use(new HomePage(page));
    }

})
export default test;
export const expect = test.expect;

