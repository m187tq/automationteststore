import {Given, Then, When} from '@wdio/cucumber-framework';
import indexPage from '../pages/index.page';
import accountLogin from '../pages/accountLogin.page';
import topNavigationPage from '../pages/topMenuNav.page';
import accountPage from '../pages/account.page';
import accountEditPage from '../pages/accountEdit.page';
import accountLogoutPage from "../pages/accountLogout.page";
import allureReporter from "@wdio/allure-reporter";
import accountLoginPage from "../pages/accountLogin.page";

Given("user on index page url as {} and page title as {}", async (httpsautomationteststorecom, aplacetopracticeyourautomationskills) => {
    allureReporter.addFeature('The order purchase life-cycle Functionality');
    //await indexPage.navigateToHomePageUrl(httpsautomationteststorecom);
    await indexPage.openDesiredBrowserUrl("");
    await expect(browser).toHaveUrlContaining(httpsautomationteststorecom);
    await expect(browser).toHaveTitleContaining(aplacetopracticeyourautomationskills);
    await expect(topNavigationPage.logoImage).toBeDisplayed();
    //await basePage.verifyPageHeading("CUSTOMER SERVICE - CONTACT US");
});

Then("user is back on index page url as {} and page title as {}", async (httpsautomationteststorecom, aplacetopracticeyourautomationskills) => {
    allureReporter.addFeature('The order purchase life-cycle Functionality');
    await expect(browser).toHaveUrlContaining(httpsautomationteststorecom);
    await expect(browser).toHaveTitleContaining(aplacetopracticeyourautomationskills);
    await expect(topNavigationPage.logoImage).toBeDisplayed();
});

When("user clicks on Login Or Register link", async () => {
    allureReporter.addStep("verify Login Or Register is correctly displayed");
    await expect(topNavigationPage.loginOrRegisterLinkTxt).toBeDisplayed();
    await topNavigationPage.clickOnLoginOrRegisterBtn();
});

Then("user should be on account login page with option to login as {} or create an Account as {}", async (returningcustomer, iamanewcustomer) => {
    allureReporter.addStep("verify page title is correctly displayed");
    await expect(accountLogin.returningCustomerTxt).toBeDisplayed();
    await expect(accountLogin.returningCustomerTxt).toHaveTextContaining(returningcustomer);
    await expect(accountLogin.iAmANewCustomerText).toBeDisplayed();
    await expect(accountLogin.iAmANewCustomerText).toHaveTextContaining(iamanewcustomer);
});

When("user enters login Name as {} and password as {}", async (loginName, password) => {
    await accountLogin.returningCustomerTxt.isExisting();
    await accountLogin.enterLoginDetails (loginName, password);
});

Then("user clicks on Login button in account login Page", async () => {
    await accountLogin.clickOnLoginBtn();
});

Then("user should be presented with the following validation message as {}", async (loginValidationMessage) => {
    await accountPage.myAccountTxt.isExisting();
    await (accountPage.userProfileMyAccountTxt).waitForDisplayed();
    await expect(accountPage.userProfileMyAccountTxt).toHaveTextContaining(loginValidationMessage);
});

Then("user clicks on edit profile button", async () => {
    await accountPage.clickOnEditAccountDetailsLink();
});

Then("user enters {} and {} and emailAddress and telephone and fax in their respective box", async (firstName, lastName)  => {
    await accountEditPage.myAccountInformationHeadingText.isDisplayed();
    await accountEditPage.yourPersonalDetails.isDisplayed();
    await expect(accountEditPage.firstNameBox.waitForDisplayed());
    await accountEditPage.inputEditProfile(firstName, lastName);
});

Then("user clicks on Continue button to confirms profile successful update message as {}", async (successyouraccounthasbeensuccessfullyupdated) => {
    await ( accountEditPage.continueEditBtn).waitForDisplayed();
    await accountEditPage.clickOnContinueBtn();
    await (accountPage.successYourAccountSuccessfullyUpdatedTxt).waitForDisplayed();
    await expect(await accountPage.successYourAccountSuccessfullyUpdatedTxt).toHaveTextContaining(successyouraccounthasbeensuccessfullyupdated);
});

When("user clicks on logoff button and logout Continue Button", async () => {
    await (accountPage.logoffLink).waitForDisplayed();
    await accountPage. clickOnLogoffLink();
    await (accountLogoutPage.logoutAccountContinueBtn).waitForDisplayed();
    await accountLogoutPage.clickOnLogoutAccountContinueBtn();

});
Then("user is back to index page as {}", async () => {

});

//=============================// NEGATIVE LOGIN UNIQUE STEPS//=========================================

Then("user enters wrong combination of both login Name as {} or password as {}", async (loginName, password) => {
    await accountLogin.returningCustomerTxt.isExisting();
    await accountLogin.enterLoginDetails (loginName, password);

});
Then("user clicks on Login_Button", async () => {
    await accountLogin.clickOnLoginBtn();

});
Then("User gets error message as {} and still on Home page title as {}", async (loginvalidationerrormessage, pagetitle) => {
    await expect(browser).toHaveTitleContaining(pagetitle);
    await expect(accountLoginPage.errorLoginMessage).toHaveTextContaining(loginvalidationerrormessage);
});
// REGISTRATION UNIQUE STEPS//

Then("user verifies register account radio button is checked and clicks on Continue button", async () => {

});
Then("user is on account create page and verifies page heading as {string} and page Url contains {string}", async () => {

});
Then("user is in personal details in {string}", async () => {

});
Then("user enters First Name box as {word}", async () => {

});
Then("user enters Last Name box as {word}", async () => {

});
Then("user enters fresh email in E-Mail box", async () => {

});
Then("user enters Telephone box as {word}", async () => {

});
Then("user enters Fax box as {word}", async () => {

});
Then("user on Address Section as {string}", async () => {

});
Then("user enters Company name as {word}", async () => {

});
Then("user enters Address One box as {word}", async () => {

});

Then("user enters Address Two box as {word}", async () => {

});
Then("user enters City box as {word}", async () => {

});
Then("user enters Region or State box as {string}", async () => {

});
Then("user enters ZIP Code box as {string}", async () => {

});
Then("user enters Country box as {string}", async () => {

});
Then("user enters all the login requested details as {string}", async () => {

});
Then("user enters the following details", async () => {

});
Then("user on login section as {string}", async () => {

});

Then("user enters loginName in Login name box", async () => {

});
Then("user enters password in Password box as {string}", async () => {

});
Then("user enters Confirm password in Password Confirm box as {string}", async () => {

});
Then("user subscribed to Newsletter and check on Yes", async () => {

});
Then("user ticks on read and agree to the Privacy Policy radio button", async () => {

});

Then("user gets success confirmation message as {string}", async () => {

});
Then("user gets congratulatory message as {string}", async () => {

});
Then("user clicks on ContinueAccountSuccess button", async () => {

});


When("user clicks on logoff button on Account page", async () => {

});
Then("user clicks on Continue button", async () => {

});

Then("user is on home page and presented with welcome message as {string}", async () => {

});


Then("^user clicks on SignOut button$", async () => {

});
Then("user on account logout page url contains {string} and clicks on logout Continue Button", async () => {

});
Then("user is back to login page url as {string}", async () => {

});

