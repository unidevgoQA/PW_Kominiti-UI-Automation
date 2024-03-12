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
           await page.waitForLoadState("networkidle") 
           
                
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
           await page.waitForLoadState("networkidle") 
           
                
    })
    await test.step("Create project from MarketPlace",async () => {
            await MarketPlacePage.clickOnCreateProject()
            await page.waitForLoadState("networkidle")
            await expect(page).toHaveURL(/create-project/)

    })
    await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
        await MarketPlacePage.clickOnMarketPlaceToRedirct()
        await page.waitForLoadState("networkidle") 
        
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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await page.waitForLoadState("networkidle") 
            
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
               await page.waitForLoadState("networkidle") 
               
               await page.waitForLoadState("networkidle")
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await page.waitForLoadState("networkidle") 
            
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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await page.waitForLoadState("networkidle") 
            
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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await page.waitForLoadState("networkidle") 
            
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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await page.waitForLoadState("networkidle") 
            
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
                
        })

    
    
})


test('Kominiti-073 | Marketplace | Create Project | Validate Project is successfully saved ', async ({page, loginPage, MarketPlacePage}) => {

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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        await test.step("Create project from MarketPlace",async () => {
                await MarketPlacePage.clickOnCreateProject()
                await page.waitForLoadState("networkidle")
                await expect(page).toHaveURL(/create-project/)
    
        })
        await test.step("Check empty field mandatory warning while clicking save and continue ",async () => {
            await MarketPlacePage.clickOnMarketPlaceToRedirct()
            await page.waitForLoadState("networkidle") 
            
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
                await page.waitForTimeout(2000)
        })


         await test.step("Save project from Preview",async () => {
                await MarketPlacePage.finalSaveBtn()
                await page.waitForTimeout(2000)
        })

        // await test.step("Redirect to home dashboard and Delete the newly created post",async () => {
        //         await MarketPlacePage.clickHomeDashboardRedirect()
        //         await page.waitForLoadState("networkidle")
        //         await MarketPlacePage.homeDeletePostHamburgerSign()
        //         await page.waitForTimeout(1000)
        //         await MarketPlacePage.homePostDeleteDrpdnBtn()
                
        // })
    

    
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
               await page.waitForLoadState("networkidle") 
        
                    
        })
        
        
        
        //Project to repost on wall
        await test.step("Click on a project Suppose Automation",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickShareProject()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickRepostOnWall()
                await MarketPlacePage.inputRepostOnWallTextField("I am sharing this project by automation")
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickRepostOnWallShareBtn()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickRepostOnWallCloseAfterShareBtnClicked()
                await page.waitForTimeout(1000)
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
               await page.waitForLoadState("networkidle") 
               
                    
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
               await page.waitForLoadState("networkidle") 
               
                    
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
               await page.waitForLoadState("networkidle") 
               
                    
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
                
                
        })

        //share with pinterest
        // await test.step("check pinterest URL rediecting", async()=> {
        //         await MarketPlacePage.newPageAgainPinterest()
        //         page.waitForTimeout(1000)
                
        // })
        

        
})


test('Kominiti-079 Marketplace | Project | Validate user can view the attached files',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
               
                    
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
               await page.waitForLoadState("networkidle") 
               
                    
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

test('Kominiti-081 | Marketplace | Project | Validate user can Edit and delete question on FAQ.',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project a Automation",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(1000)
                
                
        })


        await test.step("Click on a project 3 dot edit Question",async () => {
                await MarketPlacePage.clickDotsForEdit_or_DeleteQues()
                await MarketPlacePage.clickAddQuesEditBtn()
                await MarketPlacePage.clickInsideProjectAddQusBtnInputFld("What is the cost from automation edited")
                await MarketPlacePage.clickSubmitBtnEditAddQuestionPost()
                await page.waitForTimeout(2000)
                await MarketPlacePage.validateAddQusAfterEdit("What is the cost from automation edited")

                
        })

        await test.step("Click on a project 3 dot delete Question",async () => {
                await MarketPlacePage.clickDotsForEdit_or_DeleteQues()
                await MarketPlacePage.clickAddQusDeleteBtn()
                
        })
 

        
})

test('Kominiti-082 | Marketplace | Project | Validate message box open when contact buyer is clicked.',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project name TEST ABC",async () => {
                await MarketPlacePage.clickTestAbcProject()
                await page.waitForTimeout(1000)
                
                
        })


        await test.step("Click on to contact buyers",async () => {
                await MarketPlacePage.clickContactBuyerBtn()
                await page.waitForTimeout(2000)
                await MarketPlacePage.validateMessageBoxBuyers()

                
        })



})

test('Kominiti-083 Marketplace | Project | Validate that see more is working',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
               
               await page.waitForLoadState("networkidle")
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project Automation",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(4000)
                
                
        })


        await test.step("Click on to contact buyers",async () => {
                await MarketPlacePage.clickInsideProjectSeeMoreBtn()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickAfterSeeMoreClicked4thDivCmnt("Software QA Manager")
                
        })



})

