import ENV from '../utils/env'
import test, { expect } from "@fixtures/basePages"
import MarketPlacePage from 'pages/MarketPlace.page'
import { title } from 'process'
import NewPage from 'pages/NewPage.page'



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
           await MarketPlacePage.clickOnMarketPlaceToRedirct()
                
    })
    await test.step("Create project from MarketPlace",async () => {
            await MarketPlacePage.clickOnCreateProject()
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
           await MarketPlacePage.clickOnMarketPlaceToRedirct()
                
    })
    await test.step("Create project from MarketPlace",async () => {
            await MarketPlacePage.clickOnCreateProject()
            await page.waitForLoadState("networkidle")
            await expect(page).toHaveURL(/create-project/)

    })
    await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
        await MarketPlacePage.clickOnMarketPlaceToRedirct()
        await MarketPlacePage.clickOnCreateProject()
        await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
            
        })

    await test.step("Save project from Overview",async () => {
        await MarketPlacePage.overviewScrProjectTitlteInputfield("I need to have some testing elements")
        await MarketPlacePage.overviewProjectCategoryselectDropdown()
        await MarketPlacePage.overviewProjectSubCategorySelectDropdown()
        await MarketPlacePage.overviewInputFieldKeyword()
        await MarketPlacePage.OverviewClickAddBtn()
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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await MarketPlacePage.clickOnCreateProject()
            await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
            await page.waitForTimeout(300)
                
        })
    
        await test.step("Save project from Overview",async () => {
            await MarketPlacePage.overviewScrProjectTitlteInputfield("I need to have some testing elements")
            await MarketPlacePage.overviewProjectCategoryselectDropdown()
            await page.waitForTimeout(300)
            await MarketPlacePage.overviewProjectSubCategorySelectDropdown()
            await MarketPlacePage.overviewInputFieldKeyword()
            await page.waitForTimeout(500)
            await MarketPlacePage.OverviewClickAddBtn()
            await MarketPlacePage.SaveNContinue()
    
        })

        //descriptionFaqProjectDesInputField
        await test.step("Save project for Description & FAQ",async () => {
                await MarketPlacePage.descriptionFaqProjectDesInputField("Testing with the automation. again repeating Testing with the automation")
                await MarketPlacePage.descriptionFaqProjectTypeOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqClickAddQuestion("How are you today?","Fine very good")
                await MarketPlacePage.SaveNContinue()

        })

    
    
})

test('Kominiti-068 | Marketplace | Create project | Validate that the user can select from dropdown in pricing and save & continue to next stage ', async ({page, loginPage, MarketPlacePage}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await MarketPlacePage.clickOnCreateProject()
            await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
            await page.waitForTimeout(300)
                
        })
    
        await test.step("Save project from Overview",async () => {
            await MarketPlacePage.overviewScrProjectTitlteInputfield("I need to have some testing elements")
            await MarketPlacePage.overviewProjectCategoryselectDropdown()
            await page.waitForTimeout(300)
            await MarketPlacePage.overviewProjectSubCategorySelectDropdown()
            await MarketPlacePage.overviewInputFieldKeyword()
            await page.waitForTimeout(500)
            await MarketPlacePage.OverviewClickAddBtn()
            await MarketPlacePage.SaveNContinue()
    
        })

        //descriptionFaqProjectDesInputField
        await test.step("Save project for Description & FAQ",async () => {
                await MarketPlacePage.descriptionFaqProjectDesInputField("Testing with the automation. again repeating Testing with the automation")
                await MarketPlacePage.descriptionFaqProjectTypeOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqClickAddQuestion("How are you today?","Fine very good")
                await MarketPlacePage.SaveNContinue()

        })

        //pricing
        await test.step("Save project for pricing",async () => {
                await MarketPlacePage.Pricing("100","500")
        })

    
    
})

