class TopMenuNavPage {

    get logoImage() {
        return $("img[title='Automation Test Store']")
    }

    get loginOrRegisterLinkTxt() {
        return $("#customer_menu_top > li:nth-child(1) > a:nth-child(1)")
    }

    get topMenuList() {
        return $$(".navUser-action")
    }

    get specialsLinkTxt() {
        return $("#main_menu_top > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)")
    }

    get accountDropdownBtn() {
        return $$(".menu_account")
    }

    get accountLoginDropdownBtn() {
        return $("li[class='dropdown open'] a[class='sub menu_login'] span[class='menu_text']")
    }
    get accountLogoutBtn() {
        return $('ul#main_menu_top ul > li.dropdown.open > a > span');
    }

    get accountCheckYourOrderDropdownBtn() {
        return $("body > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)")
    }

    get cartLinkTxt() {
        return $("#main_menu_top > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)")
    }

    get checkoutLinkTxt() {
        return $("#main_menu_top > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)")
    }

    get sliderBanner() {
        return $("#banner_slides")
    }

    get searchBox() {
        return $("#filter_keyword")
    }

    get searchBtn() {
        return $(".button-in-search")
    }

    get welcomeBackTxt() {
        return $("")
    }

    get currencyDropdown() {
        return $("b.caret:nth-child(2)")
    }

    get itemsCartDropdown() {
        return $(".topcart > li:nth-child(1) > a:nth-child(1)")
    }

    get socialIconFacebook() {
        return $(".facebook")
    }

    get socialIconTwitter() {
        return $(".twitter")
    }

    get socialIconLinkedIn() {
        return $(".linkedin")
    }

    get accountLogoutLink$() {
        return $("")
    }

    get accountCheckYourOrderLink() {
        return $("ul#main_menu_top  .dropdown-menu.sub_menu  .menu_order.sub > .menu_text")
    }

    async clickOnLoginOrRegisterBtn() {
        await browser.waitUntil(() => this.loginOrRegisterLinkTxt.isClickable())
        await this.loginOrRegisterLinkTxt.click();
    }
}

export default new TopMenuNavPage();
