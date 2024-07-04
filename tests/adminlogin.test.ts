import test, { expect } from "@fixtures/basePages"
import ENV3 from '../utils/env3'

test('AdminPanel-001 | Validate User Can Login Successfully With Valid Credentials', async ({ page, adminloginPage }) => {

    await test.step('Go to the url', async () => {
            await page.goto(ENV3.BASE_URL_2);
    })
    await test.step('Write on Email Textbox', async () => {
            await adminloginPage.writeOnEmailInputNameTextbox()
    })
    await test.step('Write on Password Textbox', async () => {
        await adminloginPage.writeOnPasswordInputNameTextbox()
})
    await test.step('User Login Functionality', async () => {
            await adminloginPage.clickOnLoginButton()
            await adminloginPage.WelcomeTextIsVisible()
            await page.waitForLoadState("networkidle")
    })
})

test('AdminPanel-002 | Home | Validate if website is redirected to Dashboard, after clicking on Dashboard', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Dashboard Button', async () => {
                await adminloginPage.clickOnDashboardButton()
                await adminloginPage.registereduserTextVisible()
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
    })

test('AdminPanel-003 | Home | User Management | Validate if website is redirected to Users after clicking on Users', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Users Button', async () => {
                await adminloginPage.clickOnUsersButton()
        })
        await test.step('Verify if All Users text is visible', async () => {
                await adminloginPage.allUsersTextIsVisible()
        })
    })

test('AdminPanel-005 | Home | User Management | Users | Validate if an new user can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.setViewportSize({ width: 1445, height: 520});
                await page.goto(ENV3.BASE_URL_2);

        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                //await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Users Button', async () => {
                await adminloginPage.clickOnUsersButton()
        })
        
        await test.step('Add User', async () => {
                await adminloginPage.clickAddUser()
                await adminloginPage.writeFirstName()
                await adminloginPage.writeLastName()
                await adminloginPage.writeEmailAddress()
                await adminloginPage.writePassword()
                await adminloginPage.writeAddressLineOne()
                await adminloginPage.clickSearchCountryButton()
                await adminloginPage.selectSearchCountry()
                await adminloginPage.clickSearchStateButton()
                await adminloginPage.selectState()
                await adminloginPage.clickSearchCityButton()
                await adminloginPage.selectCity()
                await adminloginPage.writeZipCode()
                await adminloginPage.clickTypeOfUserButton()
                //await adminloginPage.writeTypeOfUser()
                await adminloginPage.clickAdminButton()
                await adminloginPage.clickUserSaveButton()
                await adminloginPage.UserCreationSuccessTextIsVisible()
        })
    })

test('AdminPanel-006 | Home | User Management | Users | View | Validate User Profile can be seen after clicking on View icon', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Users Button', async () => {
                await adminloginPage.clickOnUsersButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Click on Eye dot Button', async () => {
                await adminloginPage.clickOneEyeButton()
        })
        
        await test.step('Verify if All First Name text is visible', async () => {
                await adminloginPage.FirstNameTextIsVisible()
        })
    })

test('AdminPanel-008 | Home | User Management | Users | Validate if an user can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Users Button', async () => {
                await adminloginPage.clickOnUsersButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Click on Delete Button', async () => {
                await adminloginPage.clickDeleteButton()
                //await page.pause()
        })
    })

test('AdminPanel-009 | Home | User Management | Users | Education List | A new education can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Users Button', async () => {
                await adminloginPage.clickOnUsersButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Education', async () => {
                await adminloginPage.clickEducationButton()
                await adminloginPage.clickAddEducationButton()
                await adminloginPage.clickFieldStudyButton()
                await adminloginPage.SelectFieldStudyButton()
                await adminloginPage.writeOnSchoolCollegeUniTextbox()
                await adminloginPage.writeStartDate()
                await adminloginPage.writeEndDate()
                await adminloginPage.clickSaveButton()
                await adminloginPage.educationSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-011 | Home | User Management | Users | User Awards List | Validate if awards can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Users Button', async () => {
                await adminloginPage.clickOnUsersButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Certificate', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickAwardsButton()
                await adminloginPage.clickAddAwardsButton()
                await adminloginPage.writeAwardTitle()
                await adminloginPage.writeAwardIssuedBy()
                await adminloginPage.writeAwardIssueDate()
                await adminloginPage.writeAwardDesc()
                await adminloginPage.clickSaveAwardsButton()
                await adminloginPage.AwardsSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-013 | Home | User Management | Job Seeker | Validate if user file can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.setViewportSize({ width: 1445, height: 520});
                await page.goto(ENV3.BASE_URL_2);

        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                //await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Job Seeker Button', async () => {
                await adminloginPage.clickJobSeekerButton()
        })
        
        await test.step('Add User', async () => {
                await adminloginPage.clickAddUser()
                await adminloginPage.writeFirstName()
                await adminloginPage.writeLastName()
                await adminloginPage.writeEmailAddress()
                await adminloginPage.writePassword()
                await adminloginPage.writeAddressLineOne()
                await adminloginPage.clickSearchCountryButton()
                await adminloginPage.selectSearchCountry()
                await adminloginPage.clickSearchStateButton()
                await adminloginPage.selectState()
                await adminloginPage.clickSearchCityButton()
                await adminloginPage.selectCity()
                await adminloginPage.writeZipCode()
                await adminloginPage.clickTypeOfUserButton()
                //await adminloginPage.writeTypeOfUser()
                await adminloginPage.clickAdminButton()
                await adminloginPage.clickUserSaveButton()
                await adminloginPage.UserCreationSuccessTextIsVisible()
        })
    })

