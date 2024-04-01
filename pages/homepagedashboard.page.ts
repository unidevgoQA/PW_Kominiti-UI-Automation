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
            SharePostButtonOnSharePostSection : "(//div[@class='submit_btn_div']//button)[2]",
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
            FirstSeller : "(//div[@class='new-dashboard-analytics-layout base-border-block'])[1]",
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
            marketplaceFromTaskDropdown : "//a[contains(text(),'Market Place')]",
            activeTextIsVisible : "//span[text()='Market place']",
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
            postIsVisible : "(//p[text()='dsaasd'])[1]",
            groupsAvailable_1 : "(//a[text()='Glimpse33 (7 members)'])[2]",
            groupsAvailable_2 : "(//a[text()='India Florida Technology Guru (24 members)'])[2]",
            groupsAvailable_3 : "(//a[text()='Bixex Team (30 members)'])[2]",
            inviteCampainButton : "(//a[text()='My Kominiti']/following-sibling::a)[2]",
            inviteEmailTextbox : "//input[@placeholder='Enter email. Use commas to seperate emails']",
            inviteButton : "//button[text()='Invite']",
            invitationSentSuccessfullyTextVisible : "//div[text()='Invitation successfully sent!']",
            sendReferralButton : "(//a[text()='My Kominiti']/following-sibling::a)[1]",
            selectConnections : "//input[@placeholder='Select connections to refer']",
            checkboxTickOfSelectedConnection : "(//div[@class='chekbox-cell']//input)[1]",
            referToButton : "//button[text()='Refer to']",
            selectConnectionsTextbox : "//input[@placeholder='Select connections']",
            checkboxOfConnection : "(//input[@type='checkbox'])[1]",
            referButton : "//button[text()='Refer']",
            referralConfirmation : "//div[text()='Already referred.']",
            projectUnderProjectsYouMightLikeSection : "//h4[text()='TestABC']",
            projectDetailsIsVisible : "//h1[text()='TestABC']",
            reportAPost: "(//span[text()='Report'])[1]",
            submitReport : "//button[text()='Submit report']",
            hideButton : "(//span[text()='Hide'])[1]",
            postHiddenText : "//div[text()='Post hidden successfully.']",
            blockButton : "(//span[text()='Block'])[1]",
            blockButtonInPopupBox : "//button[text()='Block']",
            blockSuccessfulText : "//div[text()='Naimur Rahman was blocked.']",
            discovermoreUnderMarketplace : "(//button[text()='Discover more'])[1]",
            welcomeToMarketplaceTextIsVisible : "//h1[text()='WELCOME TO THE KOMINITI MARKETPLACE']",
            discovermoreUnderHappenningNow : "(//button[text()='Discover more'])[3]",
            groupsTextIsVisible : "//span[text()='Groups']",
            readMoreButton : "//button[text()='Read More']",
            textVisibleAfterClickingOnReadMore : "//h1[text()='5 Best Ways To Build a Side Hustle']",
            moreUnderGroupsSection : "(//a[text()='More...'])[3]",
            createGroupButton : "//button[text()='Create New Group']",
            groupNameTextboxUnderGroupCreation : "//input[@placeholder='Enter group name']",
            industrySelection : "//input[@placeholder='Select your industry']",
            accountandfinanceSelection : "//li[text()='Accounting & Finance']",
            preferableMemberSkillSelection : "//input[@placeholder='Enter you preferable skills for member']",
            NETselection : "//li[text()='.NET']",
            addButton : '//button[text()="Add"]',
            aboutSection : "//textarea[@class='custom-textarea textarea-form']",
            logoUpload : "(//input[@type='file'])[1]",
            secondPhotoUpload : "//div[text()='Upload Photo']",
            createButtonUnderGroups : "//button[text()='Create']",
            creationSuccessful : "(//p[text()='Congratulations!']/following-sibling::p)[1]"
    }
    //Module Name : Home Page | Groups Dropdown | More
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Click confirm
    async clickOnMoreUnderGroupsButton () {
        const ele = await this.page.locator(this.HomePageElements.moreUnderGroupsSection)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | More button under Groups cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Groups Dropdown | More | Create Groups
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Click confirm
    async clickOnCreateNewGroupsButton () {
        const ele = await this.page.locator(this.HomePageElements.createGroupButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Create New Group cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    //Module Name : Home Page | Groups Dropdown | More | Create Groups | Choose Image
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Click confirm
    async clickOnLogoUploadButton () {
        const ele = await this.page.locator(this.HomePageElements.logoUpload)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Logo upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Groups Dropdown | More | Create Groups | Group Name
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Can write on Textbox
    async writeOnGroupNameTextbox () {
        const ele = await this.page.locator(this.HomePageElements.groupNameTextboxUnderGroupCreation)
        //const ele3 = await this.page.locator(this.HomePageElements.Postbtn)

        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.locator(this.HomePageElements.groupNameTextboxUnderGroupCreation).click()
            await this.page.locator(this.HomePageElements.groupNameTextboxUnderGroupCreation).fill("TestAutomation")
            //await ele3.click()
            
        } catch (error) {
            throw new Error(`Home Page | Text cannot be written on Group Name Textbpx | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Groups Dropdown | More | Create Groups | Industry
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : An industry is selected
    async selectOnIndustryTextbox () {
        const ele = await this.page.locator(this.HomePageElements.industrySelection)
        //const ele3 = await this.page.locator(this.HomePageElements.Postbtn)

        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.locator(this.HomePageElements.industrySelection).click()
            await this.page.locator(this.HomePageElements.industrySelection).fill("Accounting & Finance")
            await this.page.locator(this.HomePageElements.accountandfinanceSelection).click()
            //await ele3.click()
            
        } catch (error) {
            throw new Error(`Home Page | Option cannot be selected in Select Industry Textbox | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Groups Dropdown | More | Create Groups | Preferable Member
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : A preferable member is selected
    async selectOnPreferableMemberTextbox () {
        const ele = await this.page.locator(this.HomePageElements.preferableMemberSkillSelection)
        //const ele3 = await this.page.locator(this.HomePageElements.Postbtn)

        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.locator(this.HomePageElements.preferableMemberSkillSelection).click()
            await this.page.locator(this.HomePageElements.preferableMemberSkillSelection).fill(".NET")
            await this.page.locator(this.HomePageElements.NETselection).click()
            await this.page.locator(this.HomePageElements.addButton).click()
            //await ele3.click()
            
        } catch (error) {
            throw new Error(`Home Page | Preferable Member cannot be selected in Select Industry Textbox | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Groups Dropdown | More | Create Groups | About
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Text can be written
    async writeOnAboutTextbox () {
        const ele = await this.page.locator(this.HomePageElements.aboutSection)
        //const ele3 = await this.page.locator(this.HomePageElements.Postbtn)

        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.locator(this.HomePageElements.aboutSection).click()
            await this.page.locator(this.HomePageElements.aboutSection).fill("A Man Is there sleeping")
            //await this.page.locator(this.HomePageElements.NETselection).click()
            //await this.page.locator(this.HomePageElements.addButton).click()
            //await ele3.click()
            
        } catch (error) {
            throw new Error(`Home Page | Preferable Member cannot be selected in Select Industry Textbox | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Groups Dropdown | More | Create Groups | Second Image
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Click confirm
    async clickOnSecondImageUploadButton () {
        const ele = await this.page.locator(this.HomePageElements.secondPhotoUpload)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Groups Dropdown | More | Create Groups | Create
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Click confirm
    async clickOnCreateButton () {
        const ele = await this.page.locator(this.HomePageElements.createButtonUnderGroups)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Create button under Groups cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Groups Dropdown | More | Create Groups | Create
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Success Message is visible
    async groupCreationSuccessTExtIsVisible () {
        const ele = await this.page.locator(this.HomePageElements.creationSuccessful)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Group Creation Success Text is not visible | Could Not Find Locator:"${error}"`)
    }
    }

//Module Name : Home Page | Read more
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Click confirm

    async clickOnReadMoreButton () {
        const ele = await this.page.locator(this.HomePageElements.readMoreButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Read More button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Read more
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : article text is visible
    async articleTextIsVisible () {
        const ele = await this.page.locator(this.HomePageElements.textVisibleAfterClickingOnReadMore)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Article's Heading Text is not visible | Could Not Find Locator:"${error}"`)
    }
    }

//Module Name : Home Page | Happening now | Discover More
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Confirm Click
    async clickOnDiscoverMoreButtonUnderHappeningNow () {
        const ele = await this.page.locator(this.HomePageElements.discovermoreUnderHappenningNow)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Discover More button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Happening now | Discover More
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Group Text is visible
    async groupsTextIsVisible () {
        const ele = await this.page.locator(this.HomePageElements.groupsTextIsVisible)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Groups Text is not visible | Could Not Find Locator:"${error}"`)
    }
    }

//Module Name : Home Page | Projects you may like | Marketplace | Discover More
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Confirm Click
    async clickOnDiscoverMoreButton () {
        const ele = await this.page.locator(this.HomePageElements.discovermoreUnderMarketplace)
        //const ele2 = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await ele.click({ button: "left", delay: 100 })
            //await expect.soft(ele2).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Discover More button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
//Module Name : Home Page | Projects you may like | Marketplace | Discover More
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Text is visible
    async welcomeToMarketplaceTextIsVisible () {
        const ele = await this.page.locator(this.HomePageElements.welcomeToMarketplaceTextIsVisible)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Welcome to Marketplace Text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    //Module Name : Home Page | Home Button 
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Click confirm
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

    //Module Name : Home Page | Home Button 
    //Feature Name : Home 
    //Screen Type : Desktop
    //Description : Validate Button
    async HomeButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.WallVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Home Button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    //Module Name : Home Page | Dashboard 
    //Feature Name : Dashboard
    //Screen Type : Desktop
    //Description : Click confirm
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

    //Module Name : Home Page | Dashboard
    //Feature Name : Dashboard
    //Screen Type : Desktop
    //Description : Validate Button
    async DashboardButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.DashboardVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Dashboard button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    //Module Name : Home Page | Marketplace
    //Feature Name : Marketplace
    //Screen Type : Desktop
    //Description : Click confirm
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

    //Module Name : Home Page | Marketplace
    //Feature Name : Marketplace
    //Screen Type : Desktop
    //Description : Validate Button
    async MarketplaceButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.MarketplaceVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Marketplace button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    //Module Name : Home Page | Hot Deals
    //Feature Name : Hot Deals
    //Screen Type : Desktop
    //Description : Click confirm
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

    //Module Name : Home Page | Hot Deals
    //Feature Name : Hot Deals
    //Screen Type : Desktop
    //Description : Validate Button
    async HotDealsButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.HotDealsVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Hot deals button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    //Module Name : Home Page | Home button | Wall
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click confirm
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

    //Module Name : Home Page | Home button | Wall
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Validate Button
    async wallButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.WallBtnVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Write an Article button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    //Module Name : Home Page | Home button | Trending Topic
    //Feature Name : Trending Topic
    //Screen Type : Desktop
    //Description : Click confirm
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

    //Module Name : Home Page | Home button | Trending Topic
    //Feature Name : Trending Topic
    //Screen Type : Desktop
    //Description : Validate Button
    async TrendingTopicsButtonisVisible () {
        const ele = await this.page.locator(this.HomePageElements.TrendingTopicsBtnVis)

        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error(`Home Page | Tremdimg Topic button is not visible | Could Not Find Locator:"${error}"`)
    }
    }


    //Module Name : Home Page | Home button | Wall | Share what is on your mind 
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Validate text can be written 
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
//Module Name : Home Page | Home button | Wall | Share what is on your mind | Post
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm 
    async clickOnPstButton(){
        const ele = await this.page.locator(this.HomePageElements.Postbtn)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Wall | Post button cannot be clicked | Could Not Find Locator:"${error}"`)
    }}


    

    //Module Name : Home Page | Home button | Wall | Share what is on your mind 
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
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

    //Module Name : Home Page | Home button | Wall | Share what is on your mind | Images
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
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

    //Module Name : Home Page | Home button | Wall | Share what is on your mind | Videos
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
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

    //Module Name : Home Page | Home button | Wall | Share what is on your mind | Videos
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Video Upload
    async videoUploadFunction() {
        const filePath0 = "testData/videos/video.mp4"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
                await this.page.waitForTimeout(1000);
        })
}


    //Module Name : Home Page | Home button | Wall | Share what is on your mind | Images
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Image Upload
    async logoImageUploadFunction() {
        const filePath0 = "testData/logos/gameTeamLogo.png"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
}

    //Module Name : Home Page | Home button | Wall | Write an Article
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
    async writeAnArticle(){
        const ele = await this.page.locator(this.HomePageElements.WriteAnArticleBtn)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Wall | Write an article button cannot be clicked | Could Not Find Locator:"${error}"`)
    }   

}

    //Module Name : Home Page | Home button | Wall | Write an Article | Publish
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnPublishButton(){
    const ele = await this.page.locator(this.HomePageElements.PublishBtn)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}

}
    //Module Name : Home Page | Home button | Wall | Write an Article | Publish
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Message check
async titleWarningMessageIsVisible(){
    const ele = await this.page.locator(this.HomePageElements.WriteAnArticleTitleWarningMessage)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Write an Article | Title Warning Message is not visible | Could Not Find Locator:"${error}"`)
}

}
    //Module Name : Home Page | Home button | Wall | Write an Article | Discard
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnDiscardButton(){
    const ele = await this.page.locator(this.HomePageElements.WriteAnArticleDiscardButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Write an Article | Discard button is not working | Could Not Find Locator:"${error}"`)
}

}
//Module Name : Home Page | Home button | Wall | Write an Article | Links | Images
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnImageUploadButtonOfWriteAnArticle(){
    const ele = await this.page.locator(this.HomePageElements.ImageUploadButtonOfWriteAnArticlePage)
        
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Wall | Write An Article |  Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
}

//Module Name : Home Page | Home button | Wall | Write an Article | Title
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
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

//Module Name : Home Page | Home button | Wall | Write an Article | Publish
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnPublishButtonOfWriteAnArticle(){
    const ele = await this.page.locator(this.HomePageElements.PublishButtonOfWriteAnArticlePage)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(10000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}

}

//Module Name : Home Page | Home button | Wall | Write an Article | Publish
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Published post is visible

async postSharedFromWriteAnArticlePageIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.SharedPostOfWriteAnArticlePageIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Write an Article button is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | Like button
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click confirm
async likeAPostInHome () {
    const ele = await this.page.locator(this.HomePageElements.LikeAPost)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | Like button
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Post liked is visible
async checkIfPostIsLiked (){
    const ele = await this.page.locator(this.HomePageElements.PostIsLiked)
    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home Page | Home button | Wall | Like button
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Like count increase check
async checkIfLikeCountIncreases (){
    const ele = await this.page.locator(this.HomePageElements.LikeCountIncreases)
    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | Comment
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnCommentOnAPost () {
    const ele = await this.page.locator(this.HomePageElements.CommentOnCreatedPostOnHome)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home Page | Home button | Wall | Comment
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Text can be added in comment box
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
//Module Name : Home Page | Home button | Wall | Comment | Send Button
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnSendButtonInCommentBox () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnSendInCommentBox)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Publish button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | Comment | Share
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnShareButtonOnAPost () {
    const ele = await this.page.locator(this.HomePageElements.ShareButtonOnPost)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Share button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | Comment | Share | Repost on your wall
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnRepostOnYourWall () {
    const ele = await this.page.locator(this.HomePageElements.RepostOnYourWall)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Repost On your Wall button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | Comment | Share | Repost on your wall | Write Somethings
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Text can be added in  textbox
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

//Module Name : Home Page | Home button | Wall | Comment | Share | Share on Social Media
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnSharePostButton () {
    const ele = await this.page.locator(this.HomePageElements.SharePostButtonOnSharePostSection)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Share | Repost On your Wall | Share button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | Comment | Share | Share on Social Media
    //Feature Name : Wall
    //Screen Type : Desktop
    //Description : Post shared successfully
async checkIfPostIsSuccessfullyShared () {
    const ele = await this.page.locator(this.HomePageElements.PostSharedMessage)
    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Share | Post Successfully shared message does not appear | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home Page | Home button | Profile 
    //Feature Name : Home
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnProfileLogo () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnProfileLogo)
    try {
        await ele.click()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall |Profile Logo button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home Page | Home button | Profile | Logout Button
    //Feature Name : Home
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnLogoutButton () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnLogout)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Logout button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | 3 dots
    //Feature Name : Home
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnThreeDotButton () {
    const ele = await this.page.locator(this.HomePageElements.ClickOnThreeDotsOfACreatedPost)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Three Dots Button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | 3 dots | Unfollow
    //Feature Name : Home
    //Screen Type : Desktop
    //Description : Click Confirm
async clickOnUnfollowFeedButton () {
    const ele = await this.page.locator(this.HomePageElements.UnfollowFeedButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Unfollow Feed Button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home Page | Home button | Wall | 3 dots | Unfollow
    //Feature Name : Home
    //Screen Type : Desktop
    //Description : Click Confirm
async checkIfUnfollowSuccessfullyMessageAppears () {
    const ele = await this.page.locator(this.HomePageElements.UnfollowSuccess)
    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Wall | Unfollowed successfully message does not appear | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home Page | Home button | Trending Topic | Trending Post
    //Feature Name : Home
    //Screen Type : Desktop
    //Description : Click Confirm
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
//Module Name : Home Page | Home button | Trending Topic 
    //Feature Name : Home
    //Screen Type : Desktop
    //Description : Heading is Visible
async trendingTopicHeadingIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.TrendingTopicHeading)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Tremdimg Topic button is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Dashboard | Ongoing Button 
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Submitting Bids
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Completed Bids
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Cancelled Bids
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Ongoing Button 
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Button is visible
async OngoingButtonIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.OngoingButton)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Ongoing button is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Dashboard | Submitted Button 
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Button is visible
async SubmittedButtonIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.SubmittedButton)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Submitted button is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Dashboard | Completed Button 
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Button is visible
async CompletedButtonIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.CompletedButton)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Completed button is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Dashboard | Cancelled Button 
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Button is visible
async CancelledButtonIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.CancelledButton)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Completed button is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Dashboard | Filter 
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Filter | One Time
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Filter | Apply
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Filter | Apply
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Onetime project is visible
async OneTimeProjectIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.OneTimeProjectButtonIsAvailable)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | OneTimeProject button is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Dashboard | Filter | Reset
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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
//Module Name : Dashboard | Ongoing 
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Ongoing  | Click on a Seller 
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Order Details text is visible
async orderDetailsIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.OrderDetailsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home Page | Order Details text is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Dashboard | Buyer
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Check if button is selected
async verifyButtonIsSelected(color:string) {
    const ele = await this.page.locator(this.HomePageElements.ButtonVerified)
    try {
            await expect.soft(ele).toHaveCSS("background", color)
    } catch (error) {
            throw new Error(`Mobile Screen | Mobile Screen Welcome Massage Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
    }
}

//Module Name : Dashboard | Seller
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Check if button is selected
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
//Module Name : Dashboard | Buyer
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click confirm
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

//Module Name : Dashboard | Project Dashboard | Orders
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click confirm
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

//Module Name : Dashboard | Project Dashboard | Orders | Hot Deals
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click confirm
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

//Module Name : Dashboard | Project Dashboard | Orders | Marketplace
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Text is visible
async marketplaceTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.marketplaceTextIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Orders | Marketplace text is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Dashboard | Project Dashboard | Orders | Marketplace
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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
//Module Name : Dashboard | Project Dashboard | Orders | Hot Deals
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Text is visible
async hotdealsTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.hotdealsTextIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Orders | Hotdeals text is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Dashboard | Project Dashboard | Task
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
async clickOnTaskDropdownButton () {
    const ele = await this.page.locator(this.HomePageElements.ordersDropDown)
    //const ele2 = await this.page.locator(this.HomePageElements.WallBtnVis)

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Task | Task dropdown button cannot be clicked | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Dashboard | Project Dashboard | Task | Marketplace
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Project Dashboard | Task | Marketplace
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Text is visible
async activeTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.activeTextIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Task | Active text is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Dashboard | Project Dashboard | Favorites
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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
//Module Name : Dashboard | Project Dashboard | Favorites
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Text is visible
async favoritesTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.favoritesIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Favorites text is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Dashboard | Project Dashboard | Analytics
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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
//Module Name : Dashboard | Project Dashboard | Analytics
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Text is visible
async overviewTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.analyticsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Overview text is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Dashboard | Project Dashboard | Settings
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Click Confirm
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

//Module Name : Dashboard | Project Dashboard | Settings
//Feature Name : Dashboard
//Screen Type : Desktop
//Description : Text is visible
async settingsTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.settingsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Dashboard | Project Dashboard | Settings text is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Test your knowledge
//Feature Name : Home
//Screen Type : Desktop
//Description : Click Confirm
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
//Module Name : Home | Test your knowledge
//Feature Name : Home
//Screen Type : Desktop
//Description : Text is visible
async skillAssessmentsTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.skillassessmentsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Skill Assessments text is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Test your knowledge | Adobe after effects
//Feature Name : Home
//Screen Type : Desktop
//Description : click confirm
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

//Module Name : Home | Test your knowledge | Adobe after effects | Start Test
//Feature Name : Home
//Screen Type : Desktop
//Description : click confirm
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
//Module Name : Home | Test your knowledge | Adobe after effects | Start Test | Second Option
//Feature Name : Home
//Screen Type : Desktop
//Description : click confirm
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
//Module Name : Home | Test your knowledge | Adobe after effects | Start Test | Next
//Feature Name : Home
//Screen Type : Desktop
//Description : click confirm
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

//Module Name : Home | Test your knowledge | Adobe after effects | Start Test | Next
//Feature Name : Home
//Screen Type : Desktop
//Description : Next page is visible
async checkIfNextPageIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.isNextPageVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Test Your Knowledge | Q2/19 text is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Test your knowledge | Adobe after effects | Start Test | Next | Cross Button
//Feature Name : Home
//Screen Type : Desktop
//Description : click confirm
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
//Module Name : Home | Test your knowledge | Adobe after effects | Start Test | Next | Cross Button | Yes button
//Feature Name : Home
//Screen Type : Desktop
//Description : click confirm
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

//Module Name : Home | Groups
//Feature Name : Home
//Screen Type : Desktop
//Description : click confirm
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
//Module Name : Home | Groups | Group under Groups dropdown
//Feature Name : Home
//Screen Type : Desktop
//Description : click confirm
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
//Module Name : Home | Groups | Group under Groups dropdown
//Feature Name : Home
//Screen Type : Desktop
//Description : Group Name is visible

async checkIfGroupNameIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.groupNameIsVisibleFoundFromUnderGroupsDropdown)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Group Name Text is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Groups | Group under Groups dropdown | Share what is on your mind
//Feature Name : Home
//Screen Type : Desktop
//Description : Text can be written
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
//Module Name : Home | Groups | Group under Groups dropdown | Share what is on your mind | Post
//Feature Name : Home
//Screen Type : Desktop
//Description : Click confirm
async clickOnPostButton () {
    const ele = await this.page.locator(this.HomePageElements.postButton)
    

    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Groups |  Post button is not clickable | Could Not Find Locator:"${error}"`)
}}
//Module Name : Home | Groups | Group under Groups dropdown | Share what is on your mind | Post
//Feature Name : Home
//Screen Type : Desktop
//Description : Post is visible
async checkIfCreatedPostIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.postIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Groups | Created Post is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Groups 
//Feature Name : Home
//Screen Type : Desktop
//Description : First Group is visible
async checkIfFirstGroupIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.groupsAvailable_1)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Groups | First Group Below Dropdown is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Groups 
//Feature Name : Home
//Screen Type : Desktop
//Description : Second Group is visible
async checkIfSecondGroupIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.groupsAvailable_2)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Groups | Second Group Below Dropdown is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Groups 
//Feature Name : Home
//Screen Type : Desktop
//Description : Third Group is visible
async checkIfThirdGroupIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.groupsAvailable_3)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Groups | Third Group Below Dropdown is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home | Invite Campaign
//Feature Name : Home
//Screen Type : Desktop
//Description : Confirm Click 
async clickOnInviteCampaignButton () {
    const ele = await this.page.locator(this.HomePageElements.inviteCampainButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home |Invite Campaign button is not clickable | Could Not Find Locator:"${error}"`)
}}

//Module Name : Home | Invite Campaign | Invite email
//Feature Name : Home
//Screen Type : Desktop
//Description : Write on Textbox 
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
//Module Name : Home | Invite Campaign | Invite email | invite
//Feature Name : Home
//Screen Type : Desktop
//Description : Click Confirm
async clickOnInviteButton () {
    const ele = await this.page.locator(this.HomePageElements.inviteButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home |Invite button is not clickable | Could Not Find Locator:"${error}"`)
}}
//Module Name : Home | Invite Campaign | Invite email | invite
//Feature Name : Home
//Screen Type : Desktop
//Description : Message appears
async checkIfInvitationSentSuccessfullyTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.invitationSentSuccessfullyTextVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Invitation Sent Successfully is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Send Referral
//Feature Name : Home
//Screen Type : Desktop
//Description : Click confirm
async clickOnSendReferralButton () {
    const ele = await this.page.locator(this.HomePageElements.sendReferralButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home |Send referral button is not clickable | Could Not Find Locator:"${error}"`)
}}
//Module Name : Home | Send Referral | Select connections to refer
//Feature Name : Home
//Screen Type : Desktop
//Description : Write on textbox
async writeOnSelectConnectionsTextBox () {
    const ele = await this.page.locator(this.HomePageElements.selectConnections)
    
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.locator(this.HomePageElements.selectConnections).click()
        await this.page.locator(this.HomePageElements.selectConnections).fill("Nabil")
        
    } catch (error) {
        throw new Error(`Home | Send Referral | Cannot write on Select Connection Textbox | Could Not Find Locator: "${error}"`)
}
}
//Module Name : Home | Send Referral | Select connections to refer | Checkbox
//Feature Name : Home
//Screen Type : Desktop
//Description : Click Confirm

