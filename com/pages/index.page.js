import CategoryMenuComponent from "./components/categoryMenuComponent.page";
import ItemProductNameComponent from "./components/categoryMenuComponent.page";

class IndexPage{

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


