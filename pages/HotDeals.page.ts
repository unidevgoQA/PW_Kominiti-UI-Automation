import { expect} from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "@playwright/test";
import { waitForDebugger } from "inspector";

export default class HotDeals{
        //static checkURLShareWithFB: any;
        static HotDeals() {
                throw new Error('Method not implemented.');
        }

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
            this.page = page;
        }
    
        private HotDealsElements = {

           HotDealsRedirects: "//li[@class='menu-item hot-deals']//a[1]" ,

           // View all categories
           Categories: "//div[@class='new-review-page__section-titles']//a[1]",

           //Create a deal
           CreateDeals: "//div[@class='top']//button[1]",
           
           //Overview
           OfferTitlte: "textarea[name='DealTitle']",
           OfferCategory: "input[name='input_category_name']",
           OfferSubCategory: "input[name='input_sub_category_name']",
           OfferType: "select[validators='isRequired']",
           OfferTypeDropDown: "option[value='single']",
           OfferCloseDate: "input[type='date']",
           Keyword: "(//div[contains(@class,'custom-form-input custom-form-input')]//input)[3]",
           KeywordDrpDwnSelect: "(//li[@class='custom-drop-down-item'])[1]",
           AddKeywordBtn: "//div[@class='custom-drop-wrap']//button[1]",
           
           //Save and continue button
           SaveNContinue: "button[type='submit']",

            //Deals type
            PackageName:"//input[@placeholder='Name your package. e.g Designers Best']",
            PackageDescription: "//textarea[@class='custom-textarea package-desc']",
            Price: "//input[@placeholder='$']",
            Duration: "//input[@placeholder='Days']",

            //Description and FAQ
            offerDescription: "textarea[name='offerDescription']",

            //Requirements
            YourQuestion: "textarea[name='description0']",
            YourQusOption: "input[placeholder='Option 1']",

            //Gallery
            GalleryImage: "(//div[@role='button'])[1]",
            GalleryVideo: "(//div[@role='button'])[2]",
            GalleryDocs: "(//div[@role='button'])[3]",

            //checkbox
            CheckboxFinalSave: "//input[@id='term']",
            SubmitBtn: "button[type='submit']",
           
            //add question
            OfferFirst: "(//div[@class='label-cell'])[1]",
            AddQuestion: "(//button[@type='button'])[1]",
            AddQusTextarea: "textarea[name='qamodalquestion']",
            SendBtn: "//button[text()='Send']",
            QuestionAdded:"div.question"






        };



        // Module Name: Kominiti | Hot Deals redirect
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate Hot Deals redirect
        async clickHotDealsRedirects() {
            const ele = await this.page.locator(this.HotDealsElements.HotDealsRedirects)
            try {

            await ele.click({ button: "left", delay: 100 })

            } catch (error) {
            throw new Error(`Home Page | Hot Deals | Could Not Find Locator:"${error}"`)
            }   
        }

        // Module Name: Kominiti | Hot Deals | Categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Click view all categories
        async clickCategories() {
                const Categories = await this.page.locator(this.HotDealsElements.Categories)
                try {
    
                await Categories.click({ button: "left", delay: 100 })
    
                } catch (error) {
                throw new Error(`Home Page | Hot Deals | View all Categories | Could Not Find Locator:"${error}"`)
                }   

        }


        // Module Name: Kominiti | Hot Deals | Categories | Validate categories
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Validate categories url are showing
        async validateAccountNFinanceURL() {
            try {

                await expect(this.page).toHaveURL(/category/)

            } catch (error) {
            throw new Error(`Home Page | Hot Deals | View all Categories | Account and Finance (Url validate) | Could Not Find Locator:"${error}"`)
            }   
    }


        // Module Name: Kominiti | Hot Deals | Create a deal
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Clicking create a deal

    async clickCreateDeals() {
        const CreateDeals = await this.page.locator(this.HotDealsElements.CreateDeals)
        try {

            await CreateDeals.click({ button: "left", delay: 100 })
        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Could Not Find Locator:"${error}"`)
        }   
    }
    

        // Module Name: Kominiti | Hot Deals | Create a deal | Overview 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: inputting in Offer title
    async inputOfferTitlte(value:string) {
        const OfferTitlte = await this.page.locator(this.HotDealsElements.OfferTitlte)
        try {

            await OfferTitlte.click({ button: "left", delay: 100 })
            await OfferTitlte.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview (Offer Titlte) | Could Not Find Locator:"${error}"`)
        }   
    }


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Inputting in Offer Category
    async inputOfferCategory(value:string) {
        const OfferCategory = await this.page.locator(this.HotDealsElements.OfferCategory)
        try {

            await OfferCategory.click({ button: "left", delay: 100 })
            await OfferCategory.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview (Offer Category) | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Create a deal | Overview 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: inputting in Offer sub category
    async inputOfferSubCategory(value:string) {
        const OfferSubCategory = await this.page.locator(this.HotDealsElements.OfferSubCategory)
        try {

            await OfferSubCategory.click({ button: "left", delay: 100 })
            await OfferSubCategory.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview (Offer Sub Category) | Could Not Find Locator:"${error}"`)
        }   
    }
        


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: inputting in Offer type
    async inputOfferType() {
        const OfferType = await this.page.locator(this.HotDealsElements.OfferType)
        const OfferTypeDropDown = await this.page.locator(this.HotDealsElements.OfferTypeDropDown)
        try {

            await OfferType.click({ button: "left", delay: 100, force:true })
            await OfferType.selectOption("single")
           
            

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview (Offer Type) | Could Not Find Locator:"${error}"`)
        }   
    }


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: inputting in offer close date
    async inputOfferCloseDate(value:string) {
        const OfferCloseDate = await this.page.locator(this.HotDealsElements.OfferCloseDate)
        try {

            await OfferCloseDate.click({ button: "left", delay: 100 })
            await OfferCloseDate.pressSequentially(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview (Offer Close Date) | Could Not Find Locator:"${error}"`)
        }   
    }

     // Module Name: Kominiti | Hot Deals | Create a deal | Overview 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: inputting in Keyword
    async inputKeyword(value:string) {
        const Keyword = await this.page.locator(this.HotDealsElements.Keyword)
        const KeywordDrpDwnSelect = await this.page.locator(this.HotDealsElements.KeywordDrpDwnSelect)
        try {

            await Keyword.click({ button: "left", delay: 100 })
            await Keyword.fill(value)
            await KeywordDrpDwnSelect.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview (Keyword text field) | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Create a deal | Overview 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Clicking the add keyword button
    async clickAddKeywordBtn() {
        const AddKeywordBtn = await this.page.locator(this.HotDealsElements.AddKeywordBtn)
        try {

            await AddKeywordBtn.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview (Keyword button) | Could Not Find Locator:"${error}"`)
        }   
    }

       // Module Name: Kominiti | Hot Deals | Create a deal | Overview 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Clicked Save and Continue button

    async saveNContinueClicked() {
        const SaveNContinue = await this.page.locator(this.HotDealsElements.SaveNContinue)
        try {

            await SaveNContinue.isVisible()
            await SaveNContinue.click({ button: "left", delay: 100, force:true })
            

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Save and Continue | Could Not Find Locator:"${error}"`)
        }   
    }


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Inputting value in package name

    async inputPackageName(value:string) {
        const PackageName = await this.page.locator(this.HotDealsElements.PackageName)
        try {

            await PackageName.click({ button: "left", delay: 100 })
            await PackageName.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type (Package Name) | Could Not Find Locator:"${error}"`)
        }   
    }



        // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Inputting value in Package Description
    async inputPackageDescription(value:string) {
        const PackageDescription = await this.page.locator(this.HotDealsElements.PackageDescription)
        try {

            await PackageDescription.click({ button: "left", delay: 100 })
            await PackageDescription.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type (Package Description) | Could Not Find Locator:"${error}"`)
        }   
    }
 
      // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Inputting value in Price
    async inputPrice(value:string) {
        const Price = await this.page.locator(this.HotDealsElements.Price)
        try {

            await Price.click({ button: "left", delay: 100 })
            await Price.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type (Price) | Could Not Find Locator:"${error}"`)
        }   
    }


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Inputting value in Duration
    async inputDuration(value:string) {
        const Duration = await this.page.locator(this.HotDealsElements.Duration)
        try {

            await Duration.click({ button: "left", delay: 100 })
            await Duration.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type (Duration) | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Inputting value in Description & FAQ
    async inputofferDescription(value:string) {
        const offerDescription = await this.page.locator(this.HotDealsElements.offerDescription)
        try {

            await offerDescription.click({ button: "left", delay: 100 })
            await offerDescription.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ  | Could Not Find Locator:"${error}"`)
        }   
    }


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type | Requirements
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Inputting value in Your question
    async inputYourQuestion(value:string) {
        const YourQuestion = await this.page.locator(this.HotDealsElements.YourQuestion)
        try {

            await YourQuestion.click({ button: "left", delay: 100 })
            await YourQuestion.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ | Requirements (Your question) | Could Not Find Locator:"${error}"`)
        }   
    }


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type | Requirements
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Inputting value in Your Qusestion Option
    async inputYourQusOption(value:string) {
        const YourQusOption = await this.page.locator(this.HotDealsElements.YourQusOption)
        try {

            await YourQusOption.click({ button: "left", delay: 100 })
            await YourQusOption.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ | Requirments (Your Qusestion Option) | Could Not Find Locator:"${error}"`)
        }   
    }


        // Module Name: Kominiti | Image
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Image upload

    async imageUploadFunction() {
        const filePath0 = "testData/logos/gameLogo.jpg"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
    }

        // Module Name: Kominiti | Video
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Video upload
    async videoUpoadFunction() {
        const filePath0 = "testData/videos/video.mp4"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
    }    


        // Module Name: Kominiti | PDF
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: PDF upload
    async pdfUploadFunction() {
        const filePath0 = "testData/pdf/Short_pdf.pdf"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
    }  


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type | Requirements | Gallery (Image) 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Image upload
    async clickGalleryImage() {
        const GalleryImage = await this.page.locator(this.HotDealsElements.GalleryImage)
        try {

            await GalleryImage.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ | Requirments | Gallery (Image) | Could Not Find Locator:"${error}"`)
        }   
    }

     // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type | Requirements | Gallery (Video) 
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Video Upload
    async clickGalleryVideo() {
        const GalleryVideo = await this.page.locator(this.HotDealsElements.GalleryVideo)
        try {

            await GalleryVideo.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ | Requirments | Gallery (Video) | Could Not Find Locator:"${error}"`)
        }   
    }

     // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type | Requirements | Gallery (Docs)
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Document Upload
    async clickGalleryDocs() {
        const GalleryDocs = await this.page.locator(this.HotDealsElements.GalleryDocs)
        try {

            await GalleryDocs.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ | Requirments | Gallery (Docs) | Could Not Find Locator:"${error}"`)
        }   
    }

    // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type | Requirements | Gallery | Preview and Submit
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Checkbox to be checked
    async clickCheckboxFinalSave() {
        const CheckboxFinalSave = await this.page.locator(this.HotDealsElements.CheckboxFinalSave)
        try {

            await CheckboxFinalSave.scrollIntoViewIfNeeded()
            await CheckboxFinalSave.click({ button: "left", delay: 100, force:true })
            //expect(await CheckboxFinalSave).toBeChecked()

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ | Requirments | Gallery | Final save | Could Not Find Locator:"${error}"`)
        }   
    }

      // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type | Requirements | Preview and Submit
        // Feature Name: Marketplace
        // Screen Type: Desktop
        // Description: Preview and Submit
    async clickSubmitBtn() {
        const SubmitBtn = await this.page.locator(this.HotDealsElements.SubmitBtn)
        try {

            await SubmitBtn.scrollIntoViewIfNeeded()
            await SubmitBtn.isVisible()
            await SubmitBtn.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ | Requirments | Gallery | Submit | Could Not Find Locator:"${error}"`)
        }   
    }

    //..
    
    async clickOfferFirst() {
        const AddQuestion = await this.page.locator(this.HotDealsElements.AddQuestion)
        try {

            await AddQuestion.click({ button: "left", delay: 100 })


        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Offer | Could Not Find Locator:"${error}"`)
        }   
    }



    async clickAddQuestion() {
        const AddQuestion = await this.page.locator(this.HotDealsElements.AddQuestion)
        try {

            await AddQuestion.click({ button: "left", delay: 100 })
            

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Offer | add question | Could Not Find Locator:"${error}"`)
        }   
    }


    async inputAddQusTextarea(value:string) {
        const AddQusTextarea = await this.page.locator(this.HotDealsElements.AddQusTextarea)
        try {

            await AddQusTextarea.click({ button: "left", delay: 100 })
            await AddQusTextarea.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Offer | add question | Could Not Find Locator:"${error}"`)
        }   
    }








}