test('Kominiti-069 | Marketplace | Create project | Marketplace | Create Project |  Validate that the mandatory field warnings are showing and user can fillup RequirementsDeadlinesDrpdn and save & continue to next stage ', async ({page, loginPage, MarketPlacePage}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await MarketPlacePage.clickOnCreateProject()
            await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
            await page.waitForTimeout(300)
                
        })
    
        await test.step("Save project from Overview",async () => {
            await MarketPlacePage.overviewScrProjectTitlteInputfield("I need to have some testing elements")
            await MarketPlacePage.overviewProjectCategoryselectDropdown()
            await page.waitForTimeout(300)
            await MarketPlacePage.overviewProjectSubCategorySelectDropdown()
            await MarketPlacePage.overviewInputFieldKeyword()
            await page.waitForTimeout(500)
            await MarketPlacePage.OverviewClickAddBtn()
            await MarketPlacePage.SaveNContinue()
    
        })

        //descriptionFaqProjectDesInputField
        await test.step("Save project for Description & FAQ",async () => {
                await MarketPlacePage.descriptionFaqProjectDesInputField("Testing with the automation. again repeating Testing with the automation")
                await MarketPlacePage.descriptionFaqProjectTypeOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqClickAddQuestion("How are you today?","Fine very good")
                await MarketPlacePage.SaveNContinue()

        })

        //pricing
        await test.step("Save project for pricing",async () => {
                await MarketPlacePage.Pricing("100","500")
        })

        //RequirementsDeadlinesDrpdn 
        await test.step("Check empty field mandatory warning while clicking save and continue",async () => {
                await MarketPlacePage.SaveNContinue()
                await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
                await page.waitForTimeout(500)
        })

        await test.step("Save project from RequirementsDeadlinesDrpdn",async () => {
                await MarketPlacePage.requirementsDeadlinesDrpdn("05/06/2024")
                await MarketPlacePage.SaveNContinue()
                
        })

    
    
})

test('Kominiti-070 | Marketplace | Create Project | Validate gallery that the mandatory field warnings are showing and user can upload photo in attachment and save & continue to next stage ', async ({page, loginPage, MarketPlacePage}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await MarketPlacePage.clickOnCreateProject()
            await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
            await page.waitForTimeout(300)
                
        })
    
        await test.step("Save project from Overview",async () => {
            await MarketPlacePage.overviewScrProjectTitlteInputfield("I need to have some testing elements")
            await MarketPlacePage.overviewProjectCategoryselectDropdown()
            await page.waitForTimeout(300)
            await MarketPlacePage.overviewProjectSubCategorySelectDropdown()
            await MarketPlacePage.overviewInputFieldKeyword()
            await page.waitForTimeout(500)
            await MarketPlacePage.OverviewClickAddBtn()
            await MarketPlacePage.SaveNContinue()
    
        })

        //descriptionFaqProjectDesInputField
        await test.step("Save project for Description & FAQ",async () => {
                await MarketPlacePage.descriptionFaqProjectDesInputField("Testing with the automation. again repeating Testing with the automation")
                await MarketPlacePage.descriptionFaqProjectTypeOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqClickAddQuestion("How are you today?","Fine very good")
                await MarketPlacePage.SaveNContinue()

        })

        //pricing
        await test.step("Save project for pricing",async () => {
                await MarketPlacePage.Pricing("100","500")
        })

        //RequirementsDeadlinesDrpdn 
        await test.step("Check empty field mandatory warning while clicking save and continue",async () => {
                await MarketPlacePage.SaveNContinue()
                await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
                await page.waitForTimeout(500)
        })

        await test.step("Save project from Requirements",async () => {
                await MarketPlacePage.requirementsDeadlinesDrpdn("05/06/2024")
                await MarketPlacePage.requirementsPjtDuration()
                await MarketPlacePage.requirementsExpernceLvl()
                await MarketPlacePage.requirementsSkills()
                await MarketPlacePage.SaveNContinue()
                
        })

        //attachment
        // await test.step("Check empty field mandatory warning while clicking save and continue",async () => {
        //         await MarketPlacePage.SaveNContinue()
        //         await MarketPlacePage.overviewScreenMandatoryFieldCheck("Select File")
        //         await page.waitForTimeout(500)
        // })

        await test.step("Upload image fom Attacehment_1",async () => {
                await MarketPlacePage.logoImageUploadFunction_1()
                await MarketPlacePage.createPojectAttachment_1()
                await page.waitForTimeout(300)
        })
        await test.step("Upload Image for Attachment_2",async () => {
                await MarketPlacePage.logoImageUploadFunction_2()
                await MarketPlacePage.createPojectAttachment_2()
                await page.waitForTimeout(300)
                await MarketPlacePage.SaveNContinue()
        })


        await test.step("Save project from Preview",async () => {
                await MarketPlacePage.finalSaveBtn()
                await page.waitForTimeout(7000)
        })


    
    
})

