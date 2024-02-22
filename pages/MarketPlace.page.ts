import { expect} from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "@playwright/test";



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
        CreateProject : "//button[text()='Create Project']",
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
        ProjectType:"(//span[text()='Project type']/following::input)[1]",
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
        RepostOnWallShareBtn: "//button[text()='Share']",
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
        AddQusAfterEdit: "//div[text()='What is the cost from automation edited']"






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

        // Module Name: Kominiti | Marketplace | Create a Project
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: In marketplace homescreen Click On Create project

    async clickOnCreateProject() {
        const ele = await this.page.locator(this.MarketPlaceElements.CreateProject)
        try {
            await ele.click({ button: "left", delay: 100 })
            } catch (error) {
            throw new Error(`Home Page | MarketPlace | Create Project | Could Not Find Locator:"${error}"`)
            }   
    }


        // Module Name: Kominiti | Marketplace | Create a Project | Overview
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
            throw new Error(`Home Page | MarketPlace | Create Project | Overview | Save & Continue (with Mandatory field) | Could Not Find Locator:"${error}"`)
        }


    }

      // Module Name: Kominiti | Marketplace | Create a Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup Project Titlte.
//changed
    async overviewScrProjectTitlteInputfield(value: string){
        const ProjectTitle= await this.page.locator(this.MarketPlaceElements.ProjectTitle)   
        try {
            await ProjectTitle.fill(value)
            
        } catch (error) {
            throw new Error(`Home Page | MarketPlace | Create Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
        }

    }

    // Module Name: Kominiti | Marketplace | Create a Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup Project Cateogry.
    async overviewProjectCategoryselectDropdown() {
        const  ProejectCategory= await this.page.locator(this.MarketPlaceElements.ProejectCategory)
        const  ProjectCategoryOption= await this.page.locator(this.MarketPlaceElements.ProjectCategoryOption)
        
    
            try {
                    await ProejectCategory.click()
                    this.page.waitForTimeout(300)
                    await ProjectCategoryOption.click()
            } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
                }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup Project Sub Cateogry.
    async overviewProjectSubCategorySelectDropdown() {
        
        const ProjectSubCategory = await this.page.locator(this.MarketPlaceElements.ProjectSubCategory)
        const ProjectSubCategoryOption= await this.page.locator(this.MarketPlaceElements.ProjectSubCategoryOption)
    
        try {
            await ProjectSubCategory.click()
            await ProjectSubCategoryOption.click()
    
        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Marketplace | Create a Project | Overview
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
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup and add keyword button
    async OverviewClickAddBtn() {

        const AddBtn= await this.page.locator(this.MarketPlaceElements.AddBtn)
       
        try {
            await AddBtn.click({ button: "left", delay: 100 })
        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Click the save button
    async SaveNContinue() {

        const save= await this.page.locator(this.MarketPlaceElements.SaveAndContinue)
    
        try {
            await save.click({ button: "left", delay: 100 })
        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create Project | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | Description & FAQ
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Project description input

    async descriptionFaqProjectDesInputField(value: string){
        const ProjectDiscripiton= await this.page.locator(this.MarketPlaceElements.ProjectDiscripiton)   
        try {
            await ProjectDiscripiton.fill(value)
            
        } catch (error) {
            throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Save & Continue | Could Not Find Locator:"${error}"`)
        }

    }


    // Module Name: Kominiti | Marketplace | Create a Project | Description & FAQ
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Project type

    async descriptionFaqProjectTypeOption() {
        const ProjectType= await this.page.locator(this.MarketPlaceElements.ProjectType)
        const ProjectTypeOption = await this.page.locator(this.MarketPlaceElements.ProjectTypeOption)
    
        try {
           
            await ProjectType.click()
            await ProjectTypeOption.click()

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | Description & FAQ
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
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | Description & FAQ
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
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Marketplace | Create a Project | Pricing
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
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Marketplace | Create a Project | Requirements
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Requirement project deadlines

        async requirementsDeadlinesDrpdn(value: string ) {

            const Deadlines= await this.page.locator(this.MarketPlaceElements.Deadlines)

        
            try {
               
                await Deadlines.click({ button: "left", delay: 100 })
                await Deadlines.fill(value)
    
            } catch (error) {
                    throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Requirements | Save & Continue | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketplace | Create a Project | Requirements
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
                    throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Requirements | Save & Continue | Could Not Find Locator:"${error}"`)
                }
        }

        // Module Name: Kominiti | Marketplace | Create a Project | Requirements
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
                    throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Requirements | Save & Continue | Could Not Find Locator:"${error}"`)
                }
        }
        // Module Name: Kominiti | Marketplace | Create a Project | Requirements
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
                    throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Requirements | Save & Continue | Could Not Find Locator:"${error}"`)
                }
        }


         // Module Name: Kominiti | Marketplace | Create a Project | attachment
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Add first attachment
         async createPojectAttachment_1() {

        const Background= await this.page.locator(this.MarketPlaceElements.Background)  
        try {
           
            await Background.click({ button: "left", delay: 100 })
            await this.page.waitForTimeout(3000)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Requiremnts | Attachment Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

     // Module Name: Kominiti | Marketplace | Create a Project | Requirements
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
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Requiremnts | Attachment | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | Requirements
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



    // Module Name: Kominiti | Marketplace | Create a Project | Preview and submit
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
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Requiremnts | Attachment | Preview And Save | Save | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | After all input | Cancel
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
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Description & FAQ | Pricing | Requiremnts | Attachment | Cancel | Could Not Find Locator:"${error}"`)
            }
    }


     // Module Name: Kominiti | Marketplace | project
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:TO click on a project
    async ProjectTitleAutomation() {
        const ProjectTitleTestABC= await this.page.locator(this.MarketPlaceElements.ProjectTitleAutomation)  
        try {
           
            await ProjectTitleTestABC.scrollIntoViewIfNeeded()
            await ProjectTitleTestABC.click({ button: "left", delay: 100})
            await this.page.waitForLoadState("networkidle")

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project title detail page | Could Not Find Locator:"${error}"`)
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
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Project | Share 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:To click on Repost on wall
    async clickRepostOnWall() {
        const RepostOnWall= await this.page.locator(this.MarketPlaceElements.RepostOnWall)  
        try {
            await RepostOnWall.click({ button: "left", delay: 100})
            await this.page.waitForTimeout(300)

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }

     // Module Name: Kominiti | Marketplace | Project | Share | repost on wall
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
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Project | Share | repost on wall | close
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:Final save for repost on wall
    async clickRepostOnWallShareBtn() {
        const RepostOnWallShareBtn= await this.page.locator(this.MarketPlaceElements.RepostOnWallShareBtn)   
        try {
            await RepostOnWallShareBtn.click({ button: "left", delay: 100})

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Project | Share | repost on wall 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description:Final save for repost on wall share button
    async clickRepostOnWallCloseAfterShareBtnClicked(){
        const RepostOnWallafterShareClose= await this.page.locator(this.MarketPlaceElements.RepostOnWallafterShareClose)  

        try {
            await RepostOnWallafterShareClose.click({ button: "left", delay: 100})

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
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
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
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
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
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
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share  | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Home| Post | Reset
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Reset the post while editing

    async resetBtnRepostOnwall() {
        const ResetBtnRepostOnWall= await this.page.locator(this.MarketPlaceElements.ResetBtnRepostOnWall)  
        try {
            await ResetBtnRepostOnWall.click({ button: "left", delay: 100})     

        } catch (error) {
                throw new Error(`Home Page | MarketPlace | Project title detail page | Share | Reset | Could Not Find Locator:"${error}"`)
            }
    }


    // Module Name: Kominiti | Home| Post | Repost on wall
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Repost can not be done within 15min of interval
    async alert15minCanNotPostonWall(value:string){
        const Alert15minCanNotPostonWall= await this.page.locator(this.MarketPlaceElements.Alert15minCanNotPostonWall)
        try {
            expect(Alert15minCanNotPostonWall).toHaveText(value)

        } catch (error) {
            throw new Error(`Home Page | Project | Share | Repost on the wall before 15min | Could Not Find Locator:"${error}"`)
        }
    }


    // Module Name: Kominiti | Home| Post | Share on social media
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Reset the post while editing

        async clickShareOnSocialMedia(){
            const ShareOnSocialMedia= await this.page.locator(this.MarketPlaceElements.ShareOnSocialMedia)
            try {
                await ShareOnSocialMedia.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | Project | Share | share on social media | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| Post | Share on social media | facebook
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the Facebook share option
        async clickShareWithFB(){
            const ShareWithFB= await this.page.locator(this.MarketPlaceElements.ShareWithFB)

            try {
                await ShareWithFB.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | Project | Share | share on social media (Facebook) | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| Post | Share on social media | facebook
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
                throw new Error(`Home Page | Project | Share | share on social media (facebook) url validation | Could Not Find Locator:"${error}"`)
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
        //         throw new Error(`Home Page | Project | Share | share on social media (Facebook) | New page | Could Not Find Locator:"${error}"`)
        //     }
        
        //  }

        // async checkURLShareWithFB(){
        
        //     try {
        //         await expect(this.page).toHaveURL(/facebook/);
    
        //     } catch (error) {
        //         throw new Error(`Home Page | Project | Share | share on social media (Facebook) | URL Check | Could Not Find Locator:"${error}"`)
        //     }
        // }
        

        // Module Name: Kominiti | Home| Post | Share on social media | twitter
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the twitter share option
        async clickShareWithTwitter(){
            const ShareWithTwitter= await this.page.locator(this.MarketPlaceElements.ShareWithTwitter)

            try {
                await ShareWithTwitter.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | Project | Share | share on social media (twitter) | Could Not Find Locator:"${error}"`)
            }
        }

         // Module Name: Kominiti | Home| Post | Share on social media | twitter
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
                throw new Error(`Home Page | Project | Share | share on social media (twitter) url validation | Could Not Find Locator:"${error}"`)
            }
        }
        // Module Name: Kominiti | Home| Post | Share on social media | Pinterest
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the Pinterest share option
        async clickShareWithPinterest(){
            const ShareWithPinterset= await this.page.locator(this.MarketPlaceElements.ShareWithPinterset)

            try {
                await ShareWithPinterset.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | Project | Share | share on social media (Pinterest) | Could Not Find Locator:"${error}"`)
            }
        }


         // Module Name: Kominiti | Home| Post | Share on social media | Pinterest
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
            newPageAgain.close()
               
            } catch (error) {
                throw new Error(`Home Page | Project | Share | share on social media (pinterest) url validation | Could Not Find Locator:"${error}"`)
            }
        }


        // Module Name: Kominiti | Home| Post | Share on social media | LinkedIn
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on the LinkedIn share option
        async clickShareWithLinkedin(){
            const ShareWithLinkedIN= await this.page.locator(this.MarketPlaceElements.ShareWithLinkedIN)

            try {
                await ShareWithLinkedIN.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | Project | Share | share on social media (Linkedin)Share | share on social media (Linkedin) | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| Post | Share on social media | LinkedIn
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
                throw new Error(`Home Page | Project | Share | share on social media (Linkedin) url validation | Could Not Find Locator:"${error}"`)
            }
        }

         // Module Name: Kominiti | Home| Post | attachment
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
                throw new Error(`Home Page | Project | Add Question | Send | Could Not Find Locator:"${error}"`)
            }
        }

         // Module Name: Kominiti | Home| Post | add question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on add question

        async clickInsideProjectAddQusBtn(){
            const InsideProjectAddQusBtn= await this.page.locator(this.MarketPlaceElements.InsideProjectAddQusBtn)

            try {
                await InsideProjectAddQusBtn.click({ button: "left", delay: 100})
    
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| Post | add question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on add question input field

        async clickInsideProjectAddQusBtnInputFld(value: string){
            const InsideProjectAddQusBtnInputFld= await this.page.locator(this.MarketPlaceElements.InsideProjectAddQusBtnInputFld)

            try {
                await InsideProjectAddQusBtnInputFld.click({ button: "left", delay: 100})
                await InsideProjectAddQusBtnInputFld.fill(value)
    
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | Input field | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| Post | add question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click on add question and send button
        async clickInsideProjectAddQusSendBtn(){
            const InsideProjectAddQusSendBtn= await this.page.locator(this.MarketPlaceElements.InsideProjectAddQusSendBtn)

            try {
                await InsideProjectAddQusSendBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | Send | Could Not Find Locator:"${error}"`)
            }
        }

        // Module Name: Kominiti | Home| Post | add question
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate question

        async questionSaveSuccessValidate(value: string){
            const QuestionSuccessSendvalidate= await this.page.locator(this.MarketPlaceElements.QuestionSuccessSendvalidate)
            try {
                expect(QuestionSuccessSendvalidate).toHaveText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | validation | Could Not Find Locator:"${error}"`)
            }
        }


        async clickDotsForEditDeleteQues(){
            const DotsForEditDeleteQues= await this.page.locator(this.MarketPlaceElements.DotsForEditDeleteQues)
            try {
                await DotsForEditDeleteQues.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | edit question | Could Not Find Locator:"${error}"`)
            }
        }
        
        async clickAddQuesEditBtn(){
            const AddQuesEditBtn= await this.page.locator(this.MarketPlaceElements.AddQuesEditBtn)
            try {
                await AddQuesEditBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | edit question | Could Not Find Locator:"${error}"`)
            }
        }

       

        async clickSubmitBtnEditAddQuestionPost(){
            const AnswerSubmit= await this.page.locator(this.MarketPlaceElements.AnswerSubmit)
            try {
                await AnswerSubmit.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | edit question and submit | Could Not Find Locator:"${error}"`)
            }
        }


        async validateAddQusAfterEdit(value: string){
            const AddQusAfterEdit= await this.page.locator(this.MarketPlaceElements.AddQusAfterEdit)
            try {
                expect(AddQusAfterEdit).toHaveText(value)
               
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | edit | validation | Could Not Find Locator:"${error}"`)
            }
        }

        async clickAddQusDeleteBtn(){
            const AddQusDeleteBtn= await this.page.locator(this.MarketPlaceElements.AddQusDeleteBtn)
            try {
                await AddQusDeleteBtn.click({ button: "left", delay: 100})
               
            } catch (error) {
                throw new Error(`Home Page | Project | Add Question | delete | Could Not Find Locator:"${error}"`)
            }
        }







}

