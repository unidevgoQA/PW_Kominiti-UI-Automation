// import LoginPage from "@pages/loginPage";
import LoginPage from "pages/Login.page";
import { test as baseTest } from "@playwright/test";
import { Page } from "@playwright/test";
import MarketPlacePage from "pages/MarketPlace.page";
import NewPage from "pages/NewPage.page";



const test = baseTest.extend<{
    loginPage: LoginPage;
    MarketPlacePage: MarketPlacePage;
    newpage: NewPage;

}>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    MarketPlacePage: async ({ page },use) => {
        await use(new MarketPlacePage(page));
    },

    newpage: async ({ page },use) => {
        await use(new NewPage(page));
    }


})
export default test;
export const expect = test.expect;