test('Kominiti-072 | Marketplace | Create Project | Validate cancelling the project successfully cancelled ', async ({page, loginPage, MarketPlacePage}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await MarketPlacePage.clickOnCreateProject()
            await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
            await page.waitForTimeout(300)
                
        })
    
        await test.step("Save project from Overview",async () => {
            await MarketPlacePage.overviewScrProjectTitlteInputfield("I need to have some testing elements")
            await MarketPlacePage.overviewProjectCategoryselectDropdown()
            await page.waitForTimeout(300)
            await MarketPlacePage.overviewProjectSubCategorySelectDropdown()
            await MarketPlacePage.overviewInputFieldKeyword()
            await page.waitForTimeout(500)
            await MarketPlacePage.OverviewClickAddBtn()
            await MarketPlacePage.SaveNContinue()
    
        })

        //descriptionFaqProjectDesInputField
        await test.step("Save project for Description & FAQ",async () => {
                await MarketPlacePage.descriptionFaqProjectDesInputField("Testing with the automation. again repeating Testing with the automation")
                await MarketPlacePage.descriptionFaqProjectTypeOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqBidProjectOption()
                await MarketPlacePage.descriptionFaqClickAddQuestion("How are you today?","Fine very good")
                await MarketPlacePage.SaveNContinue()

        })

        //pricing
        await test.step("Save project for pricing",async () => {
                await MarketPlacePage.Pricing("100","500")
        })

        //RequirementsDeadlinesDrpdn 
        await test.step("Check empty field mandatory warning while clicking save and continue",async () => {
                await MarketPlacePage.SaveNContinue()
                await MarketPlacePage.overviewScreenMandatoryFieldCheck("This field is required")
                await page.waitForTimeout(500)
        })

        await test.step("Save project from Requirements",async () => {
                await MarketPlacePage.requirementsDeadlinesDrpdn("05/06/2024")
                await MarketPlacePage.requirementsPjtDuration()
                await MarketPlacePage.requirementsExpernceLvl()
                await MarketPlacePage.requirementsSkills()
                await MarketPlacePage.SaveNContinue()
                
        })

        //attachment
        // await test.step("Check empty field mandatory warning while clicking save and continue",async () => {
        //         await MarketPlacePage.SaveNContinue()
        //         await MarketPlacePage.overviewScreenMandatoryFieldCheck("Select File")
        //         await page.waitForTimeout(500)
        // })

        await test.step("Upload image fom Attacehment_1",async () => {
                await MarketPlacePage.logoImageUploadFunction_1()
                await MarketPlacePage.createPojectAttachment_1()
                await page.waitForTimeout(300)
        })
        await test.step("Upload Image for Attachment_2",async () => {
                await MarketPlacePage.logoImageUploadFunction_2()
                await MarketPlacePage.createPojectAttachment_2()
                await page.waitForTimeout(300)
                await MarketPlacePage.SaveNContinue()
        })


        // await test.step("Save project from Preview",async () => {
        //         await MarketPlacePage.finalSaveBtn()
        //         await page.waitForTimeout(7000)
        // })


        await test.step("Cancel project from Preview",async () => {
                await MarketPlacePage.cancelProjectFinal()
                await page.waitForTimeout(3000)
        })

    
    
})

test('Kominiti-075 | Marketplace | Project | Share | Validate when user post "repost on your wall" it should appear on home dashboard',async ({page, loginPage, MarketPlacePage}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        
        
        
        //Project to repost on wall
        await test.step("Click on a project Suppose Autoamtion",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickShareProject()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickRepostOnWall()
                await MarketPlacePage.inputRepostOnWallTextField("I am sharing this project by automation")
                await MarketPlacePage.clickRepostOnWallShareBtn()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickRepostOnWallCloseAfterShareBtnClicked()
        })

        await test.step("Redirect to home dashboard and Delete the newly created repost on the wall",async () => {
                await MarketPlacePage.clickHomeDashboardRedirect()
                await page.waitForLoadState("networkidle")
                await MarketPlacePage.homeDeletePostHamburgerSign()
                await page.waitForTimeout(1000)
                await MarketPlacePage.homePostDeleteDrpdnBtn()
                
        })
        
})

