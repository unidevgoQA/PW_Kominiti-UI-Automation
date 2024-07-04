import { expect, Page } from "@playwright/test";
import { TIMEOUT } from "dns";
import { existsSync, readFileSync } from 'fs'
import { setTimeout } from "timers";

export default class AdminLoginPage {
    // [x: string]: any;
    private page: Page;
    // static buffer: void;
    constructor(page: Page) {
            this.page = page;
    }
    private loginPageElements = {
            emailInputField: "(//input[@class='form-control'])[1]",
            passwordInputField: "//input[@placeholder='Password']",
            loginBtn: "//button[text()='Login']",
            textavailable: "//h3[text()='Welcome, Nabil Shad!']",
            dashboardButton : "//a[.='Dashboard']",
            registereduserTextVisible : "//span[text()='Registered users']",
            userManagementButton : "//a[.='Users Management']",
            jobseekerTextVisible : "//span[text()='Job Seeker']",
            usersButton : "//a[.='Users']",
            allusersText: "//h4[text()='All users']",
            threedotButton : "//table[@id='DataTables_Table_0']/tbody[1]/tr[1]/td[9]/div[1]/button[1]/i[1]",
            eyeButton : "(//a[contains(@class,'blue btn-action')])[1]",
            firstNameButton : "//label[text()='First Name']",
            deleteButton : "(//i[contains(@class,'ft-trash ')])[1]",
            educationList : "(//a[contains(@class,'danger btn-action')]/following-sibling::a)[1]",
            addEducation : "//a[contains(text(),'Add Education')]",
            fieldOfStudy : "//span[text()='Search Field of Study']",
            selectionOfStudy : "//div[text()='Africana Studies']",
            schoolCollegeUniversity : "//label[text()='School/College/University']/following-sibling::input",
            startDate : "(//input[@class='form-control gj-textbox-md'])[1]",
            endDate : "(//input[@data-datepicker='true'])[2]",
            saveButton : "//button[@type='submit']",
            educationAddSuccess : "//div[text()='User Education added!']",
            addCertificate : "//a[contains(.,'Add Certificate')]",
            awardsButton : "(//a[@class=' btn-action p-0']/following-sibling::a)[2]",
            addAwards : "//a[@title='Add Award']",
            awardTitle : "(//label[text()='Award Title']/following::input)[1]",
            awardIssued : "(//label[text()='Award Issue By']/following::input)[1]",
            awardIssueDate : "//input[@class='form-control gj-textbox-md']",
            awardDesc : "//label[@class='award_description']/following-sibling::textarea[1]",
            saveAwards : "//button[@type='submit']",
            successAwards : "//div[text()='User award added!']",
            jobSeeker : "//span[text()='Job Seeker']",
            jobseekerAdduser : "(//a[contains(@class,'btn btn-raised')])[2]",
            firstName : "(//label[text()='First Name *']/following::input)[1]",
            lastName : "(//label[text()='Last Name *']/following::input)[1]",
            emailAddress : "(//label[text()='Email *']/following::input)[1]",
            password : "(//label[text()='Password *']/following::input)[1]",
            addressLine1 : "(//label[text()='Address Line 1 *']/following::input)[1]",
            searchCountry : "//span[text()='Search Country']",
            selectionOfCountry : "//div[text()='Afghanistan']",
            searchState : "//span[text()='Search State']",
            selectionOfState : "//div[text()='Badakhshan']",
            searchCity : "//span[text()='Search City']",
            selectionOfCity : "//div[text()='Eshkashem']",
            zipCode : "(//label[text()='Zip Code *']/following::input)[1]",
            typeOfUser : "//label[text()='Type of User *']/following-sibling::select",
            adminSelection : "//select[@id='userTypeChange']/option[text()='Admin']",
            userSaveButton : "//button[text()[normalize-space()='Save']]",
            userAddSuccessButton : "//div[text()='User added!']",
            userMJobSeeker : "//a[.='Job Seeker']",
            //cardDetails : ""
            businessOwnerDropdown : "//span[text()[normalize-space()='Business owner']]",
            businessOwnerConnection : "(//a[@title='Connection'])[1]",
            businessOwnerView : "(//a[@title='View'])[1]",
            businessOwnerEditProfile : "(//a[@title='Edit Profile'])[1]",
            connectionVisibility : "//h5[text()='User Information']",
            viewVisibilityFirstName : "//label[text()='First Name']",
            viewVisibilityLasttName : "//label[text()='Last Name']",
            editProfileVisibility : "//h4[text()='Edit User']",
            otherUser : "//a[.='Other user']",
            searchButton : "(//input[@type='search'])[1]",
            textVisible : "//td[text()='Test@1234']",
            businesscardDetail : "(//a[@title='Card Detail'])[1]",
            usersSearchBar : "//input[@type='search']",
            companyName : "//span[text()='Search company']",
            selectGoogle : "//div[text()='Google']",
            selectTitle : "(//label[text()='Title *']/following::input)[1]",
            selectFirstName : "(//label[text()='First Name *']/following::input)[1]",
            selectLastName : "//label[text()='Last Name *']/following-sibling::input",
            selectEmail : "//label[text()='Email *']/following-sibling::input",
            selectPhoneNumber : "(//label[text()='Phone Number *']/following::input)[1]",
            selectAddress : "//label[text()='Address *']/following-sibling::input",
            selectWebAddress : "//label[text()='Web Address *']/following-sibling::input",
            saveButtonBusinessCard : "//button[@type='submit']",
            cardSavedSuccessMessage : "//div[text()='Card saved successfully']",
            inactiveUser : "//span[text()='Inactive user']",
            incompleteRegs : "//a[.='Incomplete registrations']",
            badUserRegs : "//a[.='Bad registrations']",
            subscribers : "//a[.='Subscribers']",
            subscribersToggle : "(//input[@data-size='sm']/following-sibling::span)[1]",
            actionSuccess : "//div[@class='toast toast-success']//div[1]",
            subscribersSearch : "//div[@class='dataTables_filter']//input[1]",
            searchedPresent : "//td[text()='Nate jacobs']",
            sendNotifications : "//span[text()[normalize-space()='Send Notifications']]",
            sendNotificationImageUpButton : "(//label[text()='Image']/following::input)[1]",
            writeNotificationText : "//label[text()='Compose Notification text: *']/following-sibling::textarea",
            selectFirstUser : "(//td[@nowrap='nowrap']//input)[1]",
            clickOnSelectedUser : "//button[text()[normalize-space()='Send to SELECTED users']]",
            actionSuccessInSendNotification : "//div[text()='Action Success!']",
            supportPurposesButton : "//span[text()='Support Purposes']",
            supportMessagesButton : "//span[text()='Support Messages']",
            withdrawSupportValidation : "//span[text()[normalize-space()='Withdraw document validation']]",
            documentW9 : "//span[text()[normalize-space()='Document W-9']]",
            addsupportButton : "//a[contains(.,'Add Support Purpose')]",
            purposeName : "//label[text()='Name *']/following-sibling::input",
            savePurposeButton : "//button[text()[normalize-space()='Save']]",
            actionSuccessPurpose : "//div[text()='Action Success!']",
            purposeThreeDots : "(//button[@type='button']//i)[1]",
            threeDotsDelete : "(//a[@data-id='2'])[2]",
            purposeDeletedSuccessMessage : "//div[text()='Selected Purpose was removed successfully!']",
            searchSupportMessage : "//input[@type='search']",
            systemManagement : "//a[.='System Mangement']",
            dealsUnderSysManagement : "//a[.='Deals']",
            clickApproveButton : "(//a[contains(@class,'blue btn-action')])[1]",
            approveIsSuccessful : "//a[contains(text(),'Unapprove')]",
            unapproveIsSuccessful : "(//a[contains(@class,'blue btn-action')])[1]",
            feedButton : "//a[.='Feed']",
            clickAddFeedButton : "//a[contains(.,'Add Feed')]",
            searchUserDropdown : "//span[text()='Search User']",
            typeUser : "//label[text()='Post Type']/following::input",
            selectUser : "(//div[@class='select2-result-label'])[1]",
            messageTextbox : "//textarea[@class='form-control']",
            feedsSaveButton : "//button[@type='submit']",
            feedsSuccess : "//div[text()='Action Success!']",
            feedsSearch : "//input[@type='search']",
            messageAvailable : "(//tr[@role='row']//td)[2]",
            articlesUnderSystemManagement : "//a[.='Articles']",
            addArticle : "//a[contains(.,'Add Article')]",
            clickSelectUser : "//span[text()='Search User']",
            selectFromSelectUser : "//div[@class='select2-search']//input[1]",
            selectFirstUserArticles : "(//div[@class='select2-result-label'])[1]",
            headingFromArticles : "//label[text()='Heading *']/following-sibling::input",
            descriptionFromArticles : "//html[@dir='ltr']",
            saveFromArticles : "//button[@type='submit']",
            actionSuccessArticles : "//div[text()='Action Success!']",
            articlesActionButton : "(//button[@type='button'])[2]",
            viewButton : "(//a[@title='View']//i)[1]",
            editButton : "(//div[@placement='top-start']//a)[2]",
            artcielDeleteButton : "(//a[@title='Delete'])[1]",
            draftButton : "(//a[@title='Draft'])[1]",
            headlineMessageIsVisible : "//strong[text()='Headline']",
            backButton : "//a[contains(.,'Back')]",
            editArticleIsAvailable : "//h4[text()='Edit Article']",
            draftIsSuccessful : "//div[text()='Record Drafed !']",
            sysManagementMarketPlace : "//span[text()[normalize-space()='Market Place']]",
            marketplaceSearch : "//input[@type='search']",
            searchIsSuccess : "(//tr[@class='odd']//td)[2]",
            viewIsSuccess : "//strong[text()='Title']",
            viewMarketplace : "(//a[@title='View'])[2]",
            sysManagementJobPost : "//span[text()='Job Post']",
            sysManagementBusinessLocator : "//span[text()[normalize-space()='Business Locator']]",
            addBusinessLocator : "//a[contains(.,'Add Business Locator')]",
            searchCompany : "//span[text()='Search Company']",
            searchbarInSearchCompany : "(//label[text()='Designation']/following::input)[2]",
            selectGoogleInSearchCompany : "//li[contains(@class,'select2-results-dept-0 select2-result')]//div[1]",
            searchUserInBusinessLoc : "//span[text()='Search User']",
            searchBarInBusinessLoc : "(//div[@class='select2-search']//input)[2]",
            selectFirstUserInBusinessLoc : "(//li[contains(@class,'select2-results-dept-0 select2-result')]//div)[1]",
            saveBusinessLoc : "//button[@type='submit']",
            businessLocatorThreeDots : "(//button[@class='btn']//i)[1]",
            deleteButtonBusinessLocator : "(//a[@title='Delete'])[1]",
            viewButtonBusinessLocator : "(//a[@title='View'])[1]",
            nameVisibleBusinessLocator : "//strong[text()='Name']",
            editButtonBusinessLocator : "(//a[contains(@class,'blue btn-action')]/following-sibling::a)[1]",
            editBusinessLocatorTextIsVisible : "//h4[text()='Edit Business Locator']",
            interestsSysManagement : "//span[text()='Interests']",
            editInterestIsVisible : "//label[text()='Edit Interest ']",
            sysManagementProposals : "//span[text()='Proposals']",
            b2bMatchmaking : "//span[text()='B2B Match Making']",
            partnershipProposal : "//span[text()='Partnership']",
            mentorProposal : "//span[text()='Mentor']",
            protageProposal : "//span[text()='Protage']",
            editButtonMessageVisible : "//h4[text()='Edit B2B Match Making']",
            viewButtonMessageVisible : "//h4[text()='View B2B Match Making']",
            b2bDeleteButton : "(//div[@placement='top-start']//a)[2]",
            b2bEditButton : "(//a[contains(@class,'success btn-action')])[1]",
            b2bViewButton : "(//a[@title='view'])[1]",
            editPartnershipVisible : "//h4[text()='Edit Partnership']",
            viewPartnershipVisible : "//h4[text()='View Partnership']",
            editMentorVisible : "//h4[text()='Edit Mentor']",
            viewMentorVisible : "//h4[text()='View Mentor']",
            editProtageVisible : "//h4[text()='Edit Protage']",
            viewProtageVisible : "//h4[text()='View Protage']",
            otherModules : "//span[text()='Other Modules']",
            studyUnderOtherModules : "//span[text()='Study']",
            addStudy : "//a[contains(.,'Add Study')]",
            studyName : "//label[text()='Study / Course Name*']/following-sibling::input",
            saveStudy : "//button[text()[normalize-space()='Save']]",
            studyAdded : "//div[text()='Study added!']/following-sibling::div",
            editStudy : "//h4[text()='Edit Study']",
            deleteSuccess : "//div[text()='Record Deleted !']/following-sibling::div",
            deleteStudy : "(//a[@title='Delete'])[1]",
            languageUnderOtherModules : "//span[text()='Language']",
            addLanguageButton : "//a[contains(.,'Add Language')]",
            codeTextBox : "(//label[text()='Code']/following::input)[1]",
            nameTextBox : "//label[text()='Name']/following-sibling::input",
            nativeNameTextBox : "//label[text()='Native Name']/following-sibling::input",
            saveButtonLanguage : "//button[@type='submit']",
            successLanguage : "//div[text()='Action Success!']",
            editLanguageSuccess : "//h4[text()='Edit Language']",
            deleteSuccessLanguageSection : "//div[text()='Record Deleted !']",
            messagesUnderOtherModules : "//span[text()='Messages']",
            deleteSuccessMessage : "//div[text()='Action Success!']",
            tipOfDayUnderOtherModules : "//span[text()='Tips of day']",
            addTipOfDay : "//a[contains(.,'Add Tip of day')]",
            tipText : "//label[text()='Tip text*']/following-sibling::input",
            tipDate : "//label[text()='Date*']/following-sibling::input",
            dateSelect : "(//td[@class=' ui-datepicker-unselectable ui-state-disabled ']/following-sibling::td)[2]",
            saveButtonTipOfDay : "//button[text()[normalize-space()='Save']]",
            tipOfDayAddedSuccessMessage : "//div[text()='Tip of day added!']",
            linkingRecordsUnderOtherModules : "//span[text()='Linking records']",
            addLinkButton : "//a[@title='Add Link']",
            textAddLink : "//label[text()='Text*']/following-sibling::input",
            descriptionAddLink : "//label[text()='Description*']/following::textarea",
            urlAddLink : "//label[text()='Url*']/following-sibling::input",
            imgpathAddLink : "//label[text()='Img path*']/following-sibling::input",
            dateAddLink : "//label[text()='Date*']/following::input",
            saveAddLink : "//button[text()[normalize-space()='Save']]",
            calendarSelectAddLink : "(//td[@data-year='2024']//a)[1]",
            editLinkMessage : "//h4[text()='Edit Link']",
            actionSuccessMessageAddLink : "//div[text()='Action Success!']",
            triviaUnderOtherModules : "//span[text()='Trivia']",
            triviaQuestions : "//span[text()='Trivia Questions']",
            triviaAnswers : "//span[text()='Trivia Answers']",
            addTriviaQuestion : "//a[contains(.,'Add Trivia Question')]",
            addQuestion : "//label[text()='Question Body *']/following-sibling::textarea",
            saveButtonTrivia : "//button[text()[normalize-space()='Save']]",
            triviaQuestionSuccess : "//div[text()='Trivia question added successfully!']",
            triviaDelete : "(//a[@title='Delete'])[1]",
            triviaAddAnswer : "(//a[@title='Add answer'])[1]",
            triviaEdit : "(//div[@placement='top-start']//a)[2]",
            triviaQuestionRemoveSuccess : "//div[text()='Selected Trivia question was removed successfully!']",
            triviaAnswerRemoveSuccess : "//div[text()='Selected Trivia Question Answer was removed successfully!']"

    }

