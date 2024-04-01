import ENV from '../utils/env'
import test, { expect } from "@fixtures/basePages"
import ENV2 from '../utils/env2'

test('Kominiti-002 | Home Page | Validate website is redirected to Home page after home button is clicked', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if website redirects successfully to Home page, Dashboard page, Market place page and Hot deals page
    after clicking on Home Button, Dashboard button, Makretplace button and Hot deals button respectively.

    It involves the following steps :
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Clicking on Home Button
    - Verifying if website is redirected to Home
    - Clicking on Dashboard Button
    - Verifying if website is redirected to Dashboard
    - Clicking on Marketplace Button
    - Verifying if website is redirected to Marketplace
    - Clicking on Hot deals Button
    - Verifying if website is redirected to Hot deals
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

    await test.step('Check if website redirected to Home page after Home button is Visible', async () => {
            await homePage.clickOnHomeButton()
            await homePage.HomeButtonisVisible()
    })

    await test.step('Check if website redirected to Dashboard page after Dashboard button is Visible', async () => {
            await homePage.clickOnDashboardButton()
            await homePage.DashboardButtonisVisible()
    })

    await test.step('Check if website redirected to Marketplace page after Marketplace button is Visible', async () => {
            await homePage.clickOnMarketplaceButton()
            await homePage.MarketplaceButtonisVisible()
    })

    await test.step('Check if website redirected to Hot Deals page after Hot Deals button is Visible', async () => {
            await homePage.clickOnHotDealsButton()
            await homePage.HotDealsButtonisVisible()
    })
})

test('Kominiti-003 | Home Page | Validate website is redirected to Wall page after Wall button is clicked', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if website is redirected to Wall page, Trending Topics after Wall button and Trending topics are clicked, respectively. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home
    - Click on Wall Button
    - Verify if "Write an Article" text is present
    - Click on Trending Topics
    - Verify if "Top Trending Topics Of The Day" text is present
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

    await test.step ('Validate website is redirected to Wall page after Wall button is clicked', async () => {
            await homePage.clickOnHomeButton()
            await homePage.clickOnWallButton()
            await homePage.wallButtonisVisible()

    })

    await test.step ('Validate website is redirected to Wall page after Wall button is clicked', async () => {
            await homePage.clickOnHomeButton()
            await homePage.clickOnWallButton()
            await homePage.wallButtonisVisible()

    })

    await test.step ('Validate website is redirected to Trending Toics page after Trending topics button is clicked', async () => {
            await homePage.clickOnHomeButton()
            await homePage.clickOnTrendingTopicsButton()
            await homePage.TrendingTopicsButtonisVisible()

    })
})

test('Kominiti-004 | Home Page | Validate post can be created with only Text after clicking on "Share what is on your mind" textbox"', async ({ page, loginPage, homePage }) => {

    /*
    This test case if post can be created with only Text after clicking on "Share what is on your mind" textbox" . 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home
    - Click on Wall Button
    - Click on "Share what is on your mind"
    - Click on Post
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Click on Wall button', async () => {
            await homePage.clickOnWallButton()
    })

    await test.step('Write on Wall Button and post', async () => {
            await homePage.WallOnlyText()
    })

})

test('Kominiti-005 | Home Page | Validate post can be created with single Image after clicking on "Share what is on your mind" textbox', async ({ page, loginPage, homePage }) => {
    /*
    This test case if post can be created with single Image after clicking on "Share what is on your mind" textbox" . 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Share what is on your mind" to open the Post textbox
    - Click on Images to upload an image
    - Click on Post to successfully post. 
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Create Post with Image', async () => {
            await homePage.clickOnWallButton()
            await homePage.clickOnShareWhatIsOnYourMindTextbox()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnImageUploadButton()
            await homePage.clickOnPstButton()
    })

})

test('Kominiti-006 | Home Page | Validate post can be created with single Video after clicking on "Share what is on your mind" textbox', async ({ page, loginPage, homePage }) => {
    /*
    This test case if post can be created with single Video after clicking on "Share what is on your mind" textbox" . 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Share what is on your mind" to open the Post textbox
    - Click on Videos to upload an Video
    - Click on Post to successfully post. 
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Create Post with Video', async () => {
            await homePage.clickOnWallButton()
            await homePage.clickOnShareWhatIsOnYourMindTextbox()
            await homePage.videoUploadFunction()
            await homePage.clickOnVideoUploadButton()
    })

})

test('Kominiti-007 | Home | Wall | Write an Article | Validate image is required', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if image required warning is shown, after clicking on Post without uploading an Image. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Share what is on your mind" to open the Post textbox
    - Click on Post without uploading an image
    - The post will not be shared and there will be a image requried warning
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    /*
    await test.step('Validate Image is required', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.clickOnPublishButton()
            
    })
    */
    
    await test.step('Validate Title is required', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.clickOnPublishButton()
            await homePage.titleWarningMessageIsVisible()
    })
    
})

