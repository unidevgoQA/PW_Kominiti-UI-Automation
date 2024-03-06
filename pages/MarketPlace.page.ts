import { expect} from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "@playwright/test";
import { url } from "inspector";



export default class MarketPlacePage{
        static MarketPlaceRedirct() {
                throw new Error('Method not implemented.');
        }
    // [x: string]: any;
    private page: Page;
    // static buffer: void;
    constructor(page: Page) {
        this.page = page;
    }
    private MarketPlaceElements = {
        MarketPlaceRedirct: "//a[contains(text(),'Marketplace')]",
        CreateProject : "//button[text()='Create MarketPlace | Project']",
        SaveAndContinue: "//button[@class='action-button square']",
        
        MandatoryWarning: "//div[@class='validator-message error-messages']",
        ProjectTitle:"//textarea[contains(@class,'custom-textarea project-title-input')]",
        ProejectCategory: "//input[@placeholder='Select project category']",
        ProjectCategoryOption: "(//li[@class='custom-drop-down-item'])[2]",
        ProjectSubCategory:"//input[@placeholder='Select project sub-category']",
        ProjectSubCategoryOption: "//ul[@class='custom-drop-down-items-list']//li[1]",
        Keywords: "//input[@placeholder='Enter key word']",
        KeywordsOption: "(//li[@class='custom-drop-down-item'])[1]",
        AddBtn: "//button[text()='Add']",
        //Description & Faq
        ProjectDiscripiton: "//textarea[@class='custom-textarea project-description-input']",
        ProjectType:"(//span[text()='MarketPlace | Project type']/following::input)[1]",
        ProjectTypeOption: "//ul[@class='custom-drop-down-items-list']//li[1]",
        BidProject: "(//div[@class='custom-form-input custom-form-input']//input)[2]",
        BidProjectOption:"//ul[@class='custom-drop-down-items-list']//li[1]",
        ClickAddQuestion: "//button[@type='button']",
        FaqDescription: "//span[text()='Who can bid on this project']/following::textarea",
        SendBtn: "//button[text()='Send']",
        AnswerBtn: "(//button[@class='action_btn'])[1]",
        AnswerText: "(//div[@class='custom-texterea-wrap']//textarea)[2]",
        AnswerSubmit: "//span[text()='Submit']",
        //pricing
        Pricing: "//div[@class='custom-form-input custom-form-input']",
        PricingYes: "(//ul[@class='custom-drop-down-items-list']//li)[2]",
        LowestBudget: "//input[@placeholder='Enter the lowest budget']",
        HighestBudet: "//input[@placeholder='Enter the highest budget']",
        //requirements
        Deadlines: "//input[@placeholder='MM/DD/YYYY']",
        Duration: "//input[@placeholder='Enter your expected duration']",
        DurationOption: "(//li[@class='custom-drop-down-item'])[2]",
        ExperienceLvl: "//input[@placeholder='Select experience level']",
        ExperienceLvlOption: "(//li[@class='custom-drop-down-item'])[2]",
        Skills: "//input[@placeholder='Required skills']",
        SkillsOption: "(//li[@class='custom-drop-down-item']/following-sibling::li)[3]",
        SkillsAddbtn: "//button[text()='Add']", 
        //Attachment
        Background: "(//div[@role='button'])[1]",
        Background2: "(//p[text()='or drag and drop'])[2]",
        //final save
        FinalSaveBtn: "(//button[@class='action-button square'])[2]",
        FinalSaveBtnDone: "//button[text()='Done']",
        //Cancel project
        CancelProjectFinal: "(//button[contains(@class,'action-button square')])[3]",
        ContinueCancelProjectFinal: "(//button[@class='action-button square'])[3]",
        //Repost
        ProjectTitleAutomation: "//h3[text()='I need to have some testing elements']",
        ShareProject: "//a[@class='btn social-btn-link']//span[1]",
        RepostOnWall: "//div[@class='dropdown-menu']//a[1]",
        RepostOnWallTextField: "//textarea[contains(@class,'custom-textarea textarea-form')]",
        RepostOnWallShareBtn: "(//button[contains(@class,'btn btn-block-custom')])[2]",
        RepostOnWallafterShareClose: "//button[text()='Close']",
        //Home
        HomeDashboard: "//a[contains(text(),'Home')]",
        //Repost to delete
        HomeDeletePostHamburgerSign: "(//img[@class='img-fluid more-img'])[1]",
        HomePostDeleteDrpdnBtn: "(//span[text()='Delete'])[1]",
        ConfrimDeleteBtnRepost: "(//button[contains(@class,'btn btn-block-custom')])[2]",

        //Reset the respot on wall
        ResetBtnRepostOnWall: "(//button[contains(@class,'btn btn-block-custom')])[1]",

        //15min alert
        Alert15minCanNotPostonWall: "//div[@class='body-post-div']/following-sibling::div[1]",

        //share on scial media
        ShareOnSocialMedia: "(//div[@class='dropdown-menu']//a)[2]",
        ShareWithFB: "(//span[@class='social-box-grid__circle'])[1]",
        ShareWithTwitter: "(//span[@class='social-box-grid__circle'])[2]",
        ShareWithPinterset: "(//span[@class='social-box-grid__circle'])[3]",
        ShareWithLinkedIN: "(//span[@class='social-box-grid__circle'])[4]",
        //Add question
        InsideProjectAddQusBtn: "//button[text()='Add Question']",
        InsideProjectAddQusBtnInputFld: "//div[@class='custom-texterea-wrap']//textarea[1]",
        InsideProjectAddQusSendBtn: "//button[@class='action_btn']",
        QuestionSuccessSendvalidate: "//div[text()='What is the cost from automation']",

        //attachment
        GameLogoattAttachment: "//div[text()='gameLogo.jpg']",
        LogoLowZiseAttachment: "//div[text()='logo_lowSize.png']",

        //FAQ edit/delete 3 dots
        DotsForEditDeleteQues: "//div[@class='dropdown-doted-more']//span[1]",
        AddQuesEditBtn: "(//div[@role='button'])[1]",
        AddQusDeleteBtn : "(//div[@role='button'])[2]",
        AddQusAfterEdit: "//div[text()='What is the cost from automation edited']",

        //testPorject
        TestAbcProject: "//div[text()='TestABC']",
        ContactBuyerBtn: "//button[text()='Contact Buyer']",
        MessageBoxBuyers: "(//h3[text()='CHINONSO ROBERT NWANEGBO'])[2]",

        //see more
        InsideProjectSeeMoreBtn: "//button[text()='See More']",
        AfterSeeMoreClicked4thDivCmnt: "//h4[text()='Software QA Manager']",
        
        //View profile
        InsideProjectViewProfileBtn: "//a[contains(text(),'View profile')]",
        ValidateProfileOwner: "//div[text()='Nabil Shad']",

        //Place Bid
        ProjectPlaceBidBtn: "//a[contains(text(),'Place Bid')]",
        InsideBidTextField: "textarea[name='comment']",
        ImageUploadPlaceBid: "//input[@type='file']/following-sibling::div[1]",
        ProjectPlaceBidBtnFinal: "//button[@class='action-button square']",
        ViewBidBtn: "//a[contains(text(),'View Bid')]",
        ValidateInputTextFromBid: "//p[text()='I am inputting text from automation']",

        //Delete BId
        DeleteBidBtnPlaceBid: "//div[@class='bid-project--actions__cell']//button[1]",
        DeleteBtnFinalPlaceBid: "(//button[contains(@class,'action-button square')])[2]",

        //cancel
        CancelbtnPlaceBid: "(//a[contains(@class,'action-button square')])[2]",
        OverviewAfterCancel: "(//div[@class='default-page-layout--cell__head'])[1]",

        //Edit bid
        EditBidBtn: "//button[text()='Edit Bid']",
        InputTextFieldEditBid: "//p[text()='I am inputting text from automation and edited']",
        
        //manage bid
        ManageBidBtn: "//a[@class='action_btn']",
        ProjectDashText: "//div[text()='MarketPlace | Project Dashboard']",

        //View all categories
        ViewAllCategoriesBtn: "//div[@class='section-title']//button[1]",
        AccountNFinance: "(//div[@class='sub-menu-item']//a)[1]",
        
        //Inside all categories
        WebMobNSoftCategory: "(//div[@class='categories-list--item__title'])[1]",
        WebMobNSoftTitlteText: "//span[text()='Web, Mobile & Software Dev']",
        DataSciNAnalyticeCategory:"(//div[@class='categories-list--item__title'])[2]",
        DataSciNAnalyticeTitlteText: "//div[text()='Data Science & Analytics']",
        ConsultingCategory: "(//div[@class='categories-list--item__title'])[3]",
        ConsultingTitlteText: "//div[text()='Consulting']",
        AdminSupportCategory: "(//div[@class='categories-list--item__title'])[4]",
        AdminSupportTitlteText: "//span[text()='Admin Support']",

        //search
        CategorySearchDrpdwn: "//input[@placeholder='Category']",
        CategoryAdminSupportOption: "(//li[@class='custom-drop-down-item'])[2]",
        MainSearchField: "//input[@placeholder='Search for projects']",
        SearchBtn: "//button[text()='Search']",

        //Filter
        FilterText: "//div[text()='Filter']",
        FilterSortBy: "(//div[@class='new-variable-drop-down__head--mask'])[2]",
        FilterClientRatingOption: "//ul[@class='new-variable-drop-down__menu-list']//li[2]",
        FilterOccupiedClientrat: "//h3[text()='Client rating']",
        SlctCategory: "//input[@placeholder='Select Category']",
        FilterNewestOption: "//ul[@class='new-variable-drop-down__menu-list']//li[1]",
        BudgetMin:"(//span[text()='min']/following::input)[1]",
        BudgetMax: "(//span[text()='max']/following::input)[1]",
        BidResponseDate: "//input[@placeholder='MM/DD/YYYY']",
        ProjectLength: "//div[@class='custom-form-input custom-form-input']//input[1]",
        ProjectLenght_1_3mon:"//li[text()='1-3 months']",
        ApplyBtn: "//button[text()='Apply']",
        FilterOccupiedNewest: "(//h3[text()='Newest'])[1]"
        






    };


