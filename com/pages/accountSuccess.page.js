
class AccountSuccessPage {

    get successSubMenuTxt(){
        return $(".breadcrumb > li:nth-of-type(3) > a")
    }
    get yourAccountHasBeenCreatedHeadingTxt(){
        return $(".maintext")
    }
    get congratulationsYourAccountSuccessfullyCreatedTxt(){
        return $(".mb40 > p:nth-of-type(2)")
    }
    get continueAccountSuccessBtn(){
        return $(".mb40 > a[title='Continue']")
    }

}

export default new AccountSuccessPage();
