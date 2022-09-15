const docsPage = require ('../pageobjects/WebdriverIO/docs.page');

describe('webdriver.io page: Home Task6(Les_27)', () => {
    it('open webdriver.io site', async () => {
        await browser.url('https://webdriver.io');
        await browser.pause (2000);
    })

    it('should click docsButton', async () => {
        await docsPage.clickDocsButton();
        await browser.pause (2000);
    })
})