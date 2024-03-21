import ENV from '../utils/env'
import test, { expect } from "@fixtures/basePages"
//import MarketPlacePage from 'pages/MarketPlace.page'
import { title } from 'process'
import HotDeals from "pages/HotDeals.page";

test('Kominiti-111 | Hot deals | Validate search functionalities is working and showing result if matched',async ({page, loginPage, HotDeals}) => {

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

    //Hotdeals
    await test.step('HotDeals redirects on click',async () => {
            await HotDeals.clickHotDealsRedirects()
            
           
                
    })
    
    

   
    
})

test('Kominiti-112 | Hot deals | Validate View all categories is working and redirecting to all categories',async ({page, loginPage, HotDeals}) => {

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

    //Hotdeals
    await test.step('HotDeals redirects on click',async () => {
            await HotDeals.clickHotDealsRedirects()
              
                
    })
    
    await test.step('HotDeals redirects on click',async () => {
        await HotDeals.clickCategories()
        await HotDeals.validateAccountNFinanceURL()
        
       
            
})
    

   
    
})

test.only('Kominiti-119 | Hot deals | Create a Deal | User can create a deal succesfully',async ({page, loginPage, HotDeals}) => {

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
    
        //Hotdeals
        await test.step('HotDeals redirects on click',async () => {
                await HotDeals.clickHotDealsRedirects()        
        })

        //create a deal
        await test.step('Create a deal is initialized',async () => {
                await HotDeals.clickCreateDeals()
                page.waitForLoadState()      
        })
        
        //overview
        await test.step('Fill up the Overview form',async () => {

                await HotDeals.inputOfferTitlte("Testing with the automation")
                await HotDeals.inputOfferCategory("Admin Support")
                await HotDeals.inputOfferSubCategory("Data Entry")
                await HotDeals.inputOfferType()
                await HotDeals.inputOfferCloseDate("05102024") //mm/dd/yyyy      
                await HotDeals.inputKeyword("automation")
                await HotDeals.clickAddKeywordBtn()
                await HotDeals.saveNContinueClicked()
        })


         

        //Deals type

        await test.step('Fill up the Deals Type form',async() => {
                await HotDeals.inputPackageName("Name of the package is automation")
                await HotDeals.inputPackageDescription("Name of the package Description is automation")
                await HotDeals.inputPrice("100")
                await HotDeals.inputDuration("60")
                await HotDeals.saveNContinueClicked()

        })

        //Description and FAQ
        await test.step('Fill up Descritpion and FAQ form',async() => {
                await HotDeals.inputofferDescription("I need to do some automation testing inside this project")
                await HotDeals.saveNContinueClicked()

        })

        //Requirements
        await test.step('Fill up Requirements form',async() => {
                await HotDeals.inputYourQuestion("I need to do some automation testing inside this project")
                await HotDeals.inputYourQusOption("I will go for option 1")
                await HotDeals.saveNContinueClicked()

        })

        //Gallery
        await test.step('Upload the gallery',async() => {
                await HotDeals.imageUploadFunction()
                await HotDeals.clickGalleryImage()
                await HotDeals.videoUpoadFunction()
                await HotDeals.clickGalleryVideo()
                await HotDeals.pdfUploadFunction()
                await HotDeals.clickGalleryDocs()
                await page.waitForTimeout(3000)
                await HotDeals.saveNContinueClicked()
                await page.waitForTimeout(6000)

        })

         //save and continuev or gallary only
        // await test.step('Save and Continue',async() => {
        //         await HotDeals.saveNContinueClicked()

        // })

        await test.step('checkbox and submit',async() => {
                await HotDeals.clickCheckboxFinalSave()
                //await page.pause()
                await HotDeals.clickSubmitBtn()

        })


        //save and continue
        // await test.step('Save and Continue',async() => {
        //         await HotDeals.saveNContinueClicked()
        //         await page.pause()

        // })
        
    
       
        
    })
