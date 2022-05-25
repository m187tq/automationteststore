import {Given, Then, When} from '@wdio/cucumber-framework';
import indexPage from '../pages/index.page';
import accountLogin from '../pages/accountLogin.page';
import topNavigationPage from '../pages/topMenuNav.page';
import accountPage from '../pages/account.page';
import accountEditPage from '../pages/accountEdit.page';
import accountLogoutPage from "../pages/accountLogout.page";
import allureReporter from "@wdio/allure-reporter";
import accountLoginPage from "../pages/accountLogin.page";
import register from "../pages/accountCreate.page";
import accountSuccessPage from "../pages/accountSuccess.page";

Given("user on index page url as {} and page title as {}", async (httpsautomationteststorecom, aplacetopracticeyourautomationskills) => {
    allureReporter.addFeature('The order purchase life-cycle Functionality');
    await indexPage.navigateToHomePageUrl(httpsautomationteststorecom);
    await expect(browser).toHaveUrlContaining(httpsautomationteststorecom);
    await expect(browser).toHaveTitleContaining(aplacetopracticeyourautomationskills);
});

Then("user is back on index page url as {} and page title as {}", async (httpsautomationteststorecom, aplacetopracticeyourautomationskills) => {
    allureReporter.addFeature('The order purchase life-cycle Functionality');
    await expect(topNavigationPage.logoImage).toBeDisplayed();
    await expect(browser).toHaveUrlContaining(httpsautomationteststorecom);
    await expect(browser).toHaveTitleContaining(aplacetopracticeyourautomationskills);

});

When("user clicks on Login Or Register link", async () => {
    allureReporter.addStep("verify Login Or Register is correctly displayed");
    await (topNavigationPage.loginOrRegisterLinkTxt).waitForDisplayed();
    await expect(topNavigationPage.loginOrRegisterLinkTxt).toBeDisplayed();
    await topNavigationPage.clickOnLoginOrRegisterBtn();
});

Then("user should be on account login page with option to login as {} or create an Account as {}", async (returningcustomer, iamareturningcustomer) => {
    allureReporter.addStep("verify page title is correctly displayed");
    await (accountLogin.returningCustomerTxt).waitForDisplayed();
    await expect(accountLogin.returningCustomerTxt).toHaveTextContaining(returningcustomer);
    await expect(accountLogin.iAmANewCustomerText).toHaveTextContaining(iamareturningcustomer);
});

When("user enters login Name as {} and password as {}", async (loginName, password) => {
    await (accountLogin.returningCustomerTxt).waitForDisplayed();
    await accountLogin.returningCustomerTxt.waitForDisplayed();
    await accountLogin.enterLoginDetails (loginName, password);
});

Then("user clicks on Login button in account login Page", async () => {
    await accountLogin.clickOnLoginBtn();
});

Then("user should be presented with the following validation message as {}", async (loginValidationMessage) => {
    await accountPage.myAccountTxt.isExisting();
    await (accountPage.welcomeUserProfileTxt).waitForDisplayed();
    await expect(accountPage.welcomeUserProfileTxt).toHaveTextContaining(loginValidationMessage);
});

Then("user should be presented with welcome message as {}", async (welcomeback) => {
    await accountPage.welcomeUserProfileTxt.isExisting();
    await (accountPage.welcomeUserProfileTxt).waitForDisplayed();
    await expect(accountPage.welcomeUserProfileTxt).toHaveTextContaining(welcomeback);
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
    await accountLoginPage.assertLoginErrorMessageIsDisplayed()
    await accountLoginPage.assertAccountLoginPageErrorMessage(loginvalidationerrormessage)
    await expect(accountLoginPage.errorLoginMessage).toHaveTextContaining(loginvalidationerrormessage);

});
// REGISTRATION UNIQUE STEPS//

