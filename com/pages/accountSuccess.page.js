
class AccountSuccessPage {

    get successSubMenuTxt(){
        return $(".breadcrumb > li:nth-of-type(3) > a")
    }
    get yourAccountHasBeenCreatedHeadingTxt(){
        return $("div#maincontainer h1")
    }
    get congratulationsYourAccountSuccessfullyCreatedTxt(){
        return $(".mb40 > p:nth-of-type(2)")
    }
    get continueAccountSuccessBtn(){
        return $(".mb40 > a[title='Continue']")
    }

    async clickOnContinueBtn(){
        await this.continueAccountSuccessBtn.click()
    }

}

export default new AccountSuccessPage();