async clickOnCheckBoxOfSelectedConnection () {
    const ele = await this.page.locator(this.HomePageElements.checkboxTickOfSelectedConnection)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Send Referral | Checkbox is not clickable | Could Not Find Locator:"${error}"`)
}}
 
//Module Name : Home | Send Referral | Select connections to refer | Checkbox | Refer to
//Feature Name : Home
//Screen Type : Desktop
//Description : Click Confirm
async clickOnReferToButton () {
    const ele = await this.page.locator(this.HomePageElements.referToButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Send Referral | Refer Button is not clickable | Could Not Find Locator:"${error}"`)
}}
//Module Name : Home | Send Referral | Referred details
//Feature Name : Home
//Screen Type : Desktop
//Description : Text can be written
async writeOnStep2SelectConnectionsTextBox () {
    const ele = await this.page.locator(this.HomePageElements.selectConnectionsTextbox)
    
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.locator(this.HomePageElements.selectConnectionsTextbox).click()
        await this.page.locator(this.HomePageElements.selectConnectionsTextbox).fill("Robert")
        
    } catch (error) {
        throw new Error(`Home | Send Referral | Cannot write on Select Connection Textbox | Could Not Find Locator: "${error}"`)
}
}
//Module Name : Home | Send Referral | Referred details | Checkbox
//Feature Name : Home
//Screen Type : Desktop
//Description : Click Confirm
async clickOnCheckBoxOfStep2SelectedConnection () {
    const ele = await this.page.locator(this.HomePageElements.checkboxOfConnection)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Send Referral | Checkbox is not clickable | Could Not Find Locator:"${error}"`)
}}

//Module Name : Home | Send Referral | Select connections to refer | Checkbox | Refer 
//Feature Name : Home
//Screen Type : Desktop
//Description : Click Confirm
async clickOnReferButton () {
    const ele = await this.page.locator(this.HomePageElements.referButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Send Referral | Refer button is not clickable | Could Not Find Locator:"${error}"`)
}}


