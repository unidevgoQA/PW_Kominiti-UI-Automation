
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

test('Kominiti-002 | Home Page | Validate website is redirected to Home page after home button is clicked', async ({ page, loginPage, homePage }) => {

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

        await test.step('Write on Wall Button', async () => {
                await homePage.WallOnlyText()
        })

})

test('Kominiti-005 | Home Page | Validate post can be created with single Image after clicking on "Share what is on your mind" textbox', async ({ page, loginPage, homePage }) => {
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
        })

})

test('Kominiti-006 | Home Page | Validate post can be created with single Video after clicking on "Share what is on your mind" textbox', async ({ page, loginPage, homePage }) => {
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

test('Kominiti-014 | Home | Wall | Validate a post can be reposted on the wall via share option', async ({ page, loginPage, homePage }) => {
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
                await homePage.clickOnSharePostButton()
                await homePage.checkIfPostIsSuccessfullyShared()
        })
})


test('Kominiti-015 | Home | Wall | Validate a post can be unfollowed after selecting unfollow feed', async ({ page, loginPage, homePage }) => {
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

        //code lekh for unfollow
        await test.step('Validate post can be unfollwed', async () => {
                await homePage.clickOnThreeDotButton()
                await homePage.clickOnUnfollowFeedButton()
                await homePage.checkIfUnfollowSuccessfullyMessageAppears()

        })

})

test('Kominiti-019 | Home | Trending Topics | Validate trending topics can be accessed after clicking on the button', async ({ page, loginPage, homePage }) => {
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

test('Kominiti-020 | Dashboard | Validate if Ongoing/Submitted bids/Completed/Cancelled posts are shown after clicking on Ongoing button', async ({ page, loginPage, homePage }) => {
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

        
        await test.step('Dashboard | Validate if "Seller" button is clickable', async () => {
                await homePage.clickOnOngoingButton()
                await homePage.clickOnSellerButton()
                await homePage.verifyButtonIsSelected("rgb(72, 149, 239) none repeat scroll 0% 0% / auto padding-box border-box")
        })

        await test.step('Dashboard | Validate if "Buyer" button is clickable', async () => {
                await homePage.clickOnOngoingButton()
                await homePage.clickOnBuyerButton()
                await homePage.verifyButtonIsSelected("rgb(58, 12, 163) none repeat scroll 0% 0% / auto padding-box border-box")
        })
})

test('Kominiti-026 | Dashboard | Project Dashboard | Orders | Validate if website is redirected to Marketplace after clicking on it', async ({ page, loginPage, homePage }) => {
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

test('Kominiti-032 | Home | Test Your Knowledge | Validate if Take a Test is working', async ({ page, loginPage, homePage }) => {
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

test('Kominiti-037 | Home | Validate if a new post can be added under group', async ({ page, loginPage, homePage }) => {
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

test.only('Kominiti-039 | Home | Validate if campaign invitation can be sent', async ({ page, loginPage, homePage }) => {
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