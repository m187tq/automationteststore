import AccountEditPage from "./accountEdit.page";
import AccountLogoutPage from "./accountLogout.page";
class AccountPage{


    get userProfileMyAccountTxt() {
        return $('#customer_menu_top');
    }

    get myAccountTxt() {
        return $('div#maincontainer h1');
    }

    get editAccountDetailsLink() {
        return $(".side_account_list > li:nth-of-type(3) > a");
    }

    get accountDashboardTxt() {
        return $('div#maincontainer li.selected > a');
    }

    get logoffBtn() {
        return $("div#maincontainer li:nth-child(10) > a");
    }

    get sideWidgetAccountDashboardLinks() {
        return $$('//body/div[1]/div[2]/div[1]/div[2]/div[1]');
    }

    get successYourAccountSuccessfullyUpdatedTxt() {
        return $('.alert.alert-success');
    }

//===================================================//
    get editAccountDetailsImage(){
        return $("div#maincontainer div.col-md-9.col-xs-12.mt20 > div > ul > li:nth-child(1) > a > i")
    }

    get changePasswordImageLink(){
        return $('.nav-dash .fa-keya');
    }
    get manageAddressBookImagelink(){
        return $('.nav-dash .fa-booka');
    }
    get MyWistListImageLink(){
        return $('.nav-dash .fa-star');
    }
    get orderHistoryLink() {
        return $('li:nth-of-type(5) > a > .fa.fa-briefcase');
    }
    get transactionHistoryLink() {
        return $('li:nth-of-type(6) > a > .fa.fa-money');
    }

    get downloadLink() {
        return $('.nav-dash .fa-cloud-download');
    }

    get NotificationLink() {
        return $('.nav-dash .fa-bullhorn');
    }

    get logoffLink(){
        return $(".side_account_list > li:nth-of-type(10) > a");
    }

    async successfulUpdatedMessage(){
        await this.successYourAccountSuccessfullyUpdatedTxt.getText()
    }

    async clickOnEditAccountDetailsLink() {
        await browser.waitUntil(() => this.editAccountDetailsLink.isClickable())
        await this.editAccountDetailsLink.click()
        await AccountEditPage.firstNameBox.isExisting()
    }

    async clickOnLogoffLink(){
        await this.logoffLink.isClickable()
        await this.logoffLink.click()
        await AccountLogoutPage.logoutAccountContinueBtn.isClickable()
    }
}

export default new AccountPage();
