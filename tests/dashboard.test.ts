import ENV from '../utils/env'
import test, { expect } from "@fixtures/basePages"
import ENV2 from '../utils/env2'


test('Kominiti-020 | Dashboard | Validate if Ongoing/Submitted bids/Completed/Cancelled posts are shown after clicking on Ongoing button', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if Ongoing/Submitted bids/Completed/Cancelled posts are shown after clicking on Ongoing button
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Verify if website is redirected to Ongoing page after clicking on Ongoing button
    - Verify if website is redirected to Submitting bid page after clicking on Ongoing button
    - Verify if website is redirected to Completed Bid page after clicking on Ongoing button
    - Verify if website is redirected to Cancelled button page after clicking on Ongoing button
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Validate if Ongoing/Submitted bids/Completed/Cancelled posts are shown after clicking on Ongoing button', async () => {
            await homePage.clickOnOngoingButton()
            await homePage.OngoingButtonIsVisible()
            await homePage.clickOnSubmittingBidsButton()
            await homePage.SubmittedButtonIsVisible()
            await homePage.clickOnCompletedBidsButton()
            await homePage.CompletedButtonIsVisible()
            await homePage.clickOnCancelledButton()
            await homePage.CancelledButtonIsVisible()
            
    })
})

test('Kominiti-021 | Dashboard | Filter | Validate if filter is working for One-Time Project type', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if filter is working for One-Time Project type
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Filter
    - Click on One-Time and then click on Apply
    - Verify if One-Time projects are 
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Validate if filter is working for One-Time Project type', async () => {
            await homePage.clickOnOngoingButton()
            await homePage.clickOnFilterButton()
            await homePage.clickOnOneTimeButton()
            await homePage.clickOnApplyButton()
            await homePage.OneTimeProjectIsVisible()
    })
})

test('Kominiti-023 | Dashboard | Filter | Validate if Reset is working', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if Reset is working
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Filter
    - Click on One-Time and then click on Apply
    - Click on Reset and verify if reset button is implemented
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Validate if reset is working ', async () => {
            await homePage.clickOnOngoingButton()
            await homePage.clickOnFilterButton()
            await homePage.clickOnOneTimeButton()
            await homePage.clickOnApplyButton()
            await homePage.clickOnFilterButton()
            await homePage.clickOnResetButton()
    })
})

test('Kominiti-024 | Dashboard | Validate if an item is clickable', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if an item is clickable
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Ongoing Button
    - Click on the First Seller Available
    - Verify if the order details are present
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Validate if an item is clickable', async () => {
            await homePage.clickOnOngoingButton()
            await homePage.clickOnTheFirstSellerAvailable()
            await homePage.orderDetailsIsVisible()
    })
})
test('Kominiti-025 | Dashboard | Validate if "Buyer" button is clickable', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if Reset is working
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Ongoing Button
    - Click on Buyer button 
    - Verify if the buyer button is clickable and working
    - Click on Seller Button
    - Verify if the seller button is clickable and working
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    await test.step('Dashboard | Validate if "Buyer" button is clickable', async () => {
            await homePage.clickOnOngoingButton()
            await homePage.clickOnBuyerButton()
            await homePage.verifyButtonIsSelected("rgb(58, 12, 163) none repeat scroll 0% 0% / auto padding-box border-box")
    })
    await test.step('Dashboard | Validate if "Seller" button is clickable', async () => {
            await homePage.clickOnOngoingButton()
            await homePage.clickOnSellerButton()
            await homePage.verifyButtonIsSelected("rgb(72, 149, 239) none repeat scroll 0% 0% / auto padding-box border-box")
    })
})

test('Kominiti-026 | Dashboard | Project Dashboard | Orders | Validate if website is redirected to Marketplace after clicking on it', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if website is redirected to Marketplace after clicking on it
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Project Dashboard
    - Click on Orders
    - Click on Marketplace
    - Verify if website is redirected to Marketplace after clicking on it 
    - Click on Hot deals
    - Verify if website is redirected to Hot deals after clicking on it
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Dashboard | Project Dashboard | Orders | Validate if website is redirected to Marketplace after clicking on it', async () => {
            await homePage.clickOnOrderDropdownButton()
            await homePage.clickOnMarketpalceButton()
            await homePage.marketplaceTextIsVisible()
            
    })

    await test.step('Dashboard | Project Dashboard | Orders | Validate if website is redirected to Hot Deals after clicking on it', async () => {
            await homePage.clickOnOrderDropdownButton()
            await homePage.clickOnHotDealsButtonFromOrderDropdown()
            await homePage.hotdealsTextIsVisible()
    })
})

test('Kominiti-027 | Dashboard | Project Dashboard | Tasks | Validate if website is redirected to MarketPlace after clicking on it', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if website is redirected to Marketplace after clicking on it
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Project Dashboard
    - Click on Tasks
    - Click on Marketplace
    - Verify if website is redirected to Marketplace after clicking on it 

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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Dashboard | Project Dashboard | Tasks | Validate if website is redirected to MarketPlace after clicking on it', async () => {
            await homePage.clickOnTaskDropdownButton()
            await homePage.clickOnMarketplacefromTaskDropdown()
            await homePage.activeTextIsVisible()
    })

})

test('Kominiti-028 | Dashboard | Project Dashboard | Validate if website is redirected to Favorites after clicking on it', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if website is redirected to Favorites after clicking on it
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Project Dashboard
    - Click on Favorites
    - Verify if website is redirected to Favorites after clicking on it 
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Dashboard | Project Dashboard | Validate if website is redirected to Favorites after clicking on it', async () => {
            await homePage.clickOnFavoritesUnderProjectDashboard()
            await homePage.favoritesTextIsVisible()
    })

})

test('Kominiti-029 | Dashboard | Project Dashboard | Validate if website is redirected to Analytics after clicking on it', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if website is redirected to Analytics after clicking on it
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Project Dashboard
    - Click on Analytics
    - Verify if website is redirected to Analytics after clicking on it 
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Dashboard | Project Dashboard | Validate if website is redirected to Analytics after clicking on it', async () => {
            await homePage.clickOnAnalyticsUnderProjectDashboard()
            await homePage.overviewTextIsVisible()
    })

})

test('Kominiti-031 | Dashboard | Project Dashboard | Validate if website is redirected to Settings after clicking on it', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if website is redirected to Settings after clicking on it
    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Dashboard
    - Click on Project Dashboard
    - Click on Settings
    - Verify if website is redirected to Settings after clicking on it 
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

    await test.step('Click on Dashboard button', async () => {
            await homePage.clickOnDashboardButton()
    })

    
    await test.step('Dashboard | Project Dashboard | Validate if website is redirected to Settings after clicking on it', async () => {
            await homePage.clickOnSettingsUnderProjectDashboard()
            await homePage.settingsTextIsVisible()
    })

})