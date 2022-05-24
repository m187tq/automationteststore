class AccountAddressPage {

    get addressBookHeadingTxt() {
        return $('div#maincontainer span.maintext');
    }
    get addressBookEntriesText() {
        return $('div#maincontainer h4');
    }
}

export default new AccountAddressPage();
