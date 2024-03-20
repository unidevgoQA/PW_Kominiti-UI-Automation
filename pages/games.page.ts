import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs';
import * as url from "@testData/mainboard.json";

export default class HomePage {
    // [x: string]: any;
    private page: Page;
    // static buffer: void;
    constructor(page: Page) {
            this.page = page;
    }
    private HomePageElements = {

            HomeBtn : "//a[text()='Home']",
            WallVis : "//span[text()='Wall']",
            DashboardBtn : "//a[text()='Dashboard']",
            DashboardVis : "//span[text()='Market place']",
            MarketplaceBtn : "//a[text()='Marketplace']",
            MarketplaceVis : "//h1[text()='WELCOME TO THE KOMINITI MARKETPLACE']",
            HotDeals : "(//a[text()='Hot Deals'])[2]",
            HotDealsVis : "//h1[text()=' KOMINITI HOT DEALS ']",
            WallBtn : "//span[text()='Wall']",
            WallBtnVis : "//span[text()='Write an article']",
            TrendingTopicsBtn : "//span[text()='Trending topics']",
            TrendingTopicsBtnVis : "//h3[text()='Top Trending Topics Of The Day']",
            WallTextbox : "//div[text()='Share what is on your mind']",
            WallTextboxclick : "//textarea[contains(@class, 'form-control') and contains(@class, 'share-post')]",
            Postbtn : "//span[text()='Post']",
            ImagesBtn : "//span[text()='Images']",
            VideoBtn : "//span[text()='Video']",
            WriteAnArticleBtn : "//span[text()='Write an article']",
            PublishBtn : "//span[text()='Publish']",
            WriteAnArticleTitleWarningMessage : "//div[text()='This field is required']",
            WriteAnArticleDiscardButton : "//span[text()='Discard']",
            ImageUploadButtonOfWriteAnArticlePage : "//span[text()='Change cover']",
            TitleOfWriteAnArticlePage : "input[placeholder='Heading']",
            PublishButtonOfWriteAnArticlePage : "//span[text()='Publish']",
            SharedPostOfWriteAnArticlePageIsVisible : "(//h3[text()='Test Title For Automation Scripting'])[1]",
            LikeAPost : "(//span[text()='Like'])[1]",
            PostIsLiked : "(//span[text()='Liked'])[1]",
            LikeCountIncreases : "(//span[text()='1' and text()='Like'])[1]",
            CommentOnCreatedPostOnHome : "(//span[text()='Comment'])[1]",
            WriteACommentOnPost : "textarea[placeholder='Write a comment']",
            ClickOnSendInCommentBox : "(//i[text()='send'])[1]",
            ShareButtonOnPost : "(//span[text()='Share'])[1]",
            RepostOnYourWall : "(//a[text()='Repost on your wall'])[1]",
            WriteSomethingOnSharePostSection : "textarea[placeholder='Write Something...']",
            SharePostButtonOnSharePostSection : "//span[text()='Share Post']",
            PostSharedMessage : "//p[text()='You have shared post on the wall successfully']",
            ClickOnProfileLogo : "(//div[@class='avatar-wap'])[3]",
            ClickOnLogout : "(//a[text()='Logout'])[2]",
            ClickOnThreeDotsOfACreatedPost : "(//button[@data-toggle='dropdown']//img)[1]",
            UnfollowFeedButton : "(//span[text()='Unfollow Feed'])[1]",
            UnfollowSuccess : "//div[text()='Unfollow successfully!']",
            ReportButton : "(//span[text()='Report'])[1]",
            SubmitReportButton : "(//button[text()='Submit report'])",
            SelectARule : "(//button[text()='Breaks user rules'])",
            SuccessfulReportSubmission : "//div[text()='Thanks for your report']",
            BlockButton : "(//span[text()='Block'])[1]",
            HideButton : "(//span[text()='Hide'])[1]",
            ClickOnOneOfTheTrendingTopic : "//h3[text()='Thomas Smith']",
            TrendingTopicHeading : "//p[text()='Thomas Smith']",
            OngoingSection : "//span[text()='Ongoing']",
            OngoingButton : "//button[text()='Ongoing']",
            SubmittedBidsSection : "//span[text()='Submitted Bids']",
            SubmittedButton : "//button[text()='Submitted Bids']",
            CompletedSection : "//span[text()='Completed']",
            CompletedButton : "//button[text()='Completed']",
            CancelledSection : "//span[text()='Cancelled']",
            CancelledButton : "//button[text()='Cancelled']",
            FilterButton : "//button[text()='Filter']",
            OneTimeButton : "//button[text()='One-time']",
            MilestoneButton : "//button[text()='Milestone']",
            ResetButton : "//button[text()='Reset']",
            ApplyButton : "//button[text()='Apply']",
            OneTimeProjectButtonIsAvailable : "//div[text()='One-time Project']",
            FirstSeller : "(//a[@class='new-dashboard-analytics-layout base-border-block']//div)[1]",
            OrderDetailsIsVisible : "//div[text()='Order Details']",
            BuyerButton : "(//button[text()='Buyer'])[2]",
            ButtonVerified : "(//button[@class='action-btn active'])[2]",
            SellerButton : "(//button[text()='Seller'])[2]",
            ordersDropDown : "//div[text()='Orders']",
            marketplaceFromDropDown : "(//a[text()='Market Place'])[1]",
            marketplaceTextIsVisible : "//div[@class='page-title']//div[1]",
            hotdealsFromDropDown : "(//a[text()='Hot Deals'])[3]",
            hotdealsTextIsVisible : "//span[text()='Hot Deals']",
            tasksDropDown : "//div[text()='Tasks']",
            marketplaceFromTaskDropdown : "(//a[text()='Market Place'])[2]",
            activeTextIsVisible : "(//span[text()='Active'])[1]",
            favoritesUnderProjectDashboard : "//a[contains(text(),'Favorites')]",
            favoritesIsVisible : "//h3[text()='My Favorites']",
            analyticsUnderProjectDashboard : "//a[contains(text(),'Analytics')]",
            analyticsIsVisible : "//h3[text()='Overview']",
            walletDashboard : "//a[contains(text(),'Wallet Dashboard')]",
            settingsButton : "(//a[text()='Settings'])[2]",
            settingsIsVisible : "//p[text()='Settings']",
            testYourKnowledgeButton : "//div[text()='Take a test']",
            skillassessmentsIsVisible : "//h3[text()='Skill Assessments']",
            adobeaftereffectsInSkillAssessments : "//div[text()='Adobe after effects']",
            startTestButton : "//button[text()='Start Test']",
            secondOptionInSkillAssessments : "(//li[@class='answers-list--item']//span)[2]",
            nextButton : "//button[text()='Next']",
            isNextPageVisible : "//div[text()='q' and text()='2' and text()='/' and text()='19']",
            crossButton : "//span[@class='close-button']//img[1]",
            yesButton : "//button[text()='Yes']",
            groupsDropdown : "(//div[text()='Groups'])[2]",
            groupUnderGroupsDropdown : "(//a[text()='Glimpse33 (7 members)'])[2]",
            groupNameIsVisibleFoundFromUnderGroupsDropdown : "//h3[text()='Glimpse33' and text()=' (' and text()='Networking' and text()=' Group)']",
            moreButton : "(//a[text()='More...'])[3]",
            createNewGroupButton : "//button[text()='Create New Group']",
            groupNameTextbox : "//input[@placeholder='Enter group name']",
            industryDropdown : "//input[@placeholder='Select your industry']",
            consultingFromDropdown : "//li[text()='Consulting']",
            preferableMemberSkillDropdown : "//input[@placeholder='Enter you preferable skills for member']",
            netSelectedfromDropdown : "//li[text()='.NET']",
            aboutTextbox : "//textarea[@placeholder='Your comment']",
            shareWhatIsOnYourMind : "//textarea[@placeholder='Share what is on your mind...']",
            postButton : "(//button[@type='button'])[1]",
            postIsVisible : "//p[text()='dsaasd']",
            groupsAvailable_1 : "(//a[text()='Glimpse33 (7 members)'])[2]",
            groupsAvailable_2 : "(//a[text()='India Florida Technology Guru (24 members)'])[2]",
            groupsAvailable_3 : "(//a[text()='Bixex Team (30 members)'])[2]",
            inviteCampainButton : "(//a[text()='My Kominiti']/following-sibling::a)[2]",
            inviteEmailTextbox : "//input[@placeholder='Enter email. Use commas to seperate emails']",
            inviteButton : "//button[text()='Invite']",
            invitationSentSuccessfullyTextVisible : "//div[text()='Invitation successfully sent!']"
    }