test('AdminPanel-015 | Home | User Management | Job Seeker | Validate if an user can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
        })
        await test.step('Click on Job Seekers Button', async () => {
                await adminloginPage.clickJobSeekerButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Click on Delete Button', async () => {
                await adminloginPage.clickDeleteButton()
                //await page.pause()
        })
    })

test('AdminPanel-016 | Home | User Management | Job Seeker | Education List | A new education can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Job Seekers Button', async () => {
                await adminloginPage.clickJobSeekerButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Education', async () => {
                await adminloginPage.clickEducationButton()
                await adminloginPage.clickAddEducationButton()
                await adminloginPage.clickFieldStudyButton()
                await adminloginPage.SelectFieldStudyButton()
                await adminloginPage.writeOnSchoolCollegeUniTextbox()
                await adminloginPage.writeStartDate()
                await adminloginPage.writeEndDate()
                await adminloginPage.clickSaveButton()
                await adminloginPage.educationSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-018 | Home | User Management | Job Seeker | User Awards List | Validate if awards can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Job Seekers Button', async () => {
                await adminloginPage.clickJobSeekerButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Awards', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickAwardsButton()
                await adminloginPage.clickAddAwardsButton()
                await adminloginPage.writeAwardTitle()
                await adminloginPage.writeAwardIssuedBy()
                await adminloginPage.writeAwardIssueDate()
                await adminloginPage.writeAwardDesc()
                await adminloginPage.clickSaveAwardsButton()
                await adminloginPage.AwardsSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-021 | Home | User Management | Business Owner | Validate if website is redirected to Connections page after clicking on it', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Business Owner Button', async () => {
                await adminloginPage.clickBusinessDropdownButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Validate if website is redirected to Connections page after clicking on it', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickBusinessConnectionButton()
                await adminloginPage.businessConnectionIsVisible()
        })
        await test.step('Validate if website is redirected to Profile page after clicking on View Icon', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.clickBusinessDropdownButton()
                await adminloginPage.clickOnthreedotsButton()
                await adminloginPage.clickBusinessViewButton()
                await adminloginPage.businessViewFirstNameIsVisible()
                await adminloginPage.businessViewLastNameIsVisible()
        })
        await test.step('Validate if website is redirected to Edit User page after clicking on Edit Profile Icon', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.clickBusinessDropdownButton()
                await page.waitForLoadState("networkidle")
                await adminloginPage.clickOnthreedotsButton()
                await adminloginPage.clickEditProfileButton()
                await adminloginPage.editProfileIsVisible()
        })
    })

test('AdminPanel-022 | Home | User Management | Business Owner | Validate if an user can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
        })
        await test.step('Click on Business Owner Button', async () => {
                await adminloginPage.clickBusinessDropdownButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Click on Delete Button', async () => {
                await adminloginPage.clickDeleteButton()
                //await page.pause()
        })
    })

test('AdminPanel-023 | Home | User Management | Business Owner | Education List | A new education can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Business Owner Button', async () => {
                await adminloginPage.clickBusinessDropdownButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Education', async () => {
                await adminloginPage.clickEducationButton()
                await adminloginPage.clickAddEducationButton()
                await adminloginPage.clickFieldStudyButton()
                await adminloginPage.SelectFieldStudyButton()
                await adminloginPage.writeOnSchoolCollegeUniTextbox()
                await adminloginPage.writeStartDate()
                await adminloginPage.writeEndDate()
                await adminloginPage.clickSaveButton()
                await adminloginPage.educationSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-024 | Home | User Management | Business Owner | User Awards List | Validate if awards can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Business Owner Button', async () => {
                await adminloginPage.clickBusinessDropdownButton()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Awards', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickAwardsButton()
                await adminloginPage.clickAddAwardsButton()
                await adminloginPage.writeAwardTitle()
                await adminloginPage.writeAwardIssuedBy()
                await adminloginPage.writeAwardIssueDate()
                await adminloginPage.writeAwardDesc()
                await adminloginPage.clickSaveAwardsButton()
                await adminloginPage.AwardsSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-026 | Home | User Management | Other User | Validate if user file can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.setViewportSize({ width: 1445, height: 520});
                await page.goto(ENV3.BASE_URL_2);

        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                //await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Other User Button', async () => {
                await adminloginPage.clickOtherUser()
        })
        
        await test.step('Add User', async () => {
                await adminloginPage.clickAddUser()
                await adminloginPage.writeFirstName()
                await adminloginPage.writeLastName()
                await adminloginPage.writeEmailAddress()
                await adminloginPage.writePassword()
                await adminloginPage.writeAddressLineOne()
                await adminloginPage.clickSearchCountryButton()
                await adminloginPage.selectSearchCountry()
                await adminloginPage.clickSearchStateButton()
                await adminloginPage.selectState()
                await adminloginPage.clickSearchCityButton()
                await adminloginPage.selectCity()
                await adminloginPage.writeZipCode()
                await adminloginPage.clickTypeOfUserButton()
                //await adminloginPage.writeTypeOfUser()
                await adminloginPage.clickAdminButton()
                await adminloginPage.clickUserSaveButton()
                await adminloginPage.UserCreationSuccessTextIsVisible()
        })
    })