test('Kominiti-076 | Marketplace | Project | Share | Validate clicking reset on "repost on your wall" revert the changes',async ({page, loginPage, MarketPlacePage}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        
        
        
        //Project to repost on wall and also delete the post
        await test.step("Click on a project Suppose Automation to reset",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickShareProject()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickRepostOnWall()
                await MarketPlacePage.inputRepostOnWallTextField("I am sharing this project by automation")
                await MarketPlacePage.resetBtnRepostOnwall()
        })

       
        
})

test('Kominiti-077 | Marketplace | Project | Share | Validate user can not post "repost on your wall" within 15min of a recent post',async ({page, loginPage, MarketPlacePage}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project Suppose Automation to test the 15 min interval warning is showing ",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickShareProject()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickRepostOnWall()
                await MarketPlacePage.inputRepostOnWallTextField("I am sharing this project by automation")
                await MarketPlacePage.clickRepostOnWallShareBtn()
                await page.waitForTimeout(1000)
                await MarketPlacePage.alert15minCanNotPostonWall("You can't post often.You can try in 15 min")
                await page.waitForTimeout(1000)
        })

       

        
})


test('Kominiti-078 | Marketplace | Project | Share | Validate user can Share on social media (fb, twitter, pinterest, LinkedIn) and share link',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project Suppose Automation to check the FB URL",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickShareProject()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickShareOnSocialMedia()
                await page.waitForTimeout(1000)
                
                
        })


        //share with facebook
        await test.step("check facebook URL redirecting", async()=> {
                await MarketPlacePage.newPageAgainFB()
                
        })

        //share with twitter
        await test.step("check twitter URL redirecting", async()=> {
                await MarketPlacePage.newPageAgainTwitter()
                
        })

        //share with LinkedIn
        await test.step("check linkedin URL redirecting", async()=> {
                await MarketPlacePage.newPageAgainLinked()
                page.waitForTimeout(1000)
                
        })

        //share with pinterest
        await test.step("check pinterest URL rediecting", async()=> {
                await MarketPlacePage.newPageAgainPinterest()
                
        })
        

        
})


test
('Kominiti-079 Marketplace | Project | Validate user can view the attached files',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project Suppose Automation to check the FB URL",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
        })

        await test.step("Validate the attachment",async () => {
                await MarketPlacePage.attachmentValidation("gameLogo.jpg","logo_lowSize.png")
               //page.pause()
        })
        
        
})

test('Kominiti-080 | Marketplace | Project | Validate user can Add Question on FAQ.',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project a Automation",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
                
                
        })

        await test.step("Click on a project Suppose Automation to check the FB URL",async () => {
                await MarketPlacePage.clickInsideProjectAddQusBtn()
                await MarketPlacePage.clickInsideProjectAddQusBtnInputFld("What is the cost from automation")
                await MarketPlacePage.clickInsideProjectAddQusSendBtn()
                await page.waitForTimeout(2000)
                await MarketPlacePage.questionSaveSuccessValidate('What is the cost from automation')
                
                
        })





        

        
})

test.only('Kominiti-081 | Marketplace | Project | Validate user can Edit and delete question on FAQ.',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await MarketPlacePage.clickOnMarketPlaceToRedirct()
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project a Automation",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
                
                
        })


        await test.step("Click on a project 3 dot edit Question",async () => {
                await MarketPlacePage.clickDotsForEditDeleteQues()
                await MarketPlacePage.clickAddQuesEditBtn()
                await MarketPlacePage.clickInsideProjectAddQusBtnInputFld("What is the cost from automation edited")
                await MarketPlacePage.clickSubmitBtnEditAddQuestionPost()
                await page.waitForTimeout(2000)
                await MarketPlacePage.validateAddQusAfterEdit("What is the cost from automation edited")

                
        })

        await test.step("Click on a project 3 dot delete Question",async () => {
                await MarketPlacePage.clickDotsForEditDeleteQues()
                await MarketPlacePage.clickAddQusDeleteBtn()
                
        })





        

        
})