test('Kominiti-084 | Marketplace | Project | Validate owner "view profile" redirects to profile',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project Automation",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(4000)
                
                
        })


        await test.step("Click on to Profile and validate",async () => {
                await MarketPlacePage.clickInsideProjectViewProfileBtn()
                await page.waitForLoadState("networkidle")
                await MarketPlacePage.clickValidateProfileOwner("Nabil Shad")
                
        })



})

test('Kominiti-085 | Marketplace | Project | Place bid | Validate user can place bid',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        
        
        
        //Project to repost on wall and check Can not post in 15min
        await test.step("Click on a project Automation",async () => {
                await MarketPlacePage.clickTestAbcProject()
                await page.waitForTimeout(4000)
                
                
        })


        await test.step("Validate Placing a Bid",async () => {
                await MarketPlacePage.projectPlaceBidBtnClicked()
                await page.waitForTimeout(2000)
                await MarketPlacePage.insideBidTextField("I am inputting text from automation")
                await MarketPlacePage.logoImageUploadFunction_2()
                await MarketPlacePage.imageUploadPlaceBid()
                await page.waitForTimeout(2000)
                await MarketPlacePage.projectPlaceBidBtnFinalClicked()
                await page.waitForTimeout(2000)
                await MarketPlacePage.afterBiddingClickViewBidBtn()
                await MarketPlacePage.validateInputTextFromBid("I am inputting text from automation")
                
        })



})


test('Kominiti-086 | Marketplace | Project | Validate that after bid is placed user can edit bid',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        
        await test.step("Click on a project Automation",async () => {
                await MarketPlacePage.clickTestAbcProject()
                await page.waitForTimeout(4000)   
        })
        
   

        await test.step("Click edit bid button to edit the bid",async () => {
                await MarketPlacePage.afterBiddingClickViewBidBtn()
                await MarketPlacePage.clickEditBidBtn()
                await page.waitForTimeout(2000) 
                await MarketPlacePage.insideBidTextField("I am inputting text from automation and edited")
                await MarketPlacePage.logoImageUploadFunction_2()
                await MarketPlacePage.imageUploadPlaceBid()
                await MarketPlacePage.clickEditBidBtn()
                await page.waitForTimeout(2000)
                await MarketPlacePage.afterBiddingClickViewBidBtn()
                await page.waitForTimeout(2000)
                await MarketPlacePage.validateInputTextFieldEditBid("I am inputting text from automation and edited")
        })
        
        



})


test('Kominiti-087 | Marketplace | Project | Validate that after bid is placed user can Delete bid',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle")
               
                    
        })
        
        
        
        
        await test.step("Click on a project Automation",async () => {
                await MarketPlacePage.clickTestAbcProject()
                await page.waitForTimeout(4000)
                
                
        })


        await test.step("Validate deleting bid",async () => {
               await MarketPlacePage.afterBiddingClickViewBidBtn()
               await page.waitForTimeout(2000)
               await MarketPlacePage.deleteBidBtnPlaceBidClicked()
               await page.waitForTimeout(2000)
               await MarketPlacePage.deleteBtnFinalPlaceBidClicked()
               
                
        })



})

test('Kominiti-088 | Marketplace | Project | Place bid | Validate that when cancel button is clicked it canceled the bid and redirects to overview',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on a project Automation",async () => {
                await MarketPlacePage.clickTestAbcProject()
                await page.waitForTimeout(4000)   
        })
        
        
       
        await test.step("Click on a place Bid and cancel",async () => {
                await MarketPlacePage.projectPlaceBidBtnClicked()
                await page.waitForTimeout(2000)
                await MarketPlacePage.cancelbtnPlaceBidClicked()
                await page.waitForTimeout(2000)
                await MarketPlacePage.clickOverviewAfterCancelPlaceBid("Overview")
                
        })




})


test('Kominiti-090 | Marketplace | Project | Validate that the manage bid button redirect to dashboard to view details',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
               
                    
        })
        
        await test.step("Click on a project Automation",async () => {
                await MarketPlacePage.ProjectTitleAutomation()
                await page.waitForTimeout(4000)   
        })
        
        
        
        await test.step("Click on Manage Bid",async () => {
                await MarketPlacePage.clickManageBidBtn()
                await page.waitForLoadState("networkidle")     
        })


        await test.step("Validate Redirect form Manage Bid to Dashboard",async () => {
                await MarketPlacePage.validateProjectDashText("Project Dashboard")
                    
        })


})

test('Kominiti-091 | Marketplace | View all categories | Validate Account & Finance tab is working ',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on View All Categories and validate URL",async () => {
                await MarketPlacePage.clickViewAllCategoriesBtn()
                await page.waitForLoadState("networkidle") 
                await MarketPlacePage.clickAccountNFinance()
                await MarketPlacePage.ValidateAccountNFinanceURL()
                 
        })
        


})