    async clickOnHomeButton () {
        const ele = await this.page.locator(this.HomePageElements.HomeBtn)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Homepage cannot be accessed | Could Not Find Locator:"${error}"`)
    }
    }

    async HomeButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Home Button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    async clickOnDashboardButton () {
        const ele = await this.page.locator(this.HomePageElements.DashboardBtn)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Dashboard page cannot be accessed | Could Not Find Locator:"${error}"`)
    }
    }

    async DashboardButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.DashboardVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Dashboard button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    async clickOnMarketplaceButton () {
        const ele = await this.page.locator(this.HomePageElements.MarketplaceBtn)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Marketplace cannot be accessed | Could Not Find Locator:"${error}"`)
    }
    }

    async MarketplaceButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.MarketplaceVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Marketplace button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    async clickOnHotDealsButton () {
        const ele = await this.page.locator(this.HomePageElements.HotDeals)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Hotdeals page cannot be accessed | Could Not Find Locator:"${error}"`)
    }
    }

    async HotDealsButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.HotDealsVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Hot deals button is not visible | Could Not Find Locator:"${error}"`)
    }
    }


    async clickOnWallButton () {
        const ele = await this.page.locator(this.HomePageElements.WallBtn)
        //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Wall page cannot be accessed | Could Not Find Locator:"${error}"`)
    }
    }

    async wallButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.WallBtnVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Write an Article button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    async clickOnTrendingTopicsButton () {
        const ele = await this.page.locator(this.HomePageElements.TrendingTopicsBtn)
        //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Trending Topic page cannot be accessed | Could Not Find Locator:"${error}"`)
    }
    }

    async TrendingTopicsButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.TrendingTopicsBtnVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Tremdimg Topic button is not visible | Could Not Find Locator:"${error}"`)
    }
    }


    async WallOnlyText () {
        const ele = await this.page.locator(this.HomePageElements.WallTextbox)
        const ele3 = await this.page.locator(this.HomePageElements.Postbtn)

        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.locator(this.HomePageElements.WallTextboxclick).click()
            await this.page.locator(this.HomePageElements.WallTextboxclick).fill("TestAutomation")
            await ele3.click()
            
        } catch (error) {
            throw new Error(`Home Page | Post cannot be created with only Text | Could Not Find Locator:"${error}"`)
    }
    }
    
    async clickOnShareWhatIsOnYourMindTextbox () {
        const ele = await this.page.locator(this.HomePageElements.WallBtn)
        const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
            await ele2.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Share what is on your mind textbox cannot be accessed | Could Not Find Locator:"${error}"`)
    }
    }

    async clickOnImageUploadButton () {
        const ele = await this.page.locator(this.HomePageElements.ImagesBtn)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }   
    }

    async clickOnVideoUploadButton () {
        const ele = await this.page.locator(this.HomePageElements.VideoBtn)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Video upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }

    async videoUploadFunction() {
        const filePath0 = "testData/videos/video.mp4"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
                await this.page.waitForTimeout(1000);
        })
}



    async logoImageUploadFunction() {
        const filePath0 = "testData/logos/gameTeamLogo.png"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
}

    async writeAnArticle(){
        const ele = await this.page.locator(this.HomePageElements.WriteAnArticleBtn)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Wall | Write an article button cannot be clicked | Could Not Find Locator:"${error}"`)
    }   

}

async clickOnPublishButton(){
    const ele = await this.page.locator(this.HomePageElements.PublishBtn)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}

}

async titleWarningMessageIsVisible(){
    const ele = await this.page.locator(this.HomePageElements.WriteAnArticleTitleWarningMessage)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Write an Article | Title Warning Message is not visible | Could Not Find Locator:"${error}"`)
}

}

