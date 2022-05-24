
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
get faxTextBox(){
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
    return $("")
}
get agreeToPrivacyPolicyTxt(){
    return $(".col-md-6.mb40.mt20")
}
get continueBtn(){
    return $("button[title='Continue']")
}

}

export default new AccountCreatePage();