test('Kominiti-092 | Marketplace | View all categories | Validate Web, Mobile & Software Dev tab is working ',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on View All Categories and validate URL",async () => {
                await MarketPlacePage.clickViewAllCategoriesBtn()
                await page.waitForLoadState("networkidle") 
                await MarketPlacePage.clickAccountNFinance()
                await MarketPlacePage.ValidateAccountNFinanceURL()
                 
        })
        
        await test.step("All Categories showing checked",async () => {
                await MarketPlacePage.clickWebMobNSoftCategory()
                //await page.waitForLoadState("load") 
                await MarketPlacePage.validateWebMobNSoftTitlteText("Web, Mobile & Software Dev")
                 
        })


})

test('Kominiti-093 | Marketplace | View all categories | Validate Data Science & Analytics is working ',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on View All Categories and validate URL",async () => {
                await MarketPlacePage.clickViewAllCategoriesBtn()
                await page.waitForLoadState("networkidle") 
                await MarketPlacePage.clickAccountNFinance()
                await MarketPlacePage.ValidateAccountNFinanceURL()
                 
        })
        
        await test.step("All Categories showing checked",async () => {
                await MarketPlacePage.clickDataSciNAnalyticeCategory()
                //await page.waitForLoadState("load") 
                await MarketPlacePage.validateDataSciNAnalyticeTitlteText("Data Science & Analytics")
                 
        })


})

test('Kominiti-094 | Marketplace | View all categories | Validates Consulting is working ',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on View All Categories and validate URL",async () => {
                await MarketPlacePage.clickViewAllCategoriesBtn()
                await page.waitForLoadState("networkidle") 
                await MarketPlacePage.clickAccountNFinance()
                await MarketPlacePage.ValidateAccountNFinanceURL()
                 
        })
        
        await test.step("All Categories showing checked",async () => {
                await MarketPlacePage.clickConsultingCategory()
                //await page.waitForLoadState("load") 
                await MarketPlacePage.validateConsultingTitlteText("Consulting")
                 
        })


})

test('Kominiti-095 | Marketplace | View all categories | Validates Admin support is working  ',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on View All Categories and validate URL",async () => {
                await MarketPlacePage.clickViewAllCategoriesBtn()
                await page.waitForLoadState("networkidle") 
                await MarketPlacePage.clickAccountNFinance()
                await MarketPlacePage.ValidateAccountNFinanceURL()
                 
        })
        
        await test.step("All Categories showing checked",async () => {
                await MarketPlacePage.clickAdminSupportCategory()
                //await page.waitForLoadState("load") 
                await MarketPlacePage.validateAdminSupportTitlteText("Admin Support")
                 
        })


})

test.only('Kominiti-096 | Marketplace | Validate redirect to Category details is working in search field  ',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on the search field with value",async () => {
                await MarketPlacePage.clickNAdminCategorySearchDrpdwn()
                await MarketPlacePage.clickNValueMainSearchField("need")
                await MarketPlacePage.clickSearchBtn()  
                await page.waitForLoadState("networkidle")    
                await MarketPlacePage.validateFilterResult() 
        })


})

test('Kominiti-097 | Marketplace |  Category details | Sort by dropdown is working  ',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on the search field with value",async () => {
                await MarketPlacePage.clickNAdminCategorySearchDrpdwn()
                await MarketPlacePage.clickNValueMainSearchField("need")
                await MarketPlacePage.clickSearchBtn()  
                await page.waitForLoadState("networkidle")
                await MarketPlacePage.validateFilterResult()      
        })

        
        await test.step("Validate filter sort",async () => {
                await MarketPlacePage.clickFilterSortBy()
                await MarketPlacePage.clickFilterClientRatingOption()
                await MarketPlacePage.validateFilterOccupiedClientrat("Client rating")

        })




        


})

test('Kominiti-098 | Marketplace |  Category details | Validate filter is working according to every search result',async ({page, loginPage, MarketPlacePage, newpage, browser}) => {

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
               await page.waitForLoadState("networkidle") 
                    
        })
        
        await test.step("Click on the search field with value",async () => {
                await MarketPlacePage.clickNAdminCategorySearchDrpdwn()
                await MarketPlacePage.clickNValueMainSearchField("need")
                await MarketPlacePage.clickSearchBtn()  
                await page.waitForLoadState('networkidle')    
        })
        
        await test.step("Check that the filter is working",async () => {
                await MarketPlacePage.clickSlctCategory()
                await MarketPlacePage.clickFilterSortBy()
                await page.waitForTimeout(1000)
                await MarketPlacePage.clickFilterNewestOption()
                await MarketPlacePage.clickNFillBudgetMin("100")
                await MarketPlacePage.clickNFillBudgetMax("5000")

        })

       
        await test.step("Check that the filter is working",async () => {
                //await MarketPlacePage.clickNFillBidResponseDate("03062024") //mm/dd/yyyy
                await MarketPlacePage.clickProjectLength()
                await MarketPlacePage.clickProjectLength_1_3Month()
                await page.waitForTimeout(1000)

        })


        await test.step("Apply and Validate filter",async () => {
                await MarketPlacePage.clickApplyBtn()
                await page.waitForTimeout(1000)
                await MarketPlacePage.validateFilterOccupiedNewest("Newest")
               
        })



        


})