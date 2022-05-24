class AccountSideWidgetPage{

    get accountSideWidgetLinks() {
        return $$('div.sidewidt');
    }
    get accountDashboardLink() {
        return $('div#maincontainer li.selected > a');
    }

    get MyWistListLink() {
        return $('div#maincontainer div.sidewidt > div > ul > li:nth-child(2) > a');
    }

    get editAccountDetailsLink() {
        return $('ul#customer_menu_top div');
    }

    get changePasswordLink() {
        return $('div#maincontainer div.sidewidt > div > ul > li:nth-child(4) > a');
    }

    get manageAddressBookLink() {
        return $('div#maincontainer div.sidewidt > div > ul > li:nth-child(5) > a');
    }

    get orderHistoryLink() {
        return $('div#maincontainer div.sidewidt > div > ul > li:nth-child(6) > a');
    }
    get transactionHistoryLink() {
        return $('div#maincontainer div.sidewidt > div > ul > li:nth-child(7) > a');
    }

    get downloadLink(){
        return $('div#maincontainer div.sidewidt > div > ul > li:nth-child(8) > a');
    }
    get NotificationLink(){
        return $('div#maincontainer div.sidewidt > div > ul > li:nth-child(9) > a');
    }
    get LogoffLink(){
        return $('div#maincontainer li:nth-child(10) > a');
    }

}

export default new AccountSideWidgetPage();
