// import LoginPage from "@pages/loginPage";
import LoginPage from "pages/Login.page";
import { test as baseTest } from "@playwright/test";
import { Page } from "@playwright/test";



const test = baseTest.extend<{
    loginPage: LoginPage;

}>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },


})
export default test;
export const expect = test.expect;