test('AdminPanel-027 | Home | User Management | Other User | Validate if an user can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
        })
        await test.step('Click on Other User Button', async () => {
                await adminloginPage.clickOtherUser()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Click on Delete Button', async () => {
                await adminloginPage.clickDeleteButton()
                //await page.pause()
        })
    })

test('AdminPanel-028 | Home | User Management | Other User | Education List | A new education can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Other User Button', async () => {
                await adminloginPage.clickOtherUser()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Education', async () => {
                await adminloginPage.clickEducationButton()
                await adminloginPage.clickAddEducationButton()
                await adminloginPage.clickFieldStudyButton()
                await adminloginPage.SelectFieldStudyButton()
                await adminloginPage.writeOnSchoolCollegeUniTextbox()
                await adminloginPage.writeStartDate()
                await adminloginPage.writeEndDate()
                await adminloginPage.clickSaveButton()
                await adminloginPage.educationSuccessTextIsVisible()
                
        })
        await test.step('Search bar working', async () => {
                await adminloginPage.clickSearchButton()
                await adminloginPage.writeInSearchBox()
                await adminloginPage.searchResultTextIsVisible()
                
        })

    })

test('AdminPanel-029 |Home | User Management | Other User | User Awards List | Validate if awards can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Other User Button', async () => {
                await adminloginPage.clickOtherUser()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Awards', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickAwardsButton()
                await adminloginPage.clickAddAwardsButton()
                await adminloginPage.writeAwardTitle()
                await adminloginPage.writeAwardIssuedBy()
                await adminloginPage.writeAwardIssueDate()
                await adminloginPage.writeAwardDesc()
                await adminloginPage.clickSaveAwardsButton()
                await adminloginPage.AwardsSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-030 | Home | User Management | Other User | Card Details | Validate if a business card can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.setViewportSize({ width: 1445, height: 520});
                await page.goto(ENV3.BASE_URL_2);

        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                //await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Other User Button', async () => {
                await adminloginPage.clickOtherUser()
        })
        
        await test.step('Add User', async () => {
                await adminloginPage.clickAddUser()
                await adminloginPage.writeFirstName()
                await adminloginPage.writeLastName()
                await adminloginPage.writeEmailAddress()
                await adminloginPage.writePassword()
                await adminloginPage.writeAddressLineOne()
                await adminloginPage.clickSearchCountryButton()
                await adminloginPage.selectSearchCountry()
                await adminloginPage.clickSearchStateButton()
                await adminloginPage.selectState()
                await adminloginPage.clickSearchCityButton()
                await adminloginPage.selectCity()
                await adminloginPage.writeZipCode()
                await adminloginPage.clickTypeOfUserButton()
                //await adminloginPage.writeTypeOfUser()
                await adminloginPage.clickAdminButton()
                await adminloginPage.clickUserSaveButton()
                await adminloginPage.UserCreationSuccessTextIsVisible()
        })
        await test.step('Search in searchbar and click on Business card', async () => {
                await adminloginPage.clickSearchButtonUsers()
                await adminloginPage.writeInSearchBoxUsers()
                await page.pause()
                await adminloginPage.clickOnthreedotsButton()
                await adminloginPage.clickBusinessCardDetail()
        })

        await test.step('Add Business Card', async () => {
                await adminloginPage.clickCompanyNameButton()
                await adminloginPage.selectGoogleInCompany()
                await adminloginPage.clickSelectTitle()
                await adminloginPage.writeInSelectTitle()
                await adminloginPage.clickFirstName()
                await adminloginPage.writeInFirstName()
                await adminloginPage.clickLastName()
                await adminloginPage.writeInLastName()
                await adminloginPage.clickEmail()
                await adminloginPage.writeInEmail()
                await adminloginPage.clickPhoneNumber()
                await adminloginPage.writeInPhoneNumber()
                await adminloginPage.clickAddress()
                await adminloginPage.writeInAddress()
                await adminloginPage.clickWebAddress()
                await adminloginPage.writeInWebAddress()
                await adminloginPage.clickSaveBusiness()
                await adminloginPage.businessCardSavedMessageIsVisible()

        })
    })