Then("user verifies register account radio button is checked and clicks on Continue button", async () => {
    await expect(accountLoginPage.iAmANewCustomerText).toBeDisplayed();
    await expect(accountLoginPage.registerAccountRadioBtn).toBeEnabled();
    await accountLoginPage.clickOnContinueBtn();
});
Then("user is on account create page and verifies page heading as {} and page Url contains {}", async (createaccount, rtaccountcreate) => {
    await (register.createAccountTxt).waitForDisplayed();
    await expect(register.createAccountTxt).toHaveTextContaining(createaccount);
    await expect(browser).toHaveUrlContaining(rtaccountcreate);
    await register.yourPersonalDetailsTxt.isDisplayed();
});
Then("user is in personal details in {}", async (yourpersonaldetails) => {
    await expect(register.yourPersonalDetailsTxt).toHaveTextContaining(yourpersonaldetails);
});
Then("user enters First Name box as {}", async (firstname) => {
    await register.enterFirstNameBox(firstname);
});
Then("user enters Last Name box as {}", async (firstname) => {
    await register.enterLastNameBox(firstname);
});
Then("user enters fresh email in E-Mail box", async () => {
    await register.enterEmailBox();
});
Then("user enters telephone and fax number", async () => {
    await register.enterTelephoneBox("213-233-2444");
    await register.enterFaxBox("213-233-2555");
});
Then("user on Address Section as {}", async (youraddress) => {
    await expect(register.yourAddressSectionTxt).toHaveTextContaining(youraddress)
});
Then("user enters Company name as {}", async (yourcompanyname) => {
    await register.enterCompanyNameBox(yourcompanyname);
});
Then("user enters Address One box as {}", async (youraddress1) => {
    await register.enterAddress1Box(youraddress1);
});

Then("user enters Address Two box as {}", async (youraddress2) => {
    await register.enterAddress2Box(youraddress2);
});
Then("user enters city name in City box as {}", async (manchester) => {
    await register.enterCityBox(manchester);
});
Then("user selects Region or State from Dropdown box as {}", async (lancashire) => {
    await register.selectRegionStateFromDropdown(lancashire)
});
Then("user enters ZIP Code box as {}", async (m11ipt) => {
    await register.enterPostalZipCodeBox(m11ipt)

});
Then("user selects Country name from dropdown box as {}", async (unitedkingdom) => {
    await register.selectCountryDropdown(unitedkingdom)
});

Then("user on login section as {}", async (logindetails) => {
    await expect(await register.loginDetailsSectionText).toHaveTextContaining(logindetails)
});

Then("user enters loginName in Login name box", async () => {
    await register.enterLoginNameBox()
});
Then("user enters password in Password box as {}", async (password123) => {
    await register.enterPasswordNameBox(password123)
});
Then("user enters Confirm password in Password Confirm box as {}", async (password123) => {
    await register.enterConfirmPasswordNameBox(password123)
});
Then("user subscribed to Newsletter and check on Yes", async () => {
    await register.clickOnSubscribeNewsletterYesRadioBtn()
});
Then("user ticks on read and agree to the Privacy Policy radio button", async () => {
    await register.tickOnPrivacyPolicy()
});

Then("user gets success confirmation message as {}", async (youraccounthasbeencreated) => {
    await accountSuccessPage.successSubMenuTxt.isExisting()
    await accountSuccessPage.continueAccountSuccessBtn.isDisplayed()
    await (accountSuccessPage.yourAccountHasBeenCreatedHeadingTxt).waitForDisplayed()
    await expect(accountSuccessPage.yourAccountHasBeenCreatedHeadingTxt).toHaveTextContaining(youraccounthasbeencreated)

});
Then("user gets congratulatory message as {}", async (congratulationsyournewaccounthasbeensuccessfullycreated) => {
    await (accountSuccessPage.congratulationsYourAccountSuccessfullyCreatedTxt).waitForDisplayed()
    await expect(accountSuccessPage.congratulationsYourAccountSuccessfullyCreatedTxt).toHaveTextContaining(congratulationsyournewaccounthasbeensuccessfullycreated)

});
Then("user clicks on ContinueAccountSuccess button", async () => {
    await accountSuccessPage.clickOnContinueBtn()
});

Then("user clicks on Continue button", async () => {
    await register.clickOnContinueBtn()

});


