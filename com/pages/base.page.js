class BasePage {

    async openDesiredBrowserUrl(path) {
        await console.log("Navigating to Url 'https://automationteststore.com/'");
        return browser.url(`${path}`); //https://automationteststore.com/${path}`);
    }

    async navigateToHomePageUrl() {
       await browser.url("https://automationteststore.com/");
       await console.log("Navigating to Url 'https://automationteststore.com/'");
    }

}

export default new BasePage()
