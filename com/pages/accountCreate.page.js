
class AccountCreatePage{

    get registerSubMenuTxt(){
        return $(".breadcrumb > li:nth-of-type(3) > a")
    }
    get yourAccountHasBeenCreatedTxt(){
        return $("")
    }
    get createAccountTxt(){
    return $(".maintext")
}
get loginPageLink(){
    return $("form#AccountFrm p > a")
}


//**************Your Personal Details**************//

get yourPersonalDetailsTxt(){
    return $("form#AccountFrm > h4:nth-of-type(1)")
}
get firstNameTxtBox(){
    return $("input#AccountFrm_firstname")
}
get lastNameTxtBox(){
    return $("input#AccountFrm_lastname")
}
get emailTxtBox(){
    return $("#AccountFrm_email")
}
get telephoneTxtBox(){
    return $("#AccountFrm_telephone")
}
get faxTxtBox(){
    return $("#AccountFrm_fax")
}


//**************Your Address*****************//


get yourAddressSectionTxt(){
    return $("form#AccountFrm > h4:nth-of-type(2)")
}
get companyTxtBox(){
    return $("input#AccountFrm_company")
}
get address1TxtBox(){
    return $("input[name='address_1']")
}
get address2TxtBox(){
    return $("input[name='address_2']")
}
get cityTxtBox(){
    return $("input#AccountFrm_city")
}
get regionStateDropdownBtn(){
    return $("select#AccountFrm_zone_id")

}
get zipCodeTxtBox(){
    return $("input#AccountFrm_postcode")
}
get countryDropdownBtn(){
    return $("select#AccountFrm_country_id")
}

//*******Login Details*****************//

get loginDetailsSectionText(){
    return $("form#AccountFrm > h4:nth-of-type(3)")
}
get loginNameTextBox(){
    return $("input#AccountFrm_loginname")
}
get passwordTextBox(){
    return $("input#AccountFrm_password")
}
get passwordConfirmTextBox(){
    return $("input#AccountFrm_confirm")
}

//*******Newsletter*****************//

get newsletterTxt(){
    return $("form#AccountFrm > h4:nth-of-type(4)")
}

get subscribeYesRadioButton(){
    return $("#AccountFrm_newsletter1")
}
get subscribeNoRadioButton(){
    return $("#AccountFrm_newsletter0")
}
get agreeToPrivacyPolicyButton(){
    return $("#AccountFrm_agree")
}
get agreeToPrivacyPolicyTxt(){
    return $(".col-md-6.mb40.mt20")
}
get continueBtn(){
    return $("button[title='Continue']")
}

    async enterFirstNameBox(firstname){
        await this.firstNameTxtBox.setValue(firstname);
    }
    async enterLastNameBox(lastName){
        await this.lastNameTxtBox.setValue(lastName);
    }
    async enterEmailBox(){
        await this.emailTxtBox.setValue("email7@test.com");

    }
    async enterTelephoneBox(phone,){
        await this.telephoneTxtBox.setValue(phone);
    }
    async enterFaxBox(fax){
        await this.faxTxtBox.setValue(fax);
    }
    async enterCompanyNameBox(yourcompanyname){
        await this.companyTxtBox.setValue(yourcompanyname);
    }
    async enterAddress1Box(youraddress1){
        await this.address1TxtBox.setValue(youraddress1);
    }
    async enterAddress2Box(youraddress2){
        await this.address2TxtBox.setValue(youraddress2);
    }
    async enterCityBox(manchester){
        await this.cityTxtBox.setValue(manchester);
    }
    async selectRegionStateFromDropdown(lancashire){
        //await this.regionStateDropdownBtn.selectByAttribute(350)
        //await this.regionStateDropdownBtn.selectByAttribute("value","3563")
        await this.regionStateDropdownBtn.selectByVisibleText(lancashire)

    }
    async enterPostalZipCodeBox(m11ipt){
        await this.zipCodeTxtBox.setValue(m11ipt);
    }
    async selectCountryDropdown(unitedkingdom){
        await this.countryDropdownBtn.selectByVisibleText(unitedkingdom);
    }
    async enterLoginNameBox(){
        await this.loginNameTextBox.setValue("loginname007");
    }
    async enterPasswordNameBox(password123){
        await this.passwordTextBox.setValue(password123);
    }

    async enterConfirmPasswordNameBox(password123){
        await this.passwordConfirmTextBox.setValue(password123);
    }

    async clickOnSubscribeNewsletterYesRadioBtn(){
        await this.subscribeYesRadioButton.click()
    }
    async clickOnSubscribeNewsletterNoRadioBtn(){
        await this.subscribeNoRadioButton.click()
    }
    async tickOnPrivacyPolicy(){
        await this.agreeToPrivacyPolicyButton.click()
    }
    async isPrivacyPolicyRadioBtnClickable(){
        await this.agreeToPrivacyPolicyButton.isClickable()
    }
    async clickOnContinueBtn(){
        await this.continueBtn.click()
    }


}

export default new AccountCreatePage();