test('Kominiti-008 | Home | Wall | Write an Article | Validate image can be uploaded', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if an image can be uploaded in Write an Article section. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Image and upload an image
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate Image can be uploaded', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnImageUploadButton()
            await homePage.clickOnPublishButton()
            
    })
    
})

test('Kominiti-009 | Home | Wall | Write an Article | Validate Video can be uploaded', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if an video can be uploaded in Write an Article section. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Videos and upload a video
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate Video can be uploaded', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.videoUploadFunction()
            await homePage.clickOnVideoUploadButton()
            await homePage.clickOnPublishButton()
            
    })
    
})

test('Kominiti-010 | Home | Wall | Write an Article | Discard button is working', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if discard button is workinf. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Discard, website is redirected to Wall section
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate Discard button can be clicked and it is working', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.clickOnDiscardButton()
            await homePage.wallButtonisVisible()
    })
    
})

test('Kominiti-011 | Home | Wall | Write an Article | An Article can be published', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if a article can be published successfully. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Images and upload an image
    - Click on publish and publish the post
    - Verify if the post appears in the feed
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate An Article Can be Published', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnImageUploadButtonOfWriteAnArticle()
            await homePage.clickAndTypeOnTitleTextboxOfWriteAnArticle()
            await homePage.clickOnPublishButtonOfWriteAnArticle()
            await homePage.postSharedFromWriteAnArticlePageIsVisible()
    })
    
})

test('Kominiti-012 | Home | Wall | Write an Article | Validate Post Can Be Liked', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if a post can be liked. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Images and upload an image
    - Click on publish and publish the post
    - Verify if the post appears in the feed
    - Click on like
    - Check if the post is liked and check if count increases 
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate A Post can be Liked and check if number of likes increases', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnImageUploadButtonOfWriteAnArticle()
            await homePage.clickAndTypeOnTitleTextboxOfWriteAnArticle()
            await homePage.clickOnPublishButtonOfWriteAnArticle()
            await homePage.likeAPostInHome()
            await homePage.checkIfPostIsLiked()
            await homePage.checkIfLikeCountIncreases()
    })
    
})

test('Kominiti-013 | Home | Wall | Validate an user can comment under a post', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if an user can comment under a post. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Images and upload an image
    - Click on publish and publish the post
    - Verify if the post appears in the feed
    - Click on Comment and then comment on the post. 
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate an user can comment under a post', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnImageUploadButtonOfWriteAnArticle()
            await homePage.clickAndTypeOnTitleTextboxOfWriteAnArticle()
            await homePage.clickOnPublishButtonOfWriteAnArticle()
            await homePage.clickOnCommentOnAPost()
            await homePage.writeOnCommentBoxOnAPost()
            await homePage.clickOnSendButtonInCommentBox()
    })
    
})

test.only('Kominiti-014 | Home | Wall | Validate a post can be reposted on the wall via share option', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if a post can be reposted. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Images and upload an image
    - Click on publish and publish the post
    - Verify if the post appears in the feed
    - Click on share and then click on repost on your wall
    - Write on the textbox 
    - Click on Share post button and check if post is successfully shared
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate a post can be reposted on the wall via share option', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnImageUploadButtonOfWriteAnArticle()
            await homePage.clickAndTypeOnTitleTextboxOfWriteAnArticle()
            await homePage.clickOnPublishButtonOfWriteAnArticle()
            await homePage.clickOnShareButtonOnAPost()
            await homePage.clickOnRepostOnYourWall()
            await homePage.writeOnSharePostSection()
            //await page.pause()
            await homePage.clickOnSharePostButton()
            await homePage.checkIfPostIsSuccessfullyShared()
    })
})


