import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
const fs = require('fs');

export default class functions {
        [x: string]: any;
        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }
        private functionsPageElements = {
                mainMenuPage: "text=Main Menu",
                mobileDesignPage: "text=Mobile Design",
                fontSectionExpandCollapseBtn: "//p[text()='Fonts']/following-sibling::div",
                colorSectionExpandCollapseBtn: "//p[text()='Colors']/following-sibling::div",
                uploadImageSectionExpandCollapseBtn: "//p[text()='Image Uploads']/following-sibling::div",
                dialogsSectionExpandCollapseBtn: "//p[text()='Dialogs']/following-sibling::div",
                desktopMockupSectionExpandCollapseBtn: "//p[text()='Desktop Mockup']/following-sibling::div",
                menuPage: "//p[text()='Menu']",
                fontDeleteBtn: "(//p[text()='Midnight']/following::button[@type='button']//div)[1]",
                uploadedFont: "//p[text()='Midnight']",
                uploadFont: "//div[@class='MuiBox-root css-1tlaggq']",
                uploadFontTitle: "//p[text()='Midnight']",
                backgroundColorInputField: "//p[text()='Background']/following-sibling::button",
                colorCodeInputField: "//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                colorPickerWindowSaveBtn: "//button[text()='Save']",
                textColorInputField: "//p[text()='Text Color']/following-sibling::button",
                activeBackgroundColorInputField: "//p[text()='Active Background']/following-sibling::button",
                clearBtn: "//button[text()='Clear All']",
                bottomAlignmentBtn: "//h5[text()='Bottom']",
                signUpPage: "//p[text()='Sign Up']",
                anonymousLoginRadioBtn: "input[value='anonymousLogin']",
                threeteenOrolder: "//input[@value='thirteenOrOlder']",
                ageInfoOff: "//span[text()='Off']",
                automaticAssignUserNameEnableDisableBtn: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
                phoneNumberCheckBox: "//input[@value='phone']",
                emailAddressCheckBox: "(//span[text()='Phone Number']/following::input)[1]",
                ageCheckBox: "(//span[text()='Email Address']/following::input)[1]",
                dateOfBirthCheckBox: "(//span[text()='Age']/following::input)[1]",
                zipCodeCheckBox: "(//span[text()='Date of Birth']/following::input)[1]",
                languagePage: "//p[text()='Language']",
                customQuestionCheckBox: "(//span[text()='Zip Code / Postal Code']/following::input)[1]",
                customOptionSignUpToHomeCheckBox: "//input[@value='signUpHome']",
                customOptionCheckBox: "//input[@value='customOptin']",
                userForceLanguageRadioBtn: "(//input[@type='radio'])[2]",
                forceLanguageInputField: "(//div[@role='button'])[3]",
                englishLanguage: "//li[text()='English']",
                menuPagePresetSelectionField: "(//div[@role='button'])[3]",
                defaultPreset: "//li[text()='Default']",
                addPresetPlusBtn: "(//button[@aria-label='Add new configuration'])[3]",
                presetNameInputField: `[style="background-color: inherit;"]`,
                saveBtn: "//button[text()='Save']",
                saveBtnForProfileSet: "//div[@class='MuiBox-root css-1p65aex']//button[1]",
                outsideOfInputField: "//div[@id='menu-']//div[1]",
                signUpPresetSelctionField: "(//div[@role='button'])[3]",
                signUpPresetNameInputField: "//input[@id='P-20334653112']",
                chooseBtnWithoutIfream: "//button[text()='Choose File']",
                homeBtn: `[data-testid="PersonIcon"]`,
                entryScreenSectionFiled: "(//p[text()='Entry Screen']/following::div[@role='button'])[1]",
                entryScreenHomeBtn: "//li[@data-value='home']",

                // helperForGameUrlCopy
                triviaSestion: `//span[text()='Trivia Mania']`,
                mobileLinkOptionCloseBtn: "//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]//div[1]",
                mobileLinkOpenBtnDefault: `[data-testid="QrCodeIcon"]`,
                mobileLinkCopyBtn: "//button[@aria-label='Copy Link']",
                defultGameStopBtn: "DefaultLive",
                okBtn: "//button[text()='Ok']",
                GameSettingsSection: '//p[text()="Game Settings"]',
                menuPresetSelectionDropDownBtn: "(//div[@role='button'])[1]",
                signUpPresetSelectionDropDownBtn: "(//div[@role='button'])[2]",
                defaultMenuPreset: "//li[text()='Default']",








        }

        async adminMainMenuSettingsHelper() {
                const homeAvterBtn = this.page.locator(this.functionsPageElements.homeBtn)
                try {
                        await homeAvterBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${error}"`)
                }

                //click on main menu btn
                let mainMenu = await this.page.locator(this.functionsPageElements.mainMenuPage)
                try {
                        await mainMenu.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle");
                } catch (error) {
                        throw new Error(`Home Avater Button | Main Menu Button Element Is not Visible | Could not find locator:"${error}"`)
                }

                //click on Mobile Design btn
                let mobileDesignPage = await this.page.locator(this.functionsPageElements.mobileDesignPage)
                try {
                        await mobileDesignPage.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Home Avater Button | Main Menu | Mobile Design Button Element Is not Visible | Could not find locator:"${error}"`)
                }


                const fontSectionExp = this.page.locator(this.functionsPageElements.fontSectionExpandCollapseBtn)
                try {
                        await fontSectionExp.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Mobile Design | Font Section Expand Collapse Button Is Not Visible | Could not find locator:"${error}"`)

                }

                // const uploadedFont = await this.page.locator(this.functionsPageElements.uploadedFont)
                const fontDeleteBtnForMD = await this.page.locator(this.functionsPageElements.fontDeleteBtn)
                try {
                        if (await fontDeleteBtnForMD.isVisible()) {
                                await fontDeleteBtnForMD.click({ button: "left", delay: 1000 })
                        }
                } catch (error) {

                }
                // try {
                //         await fontDeleteBtn.click({ button: "left", delay: 1000 })
                // } catch (error) {
                //         console.log(`Main Menu | Uploaded Font Is Not Visible`);
                // }

                //upload Font
                const filePath0forMD = "testData/fonts/Midnight.ttf"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0forMD]);
                })

                const uploadMenuFontForMD = await this.page.locator(this.functionsPageElements.uploadFont).first()
                try {
                        await uploadMenuFontForMD.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu Font Upload Element Is Not Found | Could not find locator:"${error}"`)
                }

                //verify Font Uploaded Successfully
                await this.page.waitForSelector(this.functionsPageElements.uploadFontTitle)
                const verifyFontUploadedMD = this.page.locator(this.functionsPageElements.uploadFontTitle)
                try {
                        await verifyFontUploadedMD.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error("Font Does Not Upload Successfully")
                }

                // //click on Mobile Design btn
                // let clearAllBtn = await this.page.locator(this.functionsPageElements.clearBtn)
                // try {
                //         await clearAllBtn.click({ button: "left", delay: 1000 })
                // } catch (error) {
                //         throw new Error(`Home Avater Button | Main Menu | Mobile Design clear All Btn Is Not Visible | Could not find locator:"${error}"`)
                // }

                //click on Mobile Design btn
                let menuPage = await this.page.locator(this.functionsPageElements.menuPage)
                try {
                        await menuPage.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Home Avater Button | Main Menu | Menu Page Button Element Is not Visible | Could not find locator:"${error}"`)
                }

                const pfresetMenuSection = await this.page.locator(this.functionsPageElements.menuPagePresetSelectionField)
                try {
                        await pfresetMenuSection.click({ button: "left", force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Preset Selection Input Field Is Not Visible | Could not find locator:"${error}"`)

                }

                let addPresetPlusbtn = await this.page.locator(this.functionsPageElements.addPresetPlusBtn)
                let saveBtn = await this.page.locator(this.functionsPageElements.saveBtn)
                let outsideOfInputFiled = await this.page.locator(this.functionsPageElements.outsideOfInputField)
                let addPresetInputField = await this.page.locator(this.functionsPageElements.presetNameInputField)
                let signUPAddPresetNameInputField = await this.page.getByPlaceholder('Name')
                let signUpPagePresetInputField = await this.page.locator(this.functionsPageElements.signUpPresetSelctionField)
                let defaultPreset = await this.page.locator(this.functionsPageElements.defaultPreset)
                if ((await defaultPreset.isVisible())) {
                        await defaultPreset.click({ button: "left", delay: 1000 })
                } else {
                        await outsideOfInputFiled.click({ button: "left", delay: 1000 })
                        await addPresetPlusbtn.click({ button: "left" })
                        await this.page.waitForTimeout(2000)
                        await addPresetInputField.fill("Default")
                        await this.page.waitForTimeout(2000)
                        await saveBtn.click({ button: "left" })
                        await pfresetMenuSection.click({ button: "left", delay: 1000 })
                        await defaultPreset.click({ button: "left", delay: 1000 })
                }


                // const uploadedFont = await this.page.locator(this.functionsPageElements.uploadedFont)
                const fontDeleteBtn = await this.page.locator(this.functionsPageElements.fontDeleteBtn)
                try {
                        if (await fontDeleteBtn.isVisible()) {
                                await fontDeleteBtn.click({ button: "left", delay: 1000 })
                                await this.page.waitForTimeout(2000)
                        }
                } catch (error) {

                }
                // try {
                //         await fontDeleteBtn.click({ button: "left", delay: 1000 })
                // } catch (error) {
                //         console.log(`Main Menu | Uploaded Font Is Not Visible`);
                // }

                //upload Font
                const filePath0 = "testData/fonts/Midnight.ttf"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })

                const uploadMenuFont = await this.page.locator(this.functionsPageElements.uploadFont).first()
                try {
                        await uploadMenuFont.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu Font Upload Element Is Not Found | Could not find locator:"${error}"`)
                }

                //verify Font Uploaded Successfully
                await this.page.waitForSelector(this.functionsPageElements.uploadFontTitle)
                const verifyFontUploaded = this.page.locator(this.functionsPageElements.uploadFontTitle)
                try {
                        await verifyFontUploaded.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error("Font Does Not Upload Successfully")
                }

                const entryScreen = this.page.locator(this.functionsPageElements.entryScreenSectionFiled)
                const homeBtn = this.page.locator(this.functionsPageElements.entryScreenHomeBtn)

                try {
                        await entryScreen.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                        await homeBtn.click({ button: "left", delay: 1000 })

                } catch (error) {
                        throw new Error("Entry Screen Home Button Selectin Issue")
                }

                //click Menu Clear Btn
                const clearBtn = this.page.locator(this.functionsPageElements.clearBtn)
                try {
                        await clearBtn.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error("Font Does Not Upload Successfully")
                }

                //select Bottom Alignment MenuBar
                const bottomAlignmentBtn = this.page.locator(this.functionsPageElements.bottomAlignmentBtn)
                try {
                        await bottomAlignmentBtn.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error("Main Bar Bottom Alignment Button Element Is Visible")
                }

                //click on signup page
                const signUpPage = this.page.locator(this.functionsPageElements.signUpPage)
                try {
                        await signUpPage.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle")
                } catch (error) {
                        throw new Error("Sign Up Page SignUP Button Element Is Not Visible")
                }

                await signUpPagePresetInputField.click({ button: "left" })
                await this.page.waitForTimeout(2000)

                if ((await defaultPreset.isVisible())) {
                        await defaultPreset.click({ button: "left", delay: 1000 })
                } else {
                        await outsideOfInputFiled.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                        await addPresetPlusbtn.click({ button: "left" })
                        await this.page.waitForTimeout(2000)
                        await addPresetInputField.fill("Default")
                        await saveBtn.click({ button: "left" })
                        await signUpPagePresetInputField.click({ button: "left", delay: 1000 })
                        await defaultPreset.click({ button: "left", delay: 1000 })
                }


                //click Anonymous Login Option
                let anonymousLoginRadioBtn = await this.page.locator(this.functionsPageElements.anonymousLoginRadioBtn).isChecked()
                if ((anonymousLoginRadioBtn == false)) {
                        await this.page.locator(this.functionsPageElements.anonymousLoginRadioBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }

                //Click user Age Must Be 13 Or older Check Box
                let ageInfoOff = await this.page.locator(this.functionsPageElements.ageInfoOff)
                try {
                        await ageInfoOff.click({ force: true })
                } catch (error) {
                        throw new Error("Sign Up Page age info off Button Element Is Not Visible")
                }

                // if ((ageInfoOff == false)) {
                //         await this.page.locator(this.functionsPageElements.ageInfoOff).click({ button: "left", force: true })
                //         await this.page.waitForTimeout(2000)
                // }

                // automatically Assign User Name
                let automaticAssignUserNameEnableDisableBtn = await this.page.locator(this.functionsPageElements.automaticAssignUserNameEnableDisableBtn).isChecked()
                if ((automaticAssignUserNameEnableDisableBtn == false)) {
                        await this.page.locator(this.functionsPageElements.automaticAssignUserNameEnableDisableBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                }


                //uncheckAdditionalInfoPhoneNumberCheckbox
                let phoneNumberCheckBox = await this.page.locator(this.functionsPageElements.phoneNumberCheckBox).isChecked()
                if ((phoneNumberCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.phoneNumberCheckBox).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                }

                // uncheckAdditionalInfoEmailAddressCheckbox
                let emailAddressCheckBox = await this.page.locator(this.functionsPageElements.emailAddressCheckBox).isChecked()
                if ((emailAddressCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.emailAddressCheckBox).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                }

                //uncheckAdditionalInfoAgeCheckbox
                let ageCheckBox = await this.page.locator(this.functionsPageElements.ageCheckBox).isChecked()
                if ((ageCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.ageCheckBox).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                }


                // uncheckAdditionalInfoDateOfBirthCheckbox
                let dateOfBirthCheckBox = await this.page.locator(this.functionsPageElements.dateOfBirthCheckBox).isChecked()
                if ((dateOfBirthCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.dateOfBirthCheckBox).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                }

                //uncheckAdditionalInfoZipCodeCheckbox
                let zipCodeCheckBox = await this.page.locator(this.functionsPageElements.zipCodeCheckBox).isChecked()
                if ((zipCodeCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.zipCodeCheckBox).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                }

                //uncheckAdditionalInfoCustomQuestionCheckbox
                let customQuestionCheckBox = await this.page.locator(this.functionsPageElements.customQuestionCheckBox).isChecked()
                if ((customQuestionCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.customQuestionCheckBox).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                }

                //input[@value='customOptin']
                //check custom option signup to home
                let signUpToHomeBtn = await this.page.locator(this.functionsPageElements.customOptionSignUpToHomeCheckBox).isChecked()
                if ((signUpToHomeBtn == false)) {
                        await this.page.locator(this.functionsPageElements.customOptionSignUpToHomeCheckBox).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                }
                //check custom option signup to home
                let customOf = await this.page.locator(this.functionsPageElements.customOptionCheckBox)
                try {
                        await customOf.uncheck({ force: true })
                        await this.page.waitForTimeout(2000)

                } catch (error) {

                }


                //clickLanguagePage
                let languagePage = await this.page.locator(this.functionsPageElements.languagePage)
                try {
                        await languagePage.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Button Element Is Not Found | Error occurred: ${error}`);
                }

                //clickUserForceLanguageOption
                let userForceLanguageRadioBtn = await this.page.locator(this.functionsPageElements.userForceLanguageRadioBtn)
                try {
                        await userForceLanguageRadioBtn.dblclick({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page User Force Language Radio Button Element Is Not Visible | Error occurred: ${error}`);
                }

                let ele = await this.page.locator(this.functionsPageElements.forceLanguageInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page User Force Language Radio Input Field Element Is Not Visible | Error occurred: ${error}`);
                }

                let englishLanguage = await this.page.locator(this.functionsPageElements.englishLanguage)
                try {
                        await englishLanguage.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page English Language Element Is Not Visible | Error occurred: ${error}`);
                }









        }


        async copyTriviaGameUrlInJsonFile() {
                const ele = await this.page.locator(this.functionsPageElements.triviaSestion)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                        await this.page.waitForTimeout(4000)
                }
                catch (error) {
                        throw new Error(`Trivia game page button is not visible | Could not find:"${error}"`)
                }

                //clickDefaultGameMobileLinkOpenBtn
                const mobileLinkOpenBtn = this.page.frameLocator('iframe').locator(this.functionsPageElements.mobileLinkOpenBtnDefault).first()
                try {
                        await mobileLinkOpenBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Trivia Mobile Link Text is not visible,Could not find locator:"${error}"`)
                }
                // clickMobileLinkCopyBtn
                const copyMobileLinkUrl = this.page.frameLocator('iframe').locator(this.functionsPageElements.mobileLinkCopyBtn)
                try {
                        await copyMobileLinkUrl.click()
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Trivia Mobile Link copy button is not visible,Could not find locator:"${error}"`)
                }



        }
        async gameUrlSettingsHelper() {

                const mobileLinkOptionCloseBtn = await this.page.frameLocator('iframe').locator(this.functionsPageElements.mobileLinkOptionCloseBtn)
                try {
                        await mobileLinkOptionCloseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                catch (error) {
                        throw new Error(`Mobile Link Modal Close Btn Is Not Vsible | Could not find:"${error}"`)
                }

                const ele = await this.page.locator(this.functionsPageElements.triviaSestion)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                        await this.page.waitForTimeout(4000)
                }
                catch (error) {
                        throw new Error(`Trivia game page button is not visible | Could not find:"${error}"`)
                }


                const gameStopBtn = await this.page.frameLocator('iframe').getByText(this.functionsPageElements.defultGameStopBtn)
                const okBtn = await this.page.frameLocator('iframe').locator(this.functionsPageElements.okBtn)

                try {
                        if (await gameStopBtn.isVisible()) {
                                await await gameStopBtn.click({ button: "left", delay: 100 })
                                await this.page.waitForTimeout(2000)
                                await await okBtn.click({ button: "left", delay: 100 })
                                await this.page.waitForTimeout(2000)


                        }
                } catch (error) {

                }

                const gameSettingPage = this.page.frameLocator('iframe').locator(this.functionsPageElements.GameSettingsSection).first()
                try {
                        await gameSettingPage.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Trivia | Game Settings Section is not visible,Could not find locator:"${error}"`)
                }

                const menuPresetSelectionOp = this.page.frameLocator('iframe').locator(this.functionsPageElements.menuPresetSelectionDropDownBtn)
                try {
                        await menuPresetSelectionOp.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Trivia | Game Settings Menu Preset Section is not visible,Could not find locator:"${error}"`)
                }

                const defaultPreset = this.page.frameLocator('iframe').locator(this.functionsPageElements.defaultMenuPreset)
                try {
                        await defaultPreset.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Trivia | Game Settings Default Menu Preset is not visible,Could not find locator:"${error}"`)
                }

                const signUpPagePreset = this.page.frameLocator('iframe').locator(this.functionsPageElements.signUpPresetSelectionDropDownBtn)
                try {
                        await signUpPagePreset.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Trivia | Game Settings SignUp Preset Section is not visible,Could not find locator:"${error}"`)
                }

                try {
                        await defaultPreset.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Trivia | Game Settings Default Menu Preset is not visible,Could not find locator:"${error}"`)
                }

        }



        async writeTextToClipboard(text: string) {
                await this.page.evaluate((clipboardText) => {
                        navigator.clipboard.writeText(clipboardText);
                }, text);
        }

        async readTextFromClipboard() {
                const clipboardText = await this.page.evaluate(() => {
                        return navigator.clipboard.readText();
                });

                return clipboardText;
        }

        async copyUrlToClipboard() {
                const url = await this.page.evaluate(() => {
                        return window.location.href;
                });

                await this.writeTextToClipboard(url);
        }

        async copyAndStoreDataToClipboard(data: string) {
                await this.writeTextToClipboard(data);
                this.storeDataInJSONFile(data);
        }

        storeDataInJSONFile(data: string) {
                const jsonData = JSON.stringify({ data }, null, 2);
                fs.writeFileSync('testData/data.json', jsonData);
        }

        retrieveDataFromJSONFile() {
                const jsonData = fs.readFileSync('testData/data.json', 'utf-8');
                const data = JSON.parse(jsonData);
                return data;
        }


        async invalidFileUploadCropperWithoutIframe() {
                const chooseBtn = await this.page.locator(this.functionsPageElements.chooseBtnWithoutIfream)
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click({ button: "left", delay: 300 })
        }
        async imageUploadCropperWithoutIframe() {
                const chooseBtn = await this.page.locator(this.functionsPageElements.chooseBtnWithoutIfream)
                const filePath0 = "testData/logos/PotraitBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click({ button: "left", delay: 300 })
                await this.page.waitForSelector(this.functionsPageElements.saveBtn)
                const saveBtn = await this.page.locator(this.functionsPageElements.saveBtn)
                await saveBtn.click({ button: "left", delay: 100 })
                await this.page.waitForTimeout(6000)
        }

        async presetLoadHelper() {

                const filePath0 = "testData/json/presetForFlash.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })

        }

        async vibrationPresetLoadHelper() {

                const filePath0 = "testData/json/prestForVibration.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })

        }
        async fileUploadCropperWithoutIframeForMenu() {
                const chooseBtn = await this.page.locator(this.functionsPageElements.chooseBtnWithoutIfream)
                const filePath0 = "testData/logos/gameTeamLogo.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click({ button: "left", delay: 300 })
                await this.page.waitForSelector(this.functionsPageElements.saveBtn)
                const saveBtn = await this.page.locator(this.functionsPageElements.saveBtn)
                await saveBtn.click({ button: "left", delay: 100 })
                await this.page.waitForTimeout(6000)
        }
        async fileUploadCropperForEditOptionWithoutIframeForMenu() {
                const chooseBtn = await this.page.locator(this.functionsPageElements.chooseBtnWithoutIfream)
                const filePath0 = "testData/logos/PotraitBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click({ button: "left", delay: 300 })
                await this.page.waitForSelector(this.functionsPageElements.saveBtn)
                const saveBtn = await this.page.locator(this.functionsPageElements.saveBtn)
                await saveBtn.click({ button: "left", delay: 100 })
                await this.page.waitForTimeout(6000)
        }
        async fileUploadCropperForSignUpProfilePictureSet() {
                const chooseBtn = await this.page.locator(this.functionsPageElements.chooseBtnWithoutIfream)
                const filePath0 = "testData/logos/gameTeamLogo.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click({ button: "left", delay: 300 })
                await this.page.waitForSelector(this.functionsPageElements.saveBtnForProfileSet)
                const saveBtn = await this.page.locator(this.functionsPageElements.saveBtnForProfileSet)
                await saveBtn.click({ button: "left", delay: 100 })
                await this.page.waitForTimeout(6000)
        }
        async fileUploadCropperForSignUpProfilePictureSetEditOption() {
                const chooseBtn = await this.page.locator(this.functionsPageElements.chooseBtnWithoutIfream)
                const filePath0 = "testData/logos/profile.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click({ button: "left", delay: 300 })
                await this.page.waitForSelector(this.functionsPageElements.saveBtnForProfileSet)
                const saveBtn = await this.page.locator(this.functionsPageElements.saveBtnForProfileSet)
                await saveBtn.click({ button: "left", delay: 100 })
                await this.page.waitForTimeout(6000)
        }

        async check_upload_font_text() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Upload Font"]')
                await expect(ele).toBeVisible()
        }
        async fontUploadFunction() {
                const filePath0 = "testData/fonts/Midnight.ttf"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async wrong_font_uploader() {
                const filePath0 = "testData/images/title.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Upload Font"]//preceding-sibling::div')
                await expect(ele).toBeVisible()
                await ele.click({ button: 'left' })
        }
        async uploadJsonFile() {
                const filePath0 = "testData/Riders.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async getMultiQuestionJsonFile() {
                const filePath0 = "testData/Default-Default Multi.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async select_font() {
                const font_ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Aa"]').last()
                await font_ele.click({ button: 'left' })
        }
        async delete_font() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Aa"]//following-sibling::button').click()
        }
        async bannerImageUploadFunction() {
                const filePath0 = "testData/images/CountDownStageBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async potraitImageUploadFunction() {
                const filePath0 = "testData/images/potrait.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async logoImageUploadFunction() {
                const filePath0 = "testData/logos/gameTeamLogo.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async homeIconUploadHelper() {
                const filePath0 = "testData/icons/home.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async prizeIconUploadHelper() {
                const filePath0 = "testData/icons/prize.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async howToPlayIconUploadHelper() {
                const filePath0 = "testData/icons/howtoplay.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async rulesIconUploadHelper() {
                const filePath0 = "testData/icons/rules.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async userProfileIconUploadHelper() {
                const filePath0 = "testData/icons/profile.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async portraitBackgroundImageUploadHelper() {
                const filePath0 = "testData/logos/PotraitBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async getRoundQuestionJsonFile() {
                const filePath0 = "testData/Default-Default Round.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async videoUploadFunction() {
                const filePath0 = "testData/videos/video.mp4"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async csvUploadFunction() {
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async frameUploadFunction() {
                const filePath0 = "testData/Frames/mobileFrame.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async fileUploadCropper() {

                const chooseBtn = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
                await chooseBtn.click({ button: "left", delay: 1000 })

                const cropperSaveBtn = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                await cropperSaveBtn.click({ delay: 1000, force: true })
                await this.page.waitForTimeout(10000)
                //await this.page.waitForLoadState("networkidle")
        }
        async fileUploadCropperForMainMenu() {
                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                await chooseBtn.click()
                const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()
        }
        async fileUploadCropperWithoutIframe() {
                // const imageText = await this.page.locator("text='Image'")
                // expect(imageText).toContainText("Image")
                await this.page.waitForSelector("//button[text()='Choose File']")
                // const ratioText = await this.page.locator("text='Ratio:'")
                // expect.soft(ratioText).toContainText("Ratio:")
                // const resolutionText = await this.page.locator("text='Resolution:'")
                // expect.soft(resolutionText).toContainText("Resolution:")
                // const alignmentText = await this.page.locator("text='Alignment:'")
                // expect.soft(alignmentText).toContainText("Alignment:")
                // const fileTypeText = await this.page.locator("text='File Type:'")
                // expect.soft(fileTypeText).toContainText("File Type:")
                // const maxFileSizeText = await this.page.locator("text='Max File Size:'")
                // expect.soft(maxFileSizeText).toContainText("Max File Size:")
                // const ratioTimeText = await this.page.frameLocator('iframe').locator("text='16:9'")
                // expect(ratioTimeText).toContainText("16:9")
                // const resolutionSizeText = await this.page.locator("text='1280x720'")
                // expect.soft(resolutionSizeText).toContainText("1280x720")
                // const alignmentDetailsText = await this.page.locator("text='Centered'")
                // expect.soft(alignmentDetailsText).toContainText("Centered")
                // const fileTypeDetailsText = await this.page.locator("text='PNG, SVG, JPEG, JPG'")
                // expect.soft(fileTypeDetailsText).toContainText("PNG, SVG, JPEG, JPG")
                // const maxFileSizeDetailsText = await this.page.locator("text='2MB'")
                // expect.soft(maxFileSizeDetailsText).toContainText("2MB")
                // const fileNameText = await this.page.locator("text='File Name'")
                // expect.soft(fileNameText).toContainText("File Name")
                // const fileSizeText = await this.page.locator("text='File Size'")
                // expect.soft(fileSizeText).toContainText("File Size")
                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                const filePath0 = "testData/logos/PotraitBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click()
                // const deviceScreenSizeText = await this.page.locator("text='Device Screen Size:'")
                // expect.soft(deviceScreenSizeText).toContainText("Device Screen Size:")
                // const deviceSelectField = await this.page.locator("//label[text()='Choose Size']")
                // expect.soft(deviceSelectField).toBeVisible()
                // await deviceSelectField.click({force:true})
                // const iphone13ProMax = await this.page.locator("//li[@data-value='iPhone 13 Pro Max']")
                // expect.soft(iphone13ProMax).toContainText("iPhone 13 Pro Max")
                // await iphone13ProMax.dblclick()
                // await this.page.waitForTimeout(1000)
                // await deviceSelectField.click({force:true})
                // const iphone12 = await this.page.locator("//li[@data-value='iPhone 12']")
                // expect(iphone12).toContainText("iPhone 12")
                // await iphone12.dblclick()
                // await this.page.waitForTimeout(1000)
                // await deviceSelectField.click({force:true})
                // const samsungS20 = await this.page.locator("//li[text()='Samsung S20']")
                // expect(samsungS20).toContainText("Samsung S20")
                // await samsungS20.dblclick()
                // const currentImageSizeTitleText = await this.page.locator("//div[text()='Current Image Size:']")
                // expect.soft(currentImageSizeTitleText).toContainText("Current Image Size:")
                // const currentImageRatioTitleText = await this.page.locator("//p[text()='Current Image Size Ratio:']")
                // expect.soft(currentImageRatioTitleText).toContainText("Current Image Size Ratio:")
                const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()
        }

        async mobileSignUpAdditionalInformation() {
                let phoneNumber = await this.page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()
                if ((phoneNumber == false)) {
                        // console.log("Radio button is not checked")
                        await this.page.locator("(//label[text()='Url or link']/following::input)[1]").click()
                }
                let emailCheckbox = await this.page.locator("(//span[text()='Phone Number']/following::input)[1]").isChecked()
                if ((emailCheckbox == false)) {
                        // console.log("Click on the Email Address Checkbox")
                        await this.page.locator("(//span[text()='Phone Number']/following::input)[1]").click()
                }
                let ageCheckbox = await this.page.locator("(//span[text()='Email Address']/following::input)[1]").isChecked()
                if ((ageCheckbox == false)) {
                        // console.log("Click on the Age Checkbox")
                        await this.page.locator("(//span[text()='Email Address']/following::input)[1]").click()
                }
                let dateOfBirthCheckBox = await this.page.locator("(//span[text()='Age']/following::input)[1]").isChecked()
                if ((dateOfBirthCheckBox == false)) {
                        // console.log("Click on the Deth of Birth Checkbox")
                        await this.page.locator("(//span[text()='Age']/following::input)[1]").click()
                }
                let postalCodeCheckBox = await this.page.locator("(//span[text()='Date of Birth']/following::input)[1]").isChecked()
                if ((postalCodeCheckBox == false)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("(//span[text()='Date of Birth']/following::input)[1]").click()
                }
                let customQuestionCheckBox = await this.page.locator("(//span[text()='Zip Code / Postal Code']/following::input)[1]").isChecked()
                if ((customQuestionCheckBox == true)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("(//span[text()='Zip Code / Postal Code']/following::input)[1]").uncheck()
                }
                let signUpHomeScreen = await this.page.locator("//input[@value='signUpHome']")
                await signUpHomeScreen.click({ force: true })
                let menu = await this.page.locator("//p[text()='Menu']")
                await menu.click({ force: true })
                await this.page.locator('text=Bottom').click({ force: true });
        }
        async mobilePreviewScreen() {
                await this.page.frameLocator('iframe').locator("input[name='phone']").fill("310-260-6620")
                await this.page.frameLocator('iframe').locator('input[name="email"]').fill("jon@email.com")
                //     await page.frameLocator('iframe').locator('input[name="age"]').fill("23")
                // await this.page.click('//input[@name="birthDate"]');
                // await this.page.waitForTimeout(5000)
                // await this.page.click("//button[text()='27']");
                // await this.page.click("//button[text()='OK']");
                await this.page.frameLocator('iframe').locator('[name="zipCode"]').fill("1223")
                await this.page.frameLocator('iframe').locator("//button[text()='Submit']").click();
                await this.page.waitForTimeout(2000)
                await this.page.frameLocator('iframe').locator("//p[text()='USER PROFILE']").click();
                await this.page.waitForTimeout(5000)
                await this.page.frameLocator('iframe').locator("//p[text()='RULES']").click();
                await this.page.waitForTimeout(6000)
                await this.page.frameLocator('iframe').locator("//p[text()='HOW TO PLAY']").click();
                await this.page.waitForTimeout(6000)
                await this.page.frameLocator('iframe').locator("//button[@value='prize']").click();
                await this.page.waitForTimeout(5000)
                await this.page.frameLocator('iframe').locator("//p[text()='HOME']").click();
                await this.page.waitForTimeout(2000)
        }
        async waitAndClick(locator: string) {
                const element = this.page.locator(locator);
                await element.waitFor({
                        state: "visible"
                });
                await element.click();
        }
        getRandomName() {
                return "Auto" + Date.now() + "Name"
        }







}