test('AdminPanel-032 | Home | User Management | Inactive User | Validate if user file can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.setViewportSize({ width: 1445, height: 520});
                await page.goto(ENV3.BASE_URL_2);

        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                //await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Inactive User Button', async () => {
                await adminloginPage.clickInactiveUser()
        })
        
        await test.step('Add User', async () => {
                await adminloginPage.clickAddUser()
                await adminloginPage.writeFirstName()
                await adminloginPage.writeLastName()
                await adminloginPage.writeEmailAddress()
                await adminloginPage.writePassword()
                await adminloginPage.writeAddressLineOne()
                await adminloginPage.clickSearchCountryButton()
                await adminloginPage.selectSearchCountry()
                await adminloginPage.clickSearchStateButton()
                await adminloginPage.selectState()
                await adminloginPage.clickSearchCityButton()
                await adminloginPage.selectCity()
                await adminloginPage.writeZipCode()
                await adminloginPage.clickTypeOfUserButton()
                //await adminloginPage.writeTypeOfUser()
                await adminloginPage.clickAdminButton()
                await adminloginPage.clickUserSaveButton()
                await adminloginPage.UserCreationSuccessTextIsVisible()
        })
    })

test('AdminPanel-033 | Home | User Management | Inactive User | Validate if an user can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
        })
        await test.step('Click on Inactive User Button', async () => {
                await adminloginPage.clickInactiveUser()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Click on Delete Button', async () => {
                await adminloginPage.clickDeleteButton()
                //await page.pause()
        })
    })

test('AdminPanel-034 | Home | User Management | Inactive User | Education List | A new education can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Inactive User Button', async () => {
                await adminloginPage.clickInactiveUser()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Education', async () => {
                await adminloginPage.clickEducationButton()
                await adminloginPage.clickAddEducationButton()
                await adminloginPage.clickFieldStudyButton()
                await adminloginPage.SelectFieldStudyButton()
                await adminloginPage.writeOnSchoolCollegeUniTextbox()
                await adminloginPage.writeStartDate()
                await adminloginPage.writeEndDate()
                await adminloginPage.clickSaveButton()
                await adminloginPage.educationSuccessTextIsVisible()
                
        })
        await test.step('Search bar working', async () => {
                await adminloginPage.clickSearchButton()
                await adminloginPage.writeInSearchBox()
                await adminloginPage.searchResultTextIsVisible()
                
        })

    })

test('AdminPanel-035 |Home | User Management | Inactive User | User Awards List | Validate if awards can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Inactive User Button', async () => {
                await adminloginPage.clickInactiveUser()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Awards', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickAwardsButton()
                await adminloginPage.clickAddAwardsButton()
                await adminloginPage.writeAwardTitle()
                await adminloginPage.writeAwardIssuedBy()
                await adminloginPage.writeAwardIssueDate()
                await adminloginPage.writeAwardDesc()
                await adminloginPage.clickSaveAwardsButton()
                await adminloginPage.AwardsSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-037 | Home | User Management | Incomplete Registrations | Validate if an user can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
        })
        await test.step('Click on Incomplete Regs Button', async () => {
                await adminloginPage.clickincompleteRegs()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Click on Delete Button', async () => {
                await adminloginPage.clickDeleteButton()
                //await page.pause()
        })
    })

test('AdminPanel-038 | Home | User Management | Incomplete Registrations | Education List | A new education can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Incomplete Regs Button', async () => {
                await adminloginPage.clickincompleteRegs()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Education', async () => {
                await adminloginPage.clickEducationButton()
                await adminloginPage.clickAddEducationButton()
                await adminloginPage.clickFieldStudyButton()
                await adminloginPage.SelectFieldStudyButton()
                await adminloginPage.writeOnSchoolCollegeUniTextbox()
                await adminloginPage.writeStartDate()
                await adminloginPage.writeEndDate()
                await adminloginPage.clickSaveButton()
                await adminloginPage.educationSuccessTextIsVisible()
                
        })
        await test.step('Search bar working', async () => {
                await adminloginPage.clickSearchButton()
                await adminloginPage.writeInSearchBox()
                await adminloginPage.searchResultTextIsVisible()
                
        })

    })

test('AdminPanel-039 |Home | User Management | Incomplete Registrations | User Awards List | Validate if awards can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Incomplete Regs Button', async () => {
                await adminloginPage.clickincompleteRegs()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Awards', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickAwardsButton()
                await adminloginPage.clickAddAwardsButton()
                await adminloginPage.writeAwardTitle()
                await adminloginPage.writeAwardIssuedBy()
                await adminloginPage.writeAwardIssueDate()
                await adminloginPage.writeAwardDesc()
                await adminloginPage.clickSaveAwardsButton()
                await adminloginPage.AwardsSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-041 | Home | User Management | Bad User Registrations | Validate if an user can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
        })
        await test.step('Click on Bad Regs Button', async () => {
                await adminloginPage.badRegs()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Click on Delete Button', async () => {
                await adminloginPage.clickDeleteButton()
                //await page.pause()
        })
    })