test('Kominiti-015 | Home | Wall | Validate a post can be unfollowed after selecting unfollow feed', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if a post can be unfollowed after selecting unfollow feed. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Images and upload an image
    - Click on publish and publish the post
    - Logout from current account and login from another account
    - Verify if the user from new account can find the post and unfollow it
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate a post can be published', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.logoImageUploadFunction()

            await homePage.clickOnImageUploadButtonOfWriteAnArticle()
            await homePage.clickAndTypeOnTitleTextboxOfWriteAnArticle()
            await homePage.clickOnPublishButtonOfWriteAnArticle()
    })

    //Need to add logout From Naimur Account

    await test.step('Logout from current account', async () => {
            await homePage.clickOnProfileLogo()
            //await page.pause()
            await homePage.clickOnLogoutButton()
    })
    
    await test.step('Go to the url', async () => {
             await page.goto(ENV.BASE_URL);
     })
    await test.step('Click On sign In Button', async () => {
             await loginPage.clickSignInBtn()
    })
    await test.step('User Login Functionality', async () => {
             await loginPage.userlogin(ENV2.EMAIL_2, ENV2.PASSWORD_2)
             await page.waitForLoadState("networkidle")
             //await page.pause()
     })

    await test.step('Validate post can be unfollwed', async () => {
            await homePage.clickOnThreeDotButton()
            await homePage.clickOnUnfollowFeedButton()
            await homePage.checkIfUnfollowSuccessfullyMessageAppears()

    })

})

test('Kominiti-017 | Home | Wall | Validate a post can be blocked', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if a post can be blocked. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Images and upload an image
    - Click on publish and publish the post
    - Logout from current account and login from another account
    - Verify if the user from new account can find the post and block it
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate a post can be published', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnImageUploadButtonOfWriteAnArticle()
            await homePage.clickAndTypeOnTitleTextboxOfWriteAnArticle()
            await homePage.clickOnPublishButtonOfWriteAnArticle()
    })

    //Need to add logout From Naimur Account

    await test.step('Logout from current account', async () => {
            await homePage.clickOnProfileLogo()
            //await page.pause()
            await homePage.clickOnLogoutButton()
    })
    
    await test.step('Go to the url', async () => {
             await page.goto(ENV.BASE_URL);
     })
    await test.step('Click On sign In Button', async () => {
             await loginPage.clickSignInBtn()
    })
    await test.step('User Login Functionality', async () => {
             await loginPage.userlogin(ENV2.EMAIL_2, ENV2.PASSWORD_2)
             await page.waitForLoadState("networkidle")
             //await page.pause()
     })

    await test.step('Validate post can be blocked', async () => {
            await homePage.clickOnThreeDotButton()
            await homePage.clickOnBlockButton()
            await homePage.clickOnBlockButtonInsidePopupBox()
            //await homePage.BlockedSuccessfullyTextIsVisible()

    })

})

test('Kominiti-018 | Home | Wall | Validate a post can be hidden', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if a post can be hidden. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Wall Button and access the wall page
    - Click on "Write an article" button to open the Post section
    - Click on Images and upload an image
    - Click on publish and publish the post
    - Logout from current account and login from another account
    - Verify if the user from new account can find the post and hide it
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate a post can be published', async () => {
            await homePage.clickOnWallButton()
            await homePage.writeAnArticle()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnImageUploadButtonOfWriteAnArticle()
            await homePage.clickAndTypeOnTitleTextboxOfWriteAnArticle()
            await homePage.clickOnPublishButtonOfWriteAnArticle()
    })

    //Need to add logout From Naimur Account

    await test.step('Logout from current account', async () => {
            await homePage.clickOnProfileLogo()
            //await page.pause()
            await homePage.clickOnLogoutButton()
    })
    
    await test.step('Go to the url', async () => {
             await page.goto(ENV.BASE_URL);
     })
    await test.step('Click On sign In Button', async () => {
             await loginPage.clickSignInBtn()
    })
    await test.step('User Login Functionality', async () => {
             await loginPage.userlogin(ENV2.EMAIL_2, ENV2.PASSWORD_2)
             await page.waitForLoadState("networkidle")
             //await page.pause()
     })

    await test.step('Validate post can be hidden', async () => {
            await homePage.clickOnThreeDotButton()
            await homePage.clickOnHideButton()
            await homePage.HiddenSuccessfullyTextIsVisible()

    })

})


