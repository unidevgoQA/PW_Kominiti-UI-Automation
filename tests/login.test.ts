
import ENV from '../utils/env'
import test, { expect } from "@fixtures/basePages"
import ENV2 from '../utils/env2'


test('Kominiti-001 | Validate User Can Login Successfully With Valid Credentials', async ({ page, loginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV.BASE_URL);
        })
        await test.step('Click On sign In Button', async () => {
                await loginPage.clickSignInBtn()
        })
        await test.step('User Login Functionality', async () => {
                await loginPage.userlogin(ENV.EMAIL, ENV.PASSWORD)
                await page.waitForLoadState("networkidle")
        })
})

