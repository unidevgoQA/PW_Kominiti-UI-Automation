import ENV from '../utils/env'
import test, { expect } from "@fixtures/basePages"
//import MarketPlacePage from 'pages/MarketPlace.page'
import { title } from 'process'
import HotDeals from "pages/HotDeals.page";

test('Kominiti-111 | Hot deals | Validate search functionalities is working and showing result if matched',async ({page, loginPage, HotDeals}) => {

/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Input the search field and click search
        - Validate that the filter working successfuly.
*/



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

/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Click View all categories
        - Validate that the user redirect to the categories.
*/



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
        await HotDeals.clickViewAllCategories()
        await HotDeals.validateAccountNFinanceURL()
        
       
            
})
    
    
})

test('Kominiti-119 | Hot deals | Create a Deal | User can create a deal succesfully',async ({page, loginPage, HotDeals}) => {


/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Click Create a deal
        - Input and follow all the steps
        - Validate that the user create a deal successfully.
*/





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

test('Kominiti-120 | Hot deals | Create a Deal | Validate user can preview and include add question',async ({page, loginPage, HotDeals}) => {

/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Click Create a deal
        - Input and follow all the steps
        - Click to add question
        - Validate that the user preview and add question.
*/


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
        
        await test.step('Click the fist user',async () => {
            await HotDeals.clickOfferFirst()
            await HotDeals.clickAddQuestionbtn()
            await HotDeals.inputAddQusTextarea("Automation testing question is added successfully")
            await HotDeals.inputSendBtn()
            await page.waitForTimeout(3000)
            await HotDeals.validateQuestionAdded("Automation testing question is added successfully")
            
           
                
    })
        
        
    })

test('Kominiti-123 | Hot deals | Create a Deal | Validate user can cancel the hot deals clicking cancel button',async ({page, loginPage, HotDeals}) => {

/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Click Create a deal
        - Input and follow all the steps
        - Click cancel
        - Validate that the user cancel a deal from creating.
*/

        
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
                await page.waitForTimeout(3000)

        })

         //save and continuev or gallary only
        // await test.step('Save and Continue',async() => {
        //         await HotDeals.saveNContinueClicked()

        // })

        await test.step('Click the cancel button',async() => {
            await HotDeals.clickCancelBtn()    

        })


        //save and continue
        // await test.step('Save and Continue',async() => {
        //         await HotDeals.saveNContinueClicked()
        //         await page.pause()

        // })
        
    
       
        
    })

test('Kominiti-137 | Hot deals | View all categories| Validate all the categories are redirecting accurately ',async ({page, loginPage, HotDeals}) => {

/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Click View all categories.
        - Click every category
        - Validate that the user can navigate to all the categories are redirecting accurately.
*/




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
                await page.waitForLoadState("networkidle")
                  
                    
        })
        
        await test.step('Click the view all categories',async () => {
            await HotDeals.clickViewAllCategories() 
            await page.waitForLoadState("networkidle")
                
         })
        

         await test.step('Validate all categories',async () => {
                await HotDeals.clickAccountNFinanceCat()
                await HotDeals.validateHeaderText("Accounting & Finance") 
                await HotDeals.clickAdminSupportCat()
                await HotDeals.validateHeaderText("Admin Support")
                await HotDeals.clickConsultingCat()
                await HotDeals.validateHeaderText("Consulting")
                await HotDeals.clickCustomerServiceCat()
                await HotDeals.validateHeaderText("Customer Service")
                await HotDeals.clickDataSciAnalystCat()
                await HotDeals.validateHeaderText("Data Science & Analytics")
                await HotDeals.clickDigitalMarkCat()
                await HotDeals.validateHeaderText("Digital Marketing")
                await HotDeals.clickEngineeringArcCat()
                await HotDeals.validateHeaderText("Engineering & Architecture")
                await HotDeals.clickGraphicCatt()
                await HotDeals.validateHeaderText("Graphic Design & Creative")
                await HotDeals.clickITnNetworkCat()
                await HotDeals.validateHeaderText("IT & Networking")
                await HotDeals.clickLegalCat()
                await HotDeals.validateHeaderText("Legal")
                await HotDeals.clickSalesMarketCat()
                await HotDeals.validateHeaderText("Sales & Marketing")
                await HotDeals.clickTranslationCat()
                await HotDeals.validateHeaderText("Translation")
                await HotDeals.clickWebCat()
                await HotDeals.validateHeaderText("Web, Mobile & Software Dev")
                await HotDeals.clickWrintingCat()
                await HotDeals.validateHeaderText("Writing")




                    
        })

        



        
    })

test('Kominiti-140 | Hot deals | Offers | Validate user can Contract Buyer',async ({page, loginPage, HotDeals}) => {

/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Click to an offer
        - Click Contact buyers
        - Validate that the user can message a buyer theorugh message box.
*/


        
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
                await page.waitForLoadState("networkidle")
                  
                    
        })
        


         await test.step('Validate Contact Buyer is working',async () => {
                await HotDeals.clickofferFourth()
                await HotDeals.clickContactBuyersBtn()
                await HotDeals.validateMessageBoxBuyers()

                    
        })

        



        
    })

test('Kominiti-142 | Hot deals | Offers | Validate user can purchase order and confirm payment with any payment methods',async ({page, loginPage, HotDeals}) => {


/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Click to an offer
        - Click to confirm an offer
        - Validate that the user can purchase order and confirm payment with any payment methods.
*/



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
                await page.waitForLoadState("networkidle")
                  
                    
        })
        


         await test.step('Validate User can purchases',async () => {
                await HotDeals.clickofferFourth()
                await HotDeals.clickPurchaseOrder()
                await HotDeals.clickConfirmPayment()
                await HotDeals.validatePaymentSuccessful("Payment Successful!")
                    
        })

        



        
    })

test('Kominiti-143 | Hot deals | Offers | Validate user can cancel the purchase and redirect to offer detail page',async ({page, loginPage, HotDeals}) => {

/*
        This test case verifies that an user can Add question to a post
        It involves the following steps:
        - Logging in as an user.
        - Navigating to the Kominiti.
        - Click to the Hot deals Tab.
        - Click to an offer
        - Click to confirm an offer. 
        - Click Cancel button.
        - Validate that the user can cancel the purchase and redirect to offer detail page.
*/





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
                await page.waitForLoadState("networkidle")
                  
                    
        })
        


         await test.step('Cancel the payment',async () => {
                await HotDeals.clickofferFourth()
                await HotDeals.clickPurchaseOrder()
                await HotDeals.clickCancelPurchase()
                await HotDeals.clickConfirmCancel()
                await HotDeals.validateAboutBuyers()
                    
        })

        



        
    })