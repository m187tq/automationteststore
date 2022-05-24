export default class BasePage {

    openDesiredBrowserUrl (path) {
        return browser.url(`${path}`); //https://automationteststore.com/${path}`);
    }

    async navigateToHomePageUrl() {
       await browser.url("https://automationteststore.com/");
       await console.log("Navigating to Url 'https://automationteststore.com/'");
    }

    verifyPageHeading = async (title) => {
        const headingTitle = await $(".page-heading");
        await browser.waitUntil(
            async () => (await headingTitle.getText()) === title,
            {
                timeout: 10000,
                timeoutMsg: "expected text is different after 10s",
            }
        );
        expect(await headingTitle.getText()).toEqual(title);
    };
}