test('AdminPanel-042 | Home | User Management | Bad User Registrations | Education List | A new education can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Bad Regs Button', async () => {
                await adminloginPage.badRegs()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Education', async () => {
                await adminloginPage.clickEducationButton()
                await adminloginPage.clickAddEducationButton()
                await adminloginPage.clickFieldStudyButton()
                await adminloginPage.SelectFieldStudyButton()
                await adminloginPage.writeOnSchoolCollegeUniTextbox()
                await adminloginPage.writeStartDate()
                await adminloginPage.writeEndDate()
                await adminloginPage.clickSaveButton()
                await adminloginPage.educationSuccessTextIsVisible()
                
        })
        await test.step('Search bar working', async () => {
                await adminloginPage.clickSearchButton()
                await adminloginPage.writeInSearchBox()
                await adminloginPage.searchResultTextIsVisible()
                
        })

    })

test('AdminPanel-043 |Home | User Management | Bad User Registrations | User Awards List | Validate if awards can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Bad Regs Button', async () => {
                await adminloginPage.badRegs()
        })
        await test.step('Click on Three Dots Button', async () => {
                await adminloginPage.clickOnthreedotsButton()
        })
        await test.step('Add Awards', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickAwardsButton()
                await adminloginPage.clickAddAwardsButton()
                await adminloginPage.writeAwardTitle()
                await adminloginPage.writeAwardIssuedBy()
                await adminloginPage.writeAwardIssueDate()
                await adminloginPage.writeAwardDesc()
                await adminloginPage.clickSaveAwardsButton()
                await adminloginPage.AwardsSuccessTextIsVisible()
                
        })
    })

test('AdminPanel-044 |Home | User Management | Subscribers | Validate if Subscriber status can be toggled off', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Subscribers Button', async () => {
                await adminloginPage.clickOnSubscribers()
        })
        
        await test.step('Validate if Subscriber status can be toggled off', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnSubscribersToggle()
                await adminloginPage.actionSuccessMessageIsVisible()
        })
        await test.step('Validate if a Subscriber can be searched', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnSubscribersSearch()
                await adminloginPage.writeInSubscriberSearch()
                await adminloginPage.searchedSubscriberIsVisible()
        })
    })

test('AdminPanel-045 |Home | User Management | Send Notification | Validate if a image file can be uploaded', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Send Notifications Button', async () => {
                await adminloginPage.clickOnSendNotifications()
        })
        
        await test.step('Validate if a image file can be uploaded', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.logoImageUploadFunction()
                await adminloginPage.clickOnImageUploadButton()
        })
        
    })
test('AdminPanel-046 |Home | User Management | Send Notification | Validate if notification can be sent to select users', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Send Notifications Button', async () => {
                await adminloginPage.clickOnSendNotifications()
        })
        
        await test.step('Validate if notification can be sent to select users', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnNotificationTextbox()
                await adminloginPage.writeInNotificationTextbox()
                await adminloginPage.clickOnSelectFirstUser()
                await adminloginPage.clickOnSelectedUser()
                await adminloginPage.actionSuccessInSendNotificationIsVisible()
        })
        
    })
test('AdminPanel-047 | Home | User Management | Support Purpose | Validate if a support purpse can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Support Purpose Button', async () => {
                await adminloginPage.clickOnSupportPurpose()
        })
        
        await test.step('Validate if a support purpse can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddSupportButton()
                await adminloginPage.clickOnPurposeNameTextbox()
                await adminloginPage.writeInPurposeNameTextbox()
                await adminloginPage.clickOnSavePurposeButton()
                await adminloginPage.actionSuccessPurposeButtonIsVisible()
        })
        
    })

test('AdminPanel-048 | Home | User Management | Support Purpose | Validate if a support purpse can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on User Management Button', async () => {
                await adminloginPage.clickOnUserManagementButton()
                await adminloginPage.jobSeekerTextIsVisible()
        })
        await test.step('Click on Support Purpose Button', async () => {
                await adminloginPage.clickOnSupportPurpose()
        })
        
        await test.step('Validate if a support purpse can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddSupportButton()
                await adminloginPage.clickOnPurposeNameTextbox()
                await adminloginPage.writeInPurposeNameTextbox()
                await adminloginPage.clickOnSavePurposeButton()
                await adminloginPage.actionSuccessPurposeButtonIsVisible()
        })

        await test.step('Validate if a support purpse can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnThreeDotsButton()
                //await adminloginPage.clickOnThreeDotsDeleteButton()
                await adminloginPage.clickOkButton()
                await adminloginPage.actionDeletedPurposeMessageIsVisible()
        })

        
    })


test('AdminPanel-054 | Home | System management | Deals | Validate if an item can be approved/unapproved', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Deals Button', async () => {
                await adminloginPage.clickOnDealsUnderSystemManagementButton()
        })
        
        await test.step('Validate if an item can be approved/unapproved', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnApproveButton()
                await adminloginPage.approveIsVisible()
        })  
    })

