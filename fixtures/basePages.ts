// import LoginPage from "@pages/loginPage";
import LoginPage from "pages/Login.page";
import { test as baseTest } from "@playwright/test";
import { Page } from "@playwright/test";
import MarketPlacePage from "pages/MarketPlace.page";
import HotDeals from "pages/HotDeals.page";
import AdminPanel_02 from "pages/AdminPanel_02.page";



const test = baseTest.extend<{
    loginPage: LoginPage;
    MarketPlacePage: MarketPlacePage;
    HotDeals: HotDeals;
    AdminPanel_02: AdminPanel_02;

}>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    MarketPlacePage: async ({ page },use) => {
        await use(new MarketPlacePage(page));
    },

    HotDeals: async ({ page },use) => {
        await use(new HotDeals(page));
    },

    AdminPanel_02: async ({ page }, use) => {
        await use(new AdminPanel_02(page));
    },


})
export default test;
export const expect = test.expect;



