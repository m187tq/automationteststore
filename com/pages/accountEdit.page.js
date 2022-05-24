
class AccountEditPage{
    get editInformationMenuTxt() {
        return $('section > ul > li:nth-child(3) > a');
    }
    get myAccountInformationHeadingText() {
        return $('div#maincontainer span.maintext');
    }
    get yourPersonalDetails() {
        return $('form#AccountFrm > h4');
    }

    get loginNameTxt() {
        return $('form#AccountFrm div:nth-child(1) > div');
    }
    get firstNameBox() {
        return $('#AccountFrm_firstname');
    }
    get lastNameBox() {
        return $('#AccountFrm_lastname');
    }
    get emailBox() {
        return $('input#AccountFrm_email');
    }
    get telephoneBox() {
        return $('input#AccountFrm_telephone');
    }
    get faxBox() {
        return $('input#AccountFrm_fax');
    }
    get continueEditBtn() {
        return $('form#AccountFrm button[type="submit"]');
    }
    get backArrowBtn() {
        return $('form#AccountFrm a');
    }

    async inputEditProfile(firstName, lastName){
        await this.firstNameBox.setValue(firstName);
        await this.lastNameBox.setValue(lastName);
    }
    async clickOnContinueBtn(){
        await this.continueEditBtn.click()
    }
    async getMyAccountInformationHeadingTxt(){
        await this.myAccountInformationHeadingText.getText();
    }
    async getYourPersonalDetailsTxt(){
        await this.yourPersonalDetails.getText();
    }

}

export default new AccountEditPage();