    async triviaAnswerMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.triviaAnswerRemoveSuccess)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnTriviaAnswerUnderTrivia () {
        const ele = await this.page.locator(this.loginPageElements.triviaAnswers)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnTriviaAnswer () {
        const ele = await this.page.locator(this.loginPageElements.triviaAddAnswer)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnEditTrivia () {
        const ele = await this.page.locator(this.loginPageElements.triviaEdit)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async triviaDeleteMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.triviaQuestionRemoveSuccess)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickDeleteTriviaQuestionButton () {
        const ele = await this.page.locator(this.loginPageElements.triviaDelete)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await this.page.on('dialog', async dialog =>
                await dialog.accept()
        )
            await ele.click({ button: "left", delay: 100, force: true })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home |  Eye button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async triviaSuccessMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.triviaQuestionSuccess)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSaveButtonTrivia () {
        const ele = await this.page.locator(this.loginPageElements.saveButtonTrivia)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeAddQuestionTextbox () {
        const ele = await this.page.locator(this.loginPageElements.addQuestion)
        
        try {
            await ele.fill("Question1")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnAddTriviaQuestions () {
        const ele = await this.page.locator(this.loginPageElements.addTriviaQuestion)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnTriviaQuestions () {
        const ele = await this.page.locator(this.loginPageElements.triviaQuestions)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnTriviaUnderOtherModules () {
        const ele = await this.page.locator(this.loginPageElements.triviaUnderOtherModules)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSaveLinkRecords () {
        const ele = await this.page.locator(this.loginPageElements.saveAddLink)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSelectDateAddLinkRecords () {
        const ele = await this.page.locator(this.loginPageElements.calendarSelectAddLink)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnDateAddLinkRecords () {
        const ele = await this.page.locator(this.loginPageElements.dateAddLink)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInURLLinkTextbox () {
        const ele = await this.page.locator(this.loginPageElements.urlAddLink)
        
        try {
            await ele.fill("https://www.youtube.com/watch?v=eT1E3gmST9U&list=RDMV_3Dpw-BRY&index=4")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInDescriptionLinkTextbox () {
        const ele = await this.page.locator(this.loginPageElements.descriptionAddLink)
        
        try {
            await ele.fill("Description One")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInTextAddLinkTextbox () {
        const ele = await this.page.locator(this.loginPageElements.textAddLink)
        
        try {
            await ele.fill("Text One")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnAddLinkRecords () {
        const ele = await this.page.locator(this.loginPageElements.addLinkButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnLinkingRecords () {
        const ele = await this.page.locator(this.loginPageElements.linkingRecordsUnderOtherModules)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async tipOfDaySuccessMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.tipOfDayAddedSuccessMessage)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSaveButtonTipOfDay () {
        const ele = await this.page.locator(this.loginPageElements.saveButtonTipOfDay)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnTipDateSelectButton () {
        const ele = await this.page.locator(this.loginPageElements.dateSelect)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnTipDateButton () {
        const ele = await this.page.locator(this.loginPageElements.tipDate)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInTipTextbox () {
        const ele = await this.page.locator(this.loginPageElements.tipText)
        
        try {
            await ele.fill("Tip One")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnAddTipOfDayButton () {
        const ele = await this.page.locator(this.loginPageElements.addTipOfDay)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnTipOfDayButton () {
        const ele = await this.page.locator(this.loginPageElements.tipOfDayUnderOtherModules)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async deleteSuccessIsVisibleUnderMessages () {
        const ele = await this.page.locator(this.loginPageElements.deleteSuccessMessage)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnMessagesButton () {
        const ele = await this.page.locator(this.loginPageElements.messagesUnderOtherModules)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async editLanguageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editLanguageSuccess)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async deleteSuccessMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.deleteSuccessLanguageSection)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async successLanguageMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.successLanguage)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSaveLanguageButton () {
        const ele = await this.page.locator(this.loginPageElements.saveButtonLanguage)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInCodeTextbox () {
        const ele = await this.page.locator(this.loginPageElements.codeTextBox)
        
        try {
            await ele.fill("Code One")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInNameTextBox () {
        const ele = await this.page.locator(this.loginPageElements.nameTextBox)
        
        try {
            await ele.fill("Name One")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInNativeNameTextbox () {
        const ele = await this.page.locator(this.loginPageElements.nativeNameTextBox)
        
        try {
            await ele.fill("Native Name One")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnAddLanguageButton () {
        const ele = await this.page.locator(this.loginPageElements.addLanguageButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnLanguageUnderOtherModules () {
        const ele = await this.page.locator(this.loginPageElements.languageUnderOtherModules)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickDeleteStudyButton () {
        const ele = await this.page.locator(this.loginPageElements.deleteStudy)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await this.page.on('dialog', async dialog =>
                await dialog.accept()
        )
            await ele.click({ button: "left", delay: 100, force: true })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home |  Eye button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async deleteStudyMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.deleteSuccess)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async editStudyMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editStudy)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async studyAddedMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.studyAdded)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSaveStudy () {
        const ele = await this.page.locator(this.loginPageElements.saveStudy)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInStudyName () {
        const ele = await this.page.locator(this.loginPageElements.studyName)
        
        try {
            await ele.fill("Study One")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnAddStudy () {
        const ele = await this.page.locator(this.loginPageElements.addStudy)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnStudyUnderModulesButton () {
        const ele = await this.page.locator(this.loginPageElements.studyUnderOtherModules)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnOtherModulesButton () {
        const ele = await this.page.locator(this.loginPageElements.otherModules)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async editProtageMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editProtageVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async viewProtageMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.viewProtageVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnProtageButton () {
        const ele = await this.page.locator(this.loginPageElements.protageProposal)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnMentorButton () {
        const ele = await this.page.locator(this.loginPageElements.mentorProposal)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async editMentorMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editMentorVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async viewMentorMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.viewMentorVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async viewPartnershipMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.viewPartnershipVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async editPartnershipMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editPartnershipVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnPartnershipProposalButton () {
        const ele = await this.page.locator(this.loginPageElements.partnershipProposal)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnB2BDeleteButton () {
        const ele = await this.page.locator(this.loginPageElements.b2bDeleteButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnB2BEditButton () {
        const ele = await this.page.locator(this.loginPageElements.b2bEditButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnB2BViewButton () {
        const ele = await this.page.locator(this.loginPageElements.b2bViewButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async editButtonMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editButtonMessageVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async viewButtonMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.viewButtonMessageVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnB2BMatchmakingButton () {
        const ele = await this.page.locator(this.loginPageElements.b2bMatchmaking)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSysProposals () {
        const ele = await this.page.locator(this.loginPageElements.sysManagementProposals)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async editInterestIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editInterestIsVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnInterestsButton () {
        const ele = await this.page.locator(this.loginPageElements.interestsSysManagement)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnBusinessLocatorEditButton () {
        const ele = await this.page.locator(this.loginPageElements.editButtonBusinessLocator)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async editBusinessLocatorIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editBusinessLocatorTextIsVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnBusinessLocatorViewButton () {
        const ele = await this.page.locator(this.loginPageElements.viewButtonBusinessLocator)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async nameMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.nameVisibleBusinessLocator)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnBusinessLocatorDeleteButton () {
        const ele = await this.page.locator(this.loginPageElements.deleteButtonBusinessLocator)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await this.page.on('dialog', async dialog =>
                await dialog.accept()
        )
            await ele.click({ button: "left", delay: 100, force: true })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home |  Eye button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnBusinessLocatorThreeDotsButton () {
        const ele = await this.page.locator(this.loginPageElements.businessLocatorThreeDots)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnBusinessLocatorButton () {
        const ele = await this.page.locator(this.loginPageElements.sysManagementBusinessLocator)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnViewInMarketplaceButton () {
        const ele = await this.page.locator(this.loginPageElements.viewMarketplace)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async viewInMarketplaceIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.viewIsSuccess)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async searchInMarketplaceIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.searchIsSuccess)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInMarketplaceSearchBox () {
        const ele = await this.page.locator(this.loginPageElements.marketplaceSearch)
        
        try {
            await ele.fill("I need a Web Dev")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnMarketplaceSearchButton () {
        const ele = await this.page.locator(this.loginPageElements.marketplaceSearch)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnsysManagementMarketPlaceButton () {
        const ele = await this.page.locator(this.loginPageElements.sysManagementMarketPlace)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnDeleteButton () {
        const ele = await this.page.locator(this.loginPageElements.artcielDeleteButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async draftSuccessTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.draftIsSuccessful)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnDraftButton () {
        const ele = await this.page.locator(this.loginPageElements.draftButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async editArticleTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editArticleIsAvailable)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnEditButton () {
        const ele = await this.page.locator(this.loginPageElements.editButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnBackButton () {
        const ele = await this.page.locator(this.loginPageElements.backButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async headlineTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.headlineMessageIsVisible)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnViewsButton () {
        const ele = await this.page.locator(this.loginPageElements.viewButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnArticlesActionButton () {
        const ele = await this.page.locator(this.loginPageElements.articlesActionButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async successMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.actionSuccessArticles)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSaveButton () {
        const ele = await this.page.locator(this.loginPageElements.saveFromArticles)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnDescriptionButton () {
        const ele = await this.page.locator(this.loginPageElements.descriptionFromArticles)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInDescriptionBox () {
        const ele = await this.page.locator(this.loginPageElements.descriptionFromArticles)
        
        try {
            await ele.fill("Heading")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnHeadingButton () {
        const ele = await this.page.locator(this.loginPageElements.headingFromArticles)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInHeadingBox () {
        const ele = await this.page.locator(this.loginPageElements.headingFromArticles)
        
        try {
            await ele.fill("Heading")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnFirstUserButton () {
        const ele = await this.page.locator(this.loginPageElements.selectFirstUserArticles)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInUserBox () {
        const ele = await this.page.locator(this.loginPageElements.selectFromSelectUser)
        
        try {
            await ele.fill("Nabil")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnselectFromSelectUserButton () {
        const ele = await this.page.locator(this.loginPageElements.selectFromSelectUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSelectUserButton () {
        const ele = await this.page.locator(this.loginPageElements.clickSelectUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnAddArticlesButton () {
        const ele = await this.page.locator(this.loginPageElements.addArticle)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnArticlesButton () {
        const ele = await this.page.locator(this.loginPageElements.articlesUnderSystemManagement)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async searchIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.messageAvailable)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInfeedSearchBox () {
        const ele = await this.page.locator(this.loginPageElements.feedsSearch)
        
        try {
            await ele.type("Nabil")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnfeedSearchButton () {
        const ele = await this.page.locator(this.loginPageElements.feedsSearch)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async feedsSuccessIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.feedsSuccess)
    
        try {
            await expect.soft(ele).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnfeedSaveButton () {
        const ele = await this.page.locator(this.loginPageElements.feedsSaveButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInMessageTextbox () {
        const ele = await this.page.locator(this.loginPageElements.messageTextbox)
        
        try {
            await ele.fill("Nabil")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnMessageTextbox () {
        const ele = await this.page.locator(this.loginPageElements.messageTextbox)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async selectFirstUser () {
        const ele = await this.page.locator(this.loginPageElements.selectUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInSearchUserTextbox () {
        const ele = await this.page.locator(this.loginPageElements.typeUser)
        
        try {
            await ele.fill("Nabil")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSearchUserTextbox () {
        const ele = await this.page.locator(this.loginPageElements.typeUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSearchUserDropdown () {
        const ele = await this.page.locator(this.loginPageElements.searchUserDropdown)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnAddFeedButton () {
        const ele = await this.page.locator(this.loginPageElements.clickAddFeedButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnFeedButton () {
        const ele = await this.page.locator(this.loginPageElements.feedButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async approveIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.approveIsSuccessful)
        const ele2 = await this.page.locator(this.loginPageElements.unapproveIsSuccessful)
    
        try {
            await expect.soft(ele || ele2).toBeVisible();
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnApproveButton () {
        const ele = await this.page.locator(this.loginPageElements.clickApproveButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnDealsUnderSystemManagementButton () {
        const ele = await this.page.locator(this.loginPageElements.dealsUnderSysManagement)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSystemManagementButton () {
        const ele = await this.page.locator(this.loginPageElements.systemManagement)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSupportMessagesButton () {
        const ele = await this.page.locator(this.loginPageElements.supportMessagesButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async actionDeletedPurposeMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.purposeDeletedSuccessMessage)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnThreeDotsDeleteButton () {
        const ele = await this.page.locator(this.loginPageElements.threeDotsDelete)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnThreeDotsButton () {
        const ele = await this.page.locator(this.loginPageElements.purposeThreeDots)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOkButton () {
        const ele = await this.page.locator(this.loginPageElements.threeDotsDelete)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await this.page.on('dialog', async dialog =>
                await dialog.accept()
        ) 
            await ele.click({ button: "left", delay: 100, force: true })
            await this.page.waitForTimeout(1000)
            
        } catch (error) {
            throw new Error(`Home |  Eye button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async actionSuccessPurposeButtonIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.actionSuccessInSendNotification)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSavePurposeButton () {
        const ele = await this.page.locator(this.loginPageElements.savePurposeButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInPurposeNameTextbox () {
        const ele = await this.page.locator(this.loginPageElements.purposeName)
        
        try {
            await ele.fill("Purpose1")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnPurposeNameTextbox () {
        const ele = await this.page.locator(this.loginPageElements.purposeName)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnAddSupportButton () {
        const ele = await this.page.locator(this.loginPageElements.addsupportButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSupportPurpose () {
        const ele = await this.page.locator(this.loginPageElements.supportPurposesButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async actionSuccessInSendNotificationIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.actionSuccessInSendNotification)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSelectedUser () {
        const ele = await this.page.locator(this.loginPageElements.clickOnSelectedUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSelectFirstUser () {
        const ele = await this.page.locator(this.loginPageElements.selectFirstUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInNotificationTextbox () {
        const ele = await this.page.locator(this.loginPageElements.writeNotificationText)
        
        try {
            await ele.fill("Notify")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnNotificationTextbox () {
        const ele = await this.page.locator(this.loginPageElements.writeNotificationText)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async logoImageUploadFunction() {
        const filePath0 = "testData/logos/gameTeamLogo.png"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
}
    async clickOnImageUploadButton () {
        const ele = await this.page.locator(this.loginPageElements.sendNotificationImageUpButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home Page | Second Image upload button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSendNotifications () {
        const ele = await this.page.locator(this.loginPageElements.sendNotifications)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Inactive User | Inactive button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async searchedSubscriberIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.searchedPresent)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInSubscriberSearch () {
        const ele = await this.page.locator(this.loginPageElements.subscribersSearch)
        
        try {
            await ele.fill("Nate Jacobs")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSubscribersSearch () {
        const ele = await this.page.locator(this.loginPageElements.subscribersSearch)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Inactive User | Inactive button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async actionSuccessMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.actionSuccess)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSubscribersToggle () {
        const ele = await this.page.locator(this.loginPageElements.subscribersToggle)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Inactive User | Inactive button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnSubscribers () {
        const ele = await this.page.locator(this.loginPageElements.subscribers)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Inactive User | Inactive button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async badRegs () {
        const ele = await this.page.locator(this.loginPageElements.badUserRegs)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Inactive User | Inactive button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickincompleteRegs () {
        const ele = await this.page.locator(this.loginPageElements.incompleteRegs)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Inactive User | Inactive button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickInactiveUser () {
        const ele = await this.page.locator(this.loginPageElements.inactiveUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Inactive User | Inactive button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async businessCardSavedMessageIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.cardSavedSuccessMessage)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Card Saved text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickSaveBusiness () {
        const ele = await this.page.locator(this.loginPageElements.saveButtonBusinessCard)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Save button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInWebAddress () {
        const ele = await this.page.locator(this.loginPageElements.selectWebAddress)
        
        try {
            await ele.fill("https://www.bixex.net/admin/users/22209/business-card")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Web Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickWebAddress () {
        const ele = await this.page.locator(this.loginPageElements.selectWebAddress)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Web Address textbox clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInAddress () {
        const ele = await this.page.locator(this.loginPageElements.selectAddress)
        
        try {
            await ele.fill("benz@gmail.com")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Address textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickAddress () {
        const ele = await this.page.locator(this.loginPageElements.selectAddress)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Address textbox clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInPhoneNumber () {
        const ele = await this.page.locator(this.loginPageElements.selectEmail)
        
        try {
            await ele.fill("benz@gmail.com")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Email textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickPhoneNumber () {
        const ele = await this.page.locator(this.loginPageElements.selectEmail)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Email textbox clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInEmail () {
        const ele = await this.page.locator(this.loginPageElements.selectEmail)
        
        try {
            await ele.fill("benz@gmail.com")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Email textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickEmail () {
        const ele = await this.page.locator(this.loginPageElements.selectEmail)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Email textbox clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInLastName () {
        const ele = await this.page.locator(this.loginPageElements.selectLastName)
        
        try {
            await ele.fill("Benz")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Last Name textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickLastName () {
        const ele = await this.page.locator(this.loginPageElements.selectLastName)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Last name textbox clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInFirstName () {
        const ele = await this.page.locator(this.loginPageElements.selectFirstName)
        
        try {
            await ele.fill("Karim")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in First Name textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickFirstName () {
        const ele = await this.page.locator(this.loginPageElements.selectFirstName)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | First name textbox clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInSelectTitle () {
        const ele = await this.page.locator(this.loginPageElements.selectTitle)
        
        try {
            await ele.fill("Business_1")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Cannot be written in Title textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickSelectTitle () {
        const ele = await this.page.locator(this.loginPageElements.selectTitle)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Title selectbox clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async selectGoogleInCompany () {
        const ele = await this.page.locator(this.loginPageElements.selectGoogle)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Selection of City button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickCompanyNameButton () {
        const ele = await this.page.locator(this.loginPageElements.companyName)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Card Details | Company name button cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickBusinessCardDetail () {
        const ele = await this.page.locator(this.loginPageElements.businesscardDetail)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Business Card Detail cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInSearchBoxUsers () {
        const ele = await this.page.locator(this.loginPageElements.usersSearchBar)
        
        try {
            await ele.fill("Ahmed Karim")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Education List | Users Education List | Cannot be written in searchbar | Could Not Find Locator:"${error}"`)
    }
    }
    async clickSearchButtonUsers () {
        const ele = await this.page.locator(this.loginPageElements.usersSearchBar)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Search bar cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async searchResultTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.textVisible)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Education List | Users Education List | Text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async writeInSearchBox () {
        const ele = await this.page.locator(this.loginPageElements.searchButton)
        
        try {
            await ele.fill("Test@1234")
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Education List | Users Education List | Cannot be written in searchbar | Could Not Find Locator:"${error}"`)
    }
    }
    async clickSearchButton () {
        const ele = await this.page.locator(this.loginPageElements.searchButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User | Education List | Users Education List | Search bar cannot be clicked | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOtherUser () {
        const ele = await this.page.locator(this.loginPageElements.otherUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Other User button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async selectCity () {
        const ele = await this.page.locator(this.loginPageElements.selectionOfCity)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Selection of City button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickSearchCityButton () {
        const ele = await this.page.locator(this.loginPageElements.searchCity)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Search City button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickBusinessDropdownButton () {
        const ele = await this.page.locator(this.loginPageElements.businessOwnerDropdown)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async editProfileIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.editProfileVisibility)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Edit Profile text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickEditProfileButton () {
        const ele = await this.page.locator(this.loginPageElements.businessOwnerEditProfile)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Edit Profile button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async businessViewLastNameIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.viewVisibilityLasttName)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Last Name text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async businessViewFirstNameIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.viewVisibilityFirstName)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | First Name text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickBusinessViewButton () {
        const ele = await this.page.locator(this.loginPageElements.businessOwnerView)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Owner View button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async businessConnectionIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.connectionVisibility)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Connection Success text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickBusinessConnectionButton () {
        const ele = await this.page.locator(this.loginPageElements.businessOwnerConnection)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Management | Business Owner | Business Connection button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async writeTypeOfUser () {
        const ele = await this.page.locator(this.loginPageElements.typeOfUser)
        
        try {
            await ele.fill("Admin")
        } catch (error) {
            throw new Error(`Job Seeker | Cannot write in Zip Code Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickJobSeekerButton () {
        const ele = await this.page.locator(this.loginPageElements.userMJobSeeker)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Search State button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async UserCreationSuccessTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.userAddSuccessButton)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Awards Success text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickUserSaveButton () {
        const ele = await this.page.locator(this.loginPageElements.userSaveButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | User Save button is not clickable | Could Not Find Locator:"${error}"`)
    }
    }
    async clickAdminButton () {
        const ele = await this.page.locator(this.loginPageElements.adminSelection)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            //await ele.click({ button: "left", delay: 100, force : true })
            await this.page.selectOption('#userTypeChange', { label: 'Admin' });
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Search State button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickTypeOfUserButton () {
        const ele = await this.page.locator(this.loginPageElements.typeOfUser)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Search State button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async writeZipCode () {
        const ele = await this.page.locator(this.loginPageElements.zipCode)
        
        try {
            await ele.fill("12345")
        } catch (error) {
            throw new Error(`Job Seeker | Cannot write in Zip Code Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async selectState () {
        const ele = await this.page.locator(this.loginPageElements.selectionOfState)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Selection of State button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickSearchStateButton () {
        const ele = await this.page.locator(this.loginPageElements.searchState)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Search State button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async selectSearchCountry () {
        const ele = await this.page.locator(this.loginPageElements.selectionOfCountry)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Selection of Study button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickSearchCountryButton () {
        const ele = await this.page.locator(this.loginPageElements.searchCountry)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Selection of Study button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async writeAddressLineOne () {
        const ele = await this.page.locator(this.loginPageElements.addressLine1)
        
        try {
            await ele.fill("Karim")
        } catch (error) {
            throw new Error(`Job Seeker | Cannot write in Address Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writePassword () {
        const ele = await this.page.locator(this.loginPageElements.password)
        
        try {
            await ele.fill("Karim")
        } catch (error) {
            throw new Error(`Job Seeker | Cannot write in password Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeEmailAddress () {
        const emailPrefix = `karim${Math.floor(Math.random() * 1000000)}`; // Generate a random number
        const emailaddress = `${emailPrefix}@gmail.com`;
        const ele = await this.page.locator(this.loginPageElements.emailAddress)
        
        try {
            await ele.fill(emailaddress)
        } catch (error) {
            throw new Error(`Job Seeker | Cannot write in EmailAddress Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeLastName () {
        const ele = await this.page.locator(this.loginPageElements.lastName)
        
        try {
            await ele.fill("Karim")
        } catch (error) {
            throw new Error(`Job Seeker | Cannot write in Last Name Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeFirstName () {
        const ele = await this.page.locator(this.loginPageElements.firstName)
        
        try {
            await ele.fill("Ahmed")
        } catch (error) {
            throw new Error(`Job Seeker | Cannot write in First Name Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickAddUser () {
        const ele = await this.page.locator(this.loginPageElements.jobseekerAdduser)
    
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Job Seeker | Add User button is not clickable | Could Not Find Locator:"${error}"`)
    }
    }
    async AwardsSuccessTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.successAwards)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Awards Success text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickSaveAwardsButton () {
        const ele = await this.page.locator(this.loginPageElements.saveAwards)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Save Awards button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async writeAwardDesc () {
        const ele = await this.page.locator(this.loginPageElements.awardDesc)
        
        try {
            await ele.fill("ICC")
        } catch (error) {
            throw new Error(`Home | Cannot be written in Award Description By Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeAwardIssueDate () {
        const ele = await this.page.locator(this.loginPageElements.awardIssueDate)
        
        try {
            await ele.fill("05-06-2024")
        } catch (error) {
            throw new Error(`Home | Cannot be written in Award Issued | Could Not Find Locator:"${error}"`)
    }
    }
    async writeAwardIssuedBy () {
        const ele = await this.page.locator(this.loginPageElements.awardIssued)
        
        try {
            await ele.fill("ICC")
        } catch (error) {
            throw new Error(`Home | Cannot be written in Award Issued By Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeAwardTitle () {
        const ele = await this.page.locator(this.loginPageElements.awardTitle)
        
        try {
            await ele.fill("WorldCup")
        } catch (error) {
            throw new Error(`Home | Cannot be written in Award Title Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async clickAddAwardsButton () {
        const ele = await this.page.locator(this.loginPageElements.addAwards)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Add Awards button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickAwardsButton () {
        const ele = await this.page.locator(this.loginPageElements.awardsButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Awards button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async educationSuccessTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.educationAddSuccess)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Education Success text is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    async clickSaveButton () {
        const ele = await this.page.locator(this.loginPageElements.saveButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Save button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async writeEndDate () {
        const ele = await this.page.locator(this.loginPageElements.endDate)
        
        try {
            await ele.fill("05-06-2024")
        } catch (error) {
            throw new Error(`Home | Cannot be written in End Date Textbox | Could Not Find Locator:"${error}"`)
    }
    }
    async writeStartDate () {
        const ele = await this.page.locator(this.loginPageElements.startDate)
        
        try {
            await ele.fill("01-06-2024")
        } catch (error) {
            throw new Error(`Home | Cannot be written in Start Date Textbox | Could Not Find Locator:"${error}"`)
    }
    }

    async writeOnSchoolCollegeUniTextbox () {
        const ele = await this.page.locator(this.loginPageElements.schoolCollegeUniversity)
        
        try {
            await ele.fill("Test@1234")
        } catch (error) {
            throw new Error(`Home | Cannot be written in School College Textbox | Could Not Find Locator:"${error}"`)
    }
    }

    async SelectFieldStudyButton () {
        const ele = await this.page.locator(this.loginPageElements.selectionOfStudy)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Selection of Study button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickFieldStudyButton () {
        const ele = await this.page.locator(this.loginPageElements.fieldOfStudy)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Field Study button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickAddEducationButton () {
        const ele = await this.page.locator(this.loginPageElements.addEducation)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Add Education button is not working | Could Not Find Locator:"${error}"`)
    }
    }

    async clickEducationButton () {
        const ele = await this.page.locator(this.loginPageElements.educationList)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Education button is not working | Could Not Find Locator:"${error}"`)
    }
    }

    async clickDeleteButton () {
        const ele = await this.page.locator(this.loginPageElements.deleteButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await this.page.on('dialog', async dialog =>
                await dialog.accept()
        ) 
            await ele.click({ button: "left", delay: 100, force: true })
            await this.page.waitForTimeout(1000)
            
        } catch (error) {
            throw new Error(`Home |  Eye button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async FirstNameTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.firstNameButton)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | First Name text is not visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOneEyeButton () {
        const ele = await this.page.locator(this.loginPageElements.eyeButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home |  Eye button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnthreedotsButton () {
        const ele = await this.page.locator(this.loginPageElements.threedotButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.hover({ timeout: 2000 })
            //await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home |  Three dot button is not working | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnUsersButton () {
        const ele = await this.page.locator(this.loginPageElements.usersButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home |  user is not redirected to Users after clicking on Users button | Could Not Find Locator:"${error}"`)
    }
    }
    async allUsersTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.allusersText)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | All users text is not visible | Could Not Find Locator:"${error}"`)
    }
    }

    async clickOnUserManagementButton () {
        const ele = await this.page.locator(this.loginPageElements.userManagementButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Validate User Management dropdown appears after clicking on User management | Could Not Find Locator:"${error}"`)
    }
    }
    async jobSeekerTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.jobseekerTextVisible)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Job Seeker text is visible | Could Not Find Locator:"${error}"`)
    }
    }
    async clickOnDashboardButton () {
        const ele = await this.page.locator(this.loginPageElements.dashboardButton)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Validate if website is redirected to Dashboard, after clicking on Dashboard | Could Not Find Locator:"${error}"`)
    }
    }

    async registereduserTextVisible () {
        const ele = await this.page.locator(this.loginPageElements.registereduserTextVisible)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Home | Registered User text is visible | Could Not Find Locator:"${error}"`)
    }
    }

    async writeOnEmailInputNameTextbox () {
        const ele = await this.page.locator(this.loginPageElements.emailInputField)
        
        try {
            await ele.fill("nabil@unidevgo.com")
        } catch (error) {
            throw new Error(`Sign-in | Input cannot be given in email textbox | Could Not Find Locator:"${error}"`)
    }
    }

    async writeOnPasswordInputNameTextbox () {
        const ele = await this.page.locator(this.loginPageElements.passwordInputField)
        
        try {
            await ele.fill("Test@1234")
        } catch (error) {
            throw new Error(`Sign-in | Input cannot be given in password textbox | Could Not Find Locator:"${error}"`)
    }
    }

    async clickOnLoginButton () {
        const ele = await this.page.locator(this.loginPageElements.loginBtn)
        //const ele2 = await this.page.locator(this.HomePageElements.WallTextbox)
        try {
            await ele.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Sign-in | Login button is not clickable | Could Not Find Locator:"${error}"`)
    }
    }

    async WelcomeTextIsVisible () {
        const ele = await this.page.locator(this.loginPageElements.textavailable)
    
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Sign-in | Welcome button is not visible | Could Not Find Locator:"${error}"`)
    }
    }

}    