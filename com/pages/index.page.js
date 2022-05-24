import BasePage from "./base.page";
import CategoryMenuComponent from "./components/categoryMenuComponent.page";
import ItemProductNameComponent from "./components/categoryMenuComponent.page";
class IndexPage extends BasePage{

    openDesiredBrowserUrl(){
        return super.openDesiredBrowserUrl("")
    }
    async navigateToHomePageUrl(httpsautomationteststorecom) {
        await browser.url(httpsautomationteststorecom)
    }
    get categoryMenuComponent() {
        return CategoryMenuComponent;
    }
    get itemProductNameComponent() {
        return ItemProductNameComponent;
    }

}

export default new IndexPage();


