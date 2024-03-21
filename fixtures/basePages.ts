// import LoginPage from "@pages/loginPage";
import LoginPage from "pages/Login.page";
import { test as baseTest } from "@playwright/test";
import { Page } from "@playwright/test";
import MarketPlacePage from "pages/MarketPlace.page";
import HotDeals from "pages/HotDeals.page";



const test = baseTest.extend<{
    loginPage: LoginPage;
    MarketPlacePage: MarketPlacePage;
    HotDeals: HotDeals;

}>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    MarketPlacePage: async ({ page },use) => {
        await use(new MarketPlacePage(page));
    },

    HotDeals: async ({ page },use) => {
        await use(new HotDeals(page));
    }


})
export default test;
export const expect = test.expect;



