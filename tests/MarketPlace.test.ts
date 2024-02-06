import ENV from '../utils/env'
import test, { expect } from "@fixtures/basePages"
import MarketPlacePage from 'pages/MarketPlace.page'


test('Kominiti-065 | Marketplace | Validate that the user redirect to adding page when create project is clicked', async ({page, loginPage, MarketPlacePage}) => {

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

    //marketplace
    await test.step('Marketplace redirects on click',async () => {
           await MarketPlacePage.MarketPlaceRedirct()
                
    })
    await test.step("Create project from MarketPlace",async () => {
            await MarketPlacePage.CreateProject()
            await page.waitForLoadState("networkidle")
            await expect(page).toHaveURL(/create-project/)

    })

})

test('Kominiti-066 | Marketplace | Validate that the mandatory field warnings are showing and user can fillup Overview and save & continue to next stage', async ({page, loginPage, MarketPlacePage}) => {

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

    //marketplace
    await test.step('Marketplace redirects on click',async () => {
           await MarketPlacePage.MarketPlaceRedirct()
                
    })
    await test.step("Create project from MarketPlace",async () => {
            await MarketPlacePage.CreateProject()
            await page.waitForLoadState("networkidle")
            await expect(page).toHaveURL(/create-project/)

    })
    await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
        await MarketPlacePage.MarketPlaceRedirct()
        await MarketPlacePage.CreateProject()
        await MarketPlacePage.OverviewMandatoryCheck()
            
        })

    await test.step("Save project from Overview",async () => {
        await MarketPlacePage.OverviewProjectTitlte("I need to have some testing elements")
        await MarketPlacePage.OverviewProjectCategory()
        await MarketPlacePage.OverviewProjectSubCategory()
        await MarketPlacePage.OverviewKeyword()
        await MarketPlacePage.OverviewAddBtn()
        await MarketPlacePage.SaveNContinue()

        })


})

test('Kominiti-067 | Marketplace | Create project | Validate that the mandatory field warnings are showing and user can fillup Description & FAQ (with add question)  and save & continue to next stage ', async ({page, loginPage, MarketPlacePage}) => {

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
    
        //marketplace
        await test.step('Marketplace redirects on click',async () => {
               await MarketPlacePage.MarketPlaceRedirct()
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.CreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.MarketPlaceRedirct()
            await MarketPlacePage.CreateProject()
            await MarketPlacePage.OverviewMandatoryCheck()
            await page.waitForTimeout(300)
                
        })
    
        await test.step("Save project from Overview",async () => {
            await MarketPlacePage.OverviewProjectTitlte("I need to have some testing elements")
            await MarketPlacePage.OverviewProjectCategory()
            await page.waitForTimeout(300)
            await MarketPlacePage.OverviewProjectSubCategory()
            await MarketPlacePage.OverviewKeyword()
            await page.waitForTimeout(500)
            await MarketPlacePage.OverviewAddBtn()
            await MarketPlacePage.SaveNContinue()
    
        })

        //DescriptionFAQ
        await test.step("Save project for Description & FAQ",async () => {
                await MarketPlacePage.DescriptionFaq("Testing with the automation. again repeating Testing with the automation")
                await MarketPlacePage.PrjectType()
                await MarketPlacePage.BidProject()
                await MarketPlacePage.BidProject()
                await MarketPlacePage.ClickAddQuestion("How are you today?","Fine very good")
                await MarketPlacePage.SaveNContinue()

        })

    
    
})

test.only('Kominiti-068 | Marketplace | Create project | Validate that the user can select from dropdown in pricing and save & continue to next stage ', async ({page, loginPage, MarketPlacePage}) => {

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
    
        //marketplace
        await test.step('Marketplace redirects on click',async () => {
               await MarketPlacePage.MarketPlaceRedirct()
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.CreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.MarketPlaceRedirct()
            await MarketPlacePage.CreateProject()
            await MarketPlacePage.OverviewMandatoryCheck()
            await page.waitForTimeout(300)
                
        })
    
        await test.step("Save project from Overview",async () => {
            await MarketPlacePage.OverviewProjectTitlte("I need to have some testing elements")
            await MarketPlacePage.OverviewProjectCategory()
            await page.waitForTimeout(300)
            await MarketPlacePage.OverviewProjectSubCategory()
            await MarketPlacePage.OverviewKeyword()
            await page.waitForTimeout(500)
            await MarketPlacePage.OverviewAddBtn()
            await MarketPlacePage.SaveNContinue()
    
        })

        //DescriptionFAQ
        await test.step("Save project for Description & FAQ",async () => {
                await MarketPlacePage.DescriptionFaq("Testing with the automation. again repeating Testing with the automation")
                await MarketPlacePage.PrjectType()
                await MarketPlacePage.BidProject()
                await MarketPlacePage.BidProject()
                await MarketPlacePage.ClickAddQuestion("How are you today?","Fine very good")
                await MarketPlacePage.SaveNContinue()

        })

        //pricing
        await test.step("Save project for pricing",async () => {
                await MarketPlacePage.Pricing("100","500")
        })

    
    
})