async clickOnDiscardButton(){
    const ele = await this.page.locator(this.HomePageElements.WriteAnArticleDiscardButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Write an Article | Discard button is not working | Could Not Find Locator:"${error}"`)
}

}

async clickOnImageUploadButtonOfWriteAnArticle(){
    const ele = await this.page.locator(this.HomePageElements.ImageUploadButtonOfWriteAnArticlePage)
        
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Wall | Write An Article |  Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
}

async clickAndTypeOnTitleTextboxOfWriteAnArticle(){
    const ele = await this.page.locator(this.HomePageElements.TitleOfWriteAnArticlePage)

        try {
            await ele.click()
            await ele.fill("Test Title For Automation Scripting")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Wall | Write An Article |  Title textbox can not be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnPublishButtonOfWriteAnArticle(){
    const ele = await this.page.locator(this.HomePageElements.PublishButtonOfWriteAnArticlePage)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(10000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}

}

async postSharedFromWriteAnArticlePageIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.SharedPostOfWriteAnArticlePageIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Write an Article button is not visible | Could Not Find Locator:"${error}"`)
}
}

async likeAPostInHome () {
    const ele = await this.page.locator(this.HomePageElements.LikeAPost)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async checkIfPostIsLiked (){
    const ele = await this.page.locator(this.HomePageElements.PostIsLiked)
    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async checkIfLikeCountIncreases (){
    const ele = await this.page.locator(this.HomePageElements.LikeCountIncreases)
    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnCommentOnAPost () {
    const ele = await this.page.locator(this.HomePageElements.CommentOnCreatedPostOnHome)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async writeOnCommentBoxOnAPost () {
    const ele = await this.page.locator(this.HomePageElements.WriteACommentOnPost)

        try {
            await ele.click()
            await ele.fill("Test Comment For Automation Scripting")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Wall | Write An Article |  Title textbox can not be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnSendButtonInCommentBox () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnSendInCommentBox)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnShareButtonOnAPost () {
    const ele = await this.page.locator(this.HomePageElements.ShareButtonOnPost)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Share button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnRepostOnYourWall () {
    const ele = await this.page.locator(this.HomePageElements.RepostOnYourWall)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Repost On your Wall button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async writeOnSharePostSection () {
    const ele = await this.page.locator(this.HomePageElements.WriteSomethingOnSharePostSection)

        try {
            await ele.click()
            await ele.fill("Share the Created Post For Automation Scripting")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Wall | Share | Repost On your Wall | Textbox can not be filled with text | Could Not Find Locator:"${error}"`)
}
}

async clickOnSharePostButton () {
    const ele = await this.page.locator(this.HomePageElements.SharePostButtonOnSharePostSection)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Share | Repost On your Wall | Share button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async checkIfPostIsSuccessfullyShared () {
    const ele = await this.page.locator(this.HomePageElements.PostSharedMessage)
    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Share | Post Successfully shared message does not appear | Could Not Find Locator:"${error}"`)
}
}

async clickOnProfileLogo () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnProfileLogo)
    try {
        await ele.click()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall |Profile Logo button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnLogoutButton () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnLogout)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Logout button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnThreeDotButton () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnThreeDotsOfACreatedPost)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Three Dots Button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}


async clickOnUnfollowFeedButton () {
    const ele = await this.page.locator(this.HomePageElements.UnfollowFeedButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Unfollow Feed Button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async checkIfUnfollowSuccessfullyMessageAppears () {
    const ele = await this.page.locator(this.HomePageElements.UnfollowSuccess)
    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Unfollowed successfully message does not appear | Could Not Find Locator:"${error}"`)
}
}

async clickOnOneOfTheTrendingTopic () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnOneOfTheTrendingTopic)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home Page | Trending Topic page cannot be accessed | Could Not Find Locator:"${error}"`)
}
}

async trendingTopicHeadingIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.TrendingTopicHeading)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Tremdimg Topic button is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnOngoingButton () {
    const ele = await this.page.locator(this.HomePageElements.OngoingSection)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Ongoing button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnSubmittingBidsButton () {
    const ele = await this.page.locator(this.HomePageElements.SubmittedBidsSection)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Submitting bids button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnCompletedBidsButton () {
    const ele = await this.page.locator(this.HomePageElements.CompletedSection)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Completed button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnCancelledButton () {
    const ele = await this.page.locator(this.HomePageElements.CancelledSection)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Cancelled button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async OngoingButtonIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.OngoingButton)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Ongoing button is not visible | Could Not Find Locator:"${error}"`)
}
}

async SubmittedButtonIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.SubmittedButton)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Submitted button is not visible | Could Not Find Locator:"${error}"`)
}
}

async CompletedButtonIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.CompletedButton)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Completed button is not visible | Could Not Find Locator:"${error}"`)
}
}

async CancelledButtonIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.CancelledButton)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Completed button is not visible | Could Not Find Locator:"${error}"`)
}
}

