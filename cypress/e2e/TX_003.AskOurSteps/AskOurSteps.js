import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import MainPage from "../../Pages/MainPage.page";
import CoockiesPage from "../../Pages/CoockiesPage.page";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import ContactUsPage from "../../Pages/ContactUsPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Name = TextGenerator.randomName()
const Email = TextGenerator.randomEmail()
const Number = TextGenerator.randomNumber()
const Website = TextGenerator.randomWebsite()
const Text = TextGenerator.randomLongText()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I select "Global Numbers" option in "Products" dropdown', () => {
    MainPage.clickProductsDropdown()
    MainPage.clickGlobalNumbersButton()
})
And('I click on  "Ask our experts" link button', () => {
    GlobalNumbersPage.clickAskOurExpertsButton()
})
When('I select "Support" option in "Choose Reason For Contact" dropdown', () => {
    ContactUsPage.selectSupportOptionInReasonForContactDropdown()
})
And('I set valid value in "First Name" field', () => {
    ContactUsPage.enterFirstNameFieldValue(Name)
})
And('I set valid value in "Lust Name" field', () => {
    ContactUsPage.enterLastNameFieldValue(Name)
})
And('I set valid value in "Email" field', () => {
    ContactUsPage.enterEmailFieldValue(Email)
})
And('I select "Canada" option in "Country" dropdown', () => {
    ContactUsPage.selectCanadaOptionInCountryDropdown()
})
And('I set valid value in "Phone Number" field', () => {
    ContactUsPage.enterPhoneNumberFieldValue(Number)
})
And('I set valid value in "Company Website" field', () => {
    ContactUsPage.enterCompanyWebsiteFieldValue(Website)
})
And('I set valid value in "Describe Your Request" field', () => {
    ContactUsPage.enterDescribeYourRequestFieldValue(Text)
})
And('I set valid value in "How did you hear about Telnyx" field', () => {
    ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
})
When('I click on "Submit" button', () => {
    ContactUsPage.clickSubmitButton()
})
Then('I check "Thank you." message visibility', () => {
    ContactUsPage.checkSubmitMessageTextVisibility()
})