test('Kominiti-019 | Home | Trending Topics | Validate trending topics can be accessed after clicking on the button', async ({ page, loginPage, homePage }) => {
    /*
    This test case verifies if trending topics can be accessed after clicking on the button. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Trending Topics 
    - Click on One of the topics
    - Verify if the topic can be accessed
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Validate trending topics can be accessed and individual topics can be accessed after clicking on the button', async () => {
            await homePage.clickOnTrendingTopicsButton()
            await homePage.TrendingTopicsButtonisVisible()
            await homePage.clickOnOneOfTheTrendingTopic()
            await homePage.trendingTopicHeadingIsVisible()
            
    })
})

test('Kominiti-032 | Home | Test Your Knowledge | Validate if Take a Test is working', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if website is redirected to Assessments after clicking on Take a Test. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Test your knowledge
    - Verify if Skill Assessments page opens up 
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Home | Test Your Knowledge | Validate if Take a Test is working', async () => {
            await homePage.clickOnTestOnYourKnowledgeButton()
            await homePage.skillAssessmentsTextIsVisible()
    })

})

test('Kominiti-033 | Home | Test Your Knowledge | Validate if a test can be taken', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if a test can be sucessfully taken. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Test your knowledge
    - Verify if Skill Assessments page opens up 
    - Click on Adobe After affects skill test
    - Then click on start test to start the test
    - Click on the second option
    - Click on next button
    - Verify if the page goes to the next page
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Home | Test Your Knowledge | Validate if a test can be taken', async () => {
            await homePage.clickOnTestOnYourKnowledgeButton()
            await homePage.skillAssessmentsTextIsVisible()
            await homePage.clickOnAdobeAfterEffects()
            await homePage.clickOnStartTest()
            await homePage.clickOnSecondOption()
            await homePage.clickOnNextButton()
            await homePage.checkIfNextPageIsVisible()
    })

})

test('Kominiti-034 | Home | Test Your Knowledge | Validate if an ongoing test can be cancelled', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if an ongoing test can be cancelled. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Test your knowledge
    - Verify if Skill Assessments page opens up 
    - Click on Adobe After affects skill test
    - Then click on start test to start the test
    - Click on the second option
    - Click on next button
    - Verify if the page goes to the next page
    - Click on Cross button
    - Click on Yes button
    - The skill test pop-up box should close
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    
    await test.step('Home | Test Your Knowledge | Validate if a test can be taken', async () => {
            await homePage.clickOnTestOnYourKnowledgeButton()
            await homePage.skillAssessmentsTextIsVisible()
            await homePage.clickOnAdobeAfterEffects()
            await homePage.clickOnStartTest()
            await homePage.clickOnSecondOption()
            await homePage.clickOnNextButton()
            await homePage.checkIfNextPageIsVisible()
    })

    await test.step('Home | Test Your Knowledge | Validate if a test can be cancelled', async () => {
            await homePage.clickOnCrossButton()
            await homePage.clickOnYesButton()
    })

})

test('Kominiti-035 | Home | Validate if a group can be accessed', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if a group can be accessed. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Groups dropdown
    - Click on a Group
    - Verify if a group can be accessed
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate if a group can be accessed', async () => {
            await homePage.clickOnGroupsDropdownButton()
            await homePage.clickOnAGroupUnderGroupsDropdownButton()
            await homePage.checkIfGroupNameIsVisible()
    })
    
})

test('Kominiti-036 | Home | Validate if a new group can be created', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if a new group can be created. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Groups dropdown
    - Click on a More
    - Click on Create New group button
    - Upload a logo image
    - Write on Group Name Textbox
    - Select an Industry
    - Write on Preferable Member textbox
    - Write on About textbox
    - Upload a second image in the last image upload option
    - Click on Create
    - Verify if a group can be created

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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate if a new group can be created', async () => {
            await homePage.clickOnGroupsDropdownButton()
            await homePage.clickOnMoreUnderGroupsButton()
            await homePage.clickOnCreateNewGroupsButton()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnLogoUploadButton()
            await homePage.writeOnGroupNameTextbox()
            await homePage.selectOnIndustryTextbox()
            await homePage.selectOnPreferableMemberTextbox()
            await homePage.writeOnAboutTextbox()
            await homePage.logoImageUploadFunction()
            await homePage.clickOnSecondImageUploadButton()
            await homePage.clickOnCreateButton()
            await homePage.groupCreationSuccessTExtIsVisible()
    })
    
})

test('Kominiti-037 | Home | Validate if a new post can be added under group', async ({ page, loginPage, homePage }) => {
         /*
    This test case verifies if a new post can be added under group. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Groups dropdown
    - Click on a Group
    - Verify if Group name is visible
    - Write on textbox of the group
    - Click on post
    - Verify if a new post can be added
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate if a new post can be added under group', async () => {
            await homePage.clickOnGroupsDropdownButton()
            await homePage.clickOnAGroupUnderGroupsDropdownButton()
            await homePage.checkIfGroupNameIsVisible()
            await homePage.writeOnTextBoxOfGroup()
            await homePage.clickOnPostButton()
            await homePage.checkIfCreatedPostIsVisible()
    })
    
})

test('Kominiti-038 | Home | Validate if groups can be seen which the user is a part of', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if groups can be seen which the user is a part of. 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Groups dropdown
    - Verify if first group is visible
    - Verify if second group is visible
    - Verify if third group is visible
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate if groups can be seen which the user is a part of', async () => {
            await homePage.clickOnGroupsDropdownButton()
            await homePage.checkIfFirstGroupIsVisible()
            await homePage.checkIfSecondGroupIsVisible()
            await homePage.checkIfThirdGroupIsVisible()
    })
    
})

test('Kominiti-039 | Home | Validate if campaign invitation can be sent', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if campaign invitation can be sent 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Invite Campaign button
    - Write on Invite Email Textbox
    - Click on Invite button
    - Verify if invite sent successfully appears
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate if campaign invitation can be sent', async () => {
            await homePage.clickOnInviteCampaignButton()
            await homePage.writeOnInviteEmailTextBox()
            await homePage.clickOnInviteButton()
            await homePage.checkIfInvitationSentSuccessfullyTextIsVisible()
    })
    
})

test('Kominiti-040 | Home | Validate if referral can be sent', async ({ page, loginPage, homePage }) => {
        /*
    This test case verifies if referral can be sent 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Send Referral button
    - Write text on Select Connections textbox
    - Click on checkbox and select a connection
    - Click on Refer to button
    - Select a connection in Step two select connections textbox 
    - Click on Refer button
    - Verify if referral success message appears
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate if referral can be sent', async () => {
            await homePage.clickOnSendReferralButton()
            await homePage.writeOnSelectConnectionsTextBox()
            await homePage.clickOnCheckBoxOfSelectedConnection()
            await homePage.clickOnReferToButton()
            await homePage.writeOnStep2SelectConnectionsTextBox()
            await homePage.clickOnCheckBoxOfStep2SelectedConnection()
            await homePage.clickOnReferButton()
            await homePage.checkIfReferralSuccessfulIsVisible()
    })
})

test('Kominiti-041 | Home | Validate user can overview details of the project from market place', async ({ page, loginPage, homePage }) => {
        /*
        This test case verifies if user can overview details of the project from market place 

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Marketplace under Projects you may like section
    - Click on a particular project
    - Verify if project details are visible
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate user can overview details of the project from market place', async () => {
            await homePage.clickOnAParticularProject()
            await homePage.projectDetailsIsVisible()
    })
})

test('Kominiti-042 | Home | Validate clicking discover more under Market place redirects to Marketpalce dashboard', async ({ page, loginPage, homePage }) => {
        /*
        This test case verifies if clicking discover more under Market place redirects to Marketpalce dashboard

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Discover more under Marketplace under Projects you may like section
    - Verify if Marketplace text is visible
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate clicking discover more under Market place redirects to Marketpalce dashboard', async () => {
            await homePage.clickOnDiscoverMoreButton()
            await homePage.welcomeToMarketplaceTextIsVisible()
    })
})

test('Kominiti-043 | Home | Validate clicking discover more under Happening now redirects to Group dashboard', async ({ page, loginPage, homePage }) => {
        /*
        This test case verifies if clicking discover more under Market place redirects to Marketpalce dashboard

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Discover more under Happening Now section
    - Verify if Group text is visible
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate clicking discover more under Happening now redirects to Group dashboard', async () => {
            await homePage.clickOnDiscoverMoreButtonUnderHappeningNow()
            await homePage.groupsTextIsVisible()
    })
})

test('Kominiti-044 | Home | Validate User can read more and redirect to view business negotiation article in details', async ({ page, loginPage, homePage }) => {
        /*
        This test case verifies if User can read more and redirect to view business negotiation article in details

    Steps : 
    - Going to URL
    - Clicking on Sign in Button
    - Loggin in Successfully
    - Click on Home Button and Access the Home page
    - Click on Read More
    - Go to the link which originates after clicking from Read More
    - Verify if article text is visible
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

    await test.step('Click on Home button', async () => {
            await homePage.clickOnHomeButton()
    })

    await test.step('Home | Validate User can read more and redirect to view business negotiation article in details', async () => {
            await homePage.clickOnReadMoreButton()
            await page.goto("https://blog.kominiti.com/business/build-side-hustle/")
            await homePage.articleTextIsVisible()
    })
})