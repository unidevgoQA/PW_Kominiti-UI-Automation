import { expect} from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "@playwright/test";
import { waitForDebugger } from "inspector";

export default class AdminPanel_02{
        //static checkURLShareWithFB: any;
        static AdminPanel_02() {
                throw new Error('Method not implemented.');
        }

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
            this.page = page;
        }
    
        private AdminPanelElements = {

            OtherModules: "ul#main-menu-navigation>li:nth-of-type(6)>a",
            InviteUsers: "(//li[@class='nav-item is-shown']//a)[1]",
            InviteNewUser: "//a[contains(@class,'btn btn-raised')]",
            BackBtnInviteNewUser: "//a[contains(@class,'btn btn-raised')]",

        
        };



        // Module Name: Kominiti | Hot Deals redirect
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Validate Hot Deals redirect
        async otherModules() {
            const OtherModules = await this.page.locator(this.AdminPanelElements.OtherModules)
            try {

            await OtherModules.click({ button: "left", delay: 100 })

            } catch (error) {
            throw new Error(`Other modules | Could Not Find Locator:"${error}"`)
            }  
        }

        async InviteUsers() {
            const InviteUsers = await this.page.locator(this.AdminPanelElements.InviteUsers)
            try {
            await InviteUsers.click({ button: "left", delay: 100 })

            } catch (error) {
            throw new Error(`Other modules | Invite Users | Could Not Find Locator:"${error}"`)
            }  
        }

















}