      // Module Name: Kominiti | Marketplace
        // Feature Name: MarketPlaceREdirect
        // Screen Type: Desktop
        // Description: Click On the Marketpalce navbar
 async clickOnMarketPlaceToRedirct() {
        const ele = await this.page.locator(this.MarketPlaceElements.MarketPlaceRedirct)
        try {
        await ele.click({ button: "left", delay: 100 })
        } catch (error) {
        throw new Error(`Home Page | MarketPlace | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: In marketplace homescreen Click On Create project

    async clickOnCreateProject() {
        const ele = await this.page.locator(this.MarketPlaceElements.CreateProject)
        try {
            await ele.click({ button: "left", delay: 100 })
            } catch (error) {
            throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Could Not Find Locator:"${error}"`)
            }   
    }


        // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Mandatory warning is showing.
    async overviewScreenMandatoryFieldCheck(value : string){
        const save= await this.page.locator(this.MarketPlaceElements.SaveAndContinue)
        const warning= await this.page.locator(this.MarketPlaceElements.MandatoryWarning)
        try {
            await save.click({ button: "left", delay: 100 })
            expect(warning).toHaveText(value)
            await save.click

        } catch (error) {
            throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Save & Continue (with Mandatory field) | Could Not Find Locator:"${error}"`)
        }


    }

      // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup MarketPlace | Project Titlte.
//changed
    async overviewScrProjectTitlteInputfield(value: string){
        const ProjectTitle= await this.page.locator(this.MarketPlaceElements.ProjectTitle)   
        try {
            await ProjectTitle.fill(value)
            
        } catch (error) {
            throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
        }

    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup MarketPlace | Project Cateogry.
    async overviewProjectCategoryselectDropdown() {
        const  ProejectCategory= await this.page.locator(this.MarketPlaceElements.ProejectCategory)
        const  ProjectCategoryOption= await this.page.locator(this.MarketPlaceElements.ProjectCategoryOption)
        
    
            try {
                    await ProejectCategory.click()
                    this.page.waitForTimeout(300)
                    await ProjectCategoryOption.click()
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
                }
    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup MarketPlace | Project Sub Cateogry.
    async overviewProjectSubCategorySelectDropdown() {
        
        const ProjectSubCategory = await this.page.locator(this.MarketPlaceElements.ProjectSubCategory)
        const ProjectSubCategoryOption= await this.page.locator(this.MarketPlaceElements.ProjectSubCategoryOption)
    
        try {
            await ProjectSubCategory.click()
            await ProjectSubCategoryOption.click()
    
        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup keyword.
    async overviewInputFieldKeyword() {
        const  Keywords= await this.page.locator(this.MarketPlaceElements.Keywords)
        const  KeywordsOption= await this.page.locator(this.MarketPlaceElements.KeywordsOption)
    
        try {
                await Keywords.click()
                await KeywordsOption.click()
        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup and add keyword button
    async OverviewClickAddBtn() {

        const AddBtn= await this.page.locator(this.MarketPlaceElements.AddBtn)
       
        try {
            await AddBtn.click({ button: "left", delay: 100 })
        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Click the save button
    async SaveNContinue() {

        const save= await this.page.locator(this.MarketPlaceElements.SaveAndContinue)
    
        try {
            await save.click({ button: "left", delay: 100 })
        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Description & FAQ
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: MarketPlace | Project description input

    async descriptionFaqProjectDesInputField(value: string){
        const ProjectDiscripiton= await this.page.locator(this.MarketPlaceElements.ProjectDiscripiton)   
        try {
            await ProjectDiscripiton.fill(value)
            
        } catch (error) {
            throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Save & Continue | Could Not Find Locator:"${error}"`)
        }

    }


    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Description & FAQ
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: MarketPlace | Project type

    async descriptionFaqProjectTypeOption() {
        const ProjectType= await this.page.locator(this.MarketPlaceElements.ProjectType)
        const ProjectTypeOption = await this.page.locator(this.MarketPlaceElements.ProjectTypeOption)
    
        try {
           
            await ProjectType.click()
            await ProjectTypeOption.click()

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Description & FAQ
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Bid on this project

    async descriptionFaqBidProjectOption() {
        const BidProject= await this.page.locator(this.MarketPlaceElements.BidProject)
        const BidProjectOption= await this.page.locator(this.MarketPlaceElements.BidProjectOption)
    
        try {
           
            await BidProject.click()
            await BidProjectOption.click()
        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Description & FAQ
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Add question
    async descriptionFaqClickAddQuestion(value : string, value_2 : string) {
        const ClickAddQuestion= await this.page.locator(this.MarketPlaceElements.ClickAddQuestion)
        const FaqDescription= await this.page.locator(this.MarketPlaceElements.FaqDescription)
        const SendBtn = await this.page.locator(this.MarketPlaceElements.SendBtn)
        const AnswerBtn = await this.page.locator(this.MarketPlaceElements.AnswerBtn)
        const AnswerText = await this.page.locator(this.MarketPlaceElements.AnswerText)
        const AnswerSubmit = await this.page.locator(this.MarketPlaceElements.AnswerSubmit)
    
        try {
           
            await ClickAddQuestion.click()
            this.page.waitForTimeout(300)
            await FaqDescription.fill(value)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Pricing
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Pricing

    async Pricing(value_1: string, value_2: string ) {
        const Pricing= await this.page.locator(this.MarketPlaceElements.Pricing)
        const PricingYes= await this.page.locator(this.MarketPlaceElements.PricingYes)
        const LowestBudget= await this.page.locator(this.MarketPlaceElements.LowestBudget)
        const HighestBudet= await this.page.locator(this.MarketPlaceElements.HighestBudet)
    
        try {
           
            await Pricing.click({ button: "left", delay: 100 })
            await PricingYes.click()
            await LowestBudget.click({ button: "left", delay: 100 })
            await LowestBudget.fill(value_1)
            await HighestBudet.click({ button: "left", delay: 100 })
            await HighestBudet.fill(value_2)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Requirements
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Requirement project deadlines

        async requirementsDeadlinesDrpdn(value: string ) {

            const Deadlines= await this.page.locator(this.MarketPlaceElements.Deadlines)

        
            try {
               
                await Deadlines.click({ button: "left", delay: 100 })
                await Deadlines.fill(value)
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Requirements | Save & Continue | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Requirements
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Requirement project duration
        async requirementsPjtDuration() {

            const Duration = await this.page.locator(this.MarketPlaceElements.Duration)
            const DurationOption = await this.page.locator(this.MarketPlaceElements.DurationOption)
        
            try {
               
                await Duration.click({ button: "left", delay: 100 })
                await DurationOption.click()
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Requirements | Save & Continue | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Requirements
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Requirement Experience level dropdown
        async requirementsExpernceLvl( ) {

            const ExperienceLvl = await this.page.locator(this.MarketPlaceElements.ExperienceLvl)
            const ExperienceLvlOption = await this.page.locator(this.MarketPlaceElements.ExperienceLvlOption)

        
            try {
               
                await ExperienceLvl.click({ button: "left", delay: 100 })
                await ExperienceLvlOption.click()
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Requirements | Save & Continue | Could Not Find Locator:"${error}"`)
                }
        }
        // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Requirements
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Requirement skill dropdown with add button
        async requirementsSkills() {

            const Skills = await this.page.locator(this.MarketPlaceElements.Skills)
            const SkillsOption = await this.page.locator(this.MarketPlaceElements.SkillsOption)
            const SkillsAddbtn = await this.page.locator(this.MarketPlaceElements.SkillsAddbtn)

        
            try {
                await Skills.click({ button: "left", delay: 100 })
                await SkillsOption.click()
                await SkillsAddbtn.click({ button: "left", delay: 100 })
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Requirements | Save & Continue | Could Not Find Locator:"${error}"`)
                }
        }


         // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | attachment
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Add first attachment
         async createPojectAttachment_1() {

        const Background= await this.page.locator(this.MarketPlaceElements.Background)  
        try {
           
            await Background.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(3000)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Requiremnts | Attachment Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

     // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Requirements
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Add Second attachment
    async createPojectAttachment_2() {
        const Background2= await this.page.locator(this.MarketPlaceElements.Background2)
          
        try {
           
            await Background2.scrollIntoViewIfNeeded()
            await Background2.click({ button: "left", delay: 100})
            await this.page.waitForTimeout(3000)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Requiremnts | Attachment | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Requirements
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: To find an image and load into the attachments
    async logoImageUploadFunction_1() {
        const filePath0 = "testData/logos/gameLogo.jpg"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
    }

    async logoImageUploadFunction_2() {
        const filePath1 = "testData/logos/logo_lowSize.png"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath1]);
        })
    }



    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | Preview and submit
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: To make final save after preview and submit
    async finalSaveBtn() {
        const FinalSaveBtn= await this.page.locator(this.MarketPlaceElements.FinalSaveBtn)
        const FinalSaveBtnDone= await this.page.locator(this.MarketPlaceElements.FinalSaveBtnDone)
        try {
           
            await FinalSaveBtn.scrollIntoViewIfNeeded()
            await FinalSaveBtn.click({ button: "left", delay: 100, force:true })
            await FinalSaveBtnDone.click({ button: "left", delay: 100, force:true })

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Requiremnts | Attachment | Preview And Save | Save | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a MarketPlace | Project | After all input | Cancel
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: To make final cancel after preview and submit

    async cancelProjectFinal() {
        const CancelProjectFinal= await this.page.locator(this.MarketPlaceElements.CancelProjectFinal)
        const ContinueCancelProjectFinal= await this.page.locator(this.MarketPlaceElements.ContinueCancelProjectFinal)
          
        try {
           
            await CancelProjectFinal.scrollIntoViewIfNeeded()
            await CancelProjectFinal.click({ button: "left", delay: 100})
            await this.page.waitForTimeout(300)
            await ContinueCancelProjectFinal.click()

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create MarketPlace | Project | Overview | Description & FAQ | Pricing | Requiremnts | Attachment | Cancel | Could Not Find Locator:"${error}"`)
            }
    }


     // Module Name: Kominiti | Marketplace | project
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:TO click on a project
    async ProjectTitleAutomation() {
        const ProjectTitleAutomation= await this.page.locator(this.MarketPlaceElements.ProjectTitleAutomation)  
        try {
           
            await ProjectTitleAutomation.scrollIntoViewIfNeeded()
            await ProjectTitleAutomation.click({ button: "left", delay: 100})
            await this.page.waitForLoadState("networkidle")

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Could Not Find Locator:"${error}"`)
            }
    }
    // Module Name: Kominiti | Marketplace | project | share
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on share
    async clickShareProject() {
        const ShareProject= await this.page.locator(this.MarketPlaceElements.ShareProject)  
        try {
            await ShareProject.click({ button: "left", delay: 100})
            await this.page.waitForTimeout(300)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | MarketPlace | Project | Share 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:To click on Repost on wall
    async clickRepostOnWall() {
        const RepostOnWall= await this.page.locator(this.MarketPlaceElements.RepostOnWall)  
        try {
            await RepostOnWall.click({ button: "left", delay: 100})
            await this.page.waitForTimeout(300)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }

     // Module Name: Kominiti | Marketplace | MarketPlace | Project | Share | repost on wall
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Input field for respot on wall
    async inputRepostOnWallTextField(value : string) {
        const RepostOnWallTextField= await this.page.locator(this.MarketPlaceElements.RepostOnWallTextField)  
        try {
            await RepostOnWallTextField.click({ button: "left", delay: 100})
            await RepostOnWallTextField.fill(value)
            await this.page.waitForTimeout(300)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | MarketPlace | Project | Share | repost on wall | close
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:Final save for repost on wall
    async clickRepostOnWallShareBtn() {
        const RepostOnWallShareBtn= await this.page.locator(this.MarketPlaceElements.RepostOnWallShareBtn)   
        try {
            await RepostOnWallShareBtn.click({ button: "left", delay: 100})

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | MarketPlace | Project | Share | repost on wall 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:Final save for repost on wall share button
    async clickRepostOnWallCloseAfterShareBtnClicked(){
        const RepostOnWallafterShareClose= await this.page.locator(this.MarketPlaceElements.RepostOnWallafterShareClose)  

        try {
            await RepostOnWallafterShareClose.click({ button: "left", delay: 100})

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Home
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Redirect to home page
    async clickHomeDashboardRedirect() {
        const HomeDashboard= await this.page.locator(this.MarketPlaceElements.HomeDashboard)  
        try {
            await HomeDashboard.click({ button: "left", delay: 100})
            

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Home | Delete post
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Delete the automated post

    async homeDeletePostHamburgerSign() {
        const HomeDeletePostHamburgerSign= await this.page.locator(this.MarketPlaceElements.HomeDeletePostHamburgerSign)  
        try {
            await HomeDeletePostHamburgerSign.click({ button: "left", delay: 100})

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }
    // Module Name: Kominiti | Home | Delete post
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Delete the automated post
    async homePostDeleteDrpdnBtn() {
        const HomePostDeleteDrpdnBtn= await this.page.locator(this.MarketPlaceElements.HomePostDeleteDrpdnBtn)  
        const ConfrimDeleteBtnRepost= await this.page.locator(this.MarketPlaceElements.ConfrimDeleteBtnRepost) 
        try {
            await HomePostDeleteDrpdnBtn.click({ button: "left", delay: 100})
            await ConfrimDeleteBtnRepost.click({ button: "left", delay: 100})
            

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Home| MarketPlace | Post | Reset
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Reset the post while editing

    async resetBtnRepostOnwall() {
        const ResetBtnRepostOnWall= await this.page.locator(this.MarketPlaceElements.ResetBtnRepostOnWall)  
        try {
            await ResetBtnRepostOnWall.click({ button: "left", delay: 100})     

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | MarketPlace | Project title detail page | Share | Reset | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Home| MarketPlace | Post | Repost on wall
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Repost can not be done within 15min of interval
    async alert15minCanNotPostonWall(value:string){
        const Alert15minCanNotPostonWall= await this.page.locator(this.MarketPlaceElements.Alert15minCanNotPostonWall)
        try {
            expect(Alert15minCanNotPostonWall).toHaveText(value)

        } catch (error) {
            throw new Error(`Home Page | MarketPlace | Project | Share | Repost on the wall before 15min | Could Not Find Locator:"${error}"`)
        }
    }


    // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Reset the post while editing

        async clickShareOnSocialMedia(){
            const ShareOnSocialMedia= await this.page.locator(this.MarketPlaceElements.ShareOnSocialMedia)
            try {
                await ShareOnSocialMedia.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media | facebook
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the Facebook share option
        async clickShareWithFB(){
            const ShareWithFB= await this.page.locator(this.MarketPlaceElements.ShareWithFB)

            try {
                await ShareWithFB.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (Facebook) | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media | facebook
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the Facebook share option link validation

        async newPageAgainFB(){
            const ShareWithFB= await this.page.locator(this.MarketPlaceElements.ShareWithFB)
            try {
                const [newPageAgain] = await Promise.all(
                    [
                            this.page.waitForEvent('popup'),
                            await ShareWithFB.click({ button: "left", delay: 100})
                    ]
                    
            ) 
            await expect(newPageAgain).toHaveURL(/facebook/);
            newPageAgain.close()
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (facebook) url validation | Could Not Find Locator:"${error}"`)
            }
        }

        // async ShareWithFBNewPage(){
        //     const ele= await this.page.locator(this.MarketPlaceElements.ShareWithFB)

        //     try {
        //         const [newtab]= await Promise.all(
        //             [
        //             await ele.click({ button: "left", delay: 100})
        //             ]
        //         )
        //         return newtab
    
        //     } catch (error) {
        //         throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (Facebook) | New page | Could Not Find Locator:"${error}"`)
        //     }
        
        //  }

        // async checkURLShareWithFB(){
        
        //     try {
        //         await expect(this.page).toHaveURL(/facebook/);
    
        //     } catch (error) {
        //         throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (Facebook) | URL Check | Could Not Find Locator:"${error}"`)
        //     }
        // }
        

        // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media | twitter
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the twitter share option
        async clickShareWithTwitter(){
            const ShareWithTwitter= await this.page.locator(this.MarketPlaceElements.ShareWithTwitter)

            try {
                await ShareWithTwitter.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (twitter) | Could Not Find Locator:"${error}"`)
            }
        }

         // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media | twitter
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the twitter share option link validation

        async newPageAgainTwitter(){
            const ShareWithTwitter= await this.page.locator(this.MarketPlaceElements.ShareWithTwitter)
            try {
                const [newPageAgain] = await Promise.all(
                    [
                            this.page.waitForEvent('popup'),
                            await ShareWithTwitter.click({ button: "left", delay: 100})
                    ]
                    
            ) 
            await expect(newPageAgain).toHaveURL(/twitter/);
            newPageAgain.close()
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (twitter) url validation | Could Not Find Locator:"${error}"`)
            }
        }
        // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media | Pinterest
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the Pinterest share option
        async clickShareWithPinterest(){
            const ShareWithPinterset= await this.page.locator(this.MarketPlaceElements.ShareWithPinterset)

            try {
                await ShareWithPinterset.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (Pinterest) | Could Not Find Locator:"${error}"`)
            }
        }


         // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media | Pinterest
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the Pinterest share option link validation
        async newPageAgainPinterest(){
            const ShareWithPinterset= await this.page.locator(this.MarketPlaceElements.ShareWithPinterset)
            try {
                const [newPageAgain] = await Promise.all(
                    [
                            this.page.waitForEvent('popup'),
                            await ShareWithPinterset.click({ button: "left", delay: 100})
                    ]
                    
            ) 
            await expect(newPageAgain).toHaveURL(/pinterest/);
            this.page.waitForTimeout(3000)
            newPageAgain.close()
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (pinterest) url validation | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media | LinkedIn
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the LinkedIn share option
        async clickShareWithLinkedin(){
            const ShareWithLinkedIN= await this.page.locator(this.MarketPlaceElements.ShareWithLinkedIN)

            try {
                await ShareWithLinkedIN.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (Linkedin)Share | share on social media (Linkedin) | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Post | Share on social media | LinkedIn
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the LinkedIn share option link validation
        async newPageAgainLinked(){
            const ShareWithLinkedIN= await this.page.locator(this.MarketPlaceElements.ShareWithLinkedIN)
            try {
                const [newPageAgain] = await Promise.all(
                    [
                            this.page.waitForEvent('popup'),
                            await ShareWithLinkedIN.click({ button: "left", delay: 100})
                    ]
                    
            ) 
            await expect(newPageAgain).toHaveURL(/linkedin/);
            newPageAgain.close()
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Share | share on social media (Linkedin) url validation | Could Not Find Locator:"${error}"`)
            }
        }

         // Module Name: Kominiti | Home| MarketPlace | Post | attachment
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: validate attachment
        async attachmentValidation(value: string, value_2: string){
            const GameLogoattAttachment= await this.page.locator(this.MarketPlaceElements.GameLogoattAttachment)
            const LogoLowZiseAttachment= await this.page.locator(this.MarketPlaceElements.LogoLowZiseAttachment)
            try {
                await expect(GameLogoattAttachment).toContainText(value)
                await expect(LogoLowZiseAttachment).toContainText(value_2)
                //this.page.isVisible(value)
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | Send | Could Not Find Locator:"${error}"`)
            }
        }

         // Module Name: Kominiti | Home| MarketPlace | Post | add question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on add question

        async clickInsideProjectAddQusBtn(){
            const InsideProjectAddQusBtn= await this.page.locator(this.MarketPlaceElements.InsideProjectAddQusBtn)

            try {
                await InsideProjectAddQusBtn.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Post | add question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on add question input field

        async clickInsideProjectAddQusBtnInputFld(value: string){
            const InsideProjectAddQusBtnInputFld= await this.page.locator(this.MarketPlaceElements.InsideProjectAddQusBtnInputFld)

            try {
                await InsideProjectAddQusBtnInputFld.click({ button: "left", delay: 100})
                await InsideProjectAddQusBtnInputFld.fill(value)
    
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | Input field | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Post | add question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on add question and send button
        async clickInsideProjectAddQusSendBtn(){
            const InsideProjectAddQusSendBtn= await this.page.locator(this.MarketPlaceElements.InsideProjectAddQusSendBtn)

            try {
                await InsideProjectAddQusSendBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | Send | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Post | add question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate question

        async questionSaveSuccessValidate(value: string){
            const QuestionSuccessSendvalidate= await this.page.locator(this.MarketPlaceElements.QuestionSuccessSendvalidate)
            try {
                expect(QuestionSuccessSendvalidate).toHaveText(value)
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | validation | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Post | add question | delete question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: delete question

        async clickDotsForEdit_or_DeleteQues(){
            const DotsForEditDeleteQues= await this.page.locator(this.MarketPlaceElements.DotsForEditDeleteQues)
            try {
                await DotsForEditDeleteQues.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | edit question | Could Not Find Locator:"${error}"`)
            }
        }
        
        // Module Name: Kominiti | Home| MarketPlace | Post | add question | edit question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: edit question
        async clickAddQuesEditBtn(){
            const AddQuesEditBtn= await this.page.locator(this.MarketPlaceElements.AddQuesEditBtn)
            try {
                await AddQuesEditBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | edit question | Could Not Find Locator:"${error}"`)
            }
        }

       

        // Module Name: Kominiti | Home| MarketPlace | Post | add question | submit
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: submit question
        async clickSubmitBtnEditAddQuestionPost(){
            const AnswerSubmit= await this.page.locator(this.MarketPlaceElements.AnswerSubmit)
            try {
                await AnswerSubmit.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | edit question and submit | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home| MarketPlace | Post | add question | edit | validate edit
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: validate edit
        async validateAddQusAfterEdit(value: string){
            const AddQusAfterEdit= await this.page.locator(this.MarketPlaceElements.AddQusAfterEdit)
            try {
                expect(AddQusAfterEdit).toHaveText(value)
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | edit | validation | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Post | add question | Delete question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:  Delete question
        async clickAddQusDeleteBtn(){
            const AddQusDeleteBtn= await this.page.locator(this.MarketPlaceElements.AddQusDeleteBtn)
            try {
                await AddQusDeleteBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Add Question | delete | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | TestABC
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:  Click on project TEST ABC
        async clickTestAbcProject(){
            const TestAbcProject= await this.page.locator(this.MarketPlaceElements.TestAbcProject)
            try {
                await TestAbcProject.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Details | Could Not Find Locator:"${error}"`)
            }
        }

         // Module Name: Kominiti | Home| MarketPlace | Project | TestABC | Contact buyers
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:  Click on project Contact buyer button
        async clickContactBuyerBtn(){
            const ContactBuyerBtn= await this.page.locator(this.MarketPlaceElements.ContactBuyerBtn)
            try {
                await ContactBuyerBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Details | Contact buyer | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home| MarketPlace | Project | TestABC | Contact buyers message box will open
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Contact buyers message box
        async validateMessageBoxBuyers(){
            const MessageBoxBuyers= await this.page.locator(this.MarketPlaceElements.MessageBoxBuyers)
            try {

                expect(MessageBoxBuyers).toHaveText("CHINONSO ROBERT NWANEGBO")
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | TestABC | Contact buyers | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home| MarketPlace | Project | TestABC | See more
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: See more button
        async clickInsideProjectSeeMoreBtn(){
            const InsideProjectSeeMoreBtn= await this.page.locator(this.MarketPlaceElements.InsideProjectSeeMoreBtn)
            try {
                await InsideProjectSeeMoreBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project |  | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | TestABC | See more 4th comment
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: See more button
        async clickAfterSeeMoreClicked4thDivCmnt(value : string){
            const AfterSeeMoreClicked4thDivCmnt= await this.page.locator(this.MarketPlaceElements.AfterSeeMoreClicked4thDivCmnt)
            try {
                
                expect(AfterSeeMoreClicked4thDivCmnt).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | see more | 4th comment | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | AUtomation own project | view profile 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: click See more button
        async clickInsideProjectViewProfileBtn(){
            const InsideProjectViewProfileBtn= await this.page.locator(this.MarketPlaceElements.InsideProjectViewProfileBtn)
            try {
                await InsideProjectViewProfileBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Profile owner | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | AUtomation own project | view profile | validate profile owner
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: validate profile owner
        async clickValidateProfileOwner(value : string){
            const ValidateProfileOwner= await this.page.locator(this.MarketPlaceElements.ValidateProfileOwner)
            try {
                
                expect(ValidateProfileOwner).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project | Profile owner | Name | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | place bid
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Place bid 

        async projectPlaceBidBtnClicked(){
            const ProjectPlaceBidBtn= await this.page.locator(this.MarketPlaceElements.ProjectPlaceBidBtn)
            try {

                await ProjectPlaceBidBtn.scrollIntoViewIfNeeded()
                await ProjectPlaceBidBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Place bid | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | place bid | test field 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: test field input 

        async insideBidTextField(value : string){
            const InsideBidTextField= await this.page.locator(this.MarketPlaceElements.InsideBidTextField)
            try {
                await InsideBidTextField.scrollIntoViewIfNeeded()
                await InsideBidTextField.click({ button: "left", delay: 100})
                await this.page.waitForTimeout(1000)
                await InsideBidTextField.fill(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Place bid | Text field | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | place bid | Image Upload
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Image Upload when placeing bid
        async imageUploadPlaceBid(){
            const ImageUploadPlaceBid= await this.page.locator(this.MarketPlaceElements.ImageUploadPlaceBid)
            try {
                await ImageUploadPlaceBid.click({ button: "left", delay: 100})
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Place bid | Impage upload | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | place bid  final
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: place bid  final
        async projectPlaceBidBtnFinalClicked(){
            const ProjectPlaceBidBtnFinal= await this.page.locator(this.MarketPlaceElements.ProjectPlaceBidBtnFinal)
            try {
                await ProjectPlaceBidBtnFinal.scrollIntoViewIfNeeded()
                await ProjectPlaceBidBtnFinal.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Place bid | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | view bid
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: view bid

        async afterBiddingClickViewBidBtn(){
            const ViewBidBtn= await this.page.locator(this.MarketPlaceElements.ViewBidBtn)
            try {
                await ViewBidBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Place bid | View Bid | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | validate with input value
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: validate with input value
        async validateInputTextFromBid(value: string){
            const ValidateInputTextFromBid= await this.page.locator(this.MarketPlaceElements.ValidateInputTextFromBid)
            try {

                await ValidateInputTextFromBid.scrollIntoViewIfNeeded()
                expect(ValidateInputTextFromBid).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Place bid | Validate the bid is successful | Could Not Find Locator:"${error}"`)
            }
        }



        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | Delete bid
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Delete bid
        async deleteBidBtnPlaceBidClicked(){
            const DeleteBidBtnPlaceBid= await this.page.locator(this.MarketPlaceElements.DeleteBidBtnPlaceBid)
            try {
                await DeleteBidBtnPlaceBid.scrollIntoViewIfNeeded()
                await DeleteBidBtnPlaceBid.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | after place bid | Delete Bid | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | Delete bid final
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Delete bid final
        async deleteBtnFinalPlaceBidClicked(){
            const DeleteBtnFinalPlaceBid= await this.page.locator(this.MarketPlaceElements.DeleteBtnFinalPlaceBid)
            try {
                await DeleteBtnFinalPlaceBid.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | after place bid | final Delete Bid | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | Cancel bid
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Cancel bid
        async cancelbtnPlaceBidClicked(){
            const CancelbtnPlaceBid= await this.page.locator(this.MarketPlaceElements.CancelbtnPlaceBid)
            try {
                await CancelbtnPlaceBid.scrollIntoViewIfNeeded()
                await CancelbtnPlaceBid.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Place bid | Cancel btn check | Could Not Find Locator:"${error}"`)
            }
        }
        
         // Module Name: Kominiti | Home| MarketPlace | Project | Test abc | Cancel bid
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Cancel bid succeed
        async clickOverviewAfterCancelPlaceBid(value: string){
            const OverviewAfterCancel= await this.page.locator(this.MarketPlaceElements.OverviewAfterCancel)
            try {

                expect(OverviewAfterCancel).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Place bid | cancel | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home | MarketPlace | Project | Test abc | Edit bid
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click the edit bid

        async clickEditBidBtn(){
            const EditBidBtn= await this.page.locator(this.MarketPlaceElements.EditBidBtn)
            try {
                await EditBidBtn.scrollIntoViewIfNeeded()
                await EditBidBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Edit bid | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home | MarketPlace | Project | Test abc | Edit bid | text field
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click the text field
        async validateInputTextFieldEditBid(value: string){
            const InputTextFieldEditBid= await this.page.locator(this.MarketPlaceElements.InputTextFieldEditBid)
            try {

                await InputTextFieldEditBid.scrollIntoViewIfNeeded()
                expect(InputTextFieldEditBid).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Edit bid | Validate the bid is successful | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home | MarketPlace | Project | Automation Testing carousel | Manage Bid
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on Manage Bid
        async clickManageBidBtn(){
            const ManageBidBtn= await this.page.locator(this.MarketPlaceElements.ManageBidBtn)
            try {
                await ManageBidBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Manage Bid | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home | MarketPlace | Project |  Automation Testing carousel| Manage Bid | Owner Dashboard
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Owner Dashboard

        async validateProjectDashText(value: string){
            const ProjectDashText= await this.page.locator(this.MarketPlaceElements.ProjectDashText)
            try {

                await ProjectDashText.scrollIntoViewIfNeeded()
                expect(ProjectDashText).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | Manage Bid | Redirect to Prject DashBoard | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click View all Categories
        async clickViewAllCategoriesBtn(){
            const ViewAllCategoriesBtn= await this.page.locator(this.MarketPlaceElements.ViewAllCategoriesBtn)
            try {
                await ViewAllCategoriesBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click Account and Finance
        async clickAccountNFinance(){
            const AccountNFinance= await this.page.locator(this.MarketPlaceElements.AccountNFinance)
            try {
                await AccountNFinance.click({ button: "left", delay: 100, force:true})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | validate Url
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Account and Finance Url
        async ValidateAccountNFinanceURL(){
            try {
             await expect(this.page).toHaveURL(/categories/)
            
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance (Url validate)  | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Web, Mobile & Software Dev

        async clickWebMobNSoftCategory(){
            const WebMobNSoftCategories= await this.page.locator(this.MarketPlaceElements.WebMobNSoftCategory)
            try {
                await WebMobNSoftCategories.click({ button: "left", delay: 100, force:true})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Web , Mobile and Software | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Web, Mobile & Software Dev
        async validateWebMobNSoftTitlteText(value: string){
            const WebMobNSoftTitlteText= await this.page.locator(this.MarketPlaceElements.WebMobNSoftTitlteText)
            try {

                await WebMobNSoftTitlteText.scrollIntoViewIfNeeded()
                expect(WebMobNSoftTitlteText).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Web , Mobile and Software | Could Not Find Locator:"${error}"`)
            }
        }


         // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Data Sacience and Analytics

        async clickDataSciNAnalyticeCategory(){
            const DataSciNAnalyticeCategory= await this.page.locator(this.MarketPlaceElements.DataSciNAnalyticeCategory)
            try {
                await DataSciNAnalyticeCategory.click({ button: "left", delay: 100, force:true})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Data Science & Analytics | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Data Sacience and Analytics
        async validateDataSciNAnalyticeTitlteText(value: string){
            const DataSciNAnalyticeTitlteText= await this.page.locator(this.MarketPlaceElements.DataSciNAnalyticeTitlteText)
            try {

                await DataSciNAnalyticeTitlteText.scrollIntoViewIfNeeded()
                expect(DataSciNAnalyticeTitlteText).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Data Science & Analytics | Could Not Find Locator:"${error}"`)
            }
        }

         // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Consulting

        async clickConsultingCategory(){
            const ConsultingCategory= await this.page.locator(this.MarketPlaceElements.ConsultingCategory)
            try {
                await ConsultingCategory.click({ button: "left", delay: 100, force:true})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Consulting | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Consulting
        async validateConsultingTitlteText(value: string){
            const ConsultingTitlteText= await this.page.locator(this.MarketPlaceElements.ConsultingTitlteText)
            try {

                await ConsultingTitlteText.scrollIntoViewIfNeeded()
                expect(ConsultingTitlteText).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Consulting | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Admin Support
        async clickAdminSupportCategory(){
            const AdminSupportCategory= await this.page.locator(this.MarketPlaceElements.AdminSupportCategory)
            try {
                await AdminSupportCategory.click({ button: "left", delay: 100, force:true})
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Admin Support | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Marketpalce | Project | Automation Testing MarketPlace | View all Categories | Account and Finance | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Admin Support
        async validateAdminSupportTitlteText(value: string){
            const AdminSupportTitlteText= await this.page.locator(this.MarketPlaceElements.AdminSupportTitlteText)
            try {

                await AdminSupportTitlteText.scrollIntoViewIfNeeded()
                expect(AdminSupportTitlteText).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Marketplace | View all Categories | Account and Finance | Admin Support | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Marketpalce | Search
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click Category Dropdown
        async clickNAdminCategorySearchDrpdwn() {

            const CategorySearchDrpdwn= await this.page.locator(this.MarketPlaceElements.CategorySearchDrpdwn)
            const CategoryAdminSupportOption= await this.page.locator(this.MarketPlaceElements.CategoryAdminSupportOption)
            try {
               
                await CategorySearchDrpdwn.click({ button: "left", delay: 100 })
                await CategoryAdminSupportOption.click({ button: "left", delay: 100, force:true })
    
    
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Category Dropdown | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketpalce | Search
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: CLick and fill Main search Field
        async clickNValueMainSearchField(value: string ) {

            const MainSearchField= await this.page.locator(this.MarketPlaceElements.MainSearchField)
            try {
               
                await MainSearchField.click({ button: "left", delay: 100 })
                await MainSearchField.fill(value)
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Main search Field | Could Not Find Locator:"${error}"`)
                }
        }


         // Module Name: Kominiti | Marketpalce | Search
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click Search
        async clickSearchBtn() {

            const SearchBtn= await this.page.locator(this.MarketPlaceElements.SearchBtn)
            try {
               
                await SearchBtn.click({ button: "left", delay: 100 })
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Could Not Find Locator:"${error}"`)
                }
        }

        

        // Module Name: Kominiti | Marketpalce | Search | Filter executed
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Filter validate
        async validateFilterText(value: string){
            const FilterText= await this.page.locator(this.MarketPlaceElements.FilterText)
            try {

                expect(FilterText).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Search | Filter Page | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Marketpalce | Search | Sort By
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Filter sort

        async clickFilterSortBy() {

            const FilterSortBy= await this.page.locator(this.MarketPlaceElements.FilterSortBy)
            try {
               
                await FilterSortBy.click({ button: "left", delay: 100 })
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter sort | Could Not Find Locator:"${error}"`)
                }
        }


        // Module Name: Kominiti | Marketpalce | Search | Sort By
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Filter sort by
        async clickFilterClientRatingOption() {

            const FilterClientRatingOption= await this.page.locator(this.MarketPlaceElements.FilterClientRatingOption)
            try {
               
                await FilterClientRatingOption.click({ button: "left", delay: 100 })
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter sort | Could Not Find Locator:"${error}"`)
                }
        }


        // Module Name: Kominiti | Marketpalce | Search | Sort By
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Filter sort by
        async validateFilterOccupiedClientrat(value: string){
            const FilterOccupiedClientrat= await this.page.locator(this.MarketPlaceElements.FilterOccupiedClientrat)
            try {

                expect(FilterOccupiedClientrat).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Search | Filter Page | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Marketpalce | Search | Sort By | filter options | select category
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click and select category
        async clickSlctCategory() {

            const SlctCategory= await this.page.locator(this.MarketPlaceElements.SlctCategory)
            const CategoryAdminSupportOption= await this.page.locator(this.MarketPlaceElements.CategoryAdminSupportOption)
            try {
               
                await SlctCategory.click({ button: "left", delay: 100 })
                await CategoryAdminSupportOption.click({ button: "left", delay: 100 })
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter | Select Category | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketpalce | Search | Sort By | filter options | select category
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Select option Newest
        async clickFilterNewestOption() {

            const FilterNewestOption= await this.page.locator(this.MarketPlaceElements.FilterNewestOption)
            try {
               
                await FilterNewestOption.click({ button: "left", delay: 100 })
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter | Select Category | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketpalce | Search | Sort By | filter options | Budget
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Select and fill Budget Min
        async clickNFillBudgetMin(value: string) {

            const BudgetMin= await this.page.locator(this.MarketPlaceElements.BudgetMin)
            try {
               
                await BudgetMin.click({ button: "left", delay: 100 })
                await BudgetMin.fill(value)
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter | Budget | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketpalce | Search | Sort By | filter options | Budget
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Select and fill Budget Max
        async clickNFillBudgetMax(value: string) {

            const BudgetMax= await this.page.locator(this.MarketPlaceElements.BudgetMax)
            try {
               
                await BudgetMax.click({ button: "left", delay: 100 })
                await BudgetMax.fill(value)
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter | Budget | Could Not Find Locator:"${error}"`)
                }
        }

        //..........................Error............bellow

        // Module Name: Kominiti | Marketpalce | Search | Sort By | filter options | Bid response Time
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Select and fill Budget response Time
        async clickNFillBidResponseDate(value: string) {

            const BidResponseDate= await this.page.locator(this.MarketPlaceElements.BidResponseDate)
            try {
               
               // await BidResponseDate.click({ button: "left", delay: 100 })
                await BidResponseDate.fill(value)
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter | Date | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketpalce | Search | Sort By | filter options | Project length
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Select and fill project length
        async clickProjectLength() {
            const ProjectLength= await this.page.locator(this.MarketPlaceElements.ProjectLength)
            const ProjectLenght_1_3mon= await this.page.locator(this.MarketPlaceElements.ProjectLenght_1_3mon)
            try {
               
                await ProjectLength.click({ button: "left", delay: 100,force:true })
                await ProjectLenght_1_3mon.click({ button: "left", delay: 100, force:true })
                
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter | Project Length | Could Not Find Locator:"${error}"`)
                }
        }


        // Module Name: Kominiti | Marketpalce | Search | Sort By | filter options | Apply
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Select Apply

        async clickApplyBtn() {

            const ApplyBtn= await this.page.locator(this.MarketPlaceElements.ApplyBtn)
            try {
               
                await ApplyBtn.click({ button: "left", delay: 100 , force:true})
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Search | Filter | Apply | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketpalce | Search | Sort By | filter options | Validate Filter Worked
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Filter Worked
        async validateFilterOccupiedNewest(value: string){
            const FilterOccupiedNewest= await this.page.locator(this.MarketPlaceElements.FilterOccupiedNewest)
            try {

                expect(FilterOccupiedNewest).toContainText(value)
               
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Search | Filter sort by validate | Could Not Find Locator:"${error}"`)
            }
        }









}