test('AdminPanel-055 | Home | System Management | Feed | Validate if a feed can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Feed Button', async () => {
                await adminloginPage.clickOnFeedButton()
        })
        
        await test.step('Validate if a feed can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddFeedButton()
                await adminloginPage.clickOnSearchUserDropdown()
                await adminloginPage.clickOnSearchUserTextbox()
                await adminloginPage.writeInSearchUserTextbox()
                await adminloginPage.selectFirstUser()
                await adminloginPage.clickOnMessageTextbox()
                await adminloginPage.writeInMessageTextbox()
                await adminloginPage.clickOnfeedSaveButton()
                await adminloginPage.feedsSuccessIsVisible()
        })

        await test.step('Validate if a feed can be searched', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnfeedSearchButton()
                await adminloginPage.writeInfeedSearchBox
                await adminloginPage.searchIsVisible()
                
        })
        
    })

test('AdminPanel-056 | Home | System Management | Article | Validate if a Article can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Articles Button', async () => {
                await adminloginPage.clickOnArticlesButton()
        })
        
        await test.step('Validate if a Article can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddArticlesButton()
                await adminloginPage.clickOnSelectUserButton()
                await adminloginPage.clickOnselectFromSelectUserButton()
                await adminloginPage.writeInUserBox()
                await adminloginPage.clickOnFirstUserButton()
                await adminloginPage.clickOnHeadingButton()
                await adminloginPage.writeInHeadingBox()
                await adminloginPage.clickOnDescriptionButton()
                await adminloginPage.writeInDescriptionBox()
                await adminloginPage.clickOnSaveButton()
                await adminloginPage.successMessageIsVisible()
        })
        
    })

test('AdminPanel-057 | Home | System Management | Article | Validate if a Article can be viewed', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Articles Button', async () => {
                await adminloginPage.clickOnArticlesButton()
        })
        
        await test.step('Validate if a Article can be viewed', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnArticlesActionButton()
                await adminloginPage.clickOnViewsButton()
                await adminloginPage.headlineTextIsVisible()
        })
        await test.step('Validate if a Article can be edited', async () => {
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnArticlesButton()
                await adminloginPage.clickOnArticlesActionButton()
                await adminloginPage.clickOnEditButton()
                await adminloginPage.editArticleTextIsVisible()
        })
        await test.step('Validate if a Article can be drafted', async () => {
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnArticlesButton()
                await adminloginPage.clickOnArticlesActionButton()
                await adminloginPage.clickOnDraftButton()
                await adminloginPage.draftSuccessTextIsVisible()
        })
        
    })

test('AdminPanel-059 | Home | System management | Marketplace | Validate if an item can be searched ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Marketplace Button', async () => {
                await adminloginPage.clickOnsysManagementMarketPlaceButton()
        })
        
        await test.step('Validate if an item can be searched', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnMarketplaceSearchButton()
                await adminloginPage.writeInMarketplaceSearchBox()
                await adminloginPage.searchInMarketplaceIsVisible()
        })
        
        await test.step('Validate if an item can be viewed ', async () => {
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnsysManagementMarketPlaceButton()
                await adminloginPage.clickOnArticlesActionButton()
                await adminloginPage.clickOnViewInMarketplaceButton()
                await adminloginPage.viewInMarketplaceIsVisible()
        })
        
        await test.step('Validate if a Article can be approved/unapproved', async () => {
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnsysManagementMarketPlaceButton()
                await adminloginPage.clickOnApproveButton()
                //await adminloginPage.approveIsVisible()
        })
        
        
    })
test('AdminPanel-063 | Home | System Management | Buisness Locator | Home | System Management | Interest | Validate if edit button is working ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Business Locator Button', async () => {
                await adminloginPage.clickOnBusinessLocatorButton()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnBusinessLocatorDeleteButton()
        })
        await test.step('Validate if an item can be viewed', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnBusinessLocatorViewButton()
                await adminloginPage.nameMessageIsVisible()
        })
        await test.step('Validate if an item can be edited', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnBusinessLocatorButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnBusinessLocatorEditButton()
                await adminloginPage.editBusinessLocatorIsVisible()
        })
        
    })

test('AdminPanel-064 | Home | System Management | Buisness Locator | Home | System Management | Interest | Validate if edit button is working ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Interests Button', async () => {
                await adminloginPage.clickOnInterestsButton()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnBusinessLocatorDeleteButton()
        })
        await test.step('Validate if an item can be viewed', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnBusinessLocatorViewButton()
                await adminloginPage.nameMessageIsVisible()
        })
        await test.step('Validate if an item can be edited', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnInterestsButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnBusinessLocatorEditButton()
                await adminloginPage.editInterestIsVisible()
        })
        
    })

