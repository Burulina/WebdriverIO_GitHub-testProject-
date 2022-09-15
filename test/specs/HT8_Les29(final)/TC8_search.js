const mainPage = require ('../../pageobjects/GitHub_site/main.page');
const searchPage = require ('../../pageobjects/GitHub_site/search.page');


describe('github.com: check search function', () => {
    it('open github.com site', async () => {
        await browser.url('https://github.com/');
    })

    it('should fill search input field', async () => {
        await mainPage.setValueSearchInput('webdriverio');
        await browser.keys(['Enter']);
    })

    it('should navigate to search result and check url', async () => {
        await searchPage.clickOnElem(searchPage.typeScriptLink);
        await browser.pause (1000);
        await searchPage.clickOnElem(searchPage.searchResultLink);
        await expect(browser).toHaveUrlContaining('webdriverio');
    })

})