//Kominiti-21  
async clickOnFilterButton () {
    const ele = await this.page.locator(this.HomePageElements.FilterButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Filter button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnOneTimeButton () {
    const ele = await this.page.locator(this.HomePageElements.OneTimeButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | One Time button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnApplyButton () {
    const ele = await this.page.locator(this.HomePageElements.ApplyButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Apply button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async OneTimeProjectIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.OneTimeProjectButtonIsAvailable)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | OneTimeProject button is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnResetButton () {
    const ele = await this.page.locator(this.HomePageElements.ResetButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Reset button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnTheFirstSellerAvailable () {
    const ele = await this.page.locator(this.HomePageElements.FirstSeller)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | First Seller cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async orderDetailsIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.OrderDetailsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Order Details text is not visible | Could Not Find Locator:"${error}"`)
}
}

async verifyButtonIsSelected(color:string) {
    const ele = await this.page.locator(this.HomePageElements.ButtonVerified)
    try {
            await expect.soft(ele).toHaveCSS("background", color)
    } catch (error) {
            throw new Error(`Mobile Screen | Mobile Screen Welcome Massage Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
    }
}

async clickOnSellerButton () {
    const ele = await this.page.locator(this.HomePageElements.SellerButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | First Seller cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnBuyerButton () {
    const ele = await this.page.locator(this.HomePageElements.BuyerButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | First Seller cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnOrderDropdownButton () {
    const ele = await this.page.locator(this.HomePageElements.ordersDropDown)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Orders | Order Dropdown cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnHotDealsButtonFromOrderDropdown () {
    const ele = await this.page.locator(this.HomePageElements.hotdealsFromDropDown)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Orders | Hotdeals Dropdown cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async marketplaceTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.marketplaceTextIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Orders | Marketplace text is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnMarketpalceButton () {
    const ele = await this.page.locator(this.HomePageElements.marketplaceFromDropDown)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Orders | Marketplace button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async hotdealsTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.hotdealsTextIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Orders | Hotdeals text is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnTaskDropdownButton () {
    const ele = await this.page.locator(this.HomePageElements.tasksDropDown)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Task | Task dropdown button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async clickOnMarketplacefromTaskDropdown () {
    const ele = await this.page.locator(this.HomePageElements.marketplaceFromTaskDropdown)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Task | Marketplace button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

async activeTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.activeTextIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Task | Active text is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnFavoritesUnderProjectDashboard () {
    const ele = await this.page.locator(this.HomePageElements.favoritesUnderProjectDashboard)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Favorites button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async favoritesTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.favoritesIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Favorites text is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnAnalyticsUnderProjectDashboard () {
    const ele = await this.page.locator(this.HomePageElements.analyticsUnderProjectDashboard)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Analytics button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async overviewTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.analyticsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Overview text is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnSettingsUnderProjectDashboard () {
    const ele = await this.page.locator(this.HomePageElements.settingsButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Settings button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async settingsTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.settingsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Settings text is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnTestOnYourKnowledgeButton () {
    const ele = await this.page.locator(this.HomePageElements.testYourKnowledgeButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Test on your knowledge button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async skillAssessmentsTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.skillassessmentsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Skill Assessments text is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnAdobeAfterEffects () {
    const ele = await this.page.locator(this.HomePageElements.adobeaftereffectsInSkillAssessments)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Adobe After Effects button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async clickOnStartTest () {
    const ele = await this.page.locator(this.HomePageElements.startTestButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Start Test button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async clickOnSecondOption () {
    const ele = await this.page.locator(this.HomePageElements.secondOptionInSkillAssessments)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Second Option button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async clickOnNextButton () {
    const ele = await this.page.locator(this.HomePageElements.nextButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Next button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async checkIfNextPageIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.isNextPageVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Q2/19 text is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnCrossButton () {
    const ele = await this.page.locator(this.HomePageElements.crossButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Cancel button is not clickable | Could Not Find Locator:"${error}"`)
}
}

async clickOnYesButton () {
    const ele = await this.page.locator(this.HomePageElements.yesButton)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Yes button is not clickable | Could Not Find Locator:"${error}"`)
}}

async clickOnGroupsDropdownButton () {
    const ele = await this.page.locator(this.HomePageElements.groupsDropdown)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Groups dropdown button is not clickable | Could Not Find Locator:"${error}"`)
}}

async clickOnAGroupUnderGroupsDropdownButton () {
    const ele = await this.page.locator(this.HomePageElements.groupUnderGroupsDropdown)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | A Group under Groups dropdown is not clickable | Could Not Find Locator:"${error}"`)
}}

async checkIfGroupNameIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.groupNameIsVisibleFoundFromUnderGroupsDropdown)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Group Name Text is not visible | Could Not Find Locator:"${error}"`)
}
}

async writeOnTextBoxOfGroup () {
    const ele = await this.page.locator(this.HomePageElements.shareWhatIsOnYourMind)
    
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.locator(this.HomePageElements.shareWhatIsOnYourMind).click()
        await this.page.locator(this.HomePageElements.shareWhatIsOnYourMind).fill("dsaasd")
        
    } catch (error) {
        throw new Error(`Home | Groups | Text cannot be written in the textbox | Could Not Find Locator:"${error}"`)
}
}

async clickOnPostButton () {
    const ele = await this.page.locator(this.HomePageElements.postButton)
    

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Groups |  Post button is not clickable | Could Not Find Locator:"${error}"`)
}}

async checkIfCreatedPostIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.postIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Groups | Created Post is not visible | Could Not Find Locator:"${error}"`)
}
}

async checkIfFirstGroupIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.groupsAvailable_1)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Groups | First Group Below Dropdown is not visible | Could Not Find Locator:"${error}"`)
}
}

async checkIfSecondGroupIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.groupsAvailable_2)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Groups | Second Group Below Dropdown is not visible | Could Not Find Locator:"${error}"`)
}
}

async checkIfThirdGroupIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.groupsAvailable_3)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Groups | Third Group Below Dropdown is not visible | Could Not Find Locator:"${error}"`)
}
}

async clickOnInviteCampaignButton () {
    const ele = await this.page.locator(this.HomePageElements.inviteCampainButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home |Invite Campaign button is not clickable | Could Not Find Locator:"${error}"`)
}}


async writeOnInviteEmailTextBox () {
    const ele = await this.page.locator(this.HomePageElements.inviteEmailTextbox)
    
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.locator(this.HomePageElements.inviteEmailTextbox).click()
        await this.page.locator(this.HomePageElements.inviteEmailTextbox).fill("zagalfayeezullah@gmail.com")
        
    } catch (error) {
        throw new Error(`Home | Cannot write on Invite Email Textbox | Could Not Find Locator: "${error}"`)
}
}

async clickOnInviteButton () {
    const ele = await this.page.locator(this.HomePageElements.inviteButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home |Invite button is not clickable | Could Not Find Locator:"${error}"`)
}}

async checkIfInvitationSentSuccessfullyTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.invitationSentSuccessfullyTextVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Invitation Sent Successfully is not visible | Could Not Find Locator:"${error}"`)
}
}





}