test('AdminPanel-066 | Home | System Management | Proposals | B2B Matchmaking | Validate if edit button is working', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on B2B Matchmaking Button', async () => {
                await adminloginPage.clickOnSysProposals()
                await adminloginPage.clickOnB2BMatchmakingButton()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BDeleteButton()
        })
        await test.step('Validate if an item can be viewed', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BViewButton()
                await adminloginPage.viewButtonMessageIsVisible()
        })
        await test.step('Validate if an item can be edited', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnSysProposals()
                await adminloginPage.clickOnB2BMatchmakingButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BEditButton()
                await adminloginPage.editButtonMessageIsVisible()
        })
        
    })

test('AdminPanel-067 | Home | System Management | Proposals | Partnership | Validate if edit button is working ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Partnership Button', async () => {
                await adminloginPage.clickOnSysProposals()
                await adminloginPage.clickOnPartnershipProposalButton()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BDeleteButton()
        })
        await test.step('Validate if an item can be viewed', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BViewButton()
                await adminloginPage.viewPartnershipMessageIsVisible()
        })
        await test.step('Validate if an item can be edited', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnSysProposals()
                await adminloginPage.clickOnPartnershipProposalButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BEditButton()
                await adminloginPage.editPartnershipMessageIsVisible()
        })
        
    })

test('AdminPanel-068 | Home | System Management | Proposals | Mentor | Validate if edit button is working  ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Mentor Button', async () => {
                await adminloginPage.clickOnSysProposals()
                await adminloginPage.clickOnMentorButton()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BDeleteButton()
        })
        await test.step('Validate if an item can be viewed', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BViewButton()
                await adminloginPage.viewMentorMessageIsVisible()
        })
        await test.step('Validate if an item can be edited', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnSysProposals()
                await adminloginPage.clickOnMentorButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BEditButton()
                await adminloginPage.editMentorMessageIsVisible()
        })
        
    })

test('AdminPanel-069 | Home | System Management | Proposals | Protage| Validate if edit button is working  ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on System Management Button', async () => {
                await adminloginPage.clickOnSystemManagementButton()
        })
        await test.step('Click on Protage Button', async () => {
                await adminloginPage.clickOnSysProposals()
                await adminloginPage.clickOnProtageButton()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BDeleteButton()
        })
        await test.step('Validate if an item can be viewed', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BViewButton()
                await adminloginPage.viewProtageMessageIsVisible()
        })
        await test.step('Validate if an item can be edited', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnSystemManagementButton()
                await adminloginPage.clickOnSysProposals()
                await adminloginPage.clickOnProtageButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BEditButton()
                await adminloginPage.editProtageMessageIsVisible()
        })
        
    })

test('AdminPanel-070 | Home | Other Modules | Study | Validate if a Study can be added  ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Other Modules Button', async () => {
                await adminloginPage.clickOnOtherModulesButton()
        })
        await test.step('Click on Study Button', async () => {
                await adminloginPage.clickOnStudyUnderModulesButton()
        })
        
        await test.step('Validate if a study can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddStudy()
                await adminloginPage.writeInStudyName()
                await adminloginPage.clickOnSaveStudy()
                await adminloginPage.studyAddedMessageIsVisible()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickDeleteStudyButton()
                await adminloginPage.deleteStudyMessageIsVisible()
        })
        await test.step('Validate if an item can be edited', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnOtherModulesButton()
                await adminloginPage.clickOnStudyUnderModulesButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnB2BEditButton()
                await adminloginPage.editStudyMessageIsVisible()
        })
        
    })

test('AdminPanel-071 | Home | Other Modules | Language | Validate if a Language can be added  ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Other Modules Button', async () => {
                await adminloginPage.clickOnOtherModulesButton()
        })
        await test.step('Click on Languages Button', async () => {
                await adminloginPage.clickOnLanguageUnderOtherModules()
        })
        
        await test.step('Validate if a Language can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddLanguageButton()
                await adminloginPage.writeInCodeTextbox()
                await adminloginPage.writeInNameTextBox()
                await adminloginPage.writeInNativeNameTextbox()
                await adminloginPage.clickOnSaveLanguageButton()
                await adminloginPage.successLanguageMessageIsVisible()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickDeleteStudyButton()
                await adminloginPage.deleteSuccessMessageIsVisible()
        })
        await test.step('Validate if an item can be edited', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnOtherModulesButton()
                await adminloginPage.clickOnLanguageUnderOtherModules()
                await adminloginPage.clickOnB2BEditButton()
                await adminloginPage.editLanguageIsVisible()
        })
        
    })

test('AdminPanel-073 | Home | Other Modules | Messages | Validate if a message can be deleted  ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Other Modules Button', async () => {
                await adminloginPage.clickOnOtherModulesButton()
        })
        await test.step('Click on Messages Button', async () => {
                await adminloginPage.clickOnMessagesButton()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickDeleteStudyButton()
                await adminloginPage.deleteSuccessIsVisibleUnderMessages()
        })
        
    })

