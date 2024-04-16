import ENV from '../utils/env'
import test, { expect } from "@fixtures/basePages"
//import MarketPlacePage from 'pages/MarketPlace.page'
import { title } from 'process'
import AdminPanel_02 from 'pages/AdminPanel_02.page';

test.only('Kominiti-111 | Admin Panel',async ({page, loginPage, AdminPanel_02}) => {

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
        // await test.step('Click On sign In Button', async () => {
        //         await loginPage.clickSignInBtn()
        // })
        await test.step('User Login Functionality', async () => {
                await loginPage.userloginAdmin(ENV.EMAIL, ENV.PASSWORD)
                await loginPage.clickLoginBtnAdmin()
                await page.waitForLoadState("networkidle")
        })
    
        
        await test.step('Admin Panel redirects on click',async () => {
                await AdminPanel_02.otherModules()
                
               
                    
        })
        
        await test.step('Validate clicking invite users redirects to invitre user dashboard',async () => {
                await AdminPanel_02.otherModules()
                
               
                    
        })
    
       
        
    })