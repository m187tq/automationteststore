
class AccountLogoutPage{

    get accountLogoutHeadingTxt(){
        return $('.maintext');
    }
    get saveToLogoutTxt(){
        return $('.mb40 > p:nth-of-type(3)');
    }
    get logoutAccountContinueBtn(){
        return $(".mb40 > a[title=\'Continue\']");

    }
    async clickOnLogoutAccountContinueBtn(){
        await this.accountLogoutHeadingTxt.isDisplayed()
        await this.logoutAccountContinueBtn.click();

}

}

export default new AccountLogoutPage();