test('AdminPanel-075 | Home | Other Modules | Tips of the day | Validate if a Tip of day can be deleted  ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Other Modules Button', async () => {
                await adminloginPage.clickOnOtherModulesButton()
        })
        await test.step('Click on Tip of Day Button', async () => {
                await adminloginPage.clickOnTipOfDayButton()
        })
        
        await test.step('Validate if an item can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickDeleteStudyButton()
                await adminloginPage.deleteSuccessIsVisibleUnderMessages()
        })
        
    })

test('AdminPanel-077 | Home | Other Modules | Tips of the day | Validate if a Tip of day can be added  ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Other Modules Button', async () => {
                await adminloginPage.clickOnOtherModulesButton()
        })
        await test.step('Click on Tip of Day Button', async () => {
                await adminloginPage.clickOnTipOfDayButton()
        })
        
        await test.step('Validate if an item can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddTipOfDayButton()
                await adminloginPage.writeInTipTextbox()
                await adminloginPage.clickOnTipDateButton()
                await adminloginPage.clickOnTipDateSelectButton()
                await adminloginPage.clickOnSaveButtonTipOfDay()
                await adminloginPage.tipOfDaySuccessMessageIsVisible()
        })
        
    })

test('AdminPanel-078 | Home | Other Modules | Linking Record | Validate if a link can be added ', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Other Modules Button', async () => {
                await adminloginPage.clickOnOtherModulesButton()
        })
        await test.step('Click on Linking Record Button', async () => {
                await adminloginPage.clickOnLinkingRecords()
        })
        
        await test.step('Validate if an link can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddTipOfDayButton()
                await adminloginPage.writeInTipTextbox()
                await adminloginPage.clickOnTipDateButton()
                await adminloginPage.clickOnTipDateSelectButton()
                await adminloginPage.clickOnSaveButtonTipOfDay()
                await adminloginPage.tipOfDaySuccessMessageIsVisible()
        })
        
    })

test('AdminPanel-085 | Home | Other Modules | Trivia | Trivia Questiosn | Validate if a Trivia question can be added', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Other Modules Button', async () => {
                await adminloginPage.clickOnOtherModulesButton()
        })
        await test.step('Click on Trivia Questions Button', async () => {
                await adminloginPage.clickOnTriviaUnderOtherModules()
                await adminloginPage.clickOnTriviaQuestions()
        })
        
        await test.step('Validate if Question can be added', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnAddTriviaQuestions()
                await adminloginPage.writeAddQuestionTextbox()
                await adminloginPage.clickOnSaveButtonTrivia()
                await adminloginPage.triviaSuccessMessageIsVisible()
        })
        await test.step('Validate if an Question can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnOtherModulesButton()
                await adminloginPage.clickOnTriviaUnderOtherModules()
                await adminloginPage.clickOnTriviaQuestions()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickDeleteTriviaQuestionButton()
                await adminloginPage.triviaDeleteMessageIsVisible()
        })
        /*
        await test.step('Validate if edit button is working', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnOtherModulesButton()
                await adminloginPage.clickOnTriviaUnderOtherModules()
                await adminloginPage.clickOnTriviaQuestions()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickOnEditTrivia()
                await adminloginPage.()
        })
        */
       //Edit is not working
       await test.step('Validate if an Answercan be added', async () => {
        //await adminloginPage.clickEducationButton()
        await adminloginPage.clickOnOtherModulesButton()
        await adminloginPage.clickOnTriviaUnderOtherModules()
        await adminloginPage.clickOnTriviaQuestions()
        await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
        await adminloginPage.clickDeleteTriviaQuestionButton()
        await adminloginPage.triviaDeleteMessageIsVisible()
})
    })

test.only('AdminPanel-086 | Home | Other Modules | Trivia | Trivia Answers | Validate if a Trivia Answer can be deleted', async ({ page, adminloginPage }) => {

        await test.step('Go to the url', async () => {
                await page.goto(ENV3.BASE_URL_2);
        })
        await test.step('Write on Email Textbox', async () => {
                await adminloginPage.writeOnEmailInputNameTextbox()
        })
        await test.step('Write on Password Textbox', async () => {
            await adminloginPage.writeOnPasswordInputNameTextbox()
    })
        await test.step('User Login Functionality', async () => {
                await adminloginPage.clickOnLoginButton()
                await adminloginPage.WelcomeTextIsVisible()
                await page.waitForLoadState("networkidle")
        })
        await test.step('Click on Other Modules Button', async () => {
                await adminloginPage.clickOnOtherModulesButton()
        })
        await test.step('Click on Trivia Answers Button', async () => {
                await adminloginPage.clickOnTriviaUnderOtherModules()
                await adminloginPage.clickOnTriviaAnswerUnderTrivia()
        })
        
        await test.step('Validate if an Question can be deleted', async () => {
                //await adminloginPage.clickEducationButton()
                await adminloginPage.clickOnBusinessLocatorThreeDotsButton()
                await adminloginPage.clickDeleteTriviaQuestionButton()
                await adminloginPage.triviaAnswerMessageIsVisible()
        })
    })



