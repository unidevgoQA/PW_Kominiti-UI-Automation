import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
export default class LoginPage {
        // [x: string]: any;
        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }
        private loginPageElements = {
                emailInputField: "//input[@type='mail']",
                passwordInputField: "//input[@type='password']",
                loginBtn: "//button[text()='Sign In']",
                homeTabEle: "//a[contains(text(),'Home')]",
                signInBtn: `//button[text()='Sign In']`,

                //Admin portal
                AdminEmail:"//input[@placeholder='E-mail']",
                AdminPassword: "//input[@type='password']",
                LoginBtn:"(//button[@type='submit'])[1]"



        }



        // Module Name: Kominiti | Home
        // Feature Name: SignIn
        // Screen Type: Desktop
        // Description: Click On The Sign In Button For A User Login
        async clickSignInBtn() {
                const ele = await this.page.locator(this.loginPageElements.signInBtn)
                try {
                        await ele.click({ button: "left", delay: 100 })
                } catch (error) {
                        throw new Error(`Home Page | Sign In Button Is Not Visible | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | SignIn
        // Feature Name: SignIn
        // Screen Type: Desktop
        // Description: Login Helper
        async userlogin(email: string, password: string) {
                const emailInput = await this.page.locator(this.loginPageElements.emailInputField)
                const passInputField = await this.page.locator(this.loginPageElements.passwordInputField)
                const loginBtn = await this.page.locator(this.loginPageElements.loginBtn)
                const homeTab = this.page.locator(this.loginPageElements.homeTabEle)
                try {
                        await emailInput.fill(email)
                        await passInputField.fill(password)
                        await loginBtn.click({ button: "left", delay: 100 })
                        await this.page.waitForSelector(this.loginPageElements.homeTabEle)
                } catch (error) {
                        throw new Error(`Sign In | Sign In Funtionality Does Not Work Properly | Could Not Find Locator:"${error}"`)
                }
        }




        // Module Name: Kominiti(Admin Portal) | SignIn
        // Feature Name: SignIn
        // Screen Type: Desktop
        // Description: Login Helper
        async userloginAdmin(email: string, password: string) {
                const AdminEmail = await this.page.locator(this.loginPageElements.AdminEmail)
                const AdminPassword = await this.page.locator(this.loginPageElements.AdminPassword)
               
                try {
                        await AdminEmail.fill(email)
                        await AdminPassword.fill(password)
                } catch (error) {
                        throw new Error(`Sign In (admin portal) | Sign In Funtionality Does Not Work Properly | Could Not Find Locator:"${error}"`)
                }
        }



        // Module Name: Kominiti(Admin Panel) | Home
        // Feature Name: SignIn
        // Screen Type: Desktop
        // Description: Click On The Sign In Button For A User Login
        async clickLoginBtnAdmin() {
                const LoginBtn = await this.page.locator(this.loginPageElements.LoginBtn)
                try {
                        await LoginBtn.click({ button: "left", delay: 100 })
                } catch (error) {
                        throw new Error(`Admin | Sign In Button Is Not Visible | Could Not Find Locator:"${error}"`)
                }
        }

}