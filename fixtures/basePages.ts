// import LoginPage from "@pages/loginPage";
import LoginPage from "pages/Login.page";
import { test as baseTest } from "@playwright/test";
import { Page } from "@playwright/test";
import MarketPlacePage from "pages/MarketPlace.page";



const test = baseTest.extend<{
    loginPage: LoginPage;
    MarketPlacePage: MarketPlacePage;

}>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    MarketPlacePage: async ({ page },use) => {
        await use(new MarketPlacePage(page));
    },


})
export default test;
export const expect = test.expect;



