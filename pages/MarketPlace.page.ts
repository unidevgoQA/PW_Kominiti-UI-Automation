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
        Pricing: "//div[@class='custom-form-input custom-form-input']",
        PricingYes: "(//ul[@class='custom-drop-down-items-list']//li)[2]",
        LowestBudget: "//input[@placeholder='Enter the lowest budget']",
        HighestBudet: "//input[@placeholder='Enter the highest budget']",




    };


      // Module Name: Kominiti | Marketplace
        // Feature Name: MarketPlaceREdirect
        // Screen Type: Desktop
        // Description: Click On the Marketpalce navbar
 async MarketPlaceRedirct() {
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

    async CreateProject() {
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
    async OverviewMandatoryCheck(){
        const save= await this.page.locator(this.MarketPlaceElements.SaveAndContinue)
        const warning= await this.page.locator(this.MarketPlaceElements.MandatoryWarning)
        try {
            await save.click({ button: "left", delay: 100 })
            expect(warning).toHaveText("This field is required")
            await save.click

        } catch (error) {
            throw new Error(`Home Page | MarketPlace | Create Project | Overview | Save & Continue (with Mandatory field) | Could Not Find Locator:"${error}"`)
        }


    }

      // Module Name: Kominiti | Marketplace | Create a Project | Overview
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: fillup Project Titlte.

    async OverviewProjectTitlte(value: string){
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
    async OverviewProjectCategory() {
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
    async OverviewProjectSubCategory() {
        
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
    async OverviewKeyword() {
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
    async OverviewAddBtn() {

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
                throw new Error(`Home Page | MarketPlace | Create Project | Overview | Save & Continue | Could Not Find Locator:"${error}"`)
            }
    }

    // Module Name: Kominiti | Marketplace | Create a Project | Description & FAQ
        // Feature Name: Create a project
        // Screen Type: Desktop
        // Description: Project description input

    async DescriptionFaq(value: string){
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

    async PrjectType() {
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

    async BidProject() {
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
    async ClickAddQuestion(value : string, value_2 : string) {
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
            await SendBtn.click()
            this.page.waitForTimeout(300)
            await AnswerBtn.click()
            this.page.waitForTimeout(300)
            await AnswerText.click({ button: "left", delay: 100 })
            await AnswerText.fill(value_2)
            await AnswerSubmit.click()

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
        // Description: Requirements


}