//Module Name : Home | Send Referral | Select connections to refer | Checkbox | Refer 
//Feature Name : Home
//Screen Type : Desktop
//Description : Referral successful text is visible
async checkIfReferralSuccessfulIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.referralConfirmation)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Referral Successful text is not visible | Could Not Find Locator:"${error}"`)
}
}

//Module Name : Home | Projects you may like | Marketplace | Any project 
//Feature Name : Home
//Screen Type : Desktop
//Description : Click confirm
async clickOnAParticularProject () {
    const ele = await this.page.locator(this.HomePageElements.projectUnderProjectsYouMightLikeSection)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | A particular project is not clickable | Could Not Find Locator:"${error}"`)
}}

//Module Name : Home | Projects you may like | Marketplace | Any project 
//Feature Name : Home
//Screen Type : Desktop
//Description : Project details is visible
async projectDetailsIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.projectDetailsIsVisible)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Project Details is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Wall | 3 dots | Hide
//Feature Name : Home
//Screen Type : Desktop
//Description : Click Confirm
async clickOnHideButton () {
    const ele = await this.page.locator(this.HomePageElements.hideButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Hide Button is not clickable | Could Not Find Locator:"${error}"`)
}}

//Module Name : Home | Wall | 3 dots | Hide
//Feature Name : Home
//Screen Type : Desktop
//Description : Message is visible
async HiddenSuccessfullyTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.postHiddenText)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Hidden Successfully Text is not visible | Could Not Find Locator:"${error}"`)
}
}
//Module Name : Home | Wall | 3 dots | Block
//Feature Name : Home
//Screen Type : Desktop
//Description : Click Confirm
async clickOnBlockButton () {
    const ele = await this.page.locator(this.HomePageElements.blockButton)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Block Button is not clickable | Could Not Find Locator:"${error}"`)
}}
//Module Name : Home | Wall | 3 dots | Block | Pop-up box
//Feature Name : Home
//Screen Type : Desktop
//Description : Click confirm
async clickOnBlockButtonInsidePopupBox () {
    const ele = await this.page.locator(this.HomePageElements.blockButtonInPopupBox)
    try {
        await ele.click({ button: "left", delay: 100 })
        await this.page.waitForTimeout(2000)
        //await expect.soft(ele2).toBeVisible()
    } catch (error) {
        throw new Error(`Home | Block Button in pop-up box is not clickable | Could Not Find Locator:"${error}"`)
}}


//Module Name : Home | Wall | 3 dots | Block | Pop-up box
//Feature Name : Home
//Screen Type : Desktop
//Description : Message is visible
async BlockedSuccessfullyTextIsVisible () {
    const ele = await this.page.locator(this.HomePageElements.blockSuccessfulText)

    try {
        await expect.soft(ele).toBeVisible()
        await this.page.waitForTimeout(1000)
    } catch (error) {
        throw new Error(`Home | Blocked Successfully Text is not visible | Could Not Find Locator:"${error}"`)
}
}

}



