import AccountPage from "./account.page";

class AccountLoginPage {

    get loginBlueMenu(){
        return $("section > ul > li:nth-child(3) > a");
    }
    get accountLoginTxt(){
        return $(".maintext");
    }
    get iAmANewCustomerText(){
        return $("div[class='loginbox form-horizontal'] h4[class='heading4']");
    }
    get returningCustomerTxt(){
        return $("div[class='col-sm-6 returncustomer'] h2[class='heading2']");
    }
    get checkoutOptions(){
        return $(".newcustomer > div:nth-child(2) > h4:nth-child(1)");
    }
    get registerAccountBtn(){
        return $("label[for='accountFrm_accountregister']");
    }
    get createAnAccountTxt(){
        return $(".form-group.mt20.mb40");
    }
    get continueBtn(){
        return $("button.btn:nth-child(3)")
    }
    get loginNameBox(){
        return $("#loginFrm_loginname");
    }
    get passwordBox(){
        return $("#loginFrm_password");
    }
    get forgotYourPasswordLink(){
        return $("#loginFrm > fieldset:nth-child(3) > a:nth-child(3)");
    }
    get forgotYourLoginLink(){
        return $("#loginFrm > fieldset:nth-child(3) > a:nth-child(4)");
    }
    get loginBtn(){
        return $("button[title='Login']");
    }

    get errorLoginMessage(){
        return $(".alert.alert-danger.alert-error");
    }


    async clickOnLoginBtn() {
        await browser.waitUntil(() => this.loginBtn.isClickable())
        await this.loginBtn.click();
        await AccountPage.editAccountDetailsLink.isClickable()
    }

    async enterLoginDetails (loginName, password) {
        await this.loginNameBox.addValue(loginName);
        await this.passwordBox.addValue(password);
    }
}

export default new AccountLoginPage();
