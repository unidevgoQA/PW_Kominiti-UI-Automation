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
            AddQuestionbtn: "(//button[@type='button'])[1]",
            AddQusTextarea: "textarea[name='qamodalquestion']",
            SendBtn: "//button[text()='Send']",
            QuestionAdded:"(//div[@class='question-row'])[1]",

            //create deal cancel button 
            CancelBtn: "button.btnbox-cancel",

            //view all categories
            ViewAllCategoriesBtn: "//div[@class='new-review-page__section-titles']//a[1]",
            AccountNFinanceCat: "//p[text()='Accounting & Finance']",
            AdminSupportCat:"//p[text()='Admin Support']",
            ConsultingCat:"(//p[@class='inner-one'])[3]",
            CustomerServiceCat:"(//p[@class='inner-one'])[4]",
            DataSciAnalystCat:"(//p[@class='inner-one'])[5]",
            DigitalMarkCat:"(//p[@class='inner-one'])[6]",
            EngineeringArcCat:"(//p[@class='inner-one'])[7]",
            GraphicCat:"(//p[@class='inner-one'])[8]",
            ITnNetworkCat:"(//p[@class='inner-one'])[9]",
            LegalCat:"(//p[@class='inner-one'])[10]",
            SalesMarketCat:"(//p[@class='inner-one'])[11]",
            TranslationCat:"(//p[@class='inner-one'])[12]",
            WebCat:"(//p[@class='inner-one'])[13]",
            WrintingCat:"(//p[@class='inner-one'])[14]",
            HeaderText: "//div[@class='accounting__header-wrap']//h1[1]",


            //Contact Buyer
            offerFourth: "(//div[@class='label-cell'])[4]",
            ContactBuyersBtn: "//button[@class='action-button square']",
            MessageBoxBuyers: "//div[@class='user-name']//h3[1]",


            //order Purchases
            PurchaseOrder: "(//button[@as='button'])[2]",
            ConfirmPayment: "//button[text()='Confirm Payment']",
            PaymentSuccessful: "//div[@class='settings-account--notice-modals-content']//h3[1]",

            //Cancel purchase
            CancelPurchase: "//div[@class='payment-actions--row']//button[1]",
            ConfirmCancel: "//button[@class='action-button square']",
            AboutBuyers: "//div[@class='default-page-layout--cell__head']//h2[1]",







        };



        // Module Name: Kominiti | Hot Deals redirect
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click view all categories
        async clickViewAllCategories() {
                const Categories = await this.page.locator(this.HotDealsElements.Categories)
                try {
    
                await Categories.click({ button: "left", delay: 100 })
    
                } catch (error) {
                throw new Error(`Home Page | Hot Deals | View all Categories | Could Not Find Locator:"${error}"`)
                }   

        }


        // Module Name: Kominiti | Hot Deals | Categories | Validate categories
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Image upload

    async imageUploadFunction() {
        const filePath0 = "testData/logos/gameLogo.jpg"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
    }

        // Module Name: Kominiti | Video
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Video upload
    async videoUpoadFunction() {
        const filePath0 = "testData/videos/video.mp4"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
    }    


        // Module Name: Kominiti | PDF
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: PDF upload
    async pdfUploadFunction() {
        const filePath0 = "testData/pdf/Short_pdf.pdf"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath0]);
        })
    }  


        // Module Name: Kominiti | Hot Deals | Create a deal | Overview  | Deals type | Requirements | Gallery (Image) 
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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
        // Feature Name: Hot Deals
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

        // Module Name: Kominiti | Hot Deals | Offer
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: click first offer
    
    async clickOfferFirst() {
        const OfferFirst = await this.page.locator(this.HotDealsElements.OfferFirst)
        try {

            await OfferFirst.click({ button: "left", delay: 100 })


        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Offer | Could Not Find Locator:"${error}"`)
        }   
    }


         // Module Name: Kominiti | Hot Deals | Offer | Add Question 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: click Add Question button

    async clickAddQuestionbtn() {
        const AddQuestionbtn = await this.page.locator(this.HotDealsElements.AddQuestionbtn)
        try {

            await AddQuestionbtn.click({ button: "left", delay: 100 })
            

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Offer | add question | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Offer | Add Question | Input textarea
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click and give input Input textarea

    async inputAddQusTextarea(value:string) {
        const AddQusTextarea = await this.page.locator(this.HotDealsElements.AddQusTextarea)
        try {

            await AddQusTextarea.click({ button: "left", delay: 100 })
            await AddQusTextarea.fill(value)

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Offer | add question | Input textarea | Could Not Find Locator:"${error}"`)
        }   
    }

         // Module Name: Kominiti | Hot Deals | Offer | Add Question | Input textarea | Send button 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: click Send button 

    async inputSendBtn() {
        const SendBtn = await this.page.locator(this.HotDealsElements.SendBtn)
        try {

            await SendBtn.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Offer | add question | Send button | Could Not Find Locator:"${error}"`)
        }   
    }


        // Module Name: Kominiti | Hot Deals | Offer | Add Question | Validate add question
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Validate add question
    async validateQuestionAdded(value:string){
        const QuestionAdded= await this.page.locator(this.HotDealsElements.QuestionAdded)

        try {
            expect(QuestionAdded).toHaveText(value)
            
        } catch (error) {
            throw new Error(`Home Page | Hot Deals | Offer | Validate comment in add question | Could Not Find Locator:"${error}"`)
        }
    }


        // Module Name: Kominiti | Hot Deals | Offer | Cancel
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click the cancel button of offer

    async clickCancelBtn() {
        const CancelBtn = await this.page.locator(this.HotDealsElements.CancelBtn)
        try {

            await CancelBtn.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Create Deals | Overview | Deals type | Description & FAQ | Requirments | Gallery | cancel | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Categories | Accounting & Finance 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Accounting & Finance

    async clickAccountNFinanceCat() {
        const AccountNFinanceCat = await this.page.locator(this.HotDealsElements.AccountNFinanceCat)
        try {

            await AccountNFinanceCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Accounting & Finance | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Categories | Header
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Validate Header
    
    async validateHeaderText(value:string){
        const HeaderText= await this.page.locator(this.HotDealsElements.HeaderText).textContent()

        try {
            expect(HeaderText.includes(value)).toBeTruthy()
            
        } catch (error) {
            throw new Error(`Home Page | Hot Deals | View all categories |  Validate Header | Could Not Find Locator:"${error}"`)
        }
    }

     // Module Name: Kominiti | Hot Deals | Categories | Admin Support 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Admin Support

    async clickAdminSupportCat() {
        const AdminSupportCat = await this.page.locator(this.HotDealsElements.AdminSupportCat)
        try {

            await AdminSupportCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Admin Support | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Categories | Consulting
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Consulting
    async clickConsultingCat() {
        const ConsultingCat = await this.page.locator(this.HotDealsElements.ConsultingCat)
        try {

            await ConsultingCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Consulting | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Categories | Customer Service 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Customer Service
    async clickCustomerServiceCat() {
        const CustomerServiceCat = await this.page.locator(this.HotDealsElements.CustomerServiceCat)
        try {

            await CustomerServiceCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Customer Service | Could Not Find Locator:"${error}"`)
        }   
    }


    // Module Name: Kominiti | Hot Deals | Categories | Data Science & Analyst
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Data Science & Analyst
    async clickDataSciAnalystCat() {
        const DataSciAnalystCat = await this.page.locator(this.HotDealsElements.DataSciAnalystCat)
        try {

            await DataSciAnalystCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Data Science & Analyst | Could Not Find Locator:"${error}"`)
        }   
    }

    // Module Name: Kominiti | Hot Deals | Categories | Digital Market
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Digital Market
    async clickDigitalMarkCat() {
        const DigitalMarkCat = await this.page.locator(this.HotDealsElements.DigitalMarkCat)
        try {

            await DigitalMarkCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Digital Market | Could Not Find Locator:"${error}"`)
        }   
    }

    // Module Name: Kominiti | Hot Deals | Categories | Engineering and Archetecture
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Engineering and Archetecture

    async clickEngineeringArcCat() {
        const EngineeringArcCat = await this.page.locator(this.HotDealsElements.EngineeringArcCat)
        try {

            await EngineeringArcCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Engineering and Archetecture | Could Not Find Locator:"${error}"`)
        }   
    }

    // Module Name: Kominiti | Hot Deals | Categories | Graphics desgin 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Graphics desgin 
    async clickGraphicCatt() {
        const GraphicCat = await this.page.locator(this.HotDealsElements.GraphicCat)
        try {

            await GraphicCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Graphics desgin | Could Not Find Locator:"${error}"`)
        }   
    }

    // Module Name: Kominiti | Hot Deals | Categories | IT and Network  
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click IT and Network 
    async clickITnNetworkCat() {
        const ITnNetworkCat = await this.page.locator(this.HotDealsElements.ITnNetworkCat)
        try {

            await ITnNetworkCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | IT and Network | Could Not Find Locator:"${error}"`)
        }   
    }


    // Module Name: Kominiti | Hot Deals | Categories | Legal
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Legal
    async clickLegalCat() {
        const LegalCat = await this.page.locator(this.HotDealsElements.LegalCat)
        try {

            await LegalCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Legal | Could Not Find Locator:"${error}"`)
        }   
    }


    // Module Name: Kominiti | Hot Deals | Categories | Sales and Marketing 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Sales and Marketing
    async clickSalesMarketCat() {
        const SalesMarketCat = await this.page.locator(this.HotDealsElements.SalesMarketCat)
        try {

            await SalesMarketCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Sales and Marketing | Could Not Find Locator:"${error}"`)
        }   
    }


    // Module Name: Kominiti | Hot Deals | Categories | Translation 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Translation
    async clickTranslationCat() {
        const TranslationCat = await this.page.locator(this.HotDealsElements.TranslationCat)
        try {

            await TranslationCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Translation | Could Not Find Locator:"${error}"`)
        }   
    }

    // Module Name: Kominiti | Hot Deals | Categories | Web, Mobile and Software dev
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Web, Mobile and Software dev

    async clickWebCat() {
        const WebCat = await this.page.locator(this.HotDealsElements.WebCat)
        try {

            await WebCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Web, Mobile and Software dev | Could Not Find Locator:"${error}"`)
        }   
    }

    // Module Name: Kominiti | Hot Deals | Categories | Writting
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Wrinting

    async clickWrintingCat() {
        const WrintingCat = await this.page.locator(this.HotDealsElements.WrintingCat)
        try {

            await WrintingCat.click({ button: "left", delay: 100 })

        } catch (error) {
        throw new Error(`Home Page | Hot Deals | Categories | Wrinting | Could Not Find Locator:"${error}"`)
        }   
    }

        // Module Name: Kominiti | Hot Deals | Offer 
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click an offer

    async clickofferFourth(){
        const offerFourth= await this.page.locator(this.HotDealsElements.offerFourth)
        try {
            await offerFourth.click({ button: "left", delay: 100})
           
        } catch (error) {
            throw new Error(`Home Page |  Hot Deals | Offer | Could Not Find Locator:"${error}"`)
        }
    }


        // Module Name: Kominiti | Hot Deals | Offer | Contact buyer
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Contact buyer
    async clickContactBuyersBtn(){
        const ContactBuyersBtn= await this.page.locator(this.HotDealsElements.ContactBuyersBtn)
        try {
            await ContactBuyersBtn.click({ button: "left", delay: 100})
           
        } catch (error) {
            throw new Error(`Home Page |  Hot Deals | Offer | Contact buyer | Could Not Find Locator:"${error}"`)
        }
    }


     // Module Name: Kominiti | Hot Deals | Offer | Contact buyer | Message Box
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Validate Message Box
    async validateMessageBoxBuyers(){
        const MessageBoxBuyers= await this.page.locator(this.HotDealsElements.MessageBoxBuyers)
        try {

            expect(MessageBoxBuyers).toBeVisible();
           
        } catch (error) {
            throw new Error(`Home Page | Hot Deals | Offer | Contact buyers | Message Box | Could Not Find Locator:"${error}"`)
        }
    }


    // Module Name: Kominiti | Hot Deals | Offer | Contact buyer | Purchase
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Purchase
    async clickPurchaseOrder(){
        const PurchaseOrder= await this.page.locator(this.HotDealsElements.PurchaseOrder)
        try {
            await PurchaseOrder.click({ button: "left", delay: 100})
           
        } catch (error) {
            throw new Error(`Home Page |  Hot Deals | Offer | Purchase | Could Not Find Locator:"${error}"`)
        }
    }


    // Module Name: Kominiti | Hot Deals | Offer | Contact buyer | Purchase | confirm
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click confirm

    async clickConfirmPayment(){
        const ConfirmPayment= await this.page.locator(this.HotDealsElements.ConfirmPayment)

        try {
            await ConfirmPayment.click({ button: "left", delay: 100})
            
        } catch (error) {
            throw new Error(`Home Page | Hot Deals | Offer | Purchase | Confirm | Could Not Find Locator:"${error}"`)
        }
    }


    // Module Name: Kominiti | Hot Deals | Offer | Contact buyer | Purchase Confirm | Payment Successful
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Validate Payment Successful
    async validatePaymentSuccessful(value:string){
        const PaymentSuccessful= await this.page.locator(this.HotDealsElements.PaymentSuccessful).textContent()

        try {
            expect(PaymentSuccessful.includes(value)).toBeTruthy()
            
        } catch (error) {
            throw new Error(`Home Page | Hot Deals | Offer | Purchase | Confirm | Payment Successful | Could Not Find Locator:"${error}"`)
        }
    }


    // Module Name: Kominiti | Hot Deals | Offer | Contact buyer | Purchase | Cancel
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click Cancel
    async clickCancelPurchase(){
        const CancelPurchase= await this.page.locator(this.HotDealsElements.CancelPurchase)

        try {
            await CancelPurchase.click({ button: "left", delay: 100})
            
        } catch (error) {
            throw new Error(`Home Page | Hot Deals | Offer | Purchase | Cancel | Could Not Find Locator:"${error}"`)
        }
    }

 
     // Module Name: Kominiti | Hot Deals | Offer | Contact buyer | Purchase | Cancel | confirm Canel
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: Click confirm Canel
    async clickConfirmCancel(){
        const ConfirmCancel= await this.page.locator(this.HotDealsElements.ConfirmCancel)

        try {
            await ConfirmCancel.click({ button: "left", delay: 100})
            
        } catch (error) {
            throw new Error(`Home Page | Hot Deals | Offer | Purchase | Cancel | Confirm Cancel | Could Not Find Locator:"${error}"`)
        }
    }

     // Module Name: Kominiti | Hot Deals | Offer | Contact buyer | Purchase | Cancel | confirm Canel | about Buyers
        // Feature Name: Hot Deals
        // Screen Type: Desktop
        // Description: validate about Buyers
    async validateAboutBuyers(){
        const AboutBuyers= await this.page.locator(this.HotDealsElements.AboutBuyers)

        try {
            expect(AboutBuyers).toBeVisible()
            
        } catch (error) {
            throw new Error(`Home Page | Hot Deals | Offer | Purchase | Cancel | Confirm Cancel | Could Not Find Locator:"${error}"`)
        }
    